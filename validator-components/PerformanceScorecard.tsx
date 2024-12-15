import React from 'react';
import { Target } from 'lucide-react';
import { ScoreBar } from './ui/ScoreBar';
import { SaaSPerformanceScore } from '@/app/types/performance';

export function PerformanceScorecard({ criteria, score }: SaaSPerformanceScore) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-2 mb-2">
        <Target className="w-4 h-4 text-green-600" />
        <h2 className="text-base font-bold">Performance Score</h2>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <div className="space-y-2">
          <ScoreBar value={criteria.uniqueness} label="Uniqueness" />
          <ScoreBar value={criteria.marketDemand} label="Market Demand" />
          <ScoreBar value={criteria.competition} label="Competition" />
          <ScoreBar value={criteria.executionComplexity} label="Execution" />
        </div>

        <div className="flex flex-col items-center justify-center bg-green-50 rounded p-2">
          <div className="text-3xl font-extrabold text-green-700">{score}</div>
          <div className="text-xs font-bold text-green-600">/10</div>
          <p className="mt-1 text-xs font-medium text-center">
            {score >= 8 ? 'Excellent potential!' : 
             score >= 6 ? 'Good opportunity' : 
             'Significant challenges'}
          </p>
        </div>
      </div>
    </div>
  );
}