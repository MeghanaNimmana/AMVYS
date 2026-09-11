import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MAIN_CATEGORIES, RICH_CATALOG_PRODUCTS } from '../utils/catalogData';
import { FilterSidebar } from './FilterSidebar';
import { StorefrontHomePage } from './StorefrontHomePage';
import { ProductDetailModal } from './ProductDetailModal';
import { 
  Search, 
  ShoppingCart, 
  Star, 
  Zap, 
  Tag, 
  ChevronRight, 
  Check, 
  LayoutGrid, 
  List, 
  Home, 
  ArrowUpDown,
  Filter,
  RotateCcw
} from 'lucide-react';

export const Storefront = () => {
  const { addToCart, setIsCartDrawerOpen, cart } = useApp();
  
  // Clean Navigation View State: 'home' | 'catalog'
  const [currentView, setCurrentView] = useState('home');
  const [displayLayout, setDisplayLayout] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [addedItemMap, setAddedItemMap] = useState({});

  // Filter State
  const [filters, setFilters] = useState({
    category: 'all',
    brands: [],
    colors: [],
    sizes: [],
    maxPrice: 300000,
    minRating: 0,
    smartDeliverOnly: false
  });

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      brands: [],
      colors: [],
      sizes: [],
      maxPrice: 300000,
      minRating: 0,
      smartDeliverOnly: false
    });
    setSearchQuery('');
  };

  // Filter & Sort Engine
  const processedProducts = useMemo(() => {
    let result = RICH_CATALOG_PRODUCTS.filter(product => {
      // Category Match
      if (filters.category !== 'all' && product.category !== filters.category) return false;
      // Search Match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesDesc) return false;
      }
      // Brand Checkboxes
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;
      // Max Price Slider
      if (product.price > filters.maxPrice) return false;
      // Min Rating
      if (filters.minRating > 0 && product.rating < filters.minRating) return false;
      // SmartDeliver Only
      if (filters.smartDeliverOnly && !product.deliveryTime.includes('10 Mins')) return false;

      return true;
    });

    // Sort
    if (sortBy === 'price_low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [filters, searchQuery, sortBy]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleSelectCategoryFromHome = (catId) => {
    setFilters(prev => ({ ...prev, category: catId }));
    setCurrentView('catalog');
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      
      {/* Top Header Navigation Bar */}
      <div className="glass-card p-4 rounded-2xl border border-slate-800 shadow-xl space-y-4">
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Main View Mode Selector Pills (Clean & Simple) */}
          <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setCurrentView('home')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                currentView === 'home' 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Store Home</span>
            </button>

            <button
              onClick={() => setCurrentView('catalog')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                currentView === 'catalog' 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>All Products Catalog</span>
            </button>
          </div>

          {/* Search Bar & Cart Quick Button */}
          <div className="flex items-center space-x-2 flex-1 max-w-lg">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (currentView !== 'catalog') setCurrentView('catalog');
                }}
                placeholder="Search Apple, Samsung, Sony, Nike, Sarees..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
              />
            </div>

            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 text-white font-bold text-xs shadow-md shadow-sky-500/20 flex items-center space-x-1.5 transition-all shrink-0"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">My Cart</span>
              {cartTotalItems > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[10px]">
                  {cartTotalItems}
                </span>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* VIEW 1: HOME PAGE WITH HD CATEGORY CARDS */}
      {currentView === 'home' && (
        <StorefrontHomePage 
          onSelectCategory={handleSelectCategoryFromHome} 
          products={processedProducts}
          onProductClick={(p) => setSelectedProduct(p)}
        />
      )}

      {/* VIEW 2: CATALOG & MULTI-FACETED FILTERING */}
      {currentView === 'catalog' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column: Filter Sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <FilterSidebar 
              filters={filters} 
              setFilters={setFilters} 
              onResetFilters={handleResetFilters} 
            />
          </div>

          {/* Right Column: Controls Bar + Product Grid */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Catalog Controls Header */}
            <div className="glass-card p-3 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-100">Showing {processedProducts.length} Items</span>
                <span className="text-slate-500">|</span>
                <span className="text-sky-400 font-semibold uppercase">{filters.category}</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5 bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-slate-200 text-xs font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value="popularity" className="bg-slate-900">Sort: Popularity</option>
                    <option value="price_low" className="bg-slate-900">Price: Low to High</option>
                    <option value="price_high" className="bg-slate-900">Price: High to Low</option>
                    <option value="rating" className="bg-slate-900">Sort: Rating</option>
                  </select>
                </div>

                <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setDisplayLayout('grid')}
                    className={`p-1.5 rounded-lg ${displayLayout === 'grid' ? 'bg-sky-500/20 text-sky-300' : 'text-slate-500'}`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDisplayLayout('list')}
                    className={`p-1.5 rounded-lg ${displayLayout === 'list' ? 'bg-sky-500/20 text-sky-300' : 'text-slate-500'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Product Grid / List View */}
            {processedProducts.length === 0 ? (
              <div className="glass-card rounded-2xl p-12 text-center space-y-3 border border-slate-800">
                <Tag className="w-10 h-10 text-slate-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-300">No products match your selected filters.</h4>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 font-bold text-xs border border-sky-500/30"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={displayLayout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
                {processedProducts.map(product => {
                  const isAdded = addedItemMap[product.id];
                  
                  if (displayLayout === 'list') {
                    return (
                      <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-sky-500/40 transition-all cursor-pointer shadow-xl flex items-center space-x-4 group"
                      >
                        <img src={product.image} alt={product.name} className="w-24 h-24 rounded-xl object-cover ring-1 ring-slate-800" />
                        <div className="flex-1">
                          <span className="text-[10px] font-extrabold text-sky-400 uppercase">{product.brand}</span>
                          <h4 className="text-sm font-bold text-slate-100 group-hover:text-sky-300 transition-colors">{product.name}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{product.description}</p>
                          <div className="flex items-center space-x-3 mt-2 font-mono">
                            <span className="text-base font-black text-slate-100">₹{product.price.toLocaleString()}</span>
                            <span className="text-xs text-slate-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                            <span className="text-xs font-bold text-emerald-400">{product.discount}% OFF</span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs border border-slate-700"
                        >
                          {isAdded ? <Check className="w-4 h-4 text-emerald-400" /> : <ShoppingCart className="w-4 h-4 text-sky-400" />}
                        </button>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-sky-500/40 transition-all cursor-pointer shadow-xl flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-slate-950">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-[10px] font-bold">
                            {product.tag || `${product.discount}% OFF`}
                          </span>
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-500/90 text-white text-[10px] font-bold flex items-center shadow-md">
                            <Zap className="w-3 h-3 mr-1" />
                            {product.deliveryTime}
                          </span>
                        </div>

                        <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider block">{product.brand}</span>
                        <h4 className="text-sm font-bold text-slate-100 line-clamp-1 group-hover:text-sky-300 transition-colors mt-0.5">{product.name}</h4>
                        
                        <div className="flex items-center space-x-1 text-xs text-amber-400 font-semibold mt-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="text-base font-black text-slate-100 font-mono">₹{product.price.toLocaleString()}</span>
                          <span className="text-xs text-slate-500 line-through font-mono">₹{product.originalPrice.toLocaleString()}</span>
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
                              <ShoppingCart className="w-3.5 h-3.5 text-sky-400" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

    </div>
  );
};
