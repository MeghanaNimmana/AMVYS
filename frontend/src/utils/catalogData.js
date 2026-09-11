// Fully Organized Production Product Catalog Dataset with HD Category Images

export const MAIN_CATEGORIES = [
  { id: 'mobiles', name: 'Mobiles & Accessories', icon: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400' },
  { id: 'laptops', name: 'Laptops & Computers', icon: '💻', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400' },
  { id: 'electronics', name: 'Electronics & Audio', icon: '🎧', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
  { id: 'tvs', name: 'TVs & Entertainment', icon: '📺', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400' },
  { id: 'home_appliances', name: 'Home Appliances', icon: '🧊', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400' },
  { id: 'kitchen_appliances', name: 'Kitchen Appliances', icon: '🍳', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400' },
  { id: 'women_fashion', name: 'Women\'s Fashion', icon: '💃', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400' },
  { id: 'men_fashion', name: 'Men\'s Fashion', icon: '👔', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=400' },
  { id: 'kids_fashion', name: 'Kids Fashion', icon: '🧸', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=400' },
  { id: 'footwear', name: 'Footwear & Sneakers', icon: '👟', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400' },
  { id: 'watches', name: 'Luxury Watches', icon: '⌚', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  { id: 'beauty', name: 'Beauty & Skincare', icon: '✨', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400' },
  { id: 'health', name: 'Health & Wellness', icon: '💊', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400' },
  { id: 'grocery', name: 'Grocery & Staples', icon: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400' },
  { id: 'dairy_bakery', name: 'Dairy & Milk', icon: '🥛', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400' },
  { id: 'home_furniture', name: 'Home & Furniture', icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' }
];

export const BRANDS = [
  'Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'Lenovo', 'OnePlus', 'Xiaomi', 'Realme', 
  'Nike', 'Adidas', 'Puma', 'Levi\'s', 'Titan', 'Fastrack', 'Boat', 'JBL', 'Philips', 
  'LG', 'Whirlpool', 'Prestige', 'Milton', 'Himalaya', 'Dove', 'Nivea', 'Mamaearth', 
  'Lakme', 'L\'Oréal', 'Britannia', 'Amul', 'Tata', 'Fortune'
];

export const COLORS = ['Black', 'White', 'Silver', 'Space Gray', 'Midnight Blue', 'Crimson Red', 'Emerald Green', 'Rose Gold', 'Gold'];
export const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '7 UK', '8 UK', '9 UK', '10 UK'];
export const RAM_OPTIONS = ['4 GB', '8 GB', '12 GB', '16 GB', '32 GB'];
export const STORAGE_OPTIONS = ['128 GB', '256 GB', '512 GB', '1 TB'];

// Master Organised Product Dataset - Explicitly Grouped by Category ID
export const RICH_CATALOG_PRODUCTS = [
  // ================= 1. MOBILES & ACCESSORIES =================
  {
    id: 'mob-101',
    name: 'Apple iPhone 15 Pro Max (256GB, Natural Titanium)',
    brand: 'Apple',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 149900,
    originalPrice: 159900,
    discount: 6,
    rating: 4.9,
    reviewsCount: 3420,
    description: 'A17 Pro chip, Titanium design, 48MP main camera, 5x Telephoto optical zoom.',
    stock: 42,
    sku: 'AAPL-IP15PM-256',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    colors: ['Natural Titanium', 'Black Titanium', 'Blue Titanium'],
    ram: '8 GB',
    storage: '256 GB',
    deliveryTime: '10 Mins Delivery',
    seller: 'Apple Store India',
    warranty: '1 Year AppleCare',
    gender: 'Unisex',
    tag: 'Flagship'
  },
  {
    id: 'mob-102',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 512GB Storage)',
    brand: 'Samsung',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 129999,
    originalPrice: 139999,
    discount: 7,
    rating: 4.8,
    reviewsCount: 2890,
    description: 'Galaxy AI powered, Titanium frame, 200MP camera, built-in S Pen stylus.',
    stock: 58,
    sku: 'SAMS-S24U-512',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    colors: ['Titanium Gray', 'Titanium Black'],
    ram: '12 GB',
    storage: '512 GB',
    deliveryTime: '10 Mins Delivery',
    seller: 'Samsung Official',
    warranty: '1 Year Brand Warranty',
    tag: 'Galaxy AI'
  },
  {
    id: 'mob-103',
    name: 'OnePlus 12 5G (16GB RAM, 512GB, Silky Black)',
    brand: 'OnePlus',
    category: 'mobiles',
    subcategory: 'Smartphones',
    price: 64999,
    originalPrice: 69999,
    discount: 7,
    rating: 4.7,
    reviewsCount: 1540,
    description: 'Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, 100W SUPERVOOC charging.',
    stock: 35,
    sku: 'OP-12-512',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600',
    colors: ['Silky Black', 'Flowy Emerald'],
    ram: '16 GB',
    storage: '512 GB',
    deliveryTime: '12 Mins Delivery',
    seller: 'OnePlus India',
    warranty: '1 Year Warranty',
    tag: 'Superfast'
  },

  // ================= 2. LAPTOPS & COMPUTERS =================
  {
    id: 'lap-201',
    name: 'Apple MacBook Air M3 15-inch (16GB RAM, 512GB SSD)',
    brand: 'Apple',
    category: 'laptops',
    subcategory: 'MacBooks',
    price: 134900,
    originalPrice: 144900,
    discount: 7,
    rating: 4.9,
    reviewsCount: 920,
    description: 'Incredibly thin design, M3 8-core CPU and 10-core GPU, Liquid Retina display.',
    stock: 20,
    sku: 'AAPL-MBA-M3-15',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600',
    colors: ['Midnight', 'Starlight', 'Space Gray'],
    ram: '16 GB',
    storage: '512 GB',
    deliveryTime: '2 Hours Express',
    seller: 'Apple Store',
    warranty: '1 Year Warranty',
    tag: 'Top Rated'
  },
  {
    id: 'lap-202',
    name: 'Dell XPS 15 Intel Core i9 (32GB RAM, 1TB SSD, RTX 4060)',
    brand: 'Dell',
    category: 'laptops',
    subcategory: 'Gaming Laptops',
    price: 249990,
    originalPrice: 279990,
    discount: 11,
    rating: 4.8,
    reviewsCount: 410,
    description: '15.6 inch 3.5K OLED touch display, 13th Gen Intel Core i9 processor.',
    stock: 12,
    sku: 'DELL-XPS15-I9',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600',
    colors: ['Platinum Silver'],
    ram: '32 GB',
    storage: '1 TB',
    deliveryTime: 'Same Day Delivery',
    seller: 'Dell Direct',
    warranty: '2 Years Support',
    tag: 'High Performance'
  },

  // ================= 3. ELECTRONICS & AUDIO =================
  {
    id: 'elec-301',
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    brand: 'Sony',
    category: 'electronics',
    subcategory: 'Headphones',
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    rating: 4.8,
    reviewsCount: 1240,
    description: 'Industry-leading ANC with two processors, 8 microphones, and 30-hour battery.',
    stock: 65,
    sku: 'SONY-WH1000XM5',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
    colors: ['Black', 'Silver'],
    deliveryTime: '10 Mins Delivery',
    seller: 'Sony Center',
    warranty: '1 Year Warranty',
    tag: 'Bestseller'
  },

  // ================= 4. TVS & ENTERTAINMENT =================
  {
    id: 'tv-401',
    name: 'Sony BRAVIA 65-inch 4K Ultra HD Smart OLED TV',
    brand: 'Sony',
    category: 'tvs',
    subcategory: 'OLED TVs',
    price: 189990,
    originalPrice: 229990,
    discount: 17,
    rating: 4.9,
    reviewsCount: 680,
    description: 'Cognitive Processor XR, Acoustic Surface Audio+, Dolby Vision & Atmos.',
    stock: 8,
    sku: 'SONY-TV-65OLED',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600',
    colors: ['Black'],
    deliveryTime: 'Same Day Delivery',
    seller: 'Sony Center',
    warranty: '3 Years Warranty',
    tag: 'Cinematic'
  },

  // ================= 5. WOMEN'S FASHION =================
  {
    id: 'wf-601',
    name: 'Royal Silk Anarkali Suit Set with Zari Dupatta',
    brand: 'Lakme',
    category: 'women_fashion',
    subcategory: 'Ethnic Wear',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.8,
    reviewsCount: 1420,
    description: 'Intricate gold embroidery on soft chanderi silk fabric with organza dupatta.',
    stock: 45,
    sku: 'ETHNIC-ANARKALI-R1',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Emerald Green', 'Royal Blue'],
    deliveryTime: '15 Mins Delivery',
    gender: 'Women',
    tag: 'Trending Ethnic'
  },

  // ================= 6. MEN'S FASHION =================
  {
    id: 'mf-701',
    name: 'Levi\'s Men\'s 511 Slim Fit Stretchable Jeans',
    brand: 'Levi\'s',
    category: 'men_fashion',
    subcategory: 'Jeans',
    price: 3499,
    originalPrice: 4599,
    discount: 24,
    rating: 4.7,
    reviewsCount: 1540,
    description: 'Modern slim fit with room to move, stretch denim with 5-pocket styling.',
    stock: 60,
    sku: 'LEVI-511-SLIM',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600',
    sizes: ['30', '32', '34', '36'],
    colors: ['Dark Indigo'],
    deliveryTime: 'Same Day Delivery',
    gender: 'Men',
    tag: 'Classic'
  },

  // ================= 7. FOOTWEAR =================
  {
    id: 'foot-801',
    name: 'Nike Air Max 270 Running Shoes',
    brand: 'Nike',
    category: 'footwear',
    subcategory: 'Sports Shoes',
    price: 12495,
    originalPrice: 14995,
    discount: 17,
    rating: 4.7,
    reviewsCount: 2100,
    description: 'Nike Air unit delivers unmatched 270-degree comfort underfoot.',
    stock: 40,
    sku: 'NIKE-AM270-RED',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
    sizes: ['7 UK', '8 UK', '9 UK', '10 UK'],
    colors: ['Crimson Red'],
    deliveryTime: '15 Mins Delivery',
    gender: 'Unisex',
    tag: 'Sneaker Deal'
  },

  // ================= 8. WATCHES =================
  {
    id: 'wat-901',
    name: 'Titan Automatics Skeleton Dial Stainless Steel Watch',
    brand: 'Titan',
    category: 'watches',
    subcategory: 'Analog Watches',
    price: 14995,
    originalPrice: 17995,
    discount: 17,
    rating: 4.8,
    reviewsCount: 940,
    description: 'Automatic self-winding mechanical movement with exhibition case back.',
    stock: 25,
    sku: 'TITAN-AUTO-SKEL',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    colors: ['Silver Blue'],
    deliveryTime: 'Same Day Delivery',
    gender: 'Men',
    tag: 'Automatic'
  },

  // ================= 9. BEAUTY =================
  {
    id: 'bty-1001',
    name: 'Mamaearth Vitamin C Face Serum for Radiant Glow (30ml)',
    brand: 'Mamaearth',
    category: 'beauty',
    subcategory: 'Skincare',
    price: 539,
    originalPrice: 599,
    discount: 10,
    rating: 4.6,
    reviewsCount: 5200,
    description: 'Infused with Vitamin C & Gotu Kola for skin illumination and hyperpigmentation.',
    stock: 120,
    sku: 'MAMA-VITC-30ML',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '10 Mins Delivery',
    tag: 'Dermat Tested'
  },

  // ================= 10. DAIRY & BAKERY =================
  {
    id: 'dry-1201',
    name: 'Amul Taaza Toned Milk (1 Litre Pack)',
    brand: 'Amul',
    category: 'dairy_bakery',
    subcategory: 'Milk & Cream',
    price: 54,
    originalPrice: 56,
    discount: 4,
    rating: 4.9,
    reviewsCount: 18900,
    description: 'Pasteurised toned milk with 3.0% fat and 8.5% SNF.',
    stock: 300,
    sku: 'AMUL-TAAZA-1L',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '8 Mins Quick Delivery',
    tag: 'Instant Fresh'
  }
];

export const HERO_SLIDERS = [
  {
    id: 'slide-1',
    title: 'SmartDeliver Mega Sale ⚡',
    subtitle: 'Up to 70% OFF on Top Brands + Guaranteed 10-Min Delivery',
    bgGradient: 'from-amber-600 via-rose-600 to-indigo-700',
    badge: 'FESTIVAL SPECIAL',
    cta: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'slide-2',
    title: 'Zero RTO Safe Drop Guarantee 🛡️',
    subtitle: 'Never miss a delivery again. Pin your security desk or parcel locker.',
    bgGradient: 'from-emerald-600 via-teal-600 to-sky-700',
    badge: 'PATENTED TECH',
    cta: 'Learn More',
    image: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&q=80&w=1200'
  }
];
