import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../Card';

const data = [
  { date: '03/01', yield: 2.3 },
  { date: '03/02', yield: 2.8 },
  { date: '03/03', yield: 3.1 },
  { date: '03/04', yield: 3.9 },
  { date: '03/05', yield: 4.2 },
  { date: '03/06', yield: 4.8 },
  { date: '03/07', yield: 5.2 },
];

const YieldChart = () => {
  return (
    <Card className="h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Yield Growth</h2>
        <select className="bg-gray-700 text-white rounded-md px-3 py-1 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fill: '#6b7280' }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '0.375rem',
              color: '#fff'
            }}
          />
          <Area
            type="monotone"
            dataKey="yield"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#yieldGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default YieldChart;