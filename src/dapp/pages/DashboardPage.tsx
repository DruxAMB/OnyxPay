import { StatsGrid } from '../components/dashboard/StatsGrid';
import { YieldChart } from '../components/dashboard/YieldChart';
import { ActivityList } from '../components/dashboard/ActivityList';
import  Button  from '../components/Button';
import { useDashboard } from '../../hooks/useDashboard';
import { formatEther } from 'viem';

export default function DashboardPage() {
  const { stats, recentActivity, isLoading, handleClaimRewards, pendingRewards } = useDashboard();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        {pendingRewards > BigInt(0) && (
          <Button 
            onClick={handleClaimRewards}
            className="bg-green-600 hover:bg-green-700"
          >
            Claim {formatEther(pendingRewards)} BNB Rewards
          </Button>
        )}
      </div>

      <StatsGrid stats={stats} />

      <YieldChart 
        data={recentActivity.map(activity => ({
          timestamp: activity.timestamp,
          amount: activity.amount
        }))} 
      />

      <ActivityList activities={recentActivity} />
    </div>
  );
}