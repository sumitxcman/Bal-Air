import React from 'react';
import { 
  Sparkles, 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Coffee, 
  Utensils, 
  CheckCircle2,
  Gift,
  Building,
  Crown
} from 'lucide-react';
import BookingBar from '../components/BookingBar';
import RoomCard from '../components/RoomCard';
import { HOTEL_DETAILS } from '../data/hotelDetails';
import { ROOMS_DATA } from '../data/roomsData';
import { SHOP_PRODUCTS } from '../data/shopData';
import { GOOGLE_REVIEWS } from '../data/reviewsData';

export default function HomePage({ setActiveTab, onSelectRoom, onAddToCart, onOpenGiftModal }) {
  const featuredRooms = ROOMS_DATA.slice(0, 3);
  const featuredPackages = SHOP_PRODUCTS.filter(p => p.category === 'Stay Packages').slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/royal_suite.jpg"
            alt="BelAir Luxury Stay Dehradun"
            className="w-full h-full object-cover scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F5] via-white/75 to-white/30"></div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-12">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-[#C5A028]/40 px-4 py-1.5 rounded-full text-xs text-[#C5A028] font-bold uppercase tracking-widest backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            5-Star Boutique Hospitality • Cliff Tower Dehradun
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-[#0B0B0C] leading-tight">
            BEL AIR <span className="gold-gradient-text block mt-1">LUXURY STAY</span>
          </h1>

          <p className="text-base sm:text-xl font-serif italic text-[#0B0B0C] font-semibold max-w-2xl mx-auto drop-shadow-xs">
            "{HOTEL_DETAILS.tagline}"
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('rooms')}
              className="gold-button px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2"
            >
              Explore Suites
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('packages')}
              className="gold-outline-button px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm"
            >
              View Packages
            </button>
          </div>

        </div>

        {/* Hero Search Bar */}
        <div className="relative z-10 mt-12">
          <BookingBar onSearch={() => setActiveTab('rooms')} />
        </div>

      </section>

      {/* Authentic Grand Reception & Cliff Tower Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#C5A028]/30 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src="/images/reception_lobby.jpg"
              alt="BelAir Reception Desk & Grand Lobby"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90 hidden lg:block"></div>
            <span className="absolute top-4 left-4 bg-white/90 text-[#C5A028] border border-[#C5A028]/40 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded shadow-xs">
              24/7 Royal Concierge Desk
            </span>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#C5A028]">
              <Crown className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Grand Lobby & Welcome Desk</span>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#0B0B0C] leading-tight">
              WELCOME TO BELAIR LUXURY STAY
            </h2>

            <p className="text-xs text-[#55534E] leading-relaxed">
              Step into our grand reception lobby featuring artisan jali woodwork, polished marble flooring, and executive lounge seating. Our front desk staff ensures seamless check-ins, room service, and concierge assistance around the clock.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs text-[#0B0B0C] pt-2 border-t border-gray-200">
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-medium">Address Location</span>
                <strong className="text-[#0B0B0C] text-[11px] block line-clamp-2">{HOTEL_DETAILS.address}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-medium">Phone Concierge</span>
                <a href={`tel:${HOTEL_DETAILS.phone}`} className="text-sm font-bold text-[#C5A028] hover:underline">
                  {HOTEL_DETAILS.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp Direct Inquiry
              </a>
              <button
                onClick={() => setActiveTab('contact')}
                className="gold-outline-button px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                View Directions & Map
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Rooms & Suites Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A028] block mb-1">
              Authentic Accommodations
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0B0B0C]">
              FEATURED LUXURY SUITES
            </h2>
          </div>

          <button
            onClick={() => setActiveTab('rooms')}
            className="text-xs font-bold text-[#C5A028] hover:underline flex items-center gap-1 uppercase tracking-widest"
          >
            View All 12 Suites & Rooms
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onViewDetails={(r) => onSelectRoom(r)}
              onQuickBook={(r) => onSelectRoom(r)}
            />
          ))}
        </div>

      </section>

      {/* E-Commerce Packages Showcase */}
      <section className="bg-[#F5F2EA] py-16 border-y border-[#C5A028]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A028]">
              Curated Experiences
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0B0B0C]">
              EXCLUSIVE STAY PACKAGES
            </h2>
            <p className="text-xs text-[#55534E]">
              Combine luxury suite stays with private dining, champagne setups, spa therapies, and romantic decorations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white border border-gray-200 hover:border-[#C5A028] rounded-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
                <div className="aspect-video relative overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-[#C5A028] text-white text-xs px-2.5 py-1 rounded font-bold shadow-xs">
                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0B0B0C] group-hover:text-[#C5A028] transition-colors mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#55534E] mb-4">{pkg.description}</p>
                    
                    <ul className="space-y-1.5 text-xs text-[#0B0B0C] mb-4">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[11px] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A028]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase font-medium">Package Price</span>
                      <span className="text-lg font-serif font-bold text-[#C5A028]">₹{pkg.price.toLocaleString('en-IN')}</span>
                    </div>

                    <button
                      onClick={() => onAddToCart(pkg)}
                      className="gold-button px-4 py-2 rounded text-xs font-bold uppercase tracking-wider"
                    >
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setActiveTab('packages')}
              className="gold-outline-button px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest shadow-xs"
            >
              Explore All Packages & Digital Gift Cards
            </button>
          </div>

        </div>
      </section>

      {/* Authentic Cliff Lounge & Fine Dining Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Authentic Cliff Lounge Card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[380px] p-8 flex flex-col justify-between border border-gray-200 shadow-xl group">
            <img 
              src="/images/cliff_lounge.jpg" 
              alt="Cliff Lounge Dehradun" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#F3D779] font-bold flex items-center gap-1 drop-shadow-xs">
                <Utensils className="w-4 h-4" /> Cliff Tower Executive Lounge
              </span>
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="text-3xl font-serif font-bold text-white drop-shadow-md">
                Cliff Lounge High Tea & Panoramic Seating
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed max-w-md">
                Relax in our custom curved teal lounge with floor-to-ceiling mountain views, artisanal teas, and gourmet chef dining.
              </p>
              <button
                onClick={() => setActiveTab('dining-spa')}
                className="gold-button px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
              >
                Reserve Table / Dining Pass
              </button>
            </div>
          </div>

          {/* BelAir Wellness Spa Card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[380px] p-8 flex flex-col justify-between border border-gray-200 shadow-xl group">
            <img 
              src="/images/luxury_bathroom.jpg" 
              alt="BelAir Spa" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#F3D779] font-bold flex items-center gap-1 drop-shadow-xs">
                <Sparkles className="w-4 h-4" /> Hydrotherapy & Rainfall Showers
              </span>
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="text-3xl font-serif font-bold text-white drop-shadow-md">
                BelAir Signature Spa & Hydrotherapy
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed max-w-md">
                Unwind with rainfall hydrotherapy body jets, synchronized aromatherapy massages, and luxury bathroom suites.
              </p>
              <button
                onClick={() => setActiveTab('dining-spa')}
                className="gold-button px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
              >
                Book Spa Treatment
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Gift Cards Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-[#F5F2EA] to-white border border-[#C5A028]/50 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A028] font-bold flex items-center justify-center md:justify-start gap-1">
              <Gift className="w-4 h-4" /> Digital Voucher System
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#0B0B0C]">
              GIFT A LUXURY BELAIR EXPERIENCE
            </h2>
            <p className="text-xs text-[#55534E] leading-relaxed">
              Create personalized digital gift cards (₹2,500 to Custom) with custom messages. Delivered instantly via Email or WhatsApp.
            </p>
          </div>

          <button
            onClick={onOpenGiftModal}
            className="gold-button px-8 py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-xl shrink-0"
          >
            Create Gift Card Now
          </button>

        </div>
      </section>

      {/* Verified Google Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A028] font-bold">
            Google Reviews (5.0 ★ Rated)
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#0B0B0C]">
            WHAT OUR GUESTS SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-white border border-gray-200 p-6 rounded-xl space-y-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#C5A028]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A028]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">{rev.date}</span>
                </div>
                <p className="text-xs text-[#55534E] italic leading-relaxed mb-3">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A028] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B0B0C]">{rev.author}</h4>
                  <span className="text-[10px] text-emerald-700 font-bold">✓ Verified Booking ({rev.room})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
