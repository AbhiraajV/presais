import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import {  User } from "@prisma/client"
import BuyMeACookie from "./BuyMeACoffee"
// import { getUserReports } from "@/app/actions/report.action"

interface CardWithFormProps {
  onSubmit: (data: { name: string; description: string; count: number }) => void;
  user:User
}

export default function HomePageForm({  onSubmit,user }: CardWithFormProps) {
  // const [reports,setReports] = React.useState<Report[]>([]);
  const [name, setName] = React.useState("")
  const [saasDescription, setSaasDescription] = React.useState("")
  const [count, setCount] = React.useState(2)
  const [time,setTime] =  React.useState<string | null>(null)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, description: saasDescription, count })
  }

  // React.useEffect(() => {
  //   getUserReports(user.id).then(data=>setReports(data))
  // }, [user])
  
  const handleClear = () => {
    setName("")
    setSaasDescription("")
    setCount(2)
  }

  const TIME = 15 * 60 * 1000
  function startTimer(targetTime: string) {
    const targetDate = new Date(targetTime);
    const endDate = new Date(targetDate.getTime() + TIME);

    function updateTimer() {
      const now = new Date();
      const remainingTime = endDate.getTime() - now.getTime();

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        return;
      }
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);

      setTime(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
  }
  function has24HoursPassed(inputTime: string): boolean {
    if(!inputTime) return true;
    const givenDate = new Date(inputTime);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - givenDate.getTime();

    return timeDifference >= TIME;
  }
  React.useEffect(() => {
    if(user.lastRequest) startTimer(user.lastRequest.toString())
  }, [user])
  
  return (
    <Card className="relative">
      <BuyMeACookie className="absolute top-[-40px] left-0"/>
        <div className="absolute top-2 right-2 flex gap-1 items-center justify-center">
      <UserButton/>
      </div>
      <CardHeader>
        <CardTitle className="font-extrabold text-lg">Presais: SaaS competitor analysis</CardTitle>
        <CardDescription className="space-y-2 font-bold">
          Get AI-generated report for your SaaS idea, including:
          <ul className="text-sm text-muted-foreground space-y-0">
            <li className="flex items-center">
              <span className="mr-2">🧩</span>
              Competitors KPI analysis
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚔️</span>
              List of rivals for each competitor
            </li>
            <li className="flex items-center">
              <span className="mr-2">📈</span>
              Market size estimation & rankings
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌐</span>
              Traffic sources breakdown
            </li>
            <li className="flex items-center">
              <span className="mr-2">🚀</span>
              Top keywords for your idea
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      {user.lastRequest && !has24HoursPassed(user.lastRequest?.toString()) && <CardContent className="text-xl font-extrabold ">
        Next request in: {time}
        </CardContent>}
      {user.lastRequest && !has24HoursPassed(user.lastRequest?.toString()) &&<CardContent className="text-sm w-full mt-[-1rem] font-bold text-gray-500">
        We have received your current request, <br/>an Email will be sent to you when your report is ready!
      </CardContent> }
     {(!user.lastRequest || has24HoursPassed(user.lastRequest?.toString())) && <CardContent>
        <form id="saas-form" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name of your SaaS</Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your SaaS name" 
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Describe your SaaS in detail</Label>
              <Textarea 
                id="description" 
                value={saasDescription}
                onChange={(e) => setSaasDescription(e.target.value)}
                placeholder="Provide a detailed description of your SaaS idea"
                rows={4}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="results">Number of results</Label>
              <Slider
                id="results"
                min={1}
                max={10}
                step={1}
                value={[count]}
                onValueChange={(value) => setCount(value[0])}
              />
              <div className="text-center">{count}</div>
            </div>
          </div>
        </form>
      </CardContent>}
     {(!user.lastRequest || has24HoursPassed(user.lastRequest?.toString())) &&  <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleClear}>Clear</Button>
        <Button disabled={name?.trim().length === 0 || saasDescription?.trim().length <= 2}  type="submit" form="saas-form">Generate</Button>
      </CardFooter>}
      <CardFooter className="flex items-start justify-start gap-5">
        <Link className="text-sm font-bold text-blue-600 underline" href={'/report/b89872c5-a74b-4cd4-bba2-18dd46405615'}>
          Example report #1
        </Link>
        
        <Link className="text-sm font-bold text-blue-600 underline" href={'/report/a26bc2f5-362c-49db-b419-27e50219bfd0'}>
          Example report #2
        </Link>
      </CardFooter>
      <CardFooter className="text-xs font-light text-gray-500">
        *all reports are shareable
      </CardFooter>
    </Card>
  )
}

