import React from 'react';

interface ScoreBarProps {
  value: number;
  label: string;
}

export function ScoreBar({ value, label }: ScoreBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs font-bold text-gray-700">{label}</span>
        <span className="text-xs font-bold text-gray-600">{value}/10</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1">
        <div
          className="bg-green-600 h-1 rounded-full transition-all duration-300"
          style={{ width: `${(value / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}