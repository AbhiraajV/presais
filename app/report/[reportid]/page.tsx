import React from 'react'
import prisma from '@/prisma'
import { SimilarSite, SimilarSiteData, SiteData } from '@/types';
import { AnalysisCardRenderer } from '@/components/report/AnalysisCard';
import BuyMeACookie from '@/components/BuyMeACoffee';
import { Badge } from '@/components/ui/badge';
type tParams = Promise<{ reportid: string }>;
async function Page(props: { params: tParams }) {
    const out = await props.params;
    const report = await prisma.report.findFirst({
        where:{
            id:out.reportid
        }
    })
    if(!report) return;
    const {name,description} = JSON.parse(report.prompt ?? '{}') as { name: string, description: string};
    const {analysis:{analysis_report,competition_report}} = report.data as unknown as {
        analysis:{
            analysis_report: SiteData[],
            competition_report: SimilarSiteData[],
        }
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
           {/* <div className='flex gap-5 items-center justify-center '>
            <span className='text-2xl mb-5 font-extrabold border-b-4'>
                Competitor's Analysis Reports
            </span>
            
            </div>  */}
            {/* <span className='text-2xl font-extrabold border-b-4'>
                Competitors' Rival Reports
            </span> */}
      <BuyMeACookie className="fixed z-[9999] top-[0px] right-0"/>
            
            <div className="p-6 max-w-md">
                <div className="text-xsm font-extrabold underline text-gray-200">
                your prompt:
                    
                </div>
                <div className="text-2xl font-extrabold text-white mb-2">
                    {name}
                </div>
                <div className="text-sm font-light text-gray-200">
                    {description}
                </div>
                <Badge>
                    insights (beta (coming soon))
                </Badge>
            </div>

    
    <AnalysisCardRenderer reps={analysis_report as (SiteData & {similarSites:SimilarSite[]})[]}/>
        </div>
    )
}

export default Page