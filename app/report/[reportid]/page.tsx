import React from 'react'
import prisma from '@/prisma'
import { SimilarSiteData, SiteData } from '@/types';
import { AnalysisCardRenderer } from '@/components/report/AnalysisCard';

async function Page({ params }: { params: { reportid: string } }) {
    const reportId = (params as { reportid: string }).reportid;
    const report = await prisma.report.findFirst({
        where:{
            id:reportId
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
    const rep = competition_report[0];
    console.log({competition_report})
    competition_report.forEach((v,i)=>{
        const ind = analysis_report.findIndex(ar=>{
            console.log(v)
            return ar?.SiteName?.trim().toLowerCase() === v?.Redirect?.trim().toLowerCase()
        })
        console.log({...analysis_report[ind],totalVisits:v.TotalVisits,similarSites:v.SimilarSites,tags:v.Tags})
        analysis_report[ind] = {...analysis_report[ind],totalVisits:v.TotalVisits,similarSites:v.SimilarSites,tags:v.Tags}
    })
    return (
        <div className='bg-[#282828] text-white w-screen flex flex-wrap h-screen overflow-y-scroll overflow-x-hidden '>
           {/* <div className='flex gap-5 items-center justify-center '>
            <span className='text-2xl mb-5 font-extrabold border-b-4'>
                Competitor's Analysis Reports
            </span>
            
            </div>  */}
            {/* <span className='text-2xl font-extrabold border-b-4'>
                Competitors' Rival Reports
            </span> */}
            
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
            </div>

            <AnalysisCardRenderer reps={analysis_report}/>
           
        </div>
    )
}

export default Page