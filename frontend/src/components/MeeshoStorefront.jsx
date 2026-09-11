import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RICH_CATALOG_PRODUCTS } from '../utils/catalogData';
import { ProductDetailModal } from './ProductDetailModal';
import { 
  Search, 
  ShoppingCart, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Heart, 
  Smartphone,
  Sparkles,
  ChevronRight,
  Check,
  Zap,
  Tag,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';

export const MeeshoStorefront = () => {
  const { addToCart, setIsCartDrawerOpen, cart } = useApp();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState(300000);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedItemMap, setAddedItemMap] = useState({});
  const [wishlistMap, setWishlistMap] = useState({});

  const MEESHO_CATEGORIES = [
    { id: 'all', name: 'All Categories' },
    { id: 'women_fashion', name: 'Women Ethnic' },
    { id: 'women_western', name: 'Women Western' },
    { id: 'men_fashion', name: 'Men' },
    { id: 'kids_fashion', name: 'Kids' },
    { id: 'home_furniture', name: 'Home & Kitchen' },
    { id: 'beauty', name: 'Beauty & Health' },
    { id: 'footwear', name: 'Bags & Footwear' },
    { id: 'mobiles', name: 'Electronics' },
  ];

  const BUDGET_STORES = [
    { label: 'Under ₹99 Store', maxPrice: 99, bg: 'bg-rose-500/20 border-rose-500/40 text-rose-300' },
    { label: 'Under ₹199 Store', maxPrice: 199, bg: 'bg-purple-500/20 border-purple-500/40 text-purple-300' },
    { label: 'Under ₹299 Store', maxPrice: 299, bg: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300' },
    { label: 'Under ₹499 Store', maxPrice: 499, bg: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' },
  ];

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedItemMap(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const toggleWishlist = (e, productId) => {
    e.stopPropagation();
    setWishlistMap(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  const filteredProducts = RICH_CATALOG_PRODUCTS.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (p.price > maxPriceFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }
    return true;
  });

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      
      {/* 1. Meesho Magenta Header Bar */}
      <div className="glass-card p-4 rounded-3xl border border-[#f43397]/40 bg-gradient-to-r from-[#9c27b0]/30 via-slate-950 to-[#f43397]/20 shadow-2xl space-y-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Meesho Brand Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#f43397] to-[#9c27b0] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-[#f43397]/30">
              m
            </div>
            <div>
              <h2 className="text-xl font-black text-white font-['Outfit'] tracking-tight flex items-center">
                meesho
                <span className="ml-2 px-2 py-0.5 rounded-full bg-[#f43397]/20 text-[#f43397] font-bold text-[10px] border border-[#f43397]/40">
                  SMARTDELIVER
                </span>
              </h2>
              <p className="text-[10px] text-slate-300 font-medium">Lowest Prices • Best Quality • Free Delivery</p>
            </div>
          </div>

          {/* Search Input Bar (Meesho Style) */}
          <div className="flex-1 max-w-xl relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try Saree, Kurti, iPhone, Shoes, Watch or Product Name..."
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#f43397]"
            />
          </div>

          {/* Cart Quick Trigger */}
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#f43397] to-[#9c27b0] text-white font-bold text-xs shadow-lg shadow-[#f43397]/25 flex items-center space-x-2 shrink-0"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>My Cart</span>
            {cartTotalItems > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-white text-[#f43397] font-black text-[10px]">
                {cartTotalItems}
              </span>
            )}
          </button>

        </div>

        {/* 2. Meesho Navigation Categories Rail */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center space-x-1 overflow-x-auto scrollbar-none">
          {MEESHO_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setMaxPriceFilter(300000);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#f43397] text-white shadow-md shadow-[#f43397]/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

      </div>

      {/* 3. Meesho Hero Banner & Value Proposition Strip */}
      <div className="glass-card rounded-3xl overflow-hidden border border-[#f43397]/30 bg-gradient-to-r from-[#f43397]/20 via-slate-950 to-purple-950/40 p-6 sm:p-10 shadow-2xl relative">
        
        <div className="max-w-xl space-y-3 relative z-10">
          <span className="px-3 py-1 rounded-full bg-[#f43397]/30 text-rose-200 font-black text-xs uppercase tracking-wider border border-[#f43397]/40">
            MEESHO MEGA SAVINGS SALE ⚡
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight font-['Outfit']">
            Lowest Prices, <br /><span className="text-[#f43397]">Best Quality Shopping</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Over 50 Lakh+ products at wholesale prices. Powered by SmartDeliver 10-min ultra-fast courier dispatch.
          </p>

          {/* Value Propositions */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-white font-bold">
            <div className="flex items-center space-x-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
              <Truck className="w-4 h-4 text-[#f43397]" />
              <span>Free Delivery</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Cash on Delivery</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
              <RotateCcw className="w-4 h-4 text-sky-400" />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Meesho Budget Stores Pills */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-white flex items-center">
          <Tag className="w-4 h-4 mr-2 text-[#f43397]" />
          Budget Store Filters
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BUDGET_STORES.map(store => (
            <button
              key={store.label}
              onClick={() => setMaxPriceFilter(store.maxPrice)}
              className={`p-3 rounded-2xl border text-center text-xs font-black transition-all shadow-md ${
                maxPriceFilter === store.maxPrice ? store.bg + ' ring-2 ring-[#f43397]' : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
            >
              {store.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Meesho Product Feed Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-white font-['Outfit']">
            Products For You ({filteredProducts.length} Items)
          </h3>
          {maxPriceFilter < 300000 && (
            <button
              onClick={() => setMaxPriceFilter(300000)}
              className="text-xs text-[#f43397] font-bold hover:underline"
            >
              Clear Price Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map(product => {
            const isAdded = addedItemMap[product.id];
            const isWishlisted = wishlistMap[product.id];

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-[#f43397]/50 transition-all cursor-pointer shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Image Box */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-3 bg-slate-950">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    
                    {/* Free Delivery Pink Tag */}
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#f43397] text-white font-extrabold text-[10px]">
                      Free Delivery
                    </span>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(e, product.id)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-slate-950/70 text-white backdrop-blur-md"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`} />
                    </button>
                  </div>

                  <span className="text-[10px] font-extrabold text-[#f43397] uppercase tracking-wider block">{product.brand}</span>
                  <h4 className="text-sm font-bold text-slate-100 line-clamp-1 group-hover:text-rose-300 transition-colors mt-0.5">
                    {product.name}
                  </h4>

                  {/* Supplier Rating */}
                  <div className="flex items-center space-x-1.5 mt-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-bold flex items-center">
                      {product.rating} <Star className="w-3 h-3 fill-white ml-1" />
                    </span>
                    <span className="text-[10px] text-slate-400">({product.reviewsCount} Ratings)</span>
                  </div>
                </div>

                {/* Price & Add to Cart */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-base font-black text-white font-mono">₹{product.price.toLocaleString()}</span>
                      <span className="text-xs text-slate-500 line-through font-mono">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-[10px] text-[#f43397] font-bold block">{product.discount}% OFF</span>
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                      isAdded 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-gradient-to-r from-[#f43397] to-[#9c27b0] hover:opacity-90 text-white'
                    }`}
                  >
                    {isAdded ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShoppingCart className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

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
