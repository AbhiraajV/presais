"use client";

import { motion } from "framer-motion";
import { Target, Users, BarChart3, Globe, Search } from "lucide-react";

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
  index: number;
}

function FeatureItem({ icon: Icon, text, index }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
    >
      <Icon className="w-5 h-5 text-blue-500" />
      <span className="text-sm">{text}</span>
    </motion.div>
  );
}

export function FeatureList() {
  const features = [
    { icon: Target, text: "Competitors KPI analysis" },
    { icon: Users, text: "List of rivals for each competitor" },
    { icon: BarChart3, text: "Market size estimation & rankings" },
    { icon: Globe, text: "Traffic sources breakdown" },
    { icon: Search, text: "Top keywords for your idea" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          text={feature.text}
          index={index}
        />
      ))}
    </div>
  );
}