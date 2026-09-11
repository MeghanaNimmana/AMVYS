import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PhoneCall, PhoneOff, Mic, Volume2, Bot, CheckCircle2, ShieldCheck, MapPin, Clock, UserCheck } from 'lucide-react';
import { LANGUAGES } from '../utils/mockData';

export const VoiceCallModal = () => {
  const { 
    isAiCallModalOpen, 
    setIsAiCallModalOpen, 
    selectedLang, 
    setSelectedLang,
    currentOrder,
    handleCustomerConfirmSafeDrop,
    handleTriggerEmergency
  } = useApp();

  const [callState, setCallState] = useState('ringing'); // 'ringing' | 'connected' | 'ended'
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [selectedResponse, setSelectedResponse] = useState(null);

  // Script text by language
  const DIALOGUES = {
    en: [
      "Hello Ananya, this is SmartDeliver AI calling on behalf of your delivery partner Rajesh. We noticed you couldn't pick up the phone. Are you available for delivery now?",
      "Thank you! Would you like us to place your parcel at your designated Safe Drop location (Security Locker #14), or reschedule for later?"
    ],
    hi: [
      "नमस्ते अनन्या, यह स्मार्ट-डिलीवरी AI बोल रहा है। आपके डिलीवरी पार्टनर राजेश आपसे संपर्क नहीं कर पाए। क्या आप अभी घर पर उपलब्ध हैं?",
      "धन्यवाद! क्या हम आपका पार्सल सुरक्षित स्थान (सुरक्षा लॉकर #14) पर रख दें या बाद में डिलीवरी करें?"
    ],
    te: [
      "నమస్కారం అనన్య, మీ డెలివరీ పార్ట్నర్ రాజేష్ కాల్ కి స్పందించలేదు. స్మార్ట్ డెలివరీ AI నుండి మాట్లాడేది. మీరు ఇప్పుడు అందుబాటులో ఉన్నారా?",
      "ధన్యవాదాలు! మీ పార్సల్‌ను సేఫ్ డ్రాప్ (సెక్యూరిటీ లాకర్ #14) వద్ద ఉంచమంటారా?"
    ],
    ta: [
      "வணக்கம் அனன்யா, ஸ்மார்ட் டெலிவரி AI பேசுகிறது. உங்கள் டெலிவரி பார்ட்னர் ராஜேஷ் உங்களை தொடர்புகொள்ள முடியவில்லை. இப்போது பெற முடியுமா?",
      "நன்றி! உங்கள் பார்சலை பாதுகாப்பான இடத்தில் (பாதுகாப்பு லாக்கர் #14) வைக்கலாமா?"
    ]
  };

  const script = DIALOGUES[selectedLang] || DIALOGUES.en;

  useEffect(() => {
    if (isAiCallModalOpen) {
      setCallState('ringing');
      setCurrentDialogueIndex(0);
      setSelectedResponse(null);

      const ringTimer = setTimeout(() => {
        setCallState('connected');
        speakText(script[0]);
      }, 2500);

      return () => clearTimeout(ringTimer);
    }
  }, [isAiCallModalOpen, selectedLang]);

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isAiCallModalOpen) return null;

  const handleSelectOption = (optionKey, label) => {
    setSelectedResponse(label);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    if (optionKey === 'safedrop') {
      handleCustomerConfirmSafeDrop({ label: "Apartment Security Desk / Locker #14", photoVerified: true });
      speakText("Safe Drop confirmed! We have notified your delivery executive. Thank you!");
    } else if (optionKey === 'available') {
      speakText("Great! Delivery partner Rajesh will arrive in 10 minutes.");
    } else if (optionKey === 'emergency') {
      handleTriggerEmergency();
      speakText("Understood. We are dialing your alternate emergency contact now.");
    }

    setTimeout(() => {
      setCallState('ended');
    }, 3000);
  };

  const handleEndCall = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setCallState('ended');
    setIsAiCallModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Decorative Glowing Rings */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />

        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Bot className="w-4 h-4 animate-bounce" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">AI Voice Communication Bot</h3>
              <p className="text-[11px] text-emerald-400 font-semibold">Smart RTO Prevention Call</p>
            </div>
          </div>

          {/* Language Selector in Call */}
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2 py-1"
          >
            {LANGUAGES.map(l => (
              <option key={l.code} value={l.code}>{l.flag} {l.name}</option>
            ))}
          </select>
        </div>

        {/* Call Animation Status Body */}
        <div className="my-8 text-center">
          {callState === 'ringing' && (
            <div className="space-y-4">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-indigo-500/20 border-2 border-indigo-500/40 flex items-center justify-center mx-auto animate-ping" />
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/50">
                  <PhoneCall className="w-10 h-10 text-white animate-bounce" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-100">Calling Ananya Sharma...</h4>
              <p className="text-xs text-sky-400 font-medium">+91 91234 56789 • AI Auto Dispatch</p>
            </div>
          )}

          {callState === 'connected' && (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <Volume2 className="w-8 h-8 animate-pulse" />
              </div>

              {/* Live Audio Dialogue Bubble */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/30 text-left">
                <div className="flex items-center space-x-2 text-indigo-400 text-xs font-semibold mb-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Assistant Speaking ({selectedLang.toUpperCase()})</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">"{script[currentDialogueIndex]}"</p>
              </div>

              {/* Customer Voice Response Interactive Buttons */}
              <div className="space-y-2 text-left pt-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Select Simulated Response:</p>

                <button
                  onClick={() => handleSelectOption('available', 'Yes, I am available now')}
                  className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-between transition-all"
                >
                  <span className="flex items-center">
                    <UserCheck className="w-4 h-4 mr-2 text-emerald-400" />
                    "Yes, I am available at home right now"
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </button>

                <button
                  onClick={() => handleSelectOption('safedrop', 'Leave at Safe Drop Location')}
                  className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-between transition-all"
                >
                  <span className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-2 text-sky-400" />
                    "Leave package at Safe Drop (Locker #14)"
                  </span>
                  <MapPin className="w-4 h-4 text-sky-400" />
                </button>

                <button
                  onClick={() => handleSelectOption('emergency', 'Call husband Rohan (Alternate Number)')}
                  className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-between transition-all"
                >
                  <span className="flex items-center">
                    <PhoneCall className="w-4 h-4 mr-2 text-amber-400" />
                    "Call alternate emergency contact"
                  </span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          )}

          {callState === 'ended' && (
            <div className="space-y-3 py-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-base font-bold text-slate-100">AI Call Completed</h4>
              <p className="text-xs text-slate-300">Customer Intent Recorded: <span className="text-emerald-400 font-semibold">{selectedResponse || 'Safe Drop Approved'}</span></p>
              <p className="text-[11px] text-slate-400">Delivery Executive Rajesh notified instantly on his terminal.</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 flex items-center">
            <Mic className="w-3 h-3 mr-1 text-emerald-400" /> Web Audio Engine Active
          </span>

          <button
            onClick={handleEndCall}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center space-x-1.5 shadow-lg shadow-rose-900/30 transition-all"
          >
            <PhoneOff className="w-3.5 h-3.5" />
            <span>End Call</span>
          </button>
        </div>

      </div>
    </div>
  );
};
