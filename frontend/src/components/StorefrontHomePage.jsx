import React, { useState, useEffect } from 'react';
import { HERO_SLIDERS, MAIN_CATEGORIES, BRANDS } from '../utils/catalogData';
import { useApp } from '../context/AppContext';
import { 
  Zap, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Tag, 
  ShoppingCart,
  Check,
  Smartphone,
  Laptop,
  Headphones,
  ShoppingBag,
  Grid,
  ShieldCheck,
  Truck,
  RotateCcw,
  Clock,
  Heart,
  Sparkles,
  Flame,
  Award,
  ArrowRight
} from 'lucide-react';

export const StorefrontHomePage = ({ onSelectCategory, products, onProductClick }) => {
  const { addToCart } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [addedItemMap, setAddedItemMap] = useState({});
  const [wishlistMap, setWishlistMap] = useState({});
  const [activeBrandFilter, setActiveBrandFilter] = useState('All');

  // Flash Sale Timer Countdown (Hours, Mins, Secs)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDERS.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, []);

  const slide = HERO_SLIDERS[currentSlide];

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

  const filteredProducts = products.filter(p => {
    if (activeBrandFilter !== 'All' && p.brand !== activeBrandFilter) return false;
    return true;
  });

  const getProductsByCat = (catId) => filteredProducts.filter(p => p.category === catId);

  const mobProducts = getProductsByCat('mobiles');
  const lapProducts = getProductsByCat('laptops');
  const elecProducts = getProductsByCat('electronics');
  const womenProducts = getProductsByCat('women_fashion');
  const footProducts = getProductsByCat('footwear');
  const watchProducts = getProductsByCat('watches');

  return (
    <div className="space-y-10 animate-fade-in pb-16">
      
      {/* 1. Hero Promotional Banner Carousel */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-72 sm:h-88 md:h-96 group">
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-all duration-700`} />
        <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35" />

        <div className="relative z-10 h-full p-6 sm:p-12 flex flex-col justify-between max-w-2xl text-white">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-300" />
                {slide.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-xs flex items-center">
                <Zap className="w-3.5 h-3.5 mr-1" /> 10-Min SmartDeliver Guaranteed
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mt-4 leading-tight font-['Outfit'] drop-shadow-md">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/90 font-medium mt-2 leading-relaxed">
              {slide.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onSelectCategory('all')}
              className="px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-extrabold text-xs shadow-xl hover:bg-slate-100 transition-all flex items-center space-x-2 group/btn"
            >
              <span>{slide.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs text-white/80 font-medium hidden sm:inline">
              ⚡ 10,000+ Products Delivered Today
            </span>
          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <button 
          onClick={() => setCurrentSlide(prev => (prev === 0 ? HERO_SLIDERS.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/60 text-white hover:bg-slate-950/90 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button 
          onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDERS.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/60 text-white hover:bg-slate-950/90 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-4 right-6 z-20 flex items-center space-x-2">
          {HERO_SLIDERS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Platform Trust Badges Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass-card p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-100">10-Min SmartDeliver</h4>
            <p className="text-[10px] text-slate-400">Ultra-fast doorstep dispatch</p>
          </div>
        </div>

        <div className="glass-card p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-100">Zero RTO Safe Drop</h4>
            <p className="text-[10px] text-slate-400">Never miss your parcel</p>
          </div>
        </div>

        <div className="glass-card p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-100">7-Day Easy Replacement</h4>
            <p className="text-[10px] text-slate-400">100% genuine brand guarantee</p>
          </div>
        </div>

        <div className="glass-card p-3.5 rounded-2xl border border-slate-800 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-100">Official Brand Stores</h4>
            <p className="text-[10px] text-slate-400">Apple, Samsung, Nike, Sony</p>
          </div>
        </div>
      </div>

      {/* 3. Category Grid Cards with High Resolution Images */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-100 flex items-center font-['Outfit']">
            <Grid className="w-4.5 h-4.5 mr-2 text-sky-400" />
            Explore Categories
          </h2>
          <button 
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold text-sky-400 hover:underline flex items-center"
          >
            <span>View All Categories</span>
            <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>

        {/* Category Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {MAIN_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all cursor-pointer group shadow-xl flex flex-col justify-between"
            >
              <div className="h-28 relative overflow-hidden bg-slate-950">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-2 left-2 text-lg">{cat.icon}</span>
              </div>

              <div className="p-2.5 text-center">
                <h3 className="text-xs font-bold text-slate-100 truncate group-hover:text-sky-300 transition-colors">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Flash Deals Live Countdown Banner */}
      <div className="glass-card p-5 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/50 via-slate-950 to-indigo-950/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/30">
            <Flame className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/30">
                LIGHTNING DEALS
              </span>
              <span className="text-xs text-slate-300 font-semibold">Limited Stock Offers</span>
            </div>
            <h3 className="text-lg font-black text-slate-100 font-['Outfit'] mt-0.5">
              Flash Sale Ends In:
            </h3>
          </div>
        </div>

        {/* Live Timer Box */}
        <div className="flex items-center space-x-2 font-mono">
          <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-center min-w-[50px]">
            <span className="text-base font-black text-rose-400 block">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[9px] text-slate-400 block font-sans">HOURS</span>
          </div>
          <span className="text-rose-400 font-bold text-lg">:</span>
          <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-center min-w-[50px]">
            <span className="text-base font-black text-rose-400 block">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[9px] text-slate-400 block font-sans">MINS</span>
          </div>
          <span className="text-rose-400 font-bold text-lg">:</span>
          <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-center min-w-[50px]">
            <span className="text-base font-black text-rose-400 block">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[9px] text-slate-400 block font-sans">SECS</span>
          </div>
        </div>
      </div>

      {/* 5. Brand Filter Strip */}
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none p-1">
        <button
          onClick={() => setActiveBrandFilter('All')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeBrandFilter === 'All'
              ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          All Top Brands
        </button>

        {BRANDS.slice(0, 10).map((brand) => (
          <button
            key={brand}
            onClick={() => setActiveBrandFilter(brand)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeBrandFilter === brand
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* 6. MOBILES & SMARTPHONES SECTION */}
      {mobProducts.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-sky-400" />
              <h3 className="text-base font-extrabold text-slate-100 font-['Outfit']">📱 Mobiles & Smartphones Shelf</h3>
            </div>
            <button 
              onClick={() => onSelectCategory('mobiles')}
              className="text-xs font-bold text-sky-400 hover:underline flex items-center space-x-1"
            >
              <span>View All Phones</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mobProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onProductClick={onProductClick} 
                handleAddToCart={handleAddToCart} 
                isAdded={addedItemMap[product.id]}
                isWishlisted={wishlistMap[product.id]}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      )}

      {/* 7. LAPTOPS & COMPUTERS SECTION */}
      {lapProducts.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Laptop className="w-5 h-5 text-indigo-400" />
              <h3 className="text-base font-extrabold text-slate-100 font-['Outfit']">💻 Laptops & High-Performance Computers</h3>
            </div>
            <button 
              onClick={() => onSelectCategory('laptops')}
              className="text-xs font-bold text-sky-400 hover:underline flex items-center space-x-1"
            >
              <span>View All Laptops</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lapProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onProductClick={onProductClick} 
                handleAddToCart={handleAddToCart} 
                isAdded={addedItemMap[product.id]}
                isWishlisted={wishlistMap[product.id]}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      )}

      {/* 8. ELECTRONICS & AUDIO SECTION */}
      {elecProducts.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Headphones className="w-5 h-5 text-purple-400" />
              <h3 className="text-base font-extrabold text-slate-100 font-['Outfit']">🎧 Electronics & Premium Audio</h3>
            </div>
            <button 
              onClick={() => onSelectCategory('electronics')}
              className="text-xs font-bold text-sky-400 hover:underline flex items-center space-x-1"
            >
              <span>View All Electronics</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {elecProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onProductClick={onProductClick} 
                handleAddToCart={handleAddToCart} 
                isAdded={addedItemMap[product.id]}
                isWishlisted={wishlistMap[product.id]}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      )}

      {/* 9. WOMEN'S FASHION SECTION */}
      {womenProducts.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-rose-400" />
              <h3 className="text-base font-extrabold text-slate-100 font-['Outfit']">💃 Women's Fashion & Sarees</h3>
            </div>
            <button 
              onClick={() => onSelectCategory('women_fashion')}
              className="text-xs font-bold text-sky-400 hover:underline flex items-center space-x-1"
            >
              <span>View All Fashion</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {womenProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onProductClick={onProductClick} 
                handleAddToCart={handleAddToCart} 
                isAdded={addedItemMap[product.id]}
                isWishlisted={wishlistMap[product.id]}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

// Rich E-Commerce Product Card Component
const ProductCard = ({ product, onProductClick, handleAddToCart, isAdded, isWishlisted, toggleWishlist }) => (
  <div
    onClick={() => onProductClick(product)}
    className="glass-card rounded-2xl p-4 border border-slate-800 hover:border-sky-500/40 transition-all cursor-pointer shadow-xl flex flex-col justify-between group relative overflow-hidden"
  >
    <div>
      {/* Product Image Box */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-3 bg-slate-950">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-extrabold text-[10px] shadow-md">
          {product.discount}% OFF
        </span>

        {/* Wishlist Heart Toggle */}
        <button
          onClick={(e) => toggleWishlist(e, product.id)}
          className="absolute top-2 right-2 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition-colors"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`} />
        </button>

        {/* Delivery Speed Badge */}
        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-500/90 text-white text-[10px] font-bold flex items-center shadow-md">
          <Zap className="w-3 h-3 mr-1 text-amber-300" />
          {product.deliveryTime}
        </span>
      </div>

      <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider block">{product.brand}</span>
      <h4 className="text-sm font-bold text-slate-100 line-clamp-1 group-hover:text-sky-300 transition-colors mt-0.5">
        {product.name}
      </h4>
      
      <div className="flex items-center space-x-1 text-xs text-amber-400 font-semibold mt-1">
        <Star className="w-3.5 h-3.5 fill-amber-400" />
        <span>{product.rating}</span>
        <span className="text-slate-500 text-[10px]">({product.reviewsCount} reviews)</span>
      </div>
    </div>

    {/* Price & Add to Cart Action */}
    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
      <div className="flex items-baseline space-x-1.5">
        <span className="text-base font-black text-slate-100 font-mono">₹{product.price.toLocaleString()}</span>
        <span className="text-xs text-slate-500 line-through font-mono">₹{product.originalPrice.toLocaleString()}</span>
      </div>

      <button
        onClick={(e) => handleAddToCart(e, product)}
        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 ${
          isAdded 
            ? 'bg-emerald-600 text-white' 
            : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:opacity-90 text-white shadow-sky-500/20'
        }`}
      >
        {isAdded ? (
          <>
            <Check className="w-4 h-4" />
            <span>Added</span>
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </>
        )}
      </button>
    </div>
  </div>
);
