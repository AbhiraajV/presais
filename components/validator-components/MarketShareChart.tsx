import React from 'react';
import { PieChart } from 'lucide-react';
import { MarketShareProjection } from '@/app/types/market';

export function MarketShareChart({ currentCompetitors, potentialShare }: MarketShareProjection) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <PieChart className="w-4 h-4 text-purple-600" />
        <h2 className="text-base font-bold">Market Share</h2>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div>
          <h3 className="text-xs font-bold mb-2">Current Competitors</h3>
          <div className="space-y-2">
            {currentCompetitors.map((competitor, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-bold">{competitor.title}</span>
                  <span className="text-xs font-bold text-purple-600">{competitor.marketShare}</span>
                </div>
                <div className="w-full bg-purple-100 rounded-full h-1">
                  <div
                    className="bg-purple-600 h-1 rounded-full"
                    style={{
                      width: competitor.marketShare
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 p-2 rounded">
          <h3 className="text-xs font-bold mb-1">Potential Share</h3>
      <p className="text-sm font-extrabold text-gray-600 mb-2">{potentialShare.description}</p>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-extrabold text-purple-700">{potentialShare.range.min}%</p>
            </div>
            <div className="w-8 h-px bg-purple-300"></div>
            <div>
              <p className="text-3xl font-extrabold text-purple-700">{potentialShare.range.max}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}