import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Phone, MapPin, AlertTriangle, Clock, FileText, PhoneCall, Sparkles, Edit2, Check } from 'lucide-react';

export const CustomerCard = ({ customer, order }) => {
  const { handleTriggerEmergency } = useApp();

  const [customPhone, setCustomPhone] = useState(customer.phone);
  const [isEditingPhone, setIsEditingPhone] = useState(false);

  const isHighRisk = order?.aiRiskScore > 50;

  const handleSavePhone = () => {
    customer.phone = customPhone;
    setIsEditingPhone(false);
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 relative overflow-hidden shadow-xl">
      
      {/* Risk Badge Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100">{customer.name}</h3>
            {isEditingPhone ? (
              <div className="flex items-center space-x-1 mt-1">
                <input
                  type="text"
                  value={customPhone}
                  onChange={(e) => setCustomPhone(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-white rounded px-2 py-0.5 font-mono focus:outline-none focus:border-sky-500"
                />
                <button
                  onClick={handleSavePhone}
                  className="p-1 rounded bg-emerald-600 text-white"
                >
                  <Check className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <p className="text-[11px] text-slate-400 flex items-center space-x-1">
                <span>{customer.phone}</span>
                <button
                  onClick={() => setIsEditingPhone(true)}
                  className="text-sky-400 hover:underline ml-1 font-semibold"
                >
                  (Edit)
                </button>
              </p>
            )}
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full border text-xs font-bold flex items-center space-x-1.5 ${
          isHighRisk 
            ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' 
            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
        }`}>
          <AlertTriangle className={`w-3.5 h-3.5 ${isHighRisk ? 'animate-bounce' : ''}`} />
          <span>{isHighRisk ? `AI Risk: ${order.aiRiskScore}% Missed` : 'High Availability'}</span>
        </div>
      </div>

      {/* AI Intelligence Insight */}
      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 mb-4 text-xs">
        <div className="flex items-center space-x-1.5 text-indigo-300 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>AI Behavioral Prediction & Insight</span>
        </div>
        <p className="text-slate-300 leading-relaxed">{order?.aiRiskReason}</p>
        <div className="mt-2 pt-2 border-t border-indigo-500/10 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">Suggested Action:</span>
          <span className="text-sky-300 font-medium">{order?.suggestedAction}</span>
        </div>
      </div>

      {/* Detailed Customer Metadata */}
      <div className="space-y-2.5 text-xs">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
          <span className="text-slate-400 flex items-center">
            <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            Alternate Contact:
          </span>
          <span className="text-slate-200 font-medium">{customer.altPhone}</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
          <span className="text-slate-400 flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
            Preferred Time Slot:
          </span>
          <span className="text-slate-200 font-medium">{customer.preferredTimeSlot}</span>
        </div>

        <div className="flex items-start justify-between p-2 rounded-lg bg-slate-900/50">
          <span className="text-slate-400 flex items-center mt-0.5">
            <FileText className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
            Delivery Note:
          </span>
          <span className="text-slate-200 font-medium text-right max-w-[200px] truncate">{customer.deliveryInstructions}</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
          <span className="text-slate-400 flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
            Safe Drop Pinned:
          </span>
          <span className="text-slate-200 font-medium">{customer.safeDropPin.label}</span>
        </div>
      </div>

      {/* Emergency Alternate Contact Call Action */}
      <div className="mt-4 pt-3 border-t border-slate-800">
        <button
          onClick={handleTriggerEmergency}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs shadow-md shadow-rose-900/30 flex items-center justify-center space-x-2 transition-all"
        >
          <PhoneCall className="w-4 h-4 animate-bounce" />
          <span>Call Alternate Emergency Contact (Rohan)</span>
        </button>
      </div>
    </div>
  );
};
