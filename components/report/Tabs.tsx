import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import GeoChart from "../charts/geo"
import TrafficSourcesChart from "../charts/traffic.pie"
import DynamicMVAreaChart from "../charts/monthlyvisit"
import KWTable from "./KeywordsTable"
import Image from "next/image"
import { SiteMetrics } from "./MetricsComp"
import { SimilarSite, SiteData } from "@/app/types/bas"

type Props = {rep:SiteData & {similarSites:SimilarSite[]}}

export function ReportTabs({rep}:Props) {
  return (
    <Tabs  defaultValue="similar" className="w-full mt-[1rem] bg-transparent">
      <TabsList className="border-2 border-white flex flex-row sm:mb-0 mb-[2rem] bg-transparent items-start justify-start w-fit">
        <TabsTrigger className="px-3 md:px-2 text-xs hover:bg-[#ffffffbf] text-white font-extrabold " value="geo">Geo-wise</TabsTrigger>
        <TabsTrigger className="px-3 md:px-2 text-xs hover:bg-[#ffffffbf] hover:text-black text-white font-extrabold " value="traffic">Traffic</TabsTrigger>
        <TabsTrigger className="px-3 md:px-2 text-xs hover:bg-[#ffffffbf] hover:text-black text-white font-extrabold " value="visits">Users</TabsTrigger>

        <TabsTrigger className="px-3 md:px-2 text-xs hover:bg-[#ffffffbf] hover:text-black text-white font-extrabold " value="keywords">Keywords</TabsTrigger>
        <TabsTrigger className="px-3 md:px-2 text-xs hover:bg-[#ffffffbf] hover:text-black text-white font-extrabold " value="similar">Rivals</TabsTrigger>

      </TabsList>
      <TabsContent className='max-h-[300px] overflow-y-auto' value="geo">
                      <GeoChart data={(rep.TopCountryShares ?? []).map(c=>({...c,Value:Math.round(c.Value*100)}))} maxCountries={rep.TopCountryShares?.length ?? 0} />
        
      </TabsContent>
      
      <TabsContent className='max-h-[300px] overflow-y-auto' value="traffic">
        {rep.TrafficSources && <TrafficSourcesChart
                    data={rep.TrafficSources}
                />}
                 
        
      </TabsContent>
      
      <TabsContent className='max-h-[300px] overflow-y-auto' value="visits">
                {rep.EstimatedMonthlyVisits && <DynamicMVAreaChart data={rep.EstimatedMonthlyVisits}/>}
                 
        
      </TabsContent>
      <TabsContent className='max-h-[300px] overflow-y-auto' value="keywords">
        <KWTable data={rep.TopKeywords ?? []}/>
      </TabsContent>

      
      <TabsContent className="flex flex-col gap-2 max-h-[300px] overflow-y-auto" value="similar">
        {
            rep?.similarSites?.map(s=>(
                <div key={s.Site} className="flex gap-1 p-1 border-2 border-white rounded-sm justify-center items-center">
                    <Image unoptimized src={s.Thumbnail} width={125} height={125} alt=""/>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-extrabold">
                            {s.Site}
                        </span>
                        {/* <span className="text-xsm font-light">
                            {s.}
                        </span> */}
                        <SiteMetrics category="its category" country={'🧩'} countryRank={s.CategoryRank} globalRank={{Rank:s.GlobalRank}} totalVisits={s.TotalVisits}  />
                    </div>
                </div>
            ))
        }
      </TabsContent>
    </Tabs>
  )
}
