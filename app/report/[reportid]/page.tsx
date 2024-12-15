import React from 'react'
import prisma from '@/prisma'
import { SimilarSite, SimilarSiteData, SiteData } from '@/app/types/bas';
import { AnalysisCardRenderer } from '@/components/report/AnalysisCard';
import BuyMeACookie from '@/components/BuyMeACoffee';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EnhancedSampleData } from '@/app/types';
import { ValidatorPage } from '@/components/validator-components/ValidatorPage';
type tParams = Promise<{ reportid: string }>;
async function Page(props: { params: tParams }) {
    const out = await props.params;
    const report = await prisma.report.findFirst({
        where:{
            id:out.reportid
        }
    })
    if(!report) return "no report with this id";
    const {name,description} = JSON.parse(report.prompt ?? '{}') as { name: string, description: string};
    const {analysis:{analysis_report,competition_report},insights} = report.data as unknown as {
        analysis:{
            analysis_report: SiteData[],
            competition_report: SimilarSiteData[],
        },
        insights?:EnhancedSampleData,
        competitionsList: {
            Competitors:{
            Name:string,
            Domain:string,
            Description:string
        }[]
        },
    }
    competition_report.forEach((v)=>{
        const ind = analysis_report.findIndex(ar=>{
            return ar?.SiteName?.trim().toLowerCase() === (v.Redirect as string)?.trim().toLowerCase()
        })
        analysis_report[ind] = {...analysis_report[ind],totalVisits:(v.TotalVisits as number),similarSites:v.SimilarSites,tags:v.Tags}
    })
    return (
        <div className='bg-[#282828] relative text-white w-screen flex flex-wrap h-screen overflow-y-scroll overflow-x-hidden '>
            <BuyMeACookie className="fixed z-[9999] top-[0px] right-0"/> 
             <div className="p-2 max-w-md">
                <div className="text-2xl font-extrabold text-white mb-2">
                    {name}
                </div>
                <div className="text-sm font-light md:w-[80vw] w-[96vw] text-gray-200">
                    {description}
                </div>
            </div>
             <Tabs defaultValue="comp" className="w-full mt-[1rem] bg-transparent">
      <TabsList className="border-1 border-white bg-black text-white flex sm:flex-row flex-wrap sm:mb-0 mb-[3rem] gap-2 w-full bg-transparent items-start justify-start">
        <TabsTrigger className='border-2 text-xs lg:text-lg md:text-md font-extrabold border-white' value="comp">Competitors KPI</TabsTrigger>
        <TabsTrigger className='border-2 text-xs lg:text-lg md:text-md font-extrabold border-white' value="val">AI Validation Dash</TabsTrigger>
      </TabsList>
      
      <TabsContent className='bg-gray-100  relative text-[#282828]' value="val">
                {insights ? <ValidatorPage data={insights}/> : 'no insights'}
      </TabsContent>
      
      <TabsContent className='flex flex-col items-start justify-start' value="comp">
        
            <AnalysisCardRenderer reps={analysis_report as (SiteData & {similarSites:SimilarSite[]})[]}/>
      </TabsContent>
            </Tabs>
        </div>
    )
}

export default Page