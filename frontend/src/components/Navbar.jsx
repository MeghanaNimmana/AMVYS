import React from 'react';
import { useApp } from '../context/AppContext';
import { LANGUAGES } from '../utils/mockData';
import { 
  Bot, 
  MapPin, 
  Globe, 
  Bell, 
  ShoppingCart, 
  UserCheck, 
  Bike, 
  ShieldCheck, 
  Search,
  ChevronDown,
  Sparkles,
  Zap
} from 'lucide-react';

export const Navbar = () => {
  const { 
    activeRole, 
    setActiveRole, 
    selectedLang, 
    setSelectedLang, 
    notifications, 
    cart, 
    setIsCartDrawerOpen,
    activeCustomerSubTab,
    setActiveCustomerSubTab,
    setIsAiChatOpen
  } = useApp();

  const unreadCount = notifications.filter(n => n.unread).length;
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      
      {/* Top Utility Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white text-[11px] py-1 px-4 flex items-center justify-between font-semibold">
        <div className="flex items-center space-x-2">
          <Zap className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>SmartDeliver AI E-Commerce Store • 10-Min Delivery & Zero-RTO Guarantee Active</span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <span className="flex items-center space-x-1 cursor-pointer hover:underline">
            <MapPin className="w-3 h-3" />
            <span>Deliver to: Bengaluru 560001</span>
          </span>
          <span>Helpdesk: 1800-SMART-AI</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Slogan */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveCustomerSubTab('storefront')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black shadow-lg shadow-sky-500/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-100 font-['Outfit'] tracking-tight flex items-center">
              SmartDeliver
              <span className="ml-1.5 px-1.5 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-[10px] font-bold border border-sky-500/30">
                STORE
              </span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium">AI-Powered Retail & Zero-RTO Delivery</p>
          </div>
        </div>

        {/* Role & Navigation Switcher Pills */}
        <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveRole('customer')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeRole === 'customer' 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Storefront & Customer</span>
          </button>

          <button
            onClick={() => setActiveRole('executive')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeRole === 'executive' 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bike className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Courier Terminal</span>
          </button>

          <button
            onClick={() => setActiveRole('admin')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeRole === 'admin' 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Admin SaaS</span>
          </button>
        </div>

        {/* Right Actions: Lang, AI Chat, Notifications, Cart */}
        <div className="flex items-center space-x-3">
          
          {/* Language Selector */}
          <div className="relative group">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold rounded-xl px-3 py-2 appearance-none cursor-pointer focus:outline-none focus:border-sky-500 pr-7"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-slate-900 text-white">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
            <Globe className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>

          {/* AI Assistant Chat Trigger */}
          <button
            onClick={() => setIsAiChatOpen(true)}
            className="p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-all flex items-center space-x-1 text-xs font-bold"
            title="Open AI Delivery Assistant"
          >
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="hidden md:inline">AI Help</span>
          </button>

          {/* Shopping Cart Drawer Trigger */}
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 text-white font-bold text-xs shadow-md shadow-sky-500/20 flex items-center space-x-1.5 transition-all relative"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[10px]">
                {cartItemCount}
              </span>
            )}
          </button>

        </div>

      </div>

    </header>
  );
};
