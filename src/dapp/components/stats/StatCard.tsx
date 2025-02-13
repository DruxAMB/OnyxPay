import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../Card';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change: string;
}

const StatCard = ({ label, value, icon: Icon, change }: StatCardProps) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Icon className="w-6 h-6 text-indigo-400" />
        <span className={`text-sm font-medium ${
          isPositive ? 'text-green-400' : 'text-gray-400'
        }`}>
          {change}
        </span>
      </div>
      <p className="mt-4 text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-gray-400">{label}</p>
    </Card>
  );
}

export default StatCard;