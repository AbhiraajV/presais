import React from 'react';
import { Target } from 'lucide-react';
import { PerformanceScoreProps } from '../types';

export function PerformanceScorecard({ criteria, score }: PerformanceScoreProps) {
  const renderScoreBar = (value: number, label: string) => (
    <div className="mb-2 ">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-bold text-gray-700">{label}</span>
        <span className="text-xs font-bold text-gray-600">{value}/10</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="bg-green-600 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${(value / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white w-full md:w-[37%] lg:w-[38.5%] rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <Target className="w-5 h-5 text-green-600" />
        <h2 className="text-lg font-bold">Performance Score</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          {renderScoreBar(criteria.uniqueness, 'Uniqueness')}
          {renderScoreBar(criteria.marketDemand, 'Market Demand')}
          {renderScoreBar(criteria.competition, 'Competition')}
          {renderScoreBar(criteria.executionComplexity, 'Execution')}
        </div>

        <div className="flex flex-col items-center justify-center bg-green-50 rounded p-3">
          <div className="text-4xl font-extrabold text-green-700">{score}</div>
          <div className="text-sm font-bold text-green-600">/10</div>
          <p className="mt-2 text-xs font-medium text-center">
            {score >= 8 ? 'Excellent potential!' : 
             score >= 6 ? 'Good opportunity' : 
             'Significant challenges'}
          </p>
        </div>
      </div>
    </div>
  );
}