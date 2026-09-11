import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Storefront } from '../components/Storefront';
import { MeeshoStorefront } from '../components/MeeshoStorefront';
import { LiveMap } from '../components/LiveMap';
import { ExecutiveCard } from '../components/ExecutiveCard';
import { SafeDropModal } from '../components/SafeDropModal';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  QrCode, 
  CheckCircle2, 
  AlertTriangle,
  Clock,
  Zap,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const CustomerDashboard = () => {
  const { 
    currentOrder, 
    activeCustomerSubTab, 
    setActiveCustomerSubTab, 
    setIsSafeDropModalOpen,
    setIsAiChatOpen,
    handleCustomerConfirmSafeDrop
  } = useApp();

  const [activeThemeView, setActiveThemeView] = useState('meesho'); // 'meesho' | 'standard'

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      
      {/* Sub-Tab Switcher: Meesho Store vs Standard Store vs Delivery Tracking */}
      <div className="glass-card p-3 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        
        <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setActiveThemeView('meesho');
              setActiveCustomerSubTab('storefront');
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
              activeCustomerSubTab === 'storefront' && activeThemeView === 'meesho'
                ? 'bg-gradient-to-r from-[#f43397] to-[#9c27b0] text-white shadow-md shadow-[#f43397]/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="w-5 h-5 rounded-md bg-[#f43397] text-white flex items-center justify-center font-black text-xs">m</span>
            <span>Meesho Storefront</span>
          </button>

          <button
            onClick={() => {
              setActiveThemeView('standard');
              setActiveCustomerSubTab('storefront');
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
              activeCustomerSubTab === 'storefront' && activeThemeView === 'standard'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Standard Storefront</span>
          </button>

          <button
            onClick={() => setActiveCustomerSubTab('tracking')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
              activeCustomerSubTab === 'tracking'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Live Delivery Tracking ({currentOrder.id})</span>
          </button>
        </div>

        {/* Quick Action Badge */}
        <div className="hidden md:flex items-center space-x-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30 flex items-center">
            <Zap className="w-3.5 h-3.5 mr-1" />
            Live ETA: 12 Mins
          </span>
        </div>

      </div>

      {/* VIEW 1: STOREFRONT */}
      {activeCustomerSubTab === 'storefront' && (
        activeThemeView === 'meesho' ? <MeeshoStorefront /> : <Storefront />
      )}

      {/* VIEW 2: LIVE DELIVERY TRACKING */}
      {activeCustomerSubTab === 'tracking' && (
        <div className="space-y-6">
          
          {/* Active Order Banner */}
          <div className="glass-card p-5 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            <div className="flex items-center space-x-4">
              <img
                src={currentOrder.productImage}
                alt={currentOrder.productName}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-800 shadow-md"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold border border-sky-500/30">
                    {currentOrder.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">#{currentOrder.id}</span>
                </div>
                <h2 className="text-base font-black text-slate-100 font-['Outfit'] mt-1">
                  {currentOrder.productName}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Paid Amount: <span className="text-slate-200 font-bold font-mono">{currentOrder.productPrice}</span>
                </p>
              </div>
            </div>

            {/* OTP Verification Display Box */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center shrink-0">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Delivery Verification OTP</span>
              <span className="text-2xl font-black text-emerald-400 font-mono tracking-widest block mt-0.5">
                {currentOrder.otp}
              </span>
              <span className="text-[10px] text-slate-500 block">Share only with partner on arrival</span>
            </div>

          </div>

          {/* Grid Layout: Live Map & Executive Profile + Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Columns: Map & Timeline */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Live Map */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-slate-200 flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-sky-400" /> Live Delivery Route & Courier Location
                  </span>
                  <span className="text-emerald-400 font-bold">ETA: 12 Mins</span>
                </div>
                <LiveMap locationHistory={currentOrder.locationHistory} />
              </div>

              {/* Delivery Progress Timeline */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold text-slate-100 flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-sky-400" /> Delivery Progress Timeline
                </h3>

                <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                  {currentOrder.timeline.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5 relative z-10 text-xs">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        item.done 
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/30' 
                          : 'bg-slate-900 text-slate-600 border border-slate-800'
                      }`}>
                        {item.done ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>

                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold ${item.done ? 'text-slate-200' : 'text-slate-500'}`}>
                            {item.step}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 1 Column: Executive Card & Safe Drop Pin Trigger */}
            <div className="space-y-6">
              
              {/* Executive Profile Card */}
              <ExecutiveCard executive={currentOrder.executive} />

              {/* Safe Drop Trigger Card */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <h3 className="text-sm font-bold text-slate-100">Safe Drop Location</h3>
                </div>
                <p className="text-xs text-slate-400">
                  Busy or in a meeting? Pin your security desk gate or parcel locker so the partner leaves your package safely.
                </p>

                <button
                  onClick={() => setIsSafeDropModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 text-white font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center space-x-2 transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Configure Safe Drop & Photo Proof</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};
