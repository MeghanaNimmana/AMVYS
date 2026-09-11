import React, { useState } from 'react';
import { CATEGORIES_WITH_SUBCATS } from '../utils/shopProducts';
import { ChevronRight, Sparkles, Grid, Tag, ArrowRight } from 'lucide-react';

export const CategoryExplorer = ({ onSelectCategoryFilter }) => {
  const [activeCatId, setActiveCatId] = useState('popular');

  const activeCategory = CATEGORIES_WITH_SUBCATS.find(c => c.id === activeCatId) || CATEGORIES_WITH_SUBCATS[0];

  return (
    <div className="glass-card rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[620px]">
      
      {/* Left Vertical Category Navigation Sidebar */}
      <div className="w-full md:w-64 bg-slate-950/90 border-r border-slate-800 overflow-y-auto shrink-0 flex md:flex-col border-b md:border-b-0">
        <div className="p-3 border-b border-slate-800/80 hidden md:block bg-slate-900/50">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center">
            <Grid className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
            Categories Browser
          </span>
        </div>

        <div className="flex md:flex-col p-2 space-x-1 md:space-x-0 md:space-y-1 overflow-x-auto md:overflow-x-visible">
          {CATEGORIES_WITH_SUBCATS.map((cat) => {
            const isActive = cat.id === activeCatId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCatId(cat.id)}
                className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap shrink-0 md:shrink ${
                  isActive 
                    ? 'bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border border-sky-500/40 shadow-md' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">{cat.icon}</span>
                  <span className="truncate">{cat.name}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 hidden md:block transition-transform ${isActive ? 'rotate-90 text-sky-400' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Content Sub-Categories Grid Display */}
      <div className="flex-1 p-5 overflow-y-auto space-y-6 bg-slate-950/40">
        
        {/* Header of Active Selected Category */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{activeCategory.icon}</span>
            <div>
              <h3 className="text-base font-bold text-slate-100">{activeCategory.name}</h3>
              <p className="text-xs text-slate-400">Explore top curated sub-categories & collections</p>
            </div>
          </div>

          <button
            onClick={() => onSelectCategoryFilter('all')}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-semibold flex items-center space-x-1 border border-slate-700 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sub-Category Groups */}
        {activeCategory.subCategories.map((subGroup, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400 flex items-center">
              <Tag className="w-3.5 h-3.5 mr-1.5" />
              {subGroup.title}
            </h4>

            {/* Sub-Category Thumbnail Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {subGroup.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  onClick={() => onSelectCategoryFilter(item.categoryFilter)}
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 transition-all cursor-pointer group text-center space-y-2 shadow-md"
                >
                  <div className="w-full h-24 rounded-xl overflow-hidden bg-slate-950 relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2">
                      <span className="text-[10px] font-bold text-sky-300 flex items-center">
                        Shop Now <ChevronRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>

                  <h5 className="text-xs font-bold text-slate-200 line-clamp-1 group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};
