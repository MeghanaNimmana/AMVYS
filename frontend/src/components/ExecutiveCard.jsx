import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageSquareText, Bot, Star, Bike } from 'lucide-react';

export const ExecutiveCard = ({ executive }) => {
  const { handleSimulateUnansweredCall, setIsSmsModalOpen } = useApp();

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full filter blur-2xl pointer-events-none" />

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3.5">
          <img
            src={executive.photo}
            alt={executive.name}
            className="w-14 h-14 rounded-2xl object-cover ring-2 ring-sky-500/30 shadow-md"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-bold text-slate-100">{executive.name}</h3>
              <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>{executive.rating}</span>
              </span>
            </div>
            <p className="text-xs text-sky-400 font-medium flex items-center mt-0.5">
              <Bike className="w-3.5 h-3.5 mr-1" />
              {executive.vehicleType} ({executive.vehicleNo})
            </p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-ping" />
          {executive.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs">
        <div>
          <span className="text-slate-400 block text-[10px]">Deliveries</span>
          <span className="font-bold text-slate-200">{executive.deliveriesCompleted}+</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px]">Experience</span>
          <span className="font-bold text-slate-200">{executive.experienceYears} Years</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px]">Languages</span>
          <span className="font-bold text-slate-200 truncate block">{executive.languages.join(', ')}</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2">
        <a
          href={`tel:${executive.phone}`}
          className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold border border-slate-700 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call</span>
        </a>

        <button
          onClick={() => setIsSmsModalOpen(true)}
          className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 text-xs font-semibold border border-sky-500/30 transition-all"
        >
          <MessageSquareText className="w-3.5 h-3.5 text-sky-400" />
          <span>Send SMS</span>
        </button>

        <button
          onClick={handleSimulateUnansweredCall}
          className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-all col-span-2 sm:col-span-2"
        >
          <Bot className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Simulate Unanswered Call</span>
        </button>
      </div>
    </div>
  );
};
