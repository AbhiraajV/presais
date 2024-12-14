import React from 'react'
import { KeywordAnalysis } from './KeywordAnalysis'
import { MarketShareChart } from './MarketShareChart'
import { PerformanceScorecard } from './PerformanceScorecard'
import { TrafficAnalysis } from './TrafficAnalysis'
import { AdBudgetRecommendations } from './AdBudgetRecommendations'
import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'
import { SampleData } from '@/types'


export default function ValidatorPage({sampleData}:{sampleData:SampleData}) {
    
  const { ideaAssessment } = sampleData as SampleData;
  const { keywordOpportunityInsights } = ideaAssessment.competitorAnalysis;
  return (
    

        <div className="container mx-auto px-2 py-4 flex flex-wrap gap-4">
            <div className='flex flex-col items-start justify-start'>
                <div className='flex items-center gap-1'>

                <Sparkles className="w-4 h-4 text-blue-600" />

                <span className='text-sm font-extrabold'>
                    {ideaAssessment.businessExistence.description}
                </span>
                </div>
                
                <Badge variant={'outline'}>
                    
                    {ideaAssessment.businessExistence.status.replaceAll("_"," ")}
                </Badge>

            </div>
          <KeywordAnalysis
            summary={keywordOpportunityInsights.summary}
            recommendedKeywords={keywordOpportunityInsights.recommendedKeywords}
            topKeywords={keywordOpportunityInsights.topKeywords}
            conclusion={keywordOpportunityInsights.conclusion}
          />
          <MarketShareChart 
            competitors={ideaAssessment.estimatedMarketShareProjection.currentCompetitors}
            potentialShare={ideaAssessment.estimatedMarketShareProjection.potentialShare}
          />
          <PerformanceScorecard
            criteria={ideaAssessment.customSaaSPerformanceScore.criteria}
            score={ideaAssessment.customSaaSPerformanceScore.score}
          />
          <TrafficAnalysis 
            search={ideaAssessment.trafficSourceOptimizationSuggestions.competitorTrends.search}
            direct={ideaAssessment.trafficSourceOptimizationSuggestions.competitorTrends.direct}
            recommendation={ideaAssessment.trafficSourceOptimizationSuggestions.recommendation}
          />
          <AdBudgetRecommendations
            searchAds={ideaAssessment.adBudgetRecommendations.searchAds}
            socialMediaAds={ideaAssessment.adBudgetRecommendations.socialMediaAds}
          />
        </div>
  )
}