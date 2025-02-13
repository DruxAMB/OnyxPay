import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActivityItemProps {
  icon: LucideIcon;
  title: string;
  timestamp: string;
  amount: string;
}

const ActivityItem = ({ icon: Icon, title, timestamp, amount }: ActivityItemProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-700">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="text-xs text-gray-400">{timestamp}</p>
        </div>
      </div>
      <span className="text-sm text-green-400">{amount}</span>
    </div>
  );
};

export default ActivityItem;