import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Star, Send, ShieldCheck, Globe, ChevronRight, FileText } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function Footer({ setActiveTab, onOpenPolicy }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white border-t-2 border-[#C5A028]/40 text-[#55534E] pt-14 sm:pt-16 pb-8 relative overflow-hidden shadow-xl">
      
      {/* Subtle Gold Ambient Backdrop Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A028]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-gray-200">
          
          {/* Brand Info & Rating */}
          <div className="sm:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="cursor-pointer inline-block group"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold tracking-widest text-[#0B0B0C] group-hover:text-[#C5A028] transition-colors">
                  BEL AIR
                </h2>
                <span className="w-2 h-2 rounded-full bg-[#C5A028]"></span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A028] font-bold uppercase block mt-0.5">
                LUXURY STAY • DEHRADUN
              </span>
            </div>

            <p className="text-xs italic text-[#C5A028] font-serif font-bold">
              "{HOTEL_DETAILS.tagline}"
            </p>

            <p className="text-xs text-[#55534E] leading-relaxed max-w-sm">
              BelAir Luxury Stay defines 5-star boutique hospitality in Dehradun. Experience architecturally crafted suites, serene valley panoramas, fine dining at Cliff Lounge, and signature spa wellness.
            </p>

            {/* Google Rating Badge Card */}
            <div className="flex items-center gap-3 bg-[#F5F2EA] border border-[#C5A028]/30 p-3.5 rounded-xl w-fit shadow-xs">
              <div className="flex text-[#C5A028]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A028]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0B0B0C] block text-xs">{HOTEL_DETAILS.rating} Out of 5 Stars</span>
                <span className="text-[#55534E] text-[10px]">({HOTEL_DETAILS.reviewCount} Verified Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A028] mb-4 flex items-center gap-1">
              Explore BelAir
            </h3>
            <ul className="space-y-2.5 text-xs text-[#55534E]">
              {[
                { id: 'rooms', label: 'Rooms & Executive Suites' },
                { id: 'packages', label: 'Luxury Packages' },
                { id: 'dining-spa', label: 'Dining & BelAir Wellness Spa' },
                { id: 'contact', label: 'Location & Directions' },
                { id: 'dashboard', label: 'BelAir Rewards & Account' },
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActiveTab(item.id)} 
                    className="hover:text-[#C5A028] transition-colors flex items-center gap-1.5 font-medium group text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C5A028] group-hover:translate-x-0.5 transition-transform shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Policies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A028] mb-4">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-xs text-[#55534E]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                <span className="leading-snug">{HOTEL_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A028] shrink-0" />
                <a href={`tel:${HOTEL_DETAILS.phone}`} className="hover:text-[#C5A028] font-bold text-[#0B0B0C]">
                  {HOTEL_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 fill-emerald-600/10" />
                <a 
                  href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-2 pb-1">
                <Mail className="w-4 h-4 text-[#C5A028] shrink-0" />
                <a href="mailto:reservations@belairluxury.com" className="hover:text-[#C5A028]">
                  reservations@belairluxury.com
                </a>
              </li>

              {/* Policy Links under Email */}
              <li className="pt-2.5 border-t border-gray-200 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-[#C5A028] block tracking-wider flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#C5A028]" /> Guest Policies
                </span>
                <button onClick={() => onOpenPolicy('privacy')} className="block text-xs text-[#55534E] hover:text-[#C5A028] transition-colors font-medium">
                  • Privacy Policy
                </button>
                <button onClick={() => onOpenPolicy('terms')} className="block text-xs text-[#55534E] hover:text-[#C5A028] transition-colors font-medium">
                  • Terms of Service
                </button>
                <button onClick={() => onOpenPolicy('cancellation')} className="block text-xs text-[#55534E] hover:text-[#C5A028] transition-colors font-medium">
                  • Cancellation Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Privilege Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A028] mb-4">
              Privilege Newsletter
            </h3>
            <p className="text-xs text-[#55534E] mb-3 leading-relaxed">
              Subscribe to receive private invitation-only offers, seasonal discounts, and gift vouchers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-full bg-[#F9F8F5] border border-gray-300 rounded-lg px-3.5 py-2.5 text-xs text-[#0B0B0C] placeholder-gray-400 focus:outline-none focus:border-[#C5A028]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#C5A028] hover:bg-[#D4AF37] text-white px-3 rounded-md text-xs font-bold transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1 mt-1">
                  ✓ Privilege newsletter subscription confirmed!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Clean Bottom Copyright Notice */}
        <div className="pt-8 text-center">
          <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed sm:leading-normal max-w-2xl mx-auto">
            © {new Date().getFullYear()} BelAir Luxury Stay. All Rights Reserved.
            <span className="block sm:inline sm:ml-1 text-[10px] sm:text-xs text-gray-400">
              Designed for 5-Star Hospitality Excellence.
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
