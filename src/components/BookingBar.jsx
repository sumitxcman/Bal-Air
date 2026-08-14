import React, { useState } from 'react';
import { Calendar, Users, BedDouble, Search, Sparkles } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';

export default function BookingBar({ onSearch }) {
  const [checkIn, setCheckIn] = useState('2026-08-15');
  const [checkOut, setCheckOut] = useState('2026-08-16');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ checkIn, checkOut, guests, roomType });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md border border-[#C5A028]/40 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-xl relative z-20">
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
        
        {/* Check-In */}
        <div>
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C5A028] block mb-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> Check-In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#F9F8F5] border border-gray-300 focus:border-[#C5A028] text-[#0B0B0C] rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none"
          />
        </div>

        {/* Check-Out */}
        <div>
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C5A028] block mb-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> Check-Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#F9F8F5] border border-gray-300 focus:border-[#C5A028] text-[#0B0B0C] rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C5A028] block mb-1 flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-[#F9F8F5] border border-gray-300 focus:border-[#C5A028] text-[#0B0B0C] rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none"
          >
            <option value="1">1 Guest (Single)</option>
            <option value="2">2 Guests (Couple)</option>
            <option value="3">3 Guests (Executive)</option>
            <option value="4">4 Guests (Royal Family)</option>
            <option value="5">5+ Guests (Penthouse)</option>
          </select>
        </div>

        {/* Room Category */}
        <div>
          <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C5A028] block mb-1 flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5" /> Suite Category
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full bg-[#F9F8F5] border border-gray-300 focus:border-[#C5A028] text-[#0B0B0C] rounded-lg px-3 py-2.5 text-xs font-medium focus:outline-none truncate"
          >
            <option value="all">All Suites & Rooms</option>
            {ROOMS_DATA.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} (₹{r.price.toLocaleString('en-IN')})
              </option>
            ))}
          </select>
        </div>

        {/* Search CTA */}
        <div>
          <button
            type="submit"
            className="w-full gold-button py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <Search className="w-4 h-4" />
            Check Rates
          </button>
        </div>

      </form>

      {/* Best Rate Direct Booking Tag */}
      <div className="mt-3 pt-2.5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10px] sm:text-[11px] text-gray-500 text-center sm:text-left">
        <span className="flex items-center justify-center gap-1 text-[#C5A028] font-bold">
          <Sparkles className="w-3 h-3 text-[#C5A028] shrink-0" /> Best Rate Guarantee (₹2,500/night vs Agoda ₹2,690)
        </span>
        <span className="text-gray-600 font-medium">Check-in: 2:00 PM | Check-out: 12:00 PM</span>
      </div>

    </div>
  );
}
