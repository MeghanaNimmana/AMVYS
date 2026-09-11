import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, X, Send, CheckCheck, ShieldCheck, PhoneCall, Clock, Bot, ExternalLink, Edit2, Check } from 'lucide-react';

export const WhatsAppModal = () => {
  const { 
    isWhatsAppModalOpen, 
    setIsWhatsAppModalOpen, 
    currentOrder, 
    selectedLang,
    handleCustomerConfirmSafeDrop,
    handleTriggerEmergency
  } = useApp();

  const [realPhoneNumber, setRealPhoneNumber] = useState('');
  const [showPhoneEditor, setShowPhoneEditor] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Olá Ananya! 📦 Your SmartDeliver partner Rajesh tried calling you for Order #${currentOrder.id} (${currentOrder.productName}). We noticed you declined the call. Please select an option below:`,
      time: '13:53 PM'
    }
  ]);

  const [inputMsg, setInputMsg] = useState('');

  if (!isWhatsAppModalOpen) return null;

  const handleSelectOption = (optionKey, labelText) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // User message
    const userMsg = { id: Date.now(), sender: 'user', text: labelText, time: timeNow };
    setMessages(prev => [...prev, userMsg]);

    // Bot Response
    setTimeout(() => {
      let botReply = "Thank you! Your response has been recorded. Partner Rajesh has been notified on his device.";

      if (optionKey === 'safedrop') {
        handleCustomerConfirmSafeDrop({ label: "Apartment Security Desk / Locker #14", photoVerified: true });
        botReply = "✅ Safe Drop confirmed! Delivery partner Rajesh will place your package at Apartment Security Desk / Locker #14 and upload a photo proof.";
      } else if (optionKey === 'reschedule') {
        botReply = "⏰ Reschedule requested! Your delivery slot has been shifted by +30 minutes.";
      } else if (optionKey === 'emergency') {
        handleTriggerEmergency();
        botReply = "📞 Emergency Mode activated! System is calling husband Rohan (+91 98888 77777).";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 600);
  };

  const handleSendCustom = () => {
    if (!inputMsg.trim()) return;
    handleSelectOption('custom', inputMsg);
    setInputMsg('');
  };

  // Target Phone Number for wa.me link (uses custom real number if entered by user)
  const targetPhone = realPhoneNumber.trim() 
    ? realPhoneNumber.replace(/[^0-9]/g, '') 
    : currentOrder.customer.phone.replace(/[^0-9]/g, '');

  const realWhatsAppUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(
    `Hi! This is SmartDeliver AI delivery partner Rajesh for Order #${currentOrder.id}. Please confirm your delivery availability or safe drop location.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel rounded-3xl border border-emerald-500/40 shadow-2xl overflow-hidden flex flex-col h-[620px]">
        
        {/* WhatsApp Official Green Header */}
        <div className="p-4 bg-[#075E54] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30">
              <MessageSquare className="w-5 h-5 fill-white text-[#075E54]" />
            </div>
            <div>
              <h3 className="text-sm font-bold flex items-center">
                SmartDeliver WhatsApp Bot
                <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-black uppercase">
                  Verified
                </span>
              </h3>
              <p className="text-[11px] text-emerald-100">
                To: {realPhoneNumber || currentOrder.customer.phone}
              </p>
            </div>
          </div>

          <button 
            onClick={() => setIsWhatsAppModalOpen(false)}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Phone Number Configuration Bar */}
        <div className="p-2.5 bg-[#128C7E]/20 border-b border-emerald-500/30 px-4 flex items-center justify-between text-xs text-emerald-300">
          <span className="font-semibold">Test on your real phone number?</span>
          <button
            onClick={() => setShowPhoneEditor(!showPhoneEditor)}
            className="px-2.5 py-1 rounded-lg bg-emerald-500/30 hover:bg-emerald-500/40 font-bold border border-emerald-500/40 flex items-center space-x-1"
          >
            <Edit2 className="w-3 h-3" />
            <span>{showPhoneEditor ? 'Close' : 'Set My Number'}</span>
          </button>
        </div>

        {/* Real Phone Number Input Box (If Toggled) */}
        {showPhoneEditor && (
          <div className="p-3 bg-[#111b21] border-b border-emerald-500/30 space-y-2 text-xs">
            <p className="text-slate-300">Enter your actual WhatsApp phone number with country code (e.g. <span className="text-emerald-400 font-mono">+91 9876543210</span>):</p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={realPhoneNumber}
                onChange={(e) => setRealPhoneNumber(e.target.value)}
                placeholder="+91 98765 43210"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-white font-mono text-xs focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => setShowPhoneEditor(false)}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold flex items-center space-x-1"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp Messages Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0b141a] bg-opacity-95">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-md relative ${
                msg.sender === 'user'
                  ? 'bg-[#005c4b] text-white rounded-tr-none'
                  : 'bg-[#202c33] text-slate-200 rounded-tl-none border border-slate-700/50'
              }`}>
                <p>{msg.text}</p>
                <div className="flex items-center justify-end space-x-1 mt-1 text-[10px] text-slate-400">
                  <span>{msg.time}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Interactive Option Buttons */}
        <div className="p-3 bg-[#111b21] border-t border-slate-800 space-y-2">
          <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Tap Simulated Action Button:</p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleSelectOption('safedrop', '🛡️ Leave at Safe Drop (Locker #14)')}
              className="p-2 rounded-xl bg-[#202c33] hover:bg-[#2a3942] border border-emerald-500/30 text-emerald-300 font-semibold text-left flex items-center space-x-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Safe Drop Locker</span>
            </button>

            <button
              onClick={() => handleSelectOption('reschedule', '⏰ Reschedule Delivery +30 Mins')}
              className="p-2 rounded-xl bg-[#202c33] hover:bg-[#2a3942] border border-sky-500/30 text-sky-300 font-semibold text-left flex items-center space-x-1.5"
            >
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Reschedule +30m</span>
            </button>

            <button
              onClick={() => handleSelectOption('emergency', '📞 Call Emergency Alternate Contact')}
              className="p-2 rounded-xl bg-[#202c33] hover:bg-[#2a3942] border border-amber-500/30 text-amber-300 font-semibold text-left flex items-center space-x-1.5 col-span-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Call Alternate Contact (Husband Rohan)</span>
            </button>
          </div>
        </div>

        {/* Bottom Input & Real WhatsApp Link Button */}
        <div className="p-3 bg-[#202c33] border-t border-slate-800 flex items-center space-x-2">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendCustom()}
            placeholder="Type WhatsApp message..."
            className="flex-1 bg-[#111b21] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
          />

          <button
            onClick={handleSendCustom}
            className="p-2 rounded-xl bg-[#00a884] text-slate-950 font-bold hover:bg-[#008f70] transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>

          <a
            href={realWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center space-x-1 shrink-0"
            title="Launch Official WhatsApp App"
          >
            <ExternalLink className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">WhatsApp App</span>
          </a>
        </div>

      </div>
    </div>
  );
};
