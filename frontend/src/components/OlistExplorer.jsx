import React, { useState } from 'react';
import { OLIST_CATEGORIES, OLIST_PRODUCTS } from '../utils/olistDataset';
import { useApp } from '../context/AppContext';
import { ShoppingCart, Star, Zap, MapPin, Globe, Check, Tag, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const OlistExplorer = ({ onProductClick }) => {
  const { addToCart } = useApp();
  const [selectedOlistCat, setSelectedOlistCat] = useState('all');
  const [addedItemMap, setAddedItemMap] = useState({});

  const filteredProducts = OLIST_PRODUCTS.filter(p => {
    return selectedOlistCat === 'all' || p.olist_category === selectedOlistCat;
  });

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      
      {/* Olist Dataset Hero Banner */}
      <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/60 via-teal-950/40 to-slate-950 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🇧🇷</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/40">
                OLIST BRAZILIAN DATASET INTEGRATED
              </span>
            </div>
            <h2 className="text-2xl font-black text-slate-100 font-['Outfit']">Olist Store Brazil Catalog</h2>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Real-world product catalog extracted from 100,000+ Brazilian e-commerce orders (São Paulo, Rio, Curitiba) mapped with high-resolution imagery & BRL currency.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Dataset Orders</span>
              <span className="text-lg font-black text-emerald-400 font-mono">100,000+</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-bold uppercase">Sellers Hub</span>
              <span className="text-lg font-black text-sky-400 font-mono">3,000+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="glass-card p-3 rounded-2xl border border-slate-800 flex items-center space-x-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setSelectedOlistCat('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            selectedOlistCat === 'all'
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
          }`}
        >
          🇧🇷 All Olist Categories
        </button>

        {OLIST_CATEGORIES.map(cat => (
          <button
            key={cat.ptName}
            onClick={() => setSelectedOlistCat(cat.ptName)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              selectedOlistCat === cat.ptName
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.enName}</span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map(product => {
          const isAdded = addedItemMap[product.id];

          return (
            <div
              key={product.id}
              onClick={() => onProductClick(product)}
              className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-slate-950">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold text-[10px]">
                    {product.priceBRL}
                  </span>

                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/90 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold flex items-center shadow-md">
                    <MapPin className="w-3 h-3 mr-1 text-emerald-400" />
                    {product.sellerLocation}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold text-sky-400 mb-1">
                  <span>{product.brand}</span>
                  <span className="text-slate-500 font-mono">ID: {product.product_id.substring(0, 8)}...</span>
                </div>

                <h4 className="text-sm font-bold text-slate-100 line-clamp-1 group-hover:text-emerald-300 transition-colors">
                  {product.name}
                </h4>

                <div className="flex items-center space-x-1 text-xs text-amber-400 font-semibold mt-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500 text-[10px]">({product.reviewsCount} Olist Reviews)</span>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-base font-black text-slate-100 font-mono">₹{product.price.toLocaleString()}</span>
                  <span className="text-[10px] text-emerald-400 font-bold block">SmartDeliver Express</span>
                </div>

                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className={`px-3 py-2 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md ${
                    isAdded ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
