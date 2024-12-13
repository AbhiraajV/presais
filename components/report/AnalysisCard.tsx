import React from 'react'
import { MultiBarComponent } from '../charts/multibar'
import TrafficSourcesChart from '../charts/traffic.pie'
import DynamicMVAreaChart from '../charts/monthlyvisit'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import {  SimilarSite, SiteData } from '@/types'
import { Badge } from '../ui/badge'
import { Globe, TrendingUp, Users } from "lucide-react";
import { SiteMetrics } from './MetricsComp'
import GeoChart from '../charts/geo'
import { ReportTabs } from './Tabs'

type Props = {rep:SiteData & {similarSites:SimilarSite[]}}

function AnalysisCard({rep}: Props) {
    
    function getFlagEmoji(countryCode:string) {
      return countryCode.toUpperCase().replace(/./g, char => 
          String.fromCodePoint(127397 + char.charCodeAt(0))
      );
    }
    const formatNumber = (num: number) =>
                num >= 1e9 ? `${(num / 1e9).toFixed(0)}B` :
                num >= 1e6 ? `${(num / 1e6).toFixed(0)}M` :
                num >= 1e3 ? `${(num / 1e3).toFixed(0)}T` :
                num.toString();


  return (
    <div className='bg-[#282828] text-white justify-center w-fit border-2 border-white flex rounded-md lg:flex-row flex-col'>
              <Card  className='lg:w-[30vw] 2xl:w-[30vw] w-[100vw-2.5rem] lg:h-full  bg-[#282828] text-white border-r-2 border-r-white border-l-0 border-t-0 border-b-0  rounded-none h-fit p-[-2rem] relative'>
                   {rep.IsDataFromGa && <Image className='absolute top-2 right-2' alt='' width={20} height={20} src={'/google_analytics-icon.svg'}/>}

                  <CardHeader className="flex flex-col items-start justify-start space-y-0 pb-2">
                    <CardTitle className="text-sm flex flex-col gap-[0.5rem] font-medium">
                      <span className='font-extrabold text-lg'>
                        {rep.SiteName}
                      </span>

                      <span className='font-medium text-sm mt-[-0.5rem]'>
                        {rep.Description}
                        
                      </span>
                   {rep.LargeScreenshot && rep.LargeScreenshot?.trim().length !== 0 &&  <Image src={rep.LargeScreenshot} width={250} height={250*3/4} alt=''/>}
                      
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <span className='font-bold text-sm'>
                        {rep.Description}
                      </span>
                      <SiteMetrics country={getFlagEmoji(rep.TopCountryShares[0].CountryCode)} countryRank={rep.CountryRank?.Rank} category={Array.from(new Set(rep.Category.split('/').map((c) => c.replaceAll('_', ' '))))[0]} categoryRank={rep.CategoryRank} globalRank={rep.GlobalRank} totalVisits={rep.totalVisits}/>
                      <ReportTabs rep={rep}/>
                  </CardContent>
            </Card>
            {/* <div  className='w-screen lg:w-[30%] h-fit lg:h-[100vh] overflow-y-scroll flex flex-wrap gap-1 p-[-2rem] relative'>
              <span className='w-full flex items-center justify-center border-b-2 border-b-white text-2xl font-extrabold'>
                  Direct-Competitor KPIs
                </span>
              {rep.TopKeywords && <MultiBarComponent 
                    title='Keyword volume'
                    chartConfig={{
                        EstimatedValue:{
                            label: 'Estimated Value',
                            color: "#14adff",
                        },
                        Volume:{
                            label: 'Volume',
                            color: "white",
                        },
                       
                    }}
                    dataKey='Name'
                    chartData={rep.TopKeywords?.map(e=>({...e,Cpc:e.Cpc*10000}))}
                />}
                {rep.TopKeywords && <MultiBarComponent
                    title='Keyword cost per click ($)'
                    chartConfig={{
                        Cpc:{
                            label: 'CPC',
                            color: "white",
                        },
                       
                    }}
                    dataKey='Name'
                    chartData={rep.TopKeywords}
                />}
                {rep.TrafficSources && <TrafficSourcesChart
                    data={rep.TrafficSources}
                />}
                {rep.EstimatedMonthlyVisits && <DynamicMVAreaChart data={rep.EstimatedMonthlyVisits}/>}
                 
                </div>

            <div  className='w-screen lg:w-[50%] h-fit lg:h-[100vh]  justify-start overflow-y-scroll flex flex-wrap gap-0 relative'>
           <span className='w-full flex items-center justify-center border-b-2 border-b-white text-2xl font-extrabold'>
                  Rival brand KPIs
                </span>
            {rep.similarSites && rep.similarSites.map(ss => (

                  <div key={ss.Site} className='flex flex-col gap-5 p-2 w-[220px] border-white border-2 text-white'>
                  <span className='font-extrabold text-md'>
                    {ss.Site}
                  </span>
                  <span className='font-semibold mt-[-0.6rem] text-xs'>
                    {ss.Title}
                  </span>
                 {ss.Thumbnail && ss.Thumbnail?.trim().length !== 0 && <Image alt='' src={ss.Thumbnail} width={200} height={200*4/3} />}
                  <span className='text-xs font-semibold'>
                    {ss.Description}
                  </span>
                  <div className='flex flex-wrap gap-1 mt-[-1rem]'>

                        <Badge>
                            🌍{JSON.stringify(ss.GlobalRank)}
                        </Badge>
                        
                        <Badge>
                            {getFlagEmoji(rep.TopCountryShares[0].CountryCode)}:{JSON.stringify(ss.TopCountryRank)}
                        </Badge>
                        
                        <Badge>
                            🧩{JSON.stringify(ss.CategoryRank)}
                        </Badge>
                        
                        <Badge>
                            👥{formatNumber(ss.TotalVisits)}
                        </Badge>
                      
                      </div>
                </div>
                ))}
            </div> */}
            
            </div>
  )
}

export function AnalysisCardRenderer({reps}:{reps:(SiteData & {similarSites:SimilarSite[]})[]}) {
    return (
        <div className='flex flex-wrap gap-5' >
            {reps.map(rep=>

<AnalysisCard key={rep.Title} rep={rep}/>
            )}
        </div>
    )
}