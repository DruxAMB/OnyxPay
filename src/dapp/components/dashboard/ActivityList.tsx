// components/dashboard/ActivityList.tsx
import  Card  from "../Card";
import { formatDistanceToNow } from 'date-fns';
import { formatEther } from 'viem';
import { ArrowUpRight } from 'lucide-react';

interface ActivityItem {
  type: 'yield' | 'subscription' | 'deposit' | 'withdrawal';
  amount: bigint;
  timestamp: number;
  description: string;
  transactionHash: string;
}

interface ActivityListProps {
  activities: ActivityItem[];
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium text-white mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={activity.transactionHash + index} 
            className="flex items-center justify-between p-4 rounded-lg bg-gray-800"
          >
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <span className="text-white font-medium">{activity.description}</span>
                <span className="text-sm text-gray-400">
                  {formatDistanceToNow(activity.timestamp * 1000, { addSuffix: true })}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-400">+{formatEther(activity.amount)} BNB</span>
              <a 
                href={`https://bscscan.io/tx/${activity.transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        ))}
        {activities.length === 0 && (
          <div className="text-center py-6 text-gray-400">
            No recent activity
          </div>
        )}
      </div>
    </Card>
  );
}