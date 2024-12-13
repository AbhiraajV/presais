"use client"

import * as React from "react"
import { Pie, PieChart, Cell, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type TrafficSources = {
  Social: number;
  "Paid Referrals": number;
  Mail: number;
  Referrals: number;
  Search: number;
  Direct: number;
};

interface TrafficSourcesChartProps {
  data: TrafficSources;
}

const chartConfig: ChartConfig = {
  visitors: { label: "Visitors" },
  Social: { label: "Social", color: "hsl(var(--chart-1))" },
  "Paid Referrals": { label: "Paid Referrals", color: "hsl(var(--chart-2))" },
  Mail: { label: "Mail", color: "hsl(var(--chart-3))" },
  Referrals: { label: "Referrals", color: "hsl(var(--chart-4))" },
  Search: { label: "Search", color: "hsl(var(--chart-5))" },
  Direct: { label: "Direct", color: "purple" },
};

const COLORS = Object.values(chartConfig).map(config => config.color).filter(Boolean) as string[];

export default function TrafficSourcesChart({ data }: TrafficSourcesChartProps) {
  const totalVisitors = React.useMemo(() => {
    return Object.values(data).reduce((acc, curr) => acc + curr, 0)
  }, [data])

  const chartData = React.useMemo(() => {
    return Object.entries(data).map(([name, value]) => ({
      name,
      value,
    }))
  }, [data])

  const maxTrafficSource = React.useMemo(() => {
    return Object.entries(data).reduce((max, [source, value]) => 
      value > max.value ? { source, value } : max
    , { source: '', value: 0 });
  }, [data])

  return (
    <Card className="flex w-[100%] bg-[#282828] text-white mt-[0.6rem] border-none flex-col">
      <CardHeader className="items-start pb-0">
      </CardHeader>
      <CardContent className="flex-1  pb-0">
        <ChartContainer
  config={chartConfig}
  className="mx-auto"
>
  <PieChart className="w-[100%]">
    <ChartTooltip
      cursor={false}
      content={<ChartTooltipContent hideLabel />}
    />
    <Pie
      data={chartData}
      dataKey="value"
      nameKey="name"
      innerRadius={60}
      outerRadius={80}
      strokeWidth={5}
      paddingAngle={5}
      legendType="circle"
    >
      {chartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Legend
      align="center" 
      verticalAlign="bottom" 
      layout="horizontal" 
      iconType="circle" 
    />
  </PieChart>
</ChartContainer>

      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Maximum traffic comes from: {maxTrafficSource.source}
        </div>
        <div className="leading-none text-white">
          {((maxTrafficSource.value / totalVisitors) * 100).toFixed(1)}% of total traffic
        </div>
      </CardFooter>
    </Card>
  )
}

