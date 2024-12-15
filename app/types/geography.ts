export interface CountryDistribution {
  country: string;
  trafficShare: number;
  competitors: string[];
}

export interface GlobalCompetitorHeatmap {
  dominantCountries: string[];
  countryWiseDistribution: CountryDistribution[];
  recommendation: string;
}