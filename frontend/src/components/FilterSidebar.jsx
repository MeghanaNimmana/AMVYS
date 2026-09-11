import React, { useState } from 'react';
import { MAIN_CATEGORIES, BRANDS, COLORS, SIZES, RAM_OPTIONS, STORAGE_OPTIONS } from '../utils/catalogData';
import { Filter, RotateCcw, Check, Star, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export const FilterSidebar = ({ filters, setFilters, onResetFilters }) => {
  const [brandSearch, setBrandSearch] = useState('');
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setCollapsedSections(prev => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

  const handleCategoryChange = (catId) => {
    setFilters(prev => ({ ...prev, category: catId }));
  };

  const handleBrandToggle = (brand) => {
    setFilters(prev => {
      const exists = prev.brands.includes(brand);
      return {
        ...prev,
        brands: exists ? prev.brands.filter(b => b !== brand) : [...prev.brands, brand]
      };
    });
  };

  const handleColorToggle = (color) => {
    setFilters(prev => {
      const exists = prev.colors.includes(color);
      return {
        ...prev,
        colors: exists ? prev.colors.filter(c => c !== color) : [...prev.colors, color]
      };
    });
  };

  const filteredBrands = BRANDS.filter(b => b.toLowerCase().includes(brandSearch.toLowerCase()));

  return (
    <div className="glass-card rounded-2xl p-4 border border-slate-800 space-y-5 shadow-xl text-xs overflow-y-auto max-h-[800px]">
      
      {/* Header Actions */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-sky-400" />
          <h3 className="font-extrabold text-slate-100 text-sm">Filters</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-[11px] font-bold text-sky-400 hover:text-sky-300 flex items-center space-x-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All</span>
        </button>
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-2">
        <div 
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between cursor-pointer font-bold text-slate-200 text-xs"
        >
          <span>Categories ({MAIN_CATEGORIES.length})</span>
          {collapsedSections.category ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </div>

        {!collapsedSections.category && (
          <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filters.category === 'all' 
                  ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              All Categories
            </button>
            {MAIN_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-all ${
                  filters.category === cat.id 
                    ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2. Brand Checkboxes */}
      <div className="space-y-2 pt-3 border-t border-slate-800">
        <div 
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between cursor-pointer font-bold text-slate-200 text-xs"
        >
          <span>Brands ({filters.brands.length} Selected)</span>
          {collapsedSections.brand ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </div>

        {!collapsedSections.brand && (
          <div className="space-y-2">
            <input
              type="text"
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
              placeholder="Search Brand..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-200 focus:outline-none focus:border-sky-500"
            />
            <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
              {filteredBrands.map(b => {
                const checked = filters.brands.includes(b);
                return (
                  <label key={b} className="flex items-center space-x-2 cursor-pointer text-[11px] text-slate-300 hover:text-white">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleBrandToggle(b)}
                      className="rounded bg-slate-950 border-slate-800 text-sky-500 focus:ring-0"
                    />
                    <span>{b}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3. Price Range Slider */}
      <div className="space-y-2 pt-3 border-t border-slate-800">
        <div className="flex justify-between font-bold text-slate-200 text-xs">
          <span>Max Price:</span>
          <span className="font-mono text-sky-400">₹{filters.maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="100"
          max="300000"
          step="1000"
          value={filters.maxPrice}
          onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
          className="w-full accent-sky-500 cursor-pointer"
        />
      </div>

      {/* 4. Minimum Customer Rating */}
      <div className="space-y-2 pt-3 border-t border-slate-800">
        <span className="font-bold text-slate-200 text-xs block">Minimum Rating:</span>
        <div className="grid grid-cols-3 gap-1.5">
          {[4, 3, 2].map(rating => (
            <button
              key={rating}
              onClick={() => setFilters(prev => ({ ...prev, minRating: prev.minRating === rating ? 0 : rating }))}
              className={`py-1 px-2 rounded-lg border font-bold flex items-center justify-center space-x-1 ${
                filters.minRating === rating 
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              <span>{rating}★</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </button>
          ))}
        </div>
      </div>

      {/* 5. Delivery Speed (SmartDeliver Express) */}
      <div className="pt-3 border-t border-slate-800">
        <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold text-xs">
          <input
            type="checkbox"
            checked={filters.smartDeliverOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, smartDeliverOnly: e.target.checked }))}
            className="rounded bg-slate-950 border-emerald-500 text-emerald-500"
          />
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>10-Min SmartDeliver Only</span>
        </label>
      </div>

    </div>
  );
};
