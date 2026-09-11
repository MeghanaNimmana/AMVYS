// Real-world Olist Brazilian E-Commerce Dataset Catalog with HD Product Imagery
// Mapped from Kaggle Olist Dataset (100k+ Brazilian E-Commerce Orders)

export const OLIST_CATEGORIES = [
  { ptName: 'beleza_saude', enName: 'Health & Beauty (Beleza & Saúde)', icon: '✨' },
  { ptName: 'cama_mesa_banho', enName: 'Bed, Bath & Table (Cama, Mesa e Banho)', icon: '🛏️' },
  { ptName: 'esporte_lazer', enName: 'Sports & Leisure (Esporte e Lazer)', icon: '⚽' },
  { ptName: 'moveis_decoracao', enName: 'Furniture & Decor (Móveis e Decoração)', icon: '🛋️' },
  { ptName: 'informatica_acessorios', enName: 'Computers & Tech (Informática)', icon: '💻' },
  { ptName: 'utilidades_domesticas', enName: 'Housewares (Utilidades Domésticas)', icon: '🍽️' },
  { ptName: 'relogios_presentes', enName: 'Watches & Gifts (Relógios e Presentes)', icon: '⌚' },
  { ptName: 'telefonia', enName: 'Mobiles & Telephony (Telefonia)', icon: '📱' },
  { ptName: 'automotivo', enName: 'Automotive Parts (Automotivo)', icon: '🚗' },
  { ptName: 'ferramentas_jardim', enName: 'Garden & Tools (Ferramentas)', icon: '🌱' }
];

export const OLIST_PRODUCTS = [
  // 1. Beleza & Saúde (Health & Beauty)
  {
    id: 'olist-prod-001',
    product_id: 'e5f2d545866e951052ce033d970e2826',
    name: 'Natura Ekos Castanha Body Lotion & Skincare (400ml)',
    category: 'beauty',
    olist_category: 'beleza_saude',
    brand: 'Natura Brazil',
    price: 1890,
    priceBRL: 'R$ 119.90',
    originalPrice: 2490,
    discount: 24,
    rating: 4.8,
    reviewsCount: 1420,
    sellerLocation: 'São Paulo, SP - Brazil',
    description: 'Authentic Brazilian Ekos Castanha nourishing body lotion enriched with Amazonian chestnut oil.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '10 Mins Delivery',
    tag: 'Olist Best Seller',
    stock: 85,
    sku: 'OLIST-BELEZA-8921'
  },
  {
    id: 'olist-prod-002',
    name: 'O Boticário Malbec Eau de Parfum (100ml)',
    category: 'beauty',
    olist_category: 'beleza_saude',
    brand: 'O Boticário',
    price: 3290,
    priceBRL: 'R$ 219.00',
    originalPrice: 3990,
    discount: 17,
    rating: 4.9,
    reviewsCount: 3100,
    sellerLocation: 'Curitiba, PR - Brazil',
    description: 'Iconic Brazilian men fragrance manufactured with wine aged oak barrel technology.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '12 Mins Delivery',
    tag: 'Top Perfume',
    stock: 40,
    sku: 'OLIST-MALBEC-100'
  },

  // 2. Cama, Mesa e Banho (Bed, Bath & Table)
  {
    id: 'olist-prod-003',
    product_id: '1e9e8ef313f30410ed0e19a028d15037',
    name: 'Santista 100% Egyptian Cotton 400 TC Bedsheet Set',
    category: 'home_furniture',
    olist_category: 'cama_mesa_banho',
    brand: 'Santista Home',
    price: 4590,
    priceBRL: 'R$ 289.90',
    originalPrice: 5990,
    discount: 23,
    rating: 4.7,
    reviewsCount: 890,
    sellerLocation: 'Blumenau, SC - Brazil',
    description: 'Luxurious 400 thread count Egyptian cotton queen size sheet set with pillowcases.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600',
    deliveryTime: 'Same Day Delivery',
    tag: 'Hotel Quality',
    stock: 30,
    sku: 'OLIST-CAMA-400TC'
  },

  // 3. Esporte e Lazer (Sports & Leisure)
  {
    id: 'olist-prod-004',
    product_id: '3aa071139ed16b6532461e8fbe581222',
    name: 'Penalty Match Pro Brazil FIFA Official Football',
    category: 'sports',
    olist_category: 'esporte_lazer',
    brand: 'Penalty Brazil',
    price: 2890,
    priceBRL: 'R$ 179.90',
    originalPrice: 3490,
    discount: 17,
    rating: 4.8,
    reviewsCount: 1650,
    sellerLocation: 'Porto Alegre, RS - Brazil',
    description: 'Thermal bonding technology official match ball used in Brazilian championship leagues.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '15 Mins Delivery',
    tag: 'FIFA Approved',
    stock: 50,
    sku: 'OLIST-PENALTY-FB'
  },

  // 4. Móveis e Decoração (Furniture & Decor)
  {
    id: 'olist-prod-005',
    product_id: 'd107778d40d53722746c05b38514bebe',
    name: 'Nordic Solid Wood Ergonomic Desk Chair',
    category: 'home_furniture',
    olist_category: 'moveis_decoracao',
    brand: 'Mobly Brazil',
    price: 8990,
    priceBRL: 'R$ 549.00',
    originalPrice: 11990,
    discount: 25,
    rating: 4.6,
    reviewsCount: 420,
    sellerLocation: 'Belo Horizonte, MG - Brazil',
    description: 'Modern Scandinavian design solid beech wood chair with padded cushion seat.',
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&q=80&w=600',
    deliveryTime: 'Same Day Delivery',
    tag: 'Modern Decor',
    stock: 18,
    sku: 'OLIST-MOBLY-CHAIR'
  },

  // 5. Informática (Computers & Tech)
  {
    id: 'olist-prod-006',
    product_id: '37eb69aca8712e62ab7d305c4645f44f',
    name: 'Multilaser Pro Ergonomic Mechanical Gaming Keyboard',
    category: 'laptops',
    olist_category: 'informatica_acessorios',
    brand: 'Multilaser',
    price: 3490,
    priceBRL: 'R$ 229.90',
    originalPrice: 4490,
    discount: 22,
    rating: 4.7,
    reviewsCount: 1180,
    sellerLocation: 'Campinas, SP - Brazil',
    description: 'RGB mechanical switches with wrist rest and anti-ghosting keys for esports.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '10 Mins Delivery',
    tag: 'Esports Ready',
    stock: 60,
    sku: 'OLIST-MULTI-KB'
  },

  // 6. Relógios e Presentes (Watches & Gifts)
  {
    id: 'olist-prod-007',
    product_id: 'a88062dd501c1ae50253c6b23f7c569d',
    name: 'Technos Mens Chronograph Stainless Steel Watch',
    category: 'watches',
    olist_category: 'relogios_presentes',
    brand: 'Technos Brazil',
    price: 9490,
    priceBRL: 'R$ 599.00',
    originalPrice: 12490,
    discount: 24,
    rating: 4.9,
    reviewsCount: 750,
    sellerLocation: 'Manaus, AM - Brazil',
    description: 'Water resistant 100m chronograph watch with Japanese quartz movement.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    deliveryTime: 'Same Day Delivery',
    tag: 'Technos Original',
    stock: 22,
    sku: 'OLIST-TECHNOS-CHRONO'
  },

  // 7. Telefonia (Mobiles & Telephony)
  {
    id: 'olist-prod-008',
    product_id: '8704783d47a2fb6b6a5745e308477b2d',
    name: 'Motorola Moto G84 5G (256GB, Viva Magenta)',
    category: 'mobiles',
    olist_category: 'telefonia',
    brand: 'Motorola Brazil',
    price: 18990,
    priceBRL: 'R$ 1,299.00',
    originalPrice: 21990,
    discount: 13,
    rating: 4.7,
    reviewsCount: 2400,
    description: 'Pantone Viva Magenta vegan leather back, 120Hz pOLED display, 50MP OIS camera.',
    stock: 45,
    sku: 'OLIST-MOTO-G84',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    deliveryTime: '10 Mins Delivery',
    tag: 'Pantone Edition'
  }
];
