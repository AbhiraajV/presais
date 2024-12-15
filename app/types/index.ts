import { AdBudgetRecommendations } from './advertising';
import { BusinessExistence } from './business';
import { GlobalCompetitorHeatmap } from './geography';
import { KeywordOpportunityInsights, MarketGapVisualization } from './keywords';
import { MarketShareProjection, MarketSizeAnalysis } from './market';
import { SaaSPerformanceScore } from './performance';
import { TrafficSourceOptimization } from './traffic';

export interface IdeaAssessment {
  businessExistence?: BusinessExistence;
  competitorAnalysis?: {
    keywordOpportunityInsights: KeywordOpportunityInsights;
    marketGapVisualization: MarketGapVisualization;
  };
  trafficSourceOptimizationSuggestions?: TrafficSourceOptimization;
  globalAndLocalCompetitorHeatmap?: GlobalCompetitorHeatmap;
  estimatedMarketShareProjection?: MarketShareProjection;
  customSaaSPerformanceScore?: SaaSPerformanceScore;
  adBudgetRecommendations?: AdBudgetRecommendations;
  marketSizeAnalysis?: MarketSizeAnalysis;
}

export interface EnhancedSampleData {
  ideaAssessment: IdeaAssessment;
}