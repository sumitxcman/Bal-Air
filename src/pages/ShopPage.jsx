import React, { useState } from 'react';
import { ShoppingBag, Gift, Star, CheckCircle2, Heart, Sparkles } from 'lucide-react';
import { SHOP_PRODUCTS } from '../data/shopData';

export default function ShopPage({ onAddToCart, onOpenGiftModal, onAddToWishlist }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Stay Packages', 'Gift Vouchers', 'Dining', 'Spa & Wellness', 'Merchandise'];

  const filteredProducts = activeCategory === 'All'
    ? SHOP_PRODUCTS
    : SHOP_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          BelAir Boutique & Privileges
        </span>
        <h1 className="text-4xl font-serif font-extrabold text-white">
          LUXURY E-COMMERCE STORE
        </h1>
        <p className="text-xs text-gray-400">
          Purchase digital gift vouchers, curated stay packages, fine dining experiences, spa wellness passes, and luxury hotel merchandise.
        </p>
      </div>

      {/* Gift Card Hero Highlight */}
      <div className="bg-gradient-to-r from-[#141414] via-[#1F1C12] to-[#141414] border border-[#D4AF37]/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Gift className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Digital Gift Vouchers</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-white">
            Custom Digital Privilege Pass (₹2,500 – ₹25,000+)
          </h2>
          <p className="text-xs text-gray-300">
            Create custom vouchers with personalized messages. Instant email & WhatsApp delivery.
          </p>
        </div>
        <button
          onClick={onOpenGiftModal}
          className="gold-button px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Customize Gift Card
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-[#D4AF37] text-[#0B0B0B] font-bold shadow-lg'
                : 'bg-[#141414] text-gray-300 hover:text-white border border-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#141414] border border-gray-800 hover:border-[#D4AF37] rounded-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            {/* Image */}
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <span className="absolute top-3 left-3 bg-[#0B0B0B]/80 text-[#E6C76A] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-[#D4AF37]/30">
                {product.category}
              </span>

              <button
                onClick={() => onAddToWishlist(product)}
                className="absolute top-3 right-3 bg-[#0B0B0B]/80 hover:bg-[#D4AF37] text-white hover:text-black p-2 rounded-full border border-gray-700 transition-colors"
                title="Save to Wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span className="font-bold">{product.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-4">{product.description}</p>

                {product.highlights && (
                  <ul className="space-y-1 mb-4">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-gray-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase">Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-serif font-bold text-[#D4AF37]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="gold-button px-4 py-2 rounded text-xs font-bold uppercase tracking-wider shadow"
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
