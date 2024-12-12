"use client"

import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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

type EstimatedMonthlyVisits = Record<string, number>;

interface DynamicAreaChartProps {
  data: EstimatedMonthlyVisits;
}

const chartConfig = {
  visits: {
    label: "Visits",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

// Custom date formatter for 'MMM yyyy'
function formatDateToMonthYear(date: Date): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Custom date formatter for 'MMMM yyyy'
function formatDateToFullMonthYear(date: Date): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default function DynamicMVAreaChart({ data }: DynamicAreaChartProps) {
  const chartData = Object.entries(data).map(([date, visits]) => ({
    date: new Date(date),
    visits,
  })).sort((a, b) => a.date.getTime() - b.date.getTime());

  const latestMonth = chartData[chartData.length - 1];
  const previousMonth = chartData[chartData.length - 2];
  const percentageChange = ((latestMonth.visits - previousMonth.visits) / previousMonth.visits) * 100;

  return (
    <Card className='bg-[#282828] w-full text-white border-none'>
      <CardHeader>
        <CardTitle className='text-md font-extrabold'>Monthly visits</CardTitle>
        <CardDescription>
          Showing estimated monthly visits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer height={600}>
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => formatDateToMonthYear(new Date(date))}
              />
              <YAxis />
              <ChartTooltip
  content={
    <ChartTooltipContent
      formatter={(value: unknown) => {
        if (typeof value === "number") {
          return [new Intl.NumberFormat().format(value), "Visits"];
        }
        return [String(value), "Visits"]; // Handle non-number cases gracefully
      }}
      labelFormatter={(label: unknown) => {
        if (typeof label === "string" || label instanceof Date) {
          return formatDateToFullMonthYear(new Date(label));
        }
        return String(label); // Fallback for unexpected types
      }}
    />
  }
/>

              <Area
                type="monotone"
                dataKey="visits"
                stroke="var(--color-visits)"
                fill="var(--color-visits)"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {percentageChange > 0 ? 'Trending up' : 'Trending down'} by {Math.abs(percentageChange).toFixed(1)}% this month
              <TrendingUp className={`h-4 w-4 ${percentageChange > 0 ? 'text-green-500' : 'text-red-500'}`} />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
