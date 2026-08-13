import React, { useState } from 'react';
import { X, Star, Maximize, Users, Bed, Clock, ShieldCheck, Check, Plus, Coffee, Sparkles, MessageCircle } from 'lucide-react';
import { LUXURY_EXTRAS } from '../data/roomsData';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function RoomDetailModal({ room, onClose, onConfirmBooking }) {
  const [selectedImage, setSelectedImage] = useState(room.image);
  const [nights, setNights] = useState(1);
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (extraId) => {
    if (selectedExtras.includes(extraId)) {
      setSelectedExtras(selectedExtras.filter(id => id !== extraId));
    } else {
      setSelectedExtras([...selectedExtras, extraId]);
    }
  };

  const extrasCost = selectedExtras.reduce((sum, extraId) => {
    const item = LUXURY_EXTRAS.find(e => e.id === extraId);
    return sum + (item ? item.price : 0);
  }, 0);

  const roomSubtotal = room.price * nights;
  const grandTotal = roomSubtotal + extrasCost;

  const handleBookNow = () => {
    const extrasDetails = LUXURY_EXTRAS.filter(e => selectedExtras.includes(e.id));
    onConfirmBooking({
      room,
      nights,
      guestsCount,
      selectedExtras: extrasDetails,
      extrasCost,
      roomSubtotal,
      grandTotal
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#0B0B0B]/80 hover:bg-[#D4AF37] text-white hover:text-[#0B0B0B] p-2 rounded-full border border-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gray-800">
              <img
                src={selectedImage}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img ? 'border-[#D4AF37] scale-105' : 'border-gray-800 opacity-60'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Quick Policy */}
            <div className="bg-[#0B0B0B] border border-gray-800 rounded-xl p-4 text-xs space-y-2">
              <h4 className="font-serif text-[#D4AF37] font-semibold flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Hotel Check-in & Check-out Policy
              </h4>
              <div className="flex justify-between text-gray-300">
                <span>Check-in: <strong className="text-white">{HOTEL_DETAILS.checkIn}</strong></span>
                <span>Check-out: <strong className="text-white">{HOTEL_DETAILS.checkOut}</strong></span>
              </div>
              <p className="text-[11px] text-gray-500">
                * Govt ID required at check-in. Free cancellation up to 48 hours prior.
              </p>
            </div>

            {/* WhatsApp Fast Track Inquiry */}
            <a
              href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}?text=Hello!%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 hover:bg-emerald-900/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-950" />
              Inquire via WhatsApp Direct Desk
            </a>
          </div>

          {/* Right Column: Room Details & Extras */}
          <div className="space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-widest text-[#E6C76A] font-semibold">
                  {room.category} Accommodation
                </span>
                <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-[#D4AF37]" />
                  <span className="font-bold">{room.rating}</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-white mb-2">
                {room.name}
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {room.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-800 text-xs text-gray-300 mb-4">
                <div>
                  <span className="text-[10px] text-gray-500 block">Area</span>
                  <span className="font-medium text-white">{room.size}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Bedding</span>
                  <span className="font-medium text-white">{room.bed}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block">Capacity</span>
                  <span className="font-medium text-white">Max {room.maxGuests} Guests</span>
                </div>
              </div>

              {/* Booking Options: Nights & Guests */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <label className="text-[11px] text-gray-400 block mb-1">Nights Duration</label>
                  <select
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2 text-xs font-medium focus:border-[#D4AF37]"
                  >
                    {[1, 2, 3, 4, 5, 7, 10].map(n => (
                      <option key={n} value={n}>{n} Night{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[11px] text-gray-400 block mb-1">Guests Staying</label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2 text-xs font-medium focus:border-[#D4AF37]"
                  >
                    {[1, 2, 3, 4, 5].map(g => (
                      <option key={g} value={g}>{g} Guest{g > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add Luxury Extras Section */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Enhance Your Stay (Luxury Extras)
                  </h3>
                  <span className="text-[10px] text-gray-500">Optional</span>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {LUXURY_EXTRAS.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          isSelected 
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white' 
                            : 'bg-[#0B0B0B] border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-gray-600'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="font-medium text-white block">{extra.name}</span>
                            <span className="text-[10px] text-gray-500">{extra.description}</span>
                          </div>
                        </div>
                        <span className="font-semibold text-[#D4AF37]">
                          +₹{extra.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Live Price Breakdown & Booking Button */}
            <div className="bg-[#0B0B0B] border border-[#D4AF37]/30 p-4 rounded-xl space-y-3">
              <div className="text-xs space-y-1.5 text-gray-400">
                <div className="flex justify-between">
                  <span>Room Rate ({nights} night{nights > 1 ? 's' : ''}):</span>
                  <span className="text-white font-medium">₹{roomSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {extrasCost > 0 && (
                  <div className="flex justify-between text-[#E6C76A]">
                    <span>Selected Luxury Extras:</span>
                    <span>+₹{extrasCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-800 text-sm font-bold text-white">
                  <span>Total Payable:</span>
                  <span className="text-[#D4AF37] font-serif text-lg">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full gold-button py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2"
              >
                Proceed to Book Suite
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
