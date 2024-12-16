'use client'
import { EnhancedSampleData } from "@/app/types";
import { MarketSizeAnalysis } from "./MarketSizeAnalysis";
import { GlobalCompetitorMap } from "./GlobalCompetitorMap";
import { KeywordAnalysis } from "./KeywordAnalysis";
import { MarketShareChart } from "./MarketShareChart";
import { PerformanceScorecard } from "./PerformanceScorecard";
import { TrafficAnalysis } from "./TrafficAnalysis";
import { AdBudgetRecommendations } from "./AdBudgetRecommendations";
import { ValidationItem, ValidationStatus } from "../ValidationComp";

export function ValidatorPage({data}:{data:EnhancedSampleData}) {
  const { ideaAssessment, } = data;
  const { 
    competitorAnalysis,
    marketSizeAnalysis,
    globalAndLocalCompetitorHeatmap,
    trafficSourceOptimizationSuggestions,
    estimatedMarketShareProjection,
    customSaaSPerformanceScore,
    adBudgetRecommendations,
    businessExistence
  } = ideaAssessment;
console.log({
    businessExistence

})
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
         {competitorAnalysis && <KeywordAnalysis {...competitorAnalysis.keywordOpportunityInsights} />}
       {Array.isArray(businessExistence?.description) && <ValidationStatus description={businessExistence?.description as unknown as ValidationItem[]} status={businessExistence?.status ?? 'Existing'}/>}
          {marketSizeAnalysis && <MarketSizeAnalysis {...marketSizeAnalysis} />}
         {adBudgetRecommendations && <AdBudgetRecommendations {...adBudgetRecommendations} />}

         {trafficSourceOptimizationSuggestions && <TrafficAnalysis 
            search={trafficSourceOptimizationSuggestions.competitorTrends.search}
            direct={trafficSourceOptimizationSuggestions.competitorTrends.direct}
            mail={trafficSourceOptimizationSuggestions.competitorTrends.mails}
            referals={trafficSourceOptimizationSuggestions.competitorTrends.referals}
            social={trafficSourceOptimizationSuggestions.competitorTrends.social}
            recommendation={trafficSourceOptimizationSuggestions.recommendation}
          />}
         {globalAndLocalCompetitorHeatmap && <GlobalCompetitorMap {...globalAndLocalCompetitorHeatmap} />}
         {customSaaSPerformanceScore && <PerformanceScorecard {...customSaaSPerformanceScore} />}
         {estimatedMarketShareProjection && <MarketShareChart {...estimatedMarketShareProjection} />}

        </div>
      </div>
    </div>
  );
}
