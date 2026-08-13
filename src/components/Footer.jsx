import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Star, Send, ShieldCheck, Globe, Share2, Compass, Award } from 'lucide-react';
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
    <footer className="bg-white border-t border-[#C5A028]/30 text-[#55534E] pt-16 pb-8 relative overflow-hidden shadow-inner">
      
      {/* Subtle Gold Ambient Gradient Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A028]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('home')}
              className="cursor-pointer inline-block"
            >
              <h2 className="text-2xl font-serif font-extrabold tracking-widest text-[#0B0B0C]">
                BEL AIR
              </h2>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A028] font-bold uppercase block">
                LUXURY STAY
              </span>
            </div>

            <p className="text-xs italic text-[#C5A028] font-serif font-semibold">
              "{HOTEL_DETAILS.tagline}"
            </p>

            <p className="text-xs text-[#55534E] leading-relaxed max-w-sm">
              BelAir Luxury Stay offers standard-setting 5-star hospitality in Dehradun. Experience architectural luxury, serene valley panoramas, fine dining, and holistic spa wellness.
            </p>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-3 bg-[#F5F2EA] border border-[#C5A028]/30 p-3 rounded-lg w-fit shadow-xs">
              <div className="flex text-[#C5A028]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A028]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0B0B0C]">{HOTEL_DETAILS.rating} Rating</span>
                <span className="text-[#55534E] block text-[10px]">({HOTEL_DETAILS.reviewCount} Verified Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Direct Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A028] mb-4">
              Explore BelAir
            </h3>
            <ul className="space-y-2.5 text-xs text-[#55534E]">
              <li>
                <button onClick={() => setActiveTab('rooms')} className="hover:text-[#C5A028] transition-colors">
                  Rooms & Executive Suites
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('packages')} className="hover:text-[#C5A028] transition-colors">
                  Luxury Packages
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('dining-spa')} className="hover:text-[#C5A028] transition-colors">
                  Dining & BelAir Wellness Spa
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-[#C5A028] transition-colors">
                  Location & Directions
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('dashboard')} className="hover:text-[#C5A028] transition-colors">
                  BelAir Rewards & Account
                </button>
              </li>
            </ul>
          </div>

          {/* Address & Direct Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A028] mb-4">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-xs text-[#55534E]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                <span>{HOTEL_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A028] shrink-0" />
                <a href={`tel:${HOTEL_DETAILS.phone}`} className="hover:text-[#C5A028] font-medium">
                  {HOTEL_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a 
                  href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A028] shrink-0" />
                <a href="mailto:reservations@belairluxury.com" className="hover:text-[#C5A028]">
                  reservations@belairluxury.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A028] mb-4">
              Privilege Newsletter
            </h3>
            <p className="text-xs text-[#55534E] mb-3">
              Subscribe to receive private invitation-only offers, early-bird deals, and vouchers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full bg-[#F9F8F5] border border-gray-300 rounded px-3 py-2 text-xs text-[#0B0B0C] placeholder-gray-400 focus:outline-none focus:border-[#C5A028]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-[#C5A028] text-white px-3 rounded text-xs font-bold hover:bg-[#D4AF37] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-700 font-bold">
                  ✓ Thank you! Privilege newsletter subscription confirmed.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Rights & Policy Modals */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BelAir Luxury Stay. All Rights Reserved. Designed for 5-Star Hospitality Excellence.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-[#C5A028] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onOpenPolicy('terms')} className="hover:text-[#C5A028] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onOpenPolicy('cancellation')} className="hover:text-[#C5A028] transition-colors">
              Cancellation Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
