import React, { useState } from 'react';
import { Utensils, Sparkles, Clock, Calendar, Users, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function DiningSpaPage({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('dining');
  
  // Table reservation form state
  const [resDate, setResDate] = useState('2026-08-15');
  const [resTime, setResTime] = useState('08:00 PM');
  const [resGuests, setResGuests] = useState('2');
  const [resType, setResType] = useState('Candlelight Balcony');
  const [resSuccess, setResSuccess] = useState(false);

  const handleReserveTable = (e) => {
    e.preventDefault();
    setResSuccess(true);
    setTimeout(() => setResSuccess(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
          BelAir Experiences
        </span>
        <h1 className="text-4xl font-serif font-extrabold text-white">
          FINE DINING & WELLNESS SPA
        </h1>
        <p className="text-xs text-gray-400">
          Savor masterfully crafted gourmet culinary experiences at Cliff Tower or immerse in restorative spa therapies overlooking the Doon Valley.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 border-b border-gray-800 pb-4">
        <button
          onClick={() => setActiveTab('dining')}
          className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === 'dining'
              ? 'bg-[#D4AF37] text-black shadow-lg'
              : 'bg-[#141414] text-gray-300 border border-gray-800'
          }`}
        >
          Cliff Tower Dining
        </button>

        <button
          onClick={() => setActiveTab('spa')}
          className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === 'spa'
              ? 'bg-[#D4AF37] text-black shadow-lg'
              : 'bg-[#141414] text-gray-300 border border-gray-800'
          }`}
        >
          BelAir Wellness Spa
        </button>
      </div>

      {/* DINING TAB */}
      {activeTab === 'dining' && (
        <div className="space-y-12">
          
          {/* Reservation Form & Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Executive Dining & High Tea
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">
                CLIFF LOUNGE & CHEF'S BALCONY
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Enjoy 5-course romantic dining, artisanal high tea, or private chef service in our panoramic executive lounge overlooking Dehradun valley.
              </p>

              {/* Cliff Lounge Photo Highlight */}
              <div className="aspect-video rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-xl relative">
                <img
                  src="/images/cliff_lounge.jpg"
                  alt="BelAir Cliff Lounge"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[#0B0B0B]/80 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                  Authentic Executive Cliff Lounge
                </span>
              </div>

              <div className="bg-[#141414] border border-gray-800 p-4 rounded-xl space-y-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Breakfast: 7:30 AM – 10:30 AM | Lunch: 12:30 PM – 3:30 PM | Dinner: 7:00 PM – 11:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Direct Desk Reservations: {HOTEL_DETAILS.phone}</span>
                </div>
              </div>
            </div>

            {/* Table Booking Form */}
            <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4">
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#D4AF37]" /> Table Reservation Request
              </h3>

              <form onSubmit={handleReserveTable} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Date</label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Time Slot</label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2 text-xs"
                    >
                      <option value="08:00 AM">08:00 AM (Breakfast)</option>
                      <option value="01:30 PM">01:30 PM (Lunch)</option>
                      <option value="05:30 PM">05:30 PM (Sunset High Tea)</option>
                      <option value="08:00 PM">08:00 PM (Candlelight Dinner)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Guests</label>
                    <select
                      value={resGuests}
                      onChange={(e) => setResGuests(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2 text-xs"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons (Couple)</option>
                      <option value="4">4 Persons (Family)</option>
                      <option value="6">6+ Group</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] text-gray-400 block mb-1">Seating Area</label>
                    <select
                      value={resType}
                      onChange={(e) => setResType(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2 text-xs"
                    >
                      <option value="Candlelight Balcony">Candlelight Balcony</option>
                      <option value="Indoor Cliff Dining">Indoor Cliff Lounge</option>
                      <option value="Private Chef Table">Private Chef's Table</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full gold-button py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Reserve Table Now
                </button>

                {resSuccess && (
                  <p className="text-xs text-emerald-400 font-medium text-center flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Table reservation submitted! Our manager will confirm via WhatsApp.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      )}

      {/* SPA TAB */}
      {activeTab === 'spa' && (
        <div className="space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">BELAIR WELLNESS MENU</h2>
            <p className="text-xs text-gray-400">All treatments use organic aromatherapy oils and include complimentary herbal tea.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'spa-1',
                name: 'BelAir Signature Couple Massage',
                duration: '75 Mins',
                price: 4500,
                desc: 'Synchronized full-body massage using warm Himalayan essential oils.'
              },
              {
                id: 'spa-2',
                name: '24K Gold Rejuvenation Facial',
                duration: '60 Mins',
                price: 2800,
                desc: 'Anti-aging collagen facial treatment with 24K gold mask.'
              },
              {
                id: 'spa-3',
                name: 'Ayurvedic Deep Tissue Therapy',
                duration: '90 Mins',
                price: 3800,
                desc: 'Therapeutic pressure treatment relieving deep muscular tension.'
              }
            ].map((s) => (
              <div key={s.id} className="bg-[#141414] border border-gray-800 p-6 rounded-xl space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#E6C76A] uppercase font-bold tracking-widest">{s.duration}</span>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">{s.name}</h3>
                  <p className="text-xs text-gray-400 mt-2">{s.desc}</p>
                </div>

                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <span className="font-serif font-bold text-[#D4AF37] text-lg">₹{s.price.toLocaleString('en-IN')}</span>
                  <button
                    onClick={() => onAddToCart({
                      id: s.id,
                      name: s.name,
                      price: s.price,
                      quantity: 1,
                      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                    })}
                    className="gold-button px-4 py-2 rounded text-xs font-bold uppercase tracking-wider"
                  >
                    Buy Voucher
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
