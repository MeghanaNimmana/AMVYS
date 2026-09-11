import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, ArrowRight, CreditCard, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const CartDrawer = () => {
  const { cart, isCartDrawerOpen, setIsCartDrawerOpen, removeFromCart, updateCartQuantity, placeStoreOrder } = useApp();
  const [selectedPayment, setSelectedPayment] = useState('UPI / GPay');
  const [isOrdering, setIsOrdering] = useState(false);

  if (!isCartDrawerOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeShipping = subtotal > 499;

  const handleCheckout = () => {
    setIsOrdering(true);
    setTimeout(() => {
      placeStoreOrder(selectedPayment);
      setIsOrdering(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel border-l border-slate-800 shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">Your Shopping Cart</h3>
                <p className="text-xs text-slate-400">{cart.length} {cart.length === 1 ? 'Item' : 'Items'} Selected</p>
              </div>
            </div>

            <button 
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="p-3 bg-indigo-950/40 border-b border-indigo-500/20 px-5">
            <div className="flex items-center justify-between text-xs font-semibold text-indigo-300 mb-1">
              <span className="flex items-center">
                <Zap className="w-3.5 h-3.5 mr-1 text-amber-400" />
                {isFreeShipping ? 'Unlocked FREE 10-Min SmartDeliver Shipping!' : `Add ₹${499 - subtotal} for FREE Express Shipping`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / 499) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-950/40">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-sm font-semibold text-slate-400">Your cart is empty!</p>
                <p className="text-xs text-slate-500">Explore our organized categories to add items.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3 shadow-md">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover ring-1 ring-slate-700" />
                  
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-200 line-clamp-1">{item.name}</h4>
                    <p className="text-xs font-mono font-bold text-sky-400 mt-0.5">₹{(item.price * item.quantity).toLocaleString()}</p>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-100 px-1 font-mono">{item.quantity}</span>
                      <button 
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Checkout Section & Summary */}
          {cart.length > 0 && (
            <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-4">
              
              {/* Payment Method Selector */}
              <div>
                <label className="block text-slate-400 text-xs font-semibold mb-1.5">Select Payment Option:</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['UPI / GPay', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setSelectedPayment(method)}
                      className={`p-2 rounded-xl border font-semibold text-center transition-all ${
                        selectedPayment === method 
                          ? 'bg-sky-500/10 border-sky-500 text-sky-300' 
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Items Subtotal:</span>
                  <span className="font-mono text-slate-200">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>SmartDeliver RTO Defense Fee:</span>
                  <span className="font-mono text-emerald-400 font-semibold">FREE (100% Off)</span>
                </div>
                <div className="flex justify-between text-slate-100 font-bold pt-2 border-t border-slate-800 text-sm">
                  <span>Grand Total:</span>
                  <span className="font-mono text-sky-400 text-base">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isOrdering}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-emerald-500 hover:opacity-90 text-white font-bold text-xs shadow-xl shadow-sky-500/20 flex items-center justify-center space-x-2 transition-all"
              >
                {isOrdering ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>Assigning SmartDeliver Courier...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pay & Dispatch SmartDeliver Delivery ({selectedPayment})</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
