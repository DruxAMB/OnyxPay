// components/dashboard/StatsGrid.tsx
import  Card  from "../Card";
import { formatEther } from 'viem';

interface StatsGridProps {
  stats: {
    totalValueLocked: bigint;
    totalYieldEarned: bigint;
    activeSubscriptions: number;
    averageYieldRate: number;
  };
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-400">Total Value Locked</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            {formatEther(stats.totalValueLocked)} BNB
          </p>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-400">Total Yield Earned</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            {formatEther(stats.totalYieldEarned)} BNB
          </p>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-400">Active Subscriptions</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            {stats.activeSubscriptions}
          </p>
        </div>
      </Card>

      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-400">Average Yield Rate</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            {stats.averageYieldRate.toFixed(2)}%
          </p>
        </div>
      </Card>
    </div>
  );
}