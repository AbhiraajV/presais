import { CompetitionLevel } from '@/app/types/keywords';
import React from 'react';

interface CompetitionBadgeProps {
  level: CompetitionLevel;
}

export function CompetitionBadge({ level }: CompetitionBadgeProps) {
  const colors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors[level.toLowerCase() as keyof typeof colors]}`}>
      {level}
    </span>
  );
}