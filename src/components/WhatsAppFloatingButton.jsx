import React, { useState } from 'react';
import { MessageCircle, PhoneCall, X } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${HOTEL_DETAILS.whatsappNumber}?text=Hello%20BelAir%20Luxury%20Stay!%20I%20would%20like%20to%20inquire%20about%20booking%20and%20room%20availability.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Floating Popup Card */}
      {isOpen && (
        <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-xl p-4 shadow-2xl w-72 animate-in fade-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-white">BelAir Concierge Online</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 mb-3 leading-relaxed">
            Need instant booking assistance, room inquiry, or custom luxury requests? Chat with us directly on WhatsApp or call our desk!
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>

            <a
              href={`tel:${HOTEL_DETAILS.phone}`}
              className="w-full bg-[#0B0B0B] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              Call {HOTEL_DETAILS.phone}
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Floating Circle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-emerald-300/30"
        title="WhatsApp Direct Inquiry"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#0B0B0B] animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#0B0B0B]"></span>
        
        <MessageCircle className="w-7 h-7 fill-white" />
        
        <span className="absolute right-16 bg-[#0B0B0B] border border-[#D4AF37]/50 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          WhatsApp Instant Assistant
        </span>
      </button>

    </div>
  );
}
