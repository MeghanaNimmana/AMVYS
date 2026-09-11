import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, Zap, ShieldCheck, ShoppingCart, Truck, Check, Sparkles, Heart } from 'lucide-react';

export const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart, setIsCartDrawerOpen } = useApp();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Default');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart({ ...product, color: selectedColor, size: selectedSize });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, color: selectedColor, size: selectedSize });
    setIsCartDrawerOpen(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-100 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-3">
            <div className="h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white font-extrabold text-xs shadow-md">
                {product.discount}% OFF
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center justify-between">
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-amber-400" />
                {product.deliveryTime}
              </span>
              <span className="text-[11px] text-slate-400">RTO Guarantee</span>
            </div>
          </div>

          {/* Right Column: Product Metadata & Buy Action */}
          <div className="space-y-4 text-xs">
            <div>
              <span className="text-sky-400 font-extrabold uppercase tracking-wider block text-[11px]">{product.brand}</span>
              <h2 className="text-lg font-bold text-slate-100 mt-0.5">{product.name}</h2>
              
              <div className="flex items-center space-x-2 mt-1.5">
                <span className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-bold border border-amber-500/20">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                </span>
                <span className="text-slate-400">({product.reviewsCount} verified reviews)</span>
                <span className="text-slate-500">• SKU: {product.sku}</span>
              </div>
            </div>

            {/* Price Banner */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-baseline space-x-3">
              <span className="text-2xl font-black text-slate-100 font-mono">₹{product.price.toLocaleString()}</span>
              <span className="text-sm text-slate-500 line-through font-mono">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-xs font-bold text-emerald-400">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">{product.description}</p>

            {/* Variants Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-slate-400 font-bold mb-1.5">Available Colors:</label>
                <div className="flex flex-wrap gap-1.5">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-all ${
                        selectedColor === color 
                          ? 'bg-sky-500/20 border-sky-500 text-sky-300 font-bold' 
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
              <button
                onClick={handleAdd}
                className={`py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md ${
                  isAdded ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 text-sky-400" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className="py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 text-white font-bold text-xs shadow-lg shadow-sky-500/20 flex items-center justify-center space-x-1.5 transition-all"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Buy Now with SmartDeliver</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
