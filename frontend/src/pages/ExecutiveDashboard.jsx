import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CustomerCard } from '../components/CustomerCard';
import { LiveMap } from '../components/LiveMap';
import { 
  Phone, 
  MessageSquareText, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Navigation, 
  Bot, 
  Clock, 
  QrCode,
  Sparkles,
  PhoneCall,
  Send
} from 'lucide-react';

export const ExecutiveDashboard = () => {
  const { 
    currentOrder, 
    handleSimulateUnansweredCall, 
    handleVerifyOtp,
    setIsSmsModalOpen,
    setIsAiCallModalOpen,
    handleTriggerEmergency
  } = useApp();

  const [inputOtp, setInputOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSuccess, setOtpSuccess] = useState(false);

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setOtpError('');
    const res = handleVerifyOtp(inputOtp);
    if (res.success) {
      setOtpSuccess(true);
    } else {
      setOtpError(res.message);
    }
  };

  const isHighRisk = currentOrder.aiRiskScore > 50;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      
      {/* Top Banner: Active Route & Order Status */}
      <div className="glass-card p-5 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-sky-500/20">
            <Navigation className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-[10px] border border-emerald-500/30">
                ACTIVE COURIER TERMINAL
              </span>
              <span className="text-slate-400 text-xs font-mono">#{currentOrder.id}</span>
            </div>
            <h2 className="text-lg font-black text-slate-100 font-['Outfit'] mt-0.5">
              Delivering to {currentOrder.customer.name}
            </h2>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 shrink-0">
          <a
            href={`tel:${currentOrder.customer.phone}`}
            className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-bold border border-slate-800 flex items-center space-x-1.5 transition-all"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call Customer</span>
          </a>

          <button
            onClick={() => setIsSmsModalOpen(true)}
            className="px-3.5 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 text-xs font-bold border border-sky-500/30 flex items-center space-x-1.5 transition-all"
          >
            <MessageSquareText className="w-4 h-4 text-sky-400" />
            <span>Send Normal SMS</span>
          </button>
        </div>

      </div>

      {/* Main Grid: Map + Customer Details & Communication Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Live Navigation Map & OTP Verification */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Live Map */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-slate-200 flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-sky-400" /> Live Delivery Navigation Map
              </span>
              <span className="text-emerald-400 font-bold">ETA: 12 Mins</span>
            </div>
            <LiveMap locationHistory={currentOrder.locationHistory} />
          </div>

          {/* OTP Verification & Safe Drop Check */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <QrCode className="w-5 h-5 text-sky-400" />
                <h3 className="text-sm font-bold text-slate-100">Customer OTP Verification</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">Customer OTP Code: {currentOrder.otp}</span>
            </div>

            {otpSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Delivery Completed Successfully! Order Status Updated.</span>
              </div>
            ) : (
              <form onSubmit={handleOtpSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  maxLength={4}
                  value={inputOtp}
                  onChange={(e) => setInputOtp(e.target.value)}
                  placeholder="Enter 4-digit OTP"
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono tracking-widest text-slate-100 focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-md shadow-sky-500/20"
                >
                  Verify & Deliver
                </button>
              </form>
            )}
            {otpError && <p className="text-xs text-rose-400 font-semibold">{otpError}</p>}
          </div>

        </div>

        {/* Right 1 Col: Customer Details & 1-Click AI Communication Hub */}
        <div className="space-y-6">
          
          {/* Customer Card */}
          <CustomerCard customer={currentOrder.customer} order={currentOrder} />

          {/* 1-Click Communication Fallback Hub */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-200 flex items-center">
                <Bot className="w-4 h-4 mr-1.5 text-sky-400" /> Executive Communication Hub
              </span>
              {isHighRisk && (
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-extrabold text-[10px] animate-pulse">
                  HIGH RTO RISK
                </span>
              )}
            </div>

            <p className="text-xs text-slate-400">
              Customer not answering phone? Trigger 1-click AI communication fallbacks:
            </p>

            <div className="space-y-2">
              <button
                onClick={handleSimulateUnansweredCall}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-between transition-all"
              >
                <span className="flex items-center">
                  <Bot className="w-4 h-4 mr-2 text-amber-400" />
                  Simulate Customer Declined Call
                </span>
                <span className="text-[10px] uppercase font-mono text-amber-400">Trigger AI</span>
              </button>

              <button
                onClick={() => setIsSmsModalOpen(true)}
                className="w-full py-2.5 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold flex items-center justify-between transition-all"
              >
                <span className="flex items-center">
                  <MessageSquareText className="w-4 h-4 mr-2 text-sky-400" />
                  Send Normal Carrier SMS
                </span>
                <span className="text-[10px] uppercase font-mono text-sky-400">SMS</span>
              </button>

              <button
                onClick={() => setIsAiCallModalOpen(true)}
                className="w-full py-2.5 px-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold flex items-center justify-between transition-all"
              >
                <span className="flex items-center">
                  <PhoneCall className="w-4 h-4 mr-2 text-indigo-400" />
                  Launch Multi-Lingual AI Voice Bot
                </span>
                <span className="text-[10px] uppercase font-mono text-indigo-400">Voice Bot</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
