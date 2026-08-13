import React from 'react';
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function PolicyModal({ type, onClose }) {
  if (!type) return null;

  const policies = {
    privacy: {
      title: "BelAir Privacy Policy",
      icon: ShieldCheck,
      content: [
        "Your privacy and security are paramount at BelAir Luxury Stay.",
        "We collect personal information solely for booking confirmation, payment verification, and WhatsApp/Email stay notifications.",
        "All payment transactions are encrypted using bank-grade 256-bit SSL protocols.",
        "We never sell or distribute guest data to third-party advertisers."
      ]
    },
    terms: {
      title: "Terms & Conditions of Stay",
      icon: FileText,
      content: [
        `Standard Check-in time is ${HOTEL_DETAILS.checkIn} and Check-out time is ${HOTEL_DETAILS.checkOut}.`,
        "Government-issued photo ID (Aadhaar, Passport, Driving License) is mandatory for all adult guests upon arrival.",
        "Early check-in and late checkout are subject to room availability and prior desk confirmation.",
        "Smoking is strictly restricted to designated outdoor balconies and terrace lounge areas."
      ]
    },
    cancellation: {
      title: "Cancellation & Refund Policy",
      icon: AlertCircle,
      content: [
        "Free cancellation up to 48 hours prior to the scheduled check-in time.",
        "Cancellations made within 48 hours of check-in will incur a 1-night room charge.",
        "Refunds for eligible cancellations are processed within 3-5 business days back to the original payment source.",
        "Non-refundable luxury promotional packages and non-refundable peak season rates are specified at booking time."
      ]
    }
  };

  const current = policies[type] || policies.privacy;
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
          <Icon className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">Official Policy</span>
        </div>

        <h2 className="text-2xl font-serif font-bold text-white mb-4">
          {current.title}
        </h2>

        <div className="space-y-3 text-xs text-gray-300 bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl">
          {current.content.map((paragraph, i) => (
            <p key={i} className="flex items-start gap-2 leading-relaxed">
              <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
              <span>{paragraph}</span>
            </p>
          ))}
        </div>

        <button
          onClick={onClose}
          className="gold-button w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider mt-6"
        >
          Close & Return
        </button>

      </div>
    </div>
  );
}
