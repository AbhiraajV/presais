import React from 'react';
import { PieChart } from 'lucide-react';
import { MarketShareProps } from '../types';

export function MarketShareChart({ competitors, potentialShare }: MarketShareProps) {
  return (
    <div className="bg-white w-full md:w-[60%] rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <PieChart className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-bold">Market Share</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-bold mb-2">Current Competitors</h3>
          <div className="space-y-2">
            {competitors.map((competitor, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-bold">{competitor.title}</span>
                  <span className="text-xs font-bold text-purple-600">{competitor.marketShare}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-purple-600 h-1.5 rounded-full"
                    style={{
                      width: competitor.marketShare
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded">
          <h3 className="text-lg font-extrabold mb-2">Potential Share</h3>
          <p className="text-xs font-medium mb-3">{potentialShare.description}</p>
          <div className="lg:w-[50%] w-full flex justify-between items-center">
            <div>
              <p className="text-3xl font-extrabold text-purple-700">{potentialShare.range.min}%</p>
              <p className="text-xs text-purple-600">Min</p>
            </div>
            <div className="w-8 h-[2px] bg-purple-300"></div>
            <div>
              <p className="text-3xl font-extrabold text-purple-700">{potentialShare.range.max}%</p>
              <p className="text-xs text-purple-600">Max</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}