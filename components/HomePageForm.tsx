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

interface CardWithFormProps {
  onSubmit: (data: { name: string; description: string; count: number }) => void;
}

export default function HomePageForm({  onSubmit }: CardWithFormProps) {
  const [name, setName] = React.useState("")
  const [saasDescription, setSaasDescription] = React.useState("")
  const [count, setCount] = React.useState(2)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, description: saasDescription, count })
  }

  const handleClear = () => {
    setName("")
    setSaasDescription("")
    setCount(2)
  }

  return (
    <Card className="relative">
      <div className="absolute top-2 right-2">

      <UserButton/>
      </div>
      <CardHeader>
        <CardTitle className="font-extrabold text-lg">Presais: SaaS competitor analysis</CardTitle>
        <CardDescription className="space-y-2 font-bold">
          Get AI-generated report for your SaaS idea, including:
          <ul className="text-sm text-muted-foreground space-y-0">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Competitors KPI analysis
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              List of rivals for each competitor
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Market size estimation
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Traffic sources breakdown
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Top keywords for your idea
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleClear}>Clear</Button>
        <Button disabled={name.trim().length === 0 || saasDescription.trim().length <= 2}  type="submit" form="saas-form">Generate</Button>
      </CardFooter>
      <CardFooter>
        <Link className="text-sm font-bold text-blue-600 underline" href={'/report/b89872c5-a74b-4cd4-bba2-18dd46405615'}>
        View an example report
        </Link>
      </CardFooter>
    </Card>
  )
}

