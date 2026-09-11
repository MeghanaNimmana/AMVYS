import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquareText, X, Send, ShieldCheck, PhoneCall, Clock, CheckCircle2, Phone, ExternalLink } from 'lucide-react';

export const SMSModal = () => {
  const { 
    isSmsModalOpen, 
    setIsSmsModalOpen, 
    currentOrder, 
    handleCustomerConfirmSafeDrop,
    handleTriggerEmergency
  } = useApp();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'system',
      text: `[SmartDeliver SMS] Hi Ananya, delivery partner Rajesh Kumar is outside with Order #${currentOrder.id} (${currentOrder.productName}). Reply 1 for Safe Drop, 2 to Reschedule +30 mins, 3 for Emergency Contact.`,
      time: '13:53 PM'
    }
  ]);

  const [inputMsg, setInputMsg] = useState('');

  if (!isSmsModalOpen) return null;

  const handleSelectOption = (optionKey, labelText) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // User SMS response
    const userMsg = { id: Date.now(), sender: 'user', text: labelText, time: timeNow };
    setMessages(prev => [...prev, userMsg]);

    // System SMS Auto-Reply
    setTimeout(() => {
      let smsReply = "[SmartDeliver SMS] Thank you! Your delivery preference has been updated.";

      if (optionKey === 'safedrop') {
        handleCustomerConfirmSafeDrop({ label: "Apartment Security Desk / Locker #14", photoVerified: true });
        smsReply = "[SmartDeliver SMS] Safe Drop Confirmed! Partner Rajesh will leave parcel at Security Desk / Locker #14 and text you photo proof.";
      } else if (optionKey === 'reschedule') {
        smsReply = "[SmartDeliver SMS] Reschedule confirmed! Delivery slot moved by +30 minutes.";
      } else if (optionKey === 'emergency') {
        handleTriggerEmergency();
        smsReply = "[SmartDeliver SMS] Emergency Mode! System calling alternate contact Rohan.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'system', text: smsReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 600);
  };

  const handleSendCustom = () => {
    if (!inputMsg.trim()) return;
    handleSelectOption('custom', inputMsg);
    setInputMsg('');
  };

  const phoneDigits = currentOrder.customer.phone.replace(/[^0-9]/g, '');
  const nativeSmsUrl = `sms:${phoneDigits}?body=${encodeURIComponent(
    `[SmartDeliver SMS] Order #${currentOrder.id}: Delivery partner Rajesh is outside.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel rounded-3xl border border-sky-500/40 shadow-2xl overflow-hidden flex flex-col h-[580px]">
        
        {/* SMS Standard Header */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <MessageSquareText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center">
                Normal SMS Messenger
                <span className="ml-2 px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-bold border border-sky-500/30">
                  Carrier SMS
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">To: {currentOrder.customer.phone}</p>
            </div>
          </div>

          <button 
            onClick={() => setIsSmsModalOpen(false)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SMS Conversation Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-md ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-tr-none'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                <p>{msg.text}</p>
                <div className="flex items-center justify-end space-x-1 mt-1 text-[10px] text-slate-400">
                  <span>{msg.time}</span>
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 1-Click SMS Response Buttons */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 space-y-2">
          <p className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Tap 1-Click SMS Response:</p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleSelectOption('safedrop', 'Reply 1: Safe Drop Locker')}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-sky-500/30 text-sky-300 font-bold text-left flex items-center space-x-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Reply 1: Safe Drop</span>
            </button>

            <button
              onClick={() => handleSelectOption('reschedule', 'Reply 2: Reschedule +30m')}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-indigo-500/30 text-indigo-300 font-bold text-left flex items-center space-x-1.5"
            >
              <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Reply 2: Reschedule</span>
            </button>

            <button
              onClick={() => handleSelectOption('emergency', 'Reply 3: Call Emergency Contact')}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-amber-500/30 text-amber-300 font-bold text-left flex items-center space-x-1.5 col-span-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Reply 3: Call Husband Rohan</span>
            </button>
          </div>
        </div>

        {/* Bottom SMS Input Bar & Native Phone App Link */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between space-x-2">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendCustom()}
            placeholder="Type normal SMS text..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
          />

          <button
            onClick={handleSendCustom}
            className="p-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>

          <a
            href={nativeSmsUrl}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-1 shrink-0"
            title="Open Phone SMS App"
          >
            <ExternalLink className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Phone App</span>
          </a>
        </div>

      </div>
    </div>
  );
};
