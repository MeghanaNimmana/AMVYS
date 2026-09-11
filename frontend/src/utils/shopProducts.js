// Enriched E-Commerce Categories & Sub-Categories Dataset (Meesho / Flipkart / Amazon style)

export const CATEGORIES_WITH_SUBCATS = [
  {
    id: 'popular',
    name: 'Popular Trends',
    icon: '🔥',
    subCategories: [
      {
        title: 'Trending in Fashion & Ethnic',
        items: [
          { name: 'Anarkali Suits', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=300', categoryFilter: 'women_ethnic' },
          { name: 'Designer Sarees', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=300', categoryFilter: 'women_ethnic' },
          { name: 'Handbags & Totes', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300', categoryFilter: 'jewellery_bags' },
          { name: 'Wireless Earbuds', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=300', categoryFilter: 'electronics' }
        ]
      },
      {
        title: 'Bestselling Footwear',
        items: [
          { name: 'Casual Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300', categoryFilter: 'footwear' },
          { name: 'Ethnic Juttis & Heels', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300', categoryFilter: 'footwear' }
        ]
      }
    ]
  },
  {
    id: 'women_ethnic',
    name: 'Women Ethnic',
    icon: '💃',
    subCategories: [
      {
        title: 'All Women Ethnic Wear',
        items: [
          { name: 'Cotton & Silk Kurtas', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=300', categoryFilter: 'women_ethnic' },
          { name: 'Designer Sarees', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=300', categoryFilter: 'women_ethnic' },
          { name: 'Lehenga Choli', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=300', categoryFilter: 'women_ethnic' },
          { name: 'Suits & Dress Material', image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=300', categoryFilter: 'women_ethnic' }
        ]
      }
    ]
  },
  {
    id: 'western_wear',
    name: 'Western Wear',
    icon: '👗',
    subCategories: [
      {
        title: 'Top Wear & Dresses',
        items: [
          { name: 'Floral Dresses', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=300', categoryFilter: 'western_wear' },
          { name: 'Tops & Tunics', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300', categoryFilter: 'western_wear' },
          { name: 'Jeans & Jeggings', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300', categoryFilter: 'western_wear' }
        ]
      }
    ]
  },
  {
    id: 'men',
    name: 'Men Fashion',
    icon: '👔',
    subCategories: [
      {
        title: 'Men Ethnic & Western',
        items: [
          { name: 'Kurta Sets & Jackets', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=300', categoryFilter: 'men' },
          { name: 'Casual & Formal Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=300', categoryFilter: 'men' },
          { name: 'Jeans & Trousers', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300', categoryFilter: 'men' }
        ]
      }
    ]
  },
  {
    id: 'jewellery_bags',
    name: 'Jewellery & Bags',
    icon: '👜',
    subCategories: [
      {
        title: 'Bags & Accessories',
        items: [
          { name: 'Fashion Jewellery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=300', categoryFilter: 'jewellery_bags' },
          { name: 'Handbags & Sling Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300', categoryFilter: 'jewellery_bags' },
          { name: 'Wallets & Clutches', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=300', categoryFilter: 'jewellery_bags' }
        ]
      }
    ]
  },
  {
    id: 'footwear',
    name: 'Footwear',
    icon: '👟',
    subCategories: [
      {
        title: 'Men & Women Footwear',
        items: [
          { name: 'Sports Shoes & Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300', categoryFilter: 'footwear' },
          { name: 'Heels & Sandals', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300', categoryFilter: 'footwear' }
        ]
      }
    ]
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '🎧',
    subCategories: [
      {
        title: 'Audio, Wearables & Laptops',
        items: [
          { name: 'Wireless Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300', categoryFilter: 'electronics' },
          { name: 'Smartwatches', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=300', categoryFilter: 'electronics' },
          { name: 'Laptops & MacBooks', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300', categoryFilter: 'electronics' }
        ]
      }
    ]
  },
  {
    id: 'groceries',
    name: 'Quick Groceries',
    icon: '⚡',
    subCategories: [
      {
        title: 'Daily Essentials & Fresh',
        items: [
          { name: 'Milk, Butter & Paneer', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=300', categoryFilter: 'groceries' },
          { name: 'Fresh Fruits & Veggies', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=300', categoryFilter: 'groceries' },
          { name: 'Coffee & Instant Food', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=300', categoryFilter: 'groceries' }
        ]
      }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Skincare',
    icon: '✨',
    subCategories: [
      {
        title: 'Makeup & Ayurvedic Care',
        items: [
          { name: 'Ayurvedic Skincare', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300', categoryFilter: 'beauty' }
        ]
      }
    ]
  }
];

export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'women_ethnic', name: 'Women Ethnic', icon: '💃' },
  { id: 'western_wear', name: 'Western Wear', icon: '👗' },
  { id: 'men', name: 'Men Fashion', icon: '👔' },
  { id: 'jewellery_bags', name: 'Jewellery & Bags', icon: '👜' },
  { id: 'footwear', name: 'Footwear', icon: '👟' },
  { id: 'electronics', name: 'Electronics', icon: '🎧' },
  { id: 'groceries', name: 'Blinkit Quick Groceries', icon: '⚡' },
  { id: 'beauty', name: 'Beauty & Personal Care', icon: '✨' },
];

export const SHOP_PRODUCTS = [
  // Women Ethnic
  {
    id: 'prod-601',
    name: 'Royal Silk Anarkali Suit Set with Dupatta',
    category: 'women_ethnic',
    price: 2499,
    originalPrice: 4999,
    rating: 4.8,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    tag: 'Trending Ethnic',
    deliveryTime: '15 Mins Delivery',
    inStock: true,
    description: 'Heavy embroidery silk blend Anarkali suit set with gold zari border.'
  },
  {
    id: 'prod-602',
    name: 'Kanjeevaram Soft Silk Saree with Blouse Piece',
    category: 'women_ethnic',
    price: 3299,
    originalPrice: 6500,
    rating: 4.9,
    reviewsCount: 2100,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
    tag: 'Weddings',
    deliveryTime: 'Same Day Delivery',
    inStock: true,
    description: 'Traditional rich woven pallu Kanjeevaram soft silk saree.'
  },
  {
    id: 'prod-603',
    name: 'Designer Floral Printed Lehenga Choli',
    category: 'women_ethnic',
    price: 4599,
    originalPrice: 8999,
    rating: 4.7,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=600',
    tag: 'Festive Special',
    deliveryTime: 'Same Day Delivery',
    inStock: true,
    description: 'Semi-stitched floral printed lehenga choli with net dupatta.'
  },

  // Western Wear
  {
    id: 'prod-701',
    name: 'Floral Print A-Line Midi Summer Dress',
    category: 'western_wear',
    price: 1299,
    originalPrice: 2499,
    rating: 4.6,
    reviewsCount: 950,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600',
    tag: 'Summer Pick',
    deliveryTime: '2 Hours Express',
    inStock: true,
    description: 'Breathable rayon fabric with square neck and flared hem.'
  },

  // Men Fashion
  {
    id: 'prod-801',
    name: 'Men Festive Cotton Silk Kurta Pajama Set',
    category: 'men',
    price: 1899,
    originalPrice: 3499,
    rating: 4.8,
    reviewsCount: 1100,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=600',
    tag: 'Men Ethnic',
    deliveryTime: '15 Mins Delivery',
    inStock: true,
    description: 'Elegant Mandarin collar cotton silk ethnic kurta set.'
  },

  // Jewellery & Bags
  {
    id: 'prod-901',
    name: 'Vegan Leather Tote Handbag with Sling',
    category: 'jewellery_bags',
    price: 1499,
    originalPrice: 2999,
    rating: 4.7,
    reviewsCount: 1840,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600',
    tag: 'Popular Bag',
    deliveryTime: '12 Mins Delivery',
    inStock: true,
    description: 'Spacious compartment tote bag with premium metal zip.'
  },

  // Electronics
  {
    id: 'prod-101',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    category: 'electronics',
    price: 29990,
    originalPrice: 34990,
    rating: 4.8,
    reviewsCount: 1240,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
    tag: 'Bestseller',
    deliveryTime: '10 Mins Delivery',
    inStock: true,
    description: 'Industry leading noise canceling with two processors and 8 microphones.'
  },
  {
    id: 'prod-102',
    name: 'Apple Watch Series 9 GPS 45mm',
    category: 'electronics',
    price: 41900,
    originalPrice: 44900,
    rating: 4.9,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600',
    tag: 'Trending',
    deliveryTime: 'Same Day Delivery',
    inStock: true,
    description: 'S9 SiP, double tap gesture, brighter display, and faster Siri.'
  },

  // Footwear
  {
    id: 'prod-201',
    name: 'Nike Air Max 270 Sneakers',
    category: 'footwear',
    price: 12495,
    originalPrice: 14995,
    rating: 4.7,
    reviewsCount: 2100,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
    tag: 'Limited Deal',
    deliveryTime: '15 Mins Delivery',
    inStock: true,
    description: 'Boasts Nike max air unit for responsive cushioning.'
  },

  // Groceries
  {
    id: 'prod-301',
    name: 'Amul Taaza Toned Milk (1 Litre)',
    category: 'groceries',
    price: 54,
    originalPrice: 56,
    rating: 4.9,
    reviewsCount: 8900,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=600',
    tag: 'Instant 8 Mins',
    deliveryTime: '8 Mins Quick Delivery',
    inStock: true,
    description: 'Pasteurised toned milk packed with nutrients.'
  },

  // Beauty
  {
    id: 'prod-501',
    name: 'Forest Essentials Facial Ubtan (70g)',
    category: 'beauty',
    price: 1350,
    originalPrice: 1500,
    rating: 4.8,
    reviewsCount: 1120,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=600',
    tag: 'Ayurvedic',
    deliveryTime: '12 Mins Delivery',
    inStock: true,
    description: 'Traditional cleanser made from hand-ground sun-dried herbs.'
  }
];

export const STORE_PROMOS = [
  {
    id: 'banner-1',
    title: 'SmartDeliver Quick Sale ⚡',
    subtitle: 'Get Guaranteed 10-Min Delivery & Zero RTO Cancellations',
    code: 'SMART10',
    gradient: 'from-amber-500 via-rose-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'banner-2',
    title: 'Safe Drop Contactless Delivery 🛡️',
    subtitle: 'Pin your security desk or locker for instant drop',
    code: 'SAFEDROP',
    gradient: 'from-emerald-600 via-sky-600 to-purple-600',
    image: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&q=80&w=800'
  }
];
