export const SHOP_PRODUCTS = [
  // Packages
  {
    id: "pkg-romantic-escape",
    name: "Romantic Escape Package",
    category: "Stay Packages",
    price: 9999,
    originalPrice: 12500,
    rating: 5.0,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    description: "Includes Executive Suite stay, romantic candlelight dinner, rose petals room setup, and complimentary bottle of champagne.",
    highlights: ["Executive Suite Stay", "4-Course Candlelight Dinner", "Romantic Room Decoration", "Chilled Champagne"]
  },
  {
    id: "pkg-royal-weekend",
    name: "Royal Weekend Package",
    category: "Stay Packages",
    price: 14999,
    originalPrice: 18000,
    rating: 5.0,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    description: "2 Nights stay in Royal Suite + Gourmet Breakfast + 60-min Couple Spa treatment + VIP Airport Pickup.",
    highlights: ["2 Nights in Royal Suite", "Daily Gourmet Breakfast", "60-Min Couple Spa", "VIP Airport Transfer"]
  },
  {
    id: "pkg-honeymoon",
    name: "Honeymoon Experience Package",
    category: "Stay Packages",
    price: 18999,
    originalPrice: 22500,
    rating: 5.0,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    description: "Presidential Suite stay, private jacuzzi celebration, custom cake, couple spa & private photographer session.",
    highlights: ["Presidential Suite", "Jacuzzi Setup", "Private Photographer", "Personal Butler"]
  },
  {
    id: "pkg-family",
    name: "Family Retreat Package",
    category: "Stay Packages",
    price: 12000,
    originalPrice: 14500,
    rating: 5.0,
    reviews: 24,
    image: "/images/family_suite_beds.jpg",
    description: "Multi-bed suite accommodation, daily breakfast buffet, priority check-in, and local sightseeing guidance.",
    highlights: ["Presidential Family Suite", "Multi-Bed Arrangement", "Daily Gourmet Breakfast", "Early Check-in Priority"]
  },
  {
    id: "pkg-anniversary",
    name: "Anniversary Celebration Package",
    category: "Stay Packages",
    price: 15500,
    originalPrice: 19000,
    rating: 4.9,
    reviews: 14,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    description: "Special Suite accommodation, private dining on cliff balcony, memory photo album, and late checkout.",
    highlights: ["Special Suite", "Private Dining", "Late Checkout", "Commemorative Gift"]
  },

  // Gift Vouchers
  {
    id: "voucher-signature-2500",
    name: "BelAir Silver Luxury Voucher",
    category: "Gift Vouchers",
    price: 2500,
    originalPrice: 2500,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80",
    description: "Digital gift voucher redeemable for hotel stays, fine dining, spa treatments, or experiences.",
    highlights: ["Valid for 12 Months", "Instant Digital Delivery", "Custom Message Option", "Redeemable Anywhere"]
  },
  {
    id: "voucher-signature-5000",
    name: "BelAir Gold Luxury Voucher",
    category: "Gift Vouchers",
    price: 5000,
    originalPrice: 5000,
    rating: 5.0,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
    description: "Premium digital voucher ideal for celebrations and corporate rewards. Includes 500 bonus loyalty points.",
    highlights: ["500 Bonus Loyalty Points", "Instant Email & WhatsApp Delivery", "Flexible Redemption"]
  },
  {
    id: "voucher-signature-10000",
    name: "BelAir Royal Platinum Gift Card",
    category: "Gift Vouchers",
    price: 10000,
    originalPrice: 10000,
    rating: 5.0,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1000&q=80",
    description: "Exclusive Platinum digital gift pass. Includes complimentary spa upgrades and priority dining reservations.",
    highlights: ["1,200 Loyalty Points", "Complimentary Spa Upgrade", "VIP Butler Greeting"]
  },

  // Dining Vouchers
  {
    id: "dining-candlelight",
    name: "Private Candlelight Balcony Dinner",
    category: "Dining",
    price: 3500,
    originalPrice: 4200,
    rating: 4.9,
    reviews: 26,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    description: "5-course romantic dinner crafted by Master Chef with private balcony setup overlooking Dehradun valley.",
    highlights: ["5-Course Gourmet Menu", "Private Balcony", "Personalized Chef Service"]
  },
  {
    id: "dining-hightea",
    name: "High Tea at Cliff Lounge",
    category: "Dining",
    price: 1800,
    originalPrice: 2200,
    rating: 4.8,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80",
    description: "Artisanal teas, fresh scones, french pastries, and savory finger sandwiches at the high-altitude Cliff Lounge.",
    highlights: ["Artisan Teas & Pastries", "Cliff Tower View", "Live Piano Ambient Music"]
  },

  // Spa
  {
    id: "spa-couples",
    name: "BelAir Signature Couple Spa Treatment",
    category: "Spa & Wellness",
    price: 4500,
    originalPrice: 5500,
    rating: 5.0,
    reviews: 39,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
    description: "75-minute synchronized couple massage using natural organic essential oils, steam sauna, and herbal tea.",
    highlights: ["75-Min Synchronized Therapy", "Private Steam Suite", "Organic Essential Oils"]
  },
  {
    id: "spa-facial",
    name: "Golden Rejuvenation Facial",
    category: "Spa & Wellness",
    price: 2800,
    originalPrice: 3400,
    rating: 4.9,
    reviews: 21,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    description: "24K Gold-infused luxury anti-aging facial treatment for radiant skin glow.",
    highlights: ["24K Gold Mask", "Deep Collagen Hydration", "Neck & Shoulder Massage"]
  },

  // Merchandise
  {
    id: "merch-bathrobe",
    name: "BelAir Royal Plush Monogrammed Bathrobe",
    category: "Merchandise",
    price: 3200,
    originalPrice: 3800,
    rating: 5.0,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
    description: "100% Ultra-soft Egyptian cotton luxury bathrobe embroidered with gold BelAir logo.",
    highlights: ["100% Egyptian Cotton", "Gold Monogram", "Ultra-absorbent Plush Feel"]
  },
  {
    id: "merch-candle",
    name: "BelAir Signature Aromatherapy Candle Set",
    category: "Merchandise",
    price: 1500,
    originalPrice: 1900,
    rating: 4.9,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
    description: "Hand-poured soy wax candles infused with wild Himalayan cedarwood, amber, and champagne orchid.",
    highlights: ["Hand-poured Soy Wax", "45-Hour Burn Time", "Luxury Glass Vessel"]
  }
];
