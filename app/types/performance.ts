export interface PerformanceCriteria {
  uniqueness: number;
  marketDemand: number;
  competition: number;
  executionComplexity: number;
}

export interface SaaSPerformanceScore {
  criteria: PerformanceCriteria;
  score: number;
}