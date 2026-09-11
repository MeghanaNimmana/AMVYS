import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { CustomerDashboard } from './pages/CustomerDashboard';
import { ExecutiveDashboard } from './pages/ExecutiveDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { VoiceCallModal } from './components/VoiceCallModal';
import { SMSModal } from './components/SMSModal';
import { AIChatBot } from './components/AIChatBot';
import { SafeDropModal } from './components/SafeDropModal';
import { CartDrawer } from './components/CartDrawer';

const MainLayout = () => {
  const { activeRole } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeRole === 'customer' && <CustomerDashboard />}
        {activeRole === 'executive' && <ExecutiveDashboard />}
        {activeRole === 'admin' && <AdminDashboard />}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 SmartDeliver AI Systems. Enterprise RTO Prevention SaaS.</span>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-300 cursor-pointer">API Docs</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Audit</span>
            <span className="hover:text-slate-300 cursor-pointer">FastAPI Backend Status</span>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <VoiceCallModal />
      <SMSModal />
      <AIChatBot />
      <SafeDropModal />
      <CartDrawer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
