import React from 'react';
import { useApp } from '../context/AppContext';
import { AnalyticsCharts } from '../components/AnalyticsCharts';
import { LiveMap } from '../components/LiveMap';
import { MOCK_ADMIN_ANALYTICS } from '../utils/mockData';
import { 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Bot, 
  Truck, 
  UserCheck, 
  Bell, 
  Activity, 
  ArrowUpRight, 
  Download, 
  Filter,
  CheckCircle2,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

export const AdminDashboard = () => {
  const { notifications, currentOrder } = useApp();

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      
      {/* SaaS Admin Command Center Header */}
      <div className="glass-card rounded-2xl p-5 border border-purple-500/20 bg-gradient-to-r from-purple-950/30 via-slate-900 to-slate-950 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-100 font-['Outfit']">Admin RTO Command & Fleet Analytics</h2>
          <p className="text-xs text-slate-400">Real-time Delivery Failures Defense Platform • AI Communication Performance</p>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center space-x-1.5 transition-colors">
            <Download className="w-3.5 h-3.5" />
            <span>Export RTO Audit Report</span>
          </button>
        </div>
      </div>

      {/* KPI Highlight Cards Grid (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: RTO Cost Saved */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full filter blur-xl" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">Total Revenue Saved</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-100 mt-2 font-mono">{MOCK_ADMIN_ANALYTICS.revenueSavedINR}</h3>
          <p className="text-[11px] text-emerald-400 font-semibold flex items-center mt-2">
            <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
            +18.4% vs last month
          </p>
        </div>

        {/* Card 2: RTO % Reduction */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full filter blur-xl" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">Current RTO Rate</span>
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-100 mt-2 font-mono">{MOCK_ADMIN_ANALYTICS.rtoPercentage}</h3>
          <p className="text-[11px] text-sky-400 font-semibold flex items-center mt-2">
            Standard: 5.4% ➔ Reduced to 0.59%
          </p>
        </div>

        {/* Card 3: AI Resolution Rate */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full filter blur-xl" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">AI Resolution Success</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Bot className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-100 mt-2 font-mono">{MOCK_ADMIN_ANALYTICS.aiResolutionSuccessRate}</h3>
          <p className="text-[11px] text-indigo-400 font-semibold flex items-center mt-2">
            Avg Customer Response: {MOCK_ADMIN_ANALYTICS.avgResponseTimeSec}s
          </p>
        </div>

        {/* Card 4: RTO Orders Avoided */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full filter blur-xl" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">RTO Orders Prevented</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-100 mt-2 font-mono">{MOCK_ADMIN_ANALYTICS.rtoOrdersAvoided} Orders</h3>
          <p className="text-[11px] text-purple-400 font-semibold flex items-center mt-2">
            Out of {MOCK_ADMIN_ANALYTICS.totalOrders.toLocaleString()} Total Orders
          </p>
        </div>

      </div>

      {/* Analytics Graphs */}
      <AnalyticsCharts />

      {/* Grid: Left Live Fleet Map | Right Executive Leaderboard + Notification Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Live Fleet Delivery Map */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100 flex items-center">
              <Truck className="w-4 h-4 mr-1.5 text-sky-400" />
              Active Delivery Fleet & Live Failure Map
            </h3>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              42 Active Executives Pinned
            </span>
          </div>

          <LiveMap 
            executiveLat={currentOrder.executive.currentLat} 
            executiveLng={currentOrder.executive.currentLng} 
            etaMinutes={currentOrder.etaMinutes} 
          />
        </div>

        {/* Right 1 Col: Executive Performance Leaderboard & AI Audit Logs */}
        <div className="space-y-6">
          
          {/* Executive Performance Table */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3">
            <h3 className="text-sm font-bold text-slate-100 flex items-center">
              <UserCheck className="w-4 h-4 mr-1.5 text-amber-400" />
              Top Executive Performance
            </h3>

            <div className="space-y-2">
              {MOCK_ADMIN_ANALYTICS.executiveLeaderboard.map((exec) => (
                <div key={exec.id} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-200">{exec.name}</h4>
                    <p className="text-[10px] text-slate-400">{exec.deliveries} Deliveries • Rating {exec.rating}★</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-bold">
                    {exec.rtoRate} RTO
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Live AI Communication & Notification Audit Logs */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-100 flex items-center">
                <Activity className="w-4 h-4 mr-1.5 text-indigo-400" />
                Live AI Communication Audit Log
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
              {notifications.map((notif) => (
                <div key={notif.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sky-400">{notif.title}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{notif.timestamp}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{notif.message}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
