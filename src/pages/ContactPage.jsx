import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Star, ExternalLink, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          Connect & Visit Us
        </span>
        <h1 className="text-4xl font-serif font-extrabold text-white">
          LOCATION & DIRECT CONTACT
        </h1>
        <p className="text-xs text-gray-400">
          Located on the 3rd Floor of Cliff Tower, beside The Asian School in Balliwala, Dehradun.
        </p>
      </div>

      {/* Main Grid: Details + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Property Coordinates & Real Building Photo */}
        <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Real Building Exterior Photo */}
            <div className="aspect-video rounded-xl overflow-hidden border border-[#D4AF37]/30 relative">
              <img
                src="/images/building_exterior.jpg"
                alt="BelAir Cliff Tower Dehradun Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-[#0B0B0B]/80 text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-[#D4AF37]/40">
                Official Cliff Tower Building Facade
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <h2 className="text-xl font-serif font-bold text-white">BelAir Luxury Stay</h2>
              <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <span className="font-bold">{HOTEL_DETAILS.rating}</span>
                <span className="text-gray-400 text-[10px]">({HOTEL_DETAILS.reviewCount} Verified Reviews)</span>
              </div>
            </div>

            {/* Full Address */}
            <div className="space-y-4 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm mb-1">Full Postal Address</strong>
                  <p className="leading-relaxed">{HOTEL_DETAILS.address}</p>
                  <span className="text-[11px] text-gray-500 block mt-1">Plus Code: {HOTEL_DETAILS.plusCode}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-800 pt-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div>
                  <strong className="text-white block">Direct Desk Phone</strong>
                  <a href={`tel:${HOTEL_DETAILS.phone}`} className="text-sm font-semibold text-[#D4AF37] hover:underline">
                    {HOTEL_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-800 pt-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong className="text-white block">Instant WhatsApp Concierge Desk</strong>
                  <a
                    href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-emerald-400 font-semibold hover:underline"
                  >
                    Chat with BelAir Concierge (+91 70175 76573)
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-800 pt-3 text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Check-in: <strong className="text-white">{HOTEL_DETAILS.checkIn}</strong></span>
                </div>
                <div>
                  <span>Check-out: <strong className="text-white">{HOTEL_DETAILS.checkOut}</strong></span>
                </div>
              </div>
            </div>

          </div>

          {/* Google Maps External Button */}
          <a
            href={HOTEL_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full gold-button py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow mt-4"
          >
            <ExternalLink className="w-4 h-4" />
            Open BelAir in Google Maps
          </a>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-serif font-bold text-white">Send Direct Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="Rohan Sharma"
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="rohan@example.com"
                  className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="070175 76573"
                  className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-400 block mb-1">Message / Special Inquiry</label>
              <textarea
                rows={4}
                required
                placeholder="Inquire about room booking, event hosting, or custom packages..."
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="gold-button w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Direct Inquiry
            </button>

            {formSubmitted && (
              <p className="text-xs text-emerald-400 font-medium text-center flex items-center justify-center gap-1 pt-2">
                <CheckCircle2 className="w-4 h-4" /> Thank you! Your message has been sent to BelAir reception desk.
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Competitor Price Comparison Section */}
      <div className="bg-[#141414] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Official Direct Booking Rate Comparison
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {HOTEL_DETAILS.competitorPrices.map((cp, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border flex flex-col justify-between space-y-2 ${
                cp.isOfficial
                  ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white'
                  : 'bg-[#0B0B0B] border-gray-800 text-gray-400'
              }`}
            >
              <div>
                <span className="font-bold block text-white text-sm">{cp.source}</span>
                <span className="text-[10px] text-gray-400">{cp.label}</span>
              </div>
              <div className="flex items-baseline justify-between pt-2 border-t border-gray-800">
                <span className="font-serif font-bold text-lg text-[#D4AF37]">₹{cp.price.toLocaleString('en-IN')}</span>
                {cp.isOfficial && (
                  <span className="bg-[#D4AF37] text-black text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">
                    Best Rate
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Vacation Rentals Comparison */}
      <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-serif font-bold text-white">Nearby Properties & Vacation Rentals (Balliwala Area)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {HOTEL_DETAILS.nearbyVacationRentals.map((vr, idx) => (
            <div key={idx} className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-white text-xs line-clamp-1">{vr.name}</h4>
              <p className="text-[10px] text-gray-400">{vr.distance} • {vr.capacity}</p>
              <span className="font-serif font-bold text-[#D4AF37] block text-sm">{vr.price}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
