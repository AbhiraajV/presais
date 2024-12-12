"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Badge } from "../ui/badge"
interface ChartDataItem {
  [key: string]: string | number; // Adjust as per your data structure
}

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

export function MultiBarComponent({title,dataKey,chartConfig,chartData}:{title:string,dataKey:string,chartConfig:ChartConfig,chartData:ChartDataItem[]}) {
  return (
    <Card className="w-full bg-[#282828] text-white h-fit border-none">
      <CardHeader>
        <CardTitle className="font-extrabold text-md">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey={dataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {Object.keys(chartConfig).map(k=>(

                <Bar dataKey={k} key={k} fill={chartConfig[k].color} radius={4} />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1">
        {chartData.map((cd)=><Badge key={cd[dataKey]}>{cd[dataKey]} </Badge>)}
      </CardFooter>
    </Card>
  )
}
