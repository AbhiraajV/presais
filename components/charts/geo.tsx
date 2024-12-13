'use client'
import { Users } from 'lucide-react'
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

interface GeoChartData {
  Country: number;
  CountryCode: string;
  Value: number;
}

interface GeoChartProps {
  data?: GeoChartData[];
  maxCountries?: number;
}

const chartConfig = {
  Value: {
    label: "Percentage of Users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function GeoChart({ data = [], maxCountries = 6 }: GeoChartProps) {
  const sortedData = Array.isArray(data) 
    ? [...data].sort((a, b) => b.Value - a.Value).slice(0, maxCountries)
    : [];

  if (sortedData.length === 0) {
    return (
      <Card className="w-full max-w-md shadow-none border-none">
        <CardContent className="p-4 text-center text-muted-foreground">
          No data available
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full ml-[-3.2rem] bg-transparent pl-[-2rem] max-w-md shadow-none border-1">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-fit">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedData}
              layout="vertical"
              margin={{
                left: 40,
                right: 10,
                top: 5,
                bottom: 5,
              }}
              barSize={12}
              className='text-white'
              barGap={2}
            >
              <XAxis 
                type="number" 
                tickFormatter={(value) => `${value}%`} 
                ticks={[0, 10, 20, 30]} 
                fontSize={10}
                axisLine={false}
                tickLine={false}
              className='text-white'

              />
              <YAxis 
                dataKey="CountryCode" 
                type="category" 
                width={40} 
                fontSize={10}
              className='text-white'

                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg bg-background p-1 shadow-sm text-xs">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="flex flex-col">
                            <span className="uppercase text-muted-foreground">
                              Country
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].payload.CountryCode}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="uppercase text-muted-foreground">
                              Users
                            </span>
                            <span className="font-bold text-black">
                              {payload[0].value}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="Value"
              className='text-white'

                fill="var(--color-Value)"
                radius={[0, 2, 2, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center justify-center pt-1 pb-2">
        <div className="flex items-center gap-2 text-xs font-extrabold text-white">
          <Users className="h-3 w-3" />
          Top {sortedData.length} countries by user location
        </div>
      </CardFooter>
    </Card>
  )
}

