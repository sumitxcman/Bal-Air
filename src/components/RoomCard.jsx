import React from 'react';
import { Star, Maximize, Users, Bed, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoomCard({ room, onViewDetails, onQuickBook }) {
  return (
    <div className="bg-white border border-[#C5A028]/25 hover:border-[#C5A028] rounded-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl">
      
      {/* Image Container with Badges */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Popular Tag */}
        {room.popular && (
          <span className="absolute top-3 left-3 bg-[#C5A028] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
            Popular Choice
          </span>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-[#C5A028]/40 px-2.5 py-1 rounded-full flex items-center gap-1 text-xs shadow-xs">
          <Star className="w-3.5 h-3.5 fill-[#C5A028] text-[#C5A028]" />
          <span className="font-bold text-[#0B0B0C]">{room.rating}</span>
          <span className="text-gray-500 text-[10px]">({room.reviewsCount})</span>
        </div>

        {/* Room Title overlay on image bottom */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] uppercase tracking-widest text-[#F3D779] font-bold block mb-0.5 drop-shadow-sm">
            {room.category}
          </span>
          <h3 className="text-lg font-serif font-bold text-white drop-shadow-md">
            {room.name}
          </h3>
        </div>
      </div>

      {/* Details & Specs */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <p className="text-xs text-[#55534E] line-clamp-2 leading-relaxed">
          {room.description}
        </p>

        {/* Quick Room Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-200 text-xs text-[#0B0B0C]">
          <div className="flex flex-col items-center text-center">
            <Maximize className="w-4 h-4 text-[#C5A028] mb-1" />
            <span className="text-[10px] text-gray-500">Size</span>
            <span className="font-semibold text-[11px]">{room.size}</span>
          </div>
          <div className="flex flex-col items-center text-center border-x border-gray-200">
            <Bed className="w-4 h-4 text-[#C5A028] mb-1" />
            <span className="text-[10px] text-gray-500">Bed</span>
            <span className="font-semibold text-[11px]">{room.bed}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-4 h-4 text-[#C5A028] mb-1" />
            <span className="text-[10px] text-gray-500">Guests</span>
            <span className="font-semibold text-[11px]">Up to {room.maxGuests}</span>
          </div>
        </div>

        {/* Top Amenities */}
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="text-[10px] bg-[#F5F2EA] border border-gray-200 text-[#0B0B0C] px-2 py-0.5 rounded flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-2.5 h-2.5 text-[#C5A028]" />
              {amenity}
            </span>
          ))}
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-500 block uppercase font-medium">Price per night</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold font-serif text-[#C5A028]">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              {room.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{room.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(room)}
              className="gold-outline-button px-3 py-2 rounded text-xs font-bold"
            >
              Details
            </button>
            <button
              onClick={() => onQuickBook(room)}
              className="gold-button px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"
            >
              Book
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
