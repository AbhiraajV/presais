export interface AdStrategy {
  budget: string;
  focus: string;
}

export interface AdBudgetRecommendations {
  searchAds: AdStrategy;
  socialMediaAds: AdStrategy;
}