import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Sparkles, CheckCircle2, BedDouble } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import { ROOMS_DATA } from '../data/roomsData';

export default function RoomsPage({ onSelectRoom }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(25000);
  const [sortBy, setSortBy] = useState('recommended');

  // Filter Logic
  let filteredRooms = ROOMS_DATA.filter((room) => {
    const matchesCategory = selectedCategory === 'all' || room.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesPrice = room.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  // Sort Logic
  if (sortBy === 'price-low') {
    filteredRooms.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredRooms.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'popular') {
    filteredRooms.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10">
      
      {/* Header Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A028]">
          5-Star Boutique Accommodations • Dehradun
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0B0B0C]">
          LUXURY ROOMS & SUITES
        </h1>
        <p className="text-xs text-[#55534E]">
          Select from our curated suite collection. Each accommodation is individually appointed with hand-selected linens, marble bathrooms, private balconies, and Himalayan mountain views.
        </p>
      </div>

      {/* Filter & Sorting Control Bar */}
      <div className="bg-white border border-[#C5A028]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
          
          {/* Touch-Scrollable Category Tabs on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none flex-nowrap md:flex-wrap">
            {[
              { id: 'all', label: 'All Accommodations', count: ROOMS_DATA.length },
              { id: 'deluxe', label: 'Deluxe Rooms', count: ROOMS_DATA.filter(r => r.category === 'Deluxe').length },
              { id: 'suite', label: 'Executive Suites', count: ROOMS_DATA.filter(r => r.category === 'Suite').length },
              { id: 'royal', label: 'Royal Suites', count: ROOMS_DATA.filter(r => r.category === 'Royal').length },
              { id: 'presidential', label: 'Presidential', count: ROOMS_DATA.filter(r => r.category === 'Presidential').length },
              { id: 'penthouse', label: 'Grand Penthouse', count: ROOMS_DATA.filter(r => r.category === 'Penthouse').length },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5A028] text-white shadow-md'
                    : 'bg-[#F9F8F5] text-[#0B0B0C] hover:text-[#C5A028] border border-gray-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedCategory === cat.id ? 'bg-white text-[#C5A028]' : 'bg-gray-200 text-[#0B0B0C]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4 text-[#C5A028]" />
              <span className="text-xs text-[#55534E] font-medium whitespace-nowrap">Sort By:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F9F8F5] border border-gray-300 text-[#0B0B0C] rounded px-3 py-1.5 text-xs font-bold focus:outline-none focus:border-[#C5A028]"
            >
              <option value="recommended">BelAir Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

        </div>

        {/* Price Slider */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 text-xs text-[#55534E] pt-1">
          <div className="flex items-center gap-3 w-full max-w-xs">
            <span className="whitespace-nowrap">Max Price: <strong className="text-[#C5A028]">₹{maxPrice.toLocaleString('en-IN')}</strong></span>
            <input
              type="range"
              min="2500"
              max="25000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#C5A028]"
            />
          </div>

          <span className="text-[11px] text-emerald-700 font-bold self-end sm:self-auto">
            Showing {filteredRooms.length} Available Suites
          </span>
        </div>

      </div>

      {/* Room Grid */}
      {filteredRooms.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center text-gray-500 space-y-3">
          <BedDouble className="w-12 h-12 stroke-1 text-gray-400 mx-auto" />
          <p className="text-base font-serif text-[#0B0B0C]">No suites matched your filter criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setMaxPrice(25000);
            }}
            className="gold-outline-button px-4 py-2 rounded text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onViewDetails={(r) => onSelectRoom(r)}
              onQuickBook={(r) => onSelectRoom(r)}
            />
          ))}
        </div>
      )}

      {/* Guarantee Note */}
      <div className="bg-[#F5F2EA] border border-[#C5A028]/30 rounded-xl p-5 sm:p-6 text-center text-xs space-y-2">
        <h4 className="font-serif text-[#C5A028] font-bold text-sm flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4" /> BelAir Official Direct Booking Benefits
        </h4>
        <p className="text-[#55534E] max-w-2xl mx-auto leading-relaxed">
          When you book directly on our website, enjoy Best Rate Guarantee, complimentary room upgrades upon availability, early check-in preference, and priority spa access.
        </p>
      </div>

    </div>
  );
}
