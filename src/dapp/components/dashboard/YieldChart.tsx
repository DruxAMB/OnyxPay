// components/dashboard/YieldChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import  Card  from "../Card";
import { formatEther } from 'viem';
import { format } from 'date-fns';

interface YieldChartProps {
  data: {
    timestamp: number;
    amount: bigint;
  }[];
}

export function YieldChart({ data }: YieldChartProps) {
  const chartData = data.map(item => ({
    date: format(item.timestamp * 1000, 'MMM d'),
    yield: Number(formatEther(item.amount))
  }));

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium text-white mb-6">Yield Generation History</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
              label={{ 
                value: 'Yield (BNB)', 
                angle: -90, 
                position: 'insideLeft',
                fill: '#9CA3AF'
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="yield" 
              stroke="#6366F1" 
              strokeWidth={2}
              dot={{ fill: '#6366F1' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
