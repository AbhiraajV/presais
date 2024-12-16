import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText, Zap, Search, MapPin, Compass, Key, BarChart, RefreshCcw, Clock, BotIcon as Robot, Rocket } from 'lucide-react'

export default function SaasValidationComparison() {
  const oldSchoolSteps = [
    { icon: Search, text: "Find competitors" },
    { icon: MapPin, text: "Research audience" },
    { icon: Compass, text: "Analyze traffic" },
    { icon: Key, text: "Check keywords" },
    { icon: BarChart, text: "Estimate market" },
    { icon: RefreshCcw, text: "Compile data" },
  ]

  const newSchoolSteps = [
    { icon: Rocket, text: "Visit ValidateaSaaS" },
    { icon: ScrollText, text: "Describe idea" },
    { icon: Robot, text: "Get AI analysis" },
    { icon: Zap, text: "Act on insights" },
  ]

  return (
    <div className="container mx-auto px-2 py-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">Validate Your SaaS Idea</h1>
      <div className="flex justify-center gap-4">
        <Card className="bg-red-50 dark:bg-red-900 overflow-hidden w-64">
          <CardHeader className="p-2">
            <CardTitle className="flex items-center text-red-600 dark:text-red-400 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              Old-School Way
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <ul className="space-y-1">
              {oldSchoolSteps.map((step, index) => (
                <li key={index} className="flex items-center text-xs">
                  <step.icon className="w-3 h-3 mr-1 text-red-500 dark:text-red-400 flex-shrink-0" />
                  <span className="truncate">{step.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 dark:bg-green-900 overflow-hidden w-64">
          <CardHeader className="p-2">
            <CardTitle className="flex items-center text-green-600 dark:text-green-400 text-xs">
              <Zap className="w-3 h-3 mr-1" />
              New-School Way
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <ul className="space-y-1">
              {newSchoolSteps.map((step, index) => (
                <li key={index} className="flex items-center text-xs">
                  <step.icon className="w-3 h-3 mr-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="truncate">{step.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <p className="text-center mt-4 text-xs font-bold">
        Let AI streamline your path to success
      </p>
    </div>
  )
}

