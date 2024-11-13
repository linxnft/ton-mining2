import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useGame } from '../context/GameContext';

const generateMockData = (hashRate: number) => {
  const data = [];
  const now = Date.now();
  for (let i = 0; i < 10; i++) {
    data.push({
      time: new Date(now - (9 - i) * 1000).toLocaleTimeString(),
      hashRate: Math.max(100, hashRate + Math.random() * 50 - 25),
    });
  }
  return data;
};

export default function HashRateChart() {
  const { state } = useGame();
  const data = generateMockData(state.hashRate);

  return (
    <div className="glass-card p-4 h-64">
      <h3 className="text-lg font-bold mb-4">Hash Rate History</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="time" 
            stroke="#ffffff40"
            tick={{ fill: '#ffffff80', fontSize: 12 }}
          />
          <YAxis 
            stroke="#ffffff40"
            tick={{ fill: '#ffffff80', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#000000cc',
              border: '1px solid #ffffff20',
              borderRadius: '8px',
            }}
          />
          <Line 
            type="monotone" 
            dataKey="hashRate" 
            stroke="#baff00" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}