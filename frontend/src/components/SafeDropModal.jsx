import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, MapPin, Camera, X, Check, Upload, Lock, Image as ImageIcon } from 'lucide-react';

export const SafeDropModal = () => {
  const { isSafeDropModalOpen, setIsSafeDropModalOpen, currentOrder, handleCustomerConfirmSafeDrop } = useApp();
  const [dropLocationType, setDropLocationType] = useState('security');
  const [customInstructions, setCustomInstructions] = useState('Leave with apartment security guard Mr. Ramesh (Gate 2)');
  const [photoPreview, setPhotoPreview] = useState('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600');
  const [isSaved, setIsSaved] = useState(false);
  
  // File input ref for native file picker
  const fileInputRef = useRef(null);

  if (!isSafeDropModalOpen) return null;

  // Handle local image file upload selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhotoPreview(imageUrl);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSave = () => {
    handleCustomerConfirmSafeDrop({
      label: dropLocationType === 'security' ? 'Security Desk Gate 2' : 'Locker Box #14',
      instructions: customInstructions,
      photoUrl: photoPreview
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      setIsSafeDropModalOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Hidden File Input for Native Image Picker */}
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Safe Drop Location & Photo Proof</h3>
              <p className="text-[11px] text-slate-400">Zero-Contact Contactless Delivery</p>
            </div>
          </div>
          <button 
            onClick={() => setIsSafeDropModalOpen(false)}
            className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-4 my-4 text-xs">
          <div>
            <label className="block text-slate-400 mb-1.5 font-medium">Select Safe Location Type:</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDropLocationType('security')}
                className={`p-3 rounded-xl border text-left flex items-center space-x-2 transition-all ${
                  dropLocationType === 'security' 
                    ? 'bg-sky-500/10 border-sky-500 text-sky-300 font-bold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Security Desk Gate</span>
              </button>

              <button
                type="button"
                onClick={() => setDropLocationType('locker')}
                className={`p-3 rounded-xl border text-left flex items-center space-x-2 transition-all ${
                  dropLocationType === 'locker' 
                    ? 'bg-sky-500/10 border-sky-500 text-sky-300 font-bold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <Lock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Parcel Locker Box</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">Delivery Notes for Executive:</label>
            <textarea
              rows={2}
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Interactive Photo Upload Box */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-slate-400 font-medium">Photo Proof of Safe Location:</label>
              <button
                type="button"
                onClick={triggerFileInput}
                className="text-[11px] font-bold text-sky-400 hover:text-sky-300 flex items-center space-x-1"
              >
                <Upload className="w-3 h-3" />
                <span>Browse File</span>
              </button>
            </div>

            <div 
              onClick={triggerFileInput}
              className="relative rounded-xl overflow-hidden border-2 border-dashed border-sky-500/40 hover:border-sky-400 h-36 group cursor-pointer bg-slate-950 transition-all"
            >
              <img src={photoPreview} alt="Safe Location Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              
              <div className="absolute inset-0 bg-slate-950/70 opacity-90 group-hover:opacity-100 flex flex-col items-center justify-center space-y-1.5 transition-opacity p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                  <Camera className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-xs font-bold text-white flex items-center">
                  <Upload className="w-3.5 h-3.5 mr-1 text-sky-400" /> Click to Upload Photo from Device
                </span>
                <span className="text-[10px] text-slate-400">Supports JPG, PNG, WEBP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800">
          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-all ${
              isSaved 
                ? 'bg-emerald-600 text-white' 
                : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 text-white shadow-sky-500/20'
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4" />
                <span>Safe Drop & Photo Proof Confirmed!</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Confirm Safe Drop & Photo Instructions</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
