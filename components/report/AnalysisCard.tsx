import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
// import {  SimilarSite, SiteData } from '@/types'
import { SiteMetrics } from './MetricsComp'
import { ReportTabs } from './Tabs'
import { SimilarSite, SiteData } from '@/app/types/bas'

type Props = {rep:SiteData & {similarSites:SimilarSite[]}}

function AnalysisCard({rep}: Props) {
    
    function getFlagEmoji(countryCode:string) {
      return (countryCode ?? "US").toUpperCase().replace(/./g, char => 
          String.fromCodePoint(127397 + char.charCodeAt(0))
      );
    }


  return (
              <Card  className='lg:w-[30vw] 2xl:w-[30vw] w-[100vw-5rem] lg:h-full  bg-[#282828] text-white border-2 border-white max-h-fit rounded-none h-fit p-[-4rem] relative'>
                   {rep.IsDataFromGa && <Image className='absolute top-2 right-2' alt='' width={20} height={20} src={'/google_analytics-icon.svg'}/>}

                  <CardHeader className=" p-2 flex flex-col items-start justify-start space-y-0 pb-2">
                    <CardTitle className="text-sm flex flex-col gap-[0.5rem] font-medium">
                      <span className='font-extrabold text-lg '>
                        {rep.SiteName}
                      </span>

                      <span 
  className="font-medium text-sm mt-[-0.5rem] line-clamp-3 text-[#ffffff64]" 
  style={{ lineHeight: '1.5rem', height: '4.5rem' }}
>
  {rep.Description}
</span>
<div className='flex w-full items-center justify-center'>


                   <Image unoptimized src={rep.LargeScreenshot} width={250} height={250*3/4} alt='https://site-images.similarcdn.com/image?url=yourfacemetrics.com&t=1&s=1&h=4a497f5c9d45d9fe20a93934273d5eee79a7978c0b7dcc97a76d28abdb36ebc3
'/>
</div>
                      
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='p-2'>
                      <SiteMetrics country={getFlagEmoji(rep.TopCountryShares && rep.TopCountryShares[0]?.CountryCode)} countryRank={rep.CountryRank?.Rank} category={Array.from(new Set(rep?.Category?.split('/').map((c) => c.replaceAll('_', ' '))))[0]} categoryRank={rep.CategoryRank} globalRank={rep.GlobalRank} totalVisits={rep.totalVisits}/>
                      <ReportTabs rep={rep}/>
                  </CardContent>
            </Card>
  )
}

export function AnalysisCardRenderer({reps}:{reps:(SiteData & {similarSites:SimilarSite[]})[]}) {
    return (
        <div className='flex flex-wrap gap-5' >
            {reps.filter(r=>r.SiteName && r.SiteName.length > 0).map(rep=>

<AnalysisCard key={rep.Title} rep={rep}/>
            )}
        </div>
    )
}