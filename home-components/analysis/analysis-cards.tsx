"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Globe2,
  Target,
  TrendingUp,
  Users,
  Search,
  LineChart,
  PieChart,
  Map,
  DollarSign,
} from "lucide-react";

interface AnalysisCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function AnalysisCard({ icon: Icon, title, description, index }: AnalysisCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="h-12 w-12 text-blue-500 mb-4">
        <Icon className="w-full h-full" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <div className="text-gray-600 dark:text-gray-300 text-center text-sm">{description}</div>
    </motion.div>
  );
}

export function AnalysisShowcase() {
  const analysisFeatures = [
    {
      icon: Target,
      title: "Idea Assessment",
      description: "Evaluate your SaaS concept's uniqueness and market fit with detailed scoring across multiple criteria."
    },
    {
      icon: Search,
      title: "Keyword Analysis",
      description: "Discover high-value keywords with competition levels, search volumes, and CPC metrics."
    },
    {
      icon: LineChart,
      title: "Market Gap Analysis",
      description: "Identify untapped opportunities and potential threats in your target market segment."
    },
    {
      icon: PieChart,
      title: "Traffic Sources",
      description: "Understand competitor traffic distribution across search, direct, social, referrals, and email channels."
    },
    {
      icon: Map,
      title: "Global Presence",
      description: "Visualize competitor distribution and market share across different countries and regions."
    },
    {
      icon: TrendingUp,
      title: "Market Share Projection",
      description: "Get insights into current market leaders and your potential market share range."
    },
    {
      icon: BarChart3,
      title: "Performance Score",
      description: "Receive a custom SaaS performance score based on uniqueness, demand, competition, and complexity."
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Get detailed ad budget recommendations for search and social media marketing campaigns."
    },
    {
      icon: Globe2,
      title: "Market Size Analysis",
      description: "Access total market size, user base metrics, and growth trends in your target segment."
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Analysis Report
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300">
            Our AI-powered analysis provides detailed insights across multiple dimensions
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisFeatures.map((feature, index) => (
            <AnalysisCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}