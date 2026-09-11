import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend } from 'recharts';
import { MOCK_ADMIN_ANALYTICS } from '../utils/mockData';

export const AnalyticsCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Monthly RTO Trend Chart */}
      <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-100">RTO Percentage Reduction Trend</h3>
            <p className="text-xs text-slate-400">Standard RTO vs. SmartDeliver AI RTO Defense</p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
            -88% RTO Drop
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_ADMIN_ANALYTICS.monthlyTrend}>
              <defs>
                <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} unit="%" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }} 
              />
              <Area type="monotone" dataKey="standardRTO" stroke="#f43f5e" fillOpacity={1} fill="url(#colorStandard)" name="Standard RTO %" />
              <Area type="monotone" dataKey="aiSmartRTO" stroke="#10b981" fillOpacity={1} fill="url(#colorAi)" name="SmartDeliver AI RTO %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Communication Channel Resolution Performance */}
      <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-100">AI Communication Channel Resolution</h3>
            <p className="text-xs text-slate-400">Total automated resolutions triggered by channel</p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-bold">
            94.2% AI Success
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_ADMIN_ANALYTICS.communicationChannels}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} interval={0} />
              <YAxis stroke="#94a3b8" fontSize={11} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#f8fafc' }} 
              />
              <Bar dataKey="count" fill="#0284c7" radius={[8, 8, 0, 0]} name="Successful Resolutions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};
