import React from 'react';
import { Globe } from 'lucide-react';
import { AIIndicator } from './ui/AIIndicator';
import { GlobalCompetitorHeatmap } from '@/app/types/geography';
import { formatPercentage } from '@/app/utils/formatters';

export function GlobalCompetitorMap({ 
  countryWiseDistribution,
  recommendation 
}: GlobalCompetitorHeatmap) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <Globe className="w-4 h-4 text-cyan-600" />
        <h2 className="text-base font-bold">Global Market Distribution</h2>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {countryWiseDistribution.map((country, index) => (
          <div key={index} className="bg-cyan-50 rounded p-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-bold text-cyan-800">{country.country}</span>
              <AIIndicator>
                <span className="text-xs font-bold text-cyan-600">
                  {formatPercentage(country.trafficShare)}
                </span>
              </AIIndicator>
            </div>
            <div className="w-full bg-cyan-100 rounded-full h-1 mb-1">
              <div
                className="bg-cyan-600 h-1 rounded-full"
                style={{ width: `${country.trafficShare}%` }}
              ></div>
            </div>
            <div className="flex flex-wrap gap-1">
              {country.competitors.map((competitor, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded-full"
                >
                  {competitor}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-cyan-50 rounded p-2 mt-2">
        <AIIndicator className="text-sm font-bold text-cyan-900">
          {recommendation}
        </AIIndicator>
      </div>
    </div>
  );
}