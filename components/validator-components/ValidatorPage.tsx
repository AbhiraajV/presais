import { EnhancedSampleData } from "@/app/types";
import { MarketSizeAnalysis } from "./MarketSizeAnalysis";
import { GlobalCompetitorMap } from "./GlobalCompetitorMap";
import { KeywordAnalysis } from "./KeywordAnalysis";
import { MarketShareChart } from "./MarketShareChart";
import { PerformanceScorecard } from "./PerformanceScorecard";
import { TrafficAnalysis } from "./TrafficAnalysis";
import { AdBudgetRecommendations } from "./AdBudgetRecommendations";

export function ValidatorPage({data}:{data:EnhancedSampleData}) {
  const { ideaAssessment } = data;
  const { 
    competitorAnalysis,
    marketSizeAnalysis,
    globalAndLocalCompetitorHeatmap,
    trafficSourceOptimizationSuggestions,
    estimatedMarketShareProjection,
    customSaaSPerformanceScore,
    adBudgetRecommendations
  } = ideaAssessment;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-3">
        <header className="mb-3">
          <h1 className="text-xl font-extrabold text-gray-900">SaaS Competitor Analysis</h1>
          <p className="text-xs font-medium text-gray-600">Market insights and competitive analysis</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {marketSizeAnalysis && <MarketSizeAnalysis {...marketSizeAnalysis} />}
         {adBudgetRecommendations && <AdBudgetRecommendations {...adBudgetRecommendations} />}

         {competitorAnalysis && <KeywordAnalysis {...competitorAnalysis.keywordOpportunityInsights} />}
         {globalAndLocalCompetitorHeatmap && <GlobalCompetitorMap {...globalAndLocalCompetitorHeatmap} />}
         {customSaaSPerformanceScore && <PerformanceScorecard {...customSaaSPerformanceScore} />}
         {trafficSourceOptimizationSuggestions && <TrafficAnalysis 
            search={trafficSourceOptimizationSuggestions.competitorTrends.search}
            direct={trafficSourceOptimizationSuggestions.competitorTrends.direct}
            mail={trafficSourceOptimizationSuggestions.competitorTrends.mails}
            referals={trafficSourceOptimizationSuggestions.competitorTrends.referals}
            social={trafficSourceOptimizationSuggestions.competitorTrends.social}
            recommendation={trafficSourceOptimizationSuggestions.recommendation}
          />}
         {estimatedMarketShareProjection && <MarketShareChart {...estimatedMarketShareProjection} />}

        </div>
      </div>
    </div>
  );
}
