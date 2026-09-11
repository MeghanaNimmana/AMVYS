import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Bot, Send, X, User, Sparkles, MapPin, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

export const AIChatBot = () => {
  const { isAiChatOpen, setIsAiChatOpen, currentOrder, selectedLang } = useApp();
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello Ananya! I am your SmartDeliver AI Assistant. I see your order for ${currentOrder.productName} is currently out for delivery with partner Rajesh. How can I help you today?`
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');

  if (!isAiChatOpen) return null;

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');

    // AI Intelligence Response Generator
    setTimeout(() => {
      let aiReply = "I have updated your delivery preference. Partner Rajesh has been notified on his device.";
      
      const qLower = query.toLowerCase();
      if (qLower.includes('where') || qLower.includes('track') || qLower.includes('eta')) {
        aiReply = `Your order ${currentOrder.id} is currently 1.2 km away. Estimated arrival time is 14 minutes. Partner Rajesh Kumar is driving on Ather Electric Scooter (KA-01-EQ-9821).`;
      } else if (qLower.includes('reschedule') || qLower.includes('later') || qLower.includes('time')) {
        aiReply = `I can reschedule your delivery slot for 4:00 PM - 6:00 PM today or tomorrow morning. Would you like me to confirm this?`;
      } else if (qLower.includes('safe') || qLower.includes('gate') || qLower.includes('locker') || qLower.includes('leave')) {
        aiReply = `Safe drop option active! I have instructed Rajesh to leave package at Apartment Security Desk / Parcel Locker #14. You will receive a photo verification once delivered.`;
      } else if (qLower.includes('call') || qLower.includes('contact') || qLower.includes('executive')) {
        aiReply = `You can call Rajesh directly at +91 98765 43210 or use our 1-click WhatsApp connection button.`;
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiReply }]);
    }, 800);
  };

  const quickPrompts = [
    "Where is my order right now?",
    "Leave parcel at Safe Drop Location",
    "Reschedule delivery for later",
    "Call Delivery Executive"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-lg glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[580px]">
        
        {/* Header */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 p-0.5 shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-sky-400 animate-spin-slow" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center">
                SmartDeliver AI Assistant
                <span className="ml-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                  Online
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Multi-lingual LangChain RAG Powered</p>
            </div>
          </div>

          <button 
            onClick={() => setIsAiChatOpen(false)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-slate-800 text-sky-400 border border-slate-700'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-tr-none shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center space-x-2 overflow-x-auto">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-sky-300 border border-slate-700 whitespace-nowrap transition-all shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask AI anything about your delivery..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
