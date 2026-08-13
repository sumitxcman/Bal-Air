import React, { useState } from 'react';
import { CheckCircle2, CreditCard, ShieldCheck, Download, MessageCircle, ArrowRight, User, Calendar, Sparkles, Building, Lock } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function CheckoutPage({ cartItems, clearCart, onBookingSuccess }) {
  const [step, setStep] = useState(1);
  
  // Step 1: Guest Info
  const [guestInfo, setGuestInfo] = useState({
    firstName: 'Rohan',
    lastName: 'Sharma',
    email: 'rohan.sharma@example.com',
    phone: '070175 76573',
    specialRequests: 'High floor suite preferred'
  });

  // Step 2: Dates & Guests
  const [bookingInfo, setBookingInfo] = useState({
    checkIn: '2026-08-15',
    checkOut: '2026-08-16',
    guestsCount: 2
  });

  // Step 3: Payment Method
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('rohan@upi');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8912');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvv, setCardCvv] = useState('***');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const rawSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxes = rawSubtotal * 0.12;
  const totalAmount = rawSubtotal + taxes;

  const handleCompletePayment = (e) => {
    e.preventDefault();
    
    const newBooking = {
      bookingId: 'BELAIR-BK-' + Math.floor(100000 + Math.random() * 900000),
      orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      guest: guestInfo,
      booking: bookingInfo,
      items: cartItems,
      totalAmount,
      status: 'Confirmed',
      paymentMethod: paymentMethod.toUpperCase()
    };

    setConfirmedBooking(newBooking);
    clearCart();
    setStep(5); // Success step
    if (onBookingSuccess) onBookingSuccess(newBooking);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Step Stepper Header */}
      {step <= 4 && (
        <div className="bg-[#141414] border border-[#D4AF37]/30 rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { num: 1, title: 'Guest Info' },
              { num: 2, title: 'Dates & Guests' },
              { num: 3, title: 'Extras & Summary' },
              { num: 4, title: 'Secure Payment' },
            ].map((s) => (
              <div
                key={s.num}
                onClick={() => s.num < step && setStep(s.num)}
                className={`py-2 px-1 rounded-lg transition-all ${
                  step === s.num
                    ? 'bg-[#D4AF37] text-black font-bold'
                    : step > s.num
                    ? 'bg-emerald-950/60 text-emerald-400 cursor-pointer border border-emerald-500/30'
                    : 'bg-[#0B0B0B] text-gray-500'
                }`}
              >
                <span className="block text-[10px] uppercase">Step 0{s.num}</span>
                <span className="font-semibold text-xs">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 1: Guest Information */}
      {step === 1 && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <User className="w-5 h-5" />
            <h2 className="text-xl font-serif font-bold text-white">01 — Guest Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">First Name</label>
              <input
                type="text"
                required
                value={guestInfo.firstName}
                onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Last Name</label>
              <input
                type="text"
                required
                value={guestInfo.lastName}
                onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Email Address</label>
              <input
                type="email"
                required
                value={guestInfo.email}
                onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Phone Number (WhatsApp notifications)</label>
              <input
                type="tel"
                required
                value={guestInfo.phone}
                onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 block mb-1">Special Requests & Dietary Preferences</label>
            <textarea
              rows={2}
              value={guestInfo.specialRequests}
              onChange={(e) => setGuestInfo({ ...guestInfo, specialRequests: e.target.value })}
              className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="gold-button px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              Continue to Booking Info
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Booking Information */}
      {step === 2 && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Calendar className="w-5 h-5" />
            <h2 className="text-xl font-serif font-bold text-white">02 — Stay & Guest Schedule</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Check-in Date</label>
              <input
                type="date"
                value={bookingInfo.checkIn}
                onChange={(e) => setBookingInfo({ ...bookingInfo, checkIn: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Check-out Date</label>
              <input
                type="date"
                value={bookingInfo.checkOut}
                onChange={(e) => setBookingInfo({ ...bookingInfo, checkOut: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Total Guests</label>
              <select
                value={bookingInfo.guestsCount}
                onChange={(e) => setBookingInfo({ ...bookingInfo, guestsCount: Number(e.target.value) })}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2.5 text-xs focus:border-[#D4AF37]"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
                <option value={5}>5+ Guests</option>
              </select>
            </div>
          </div>

          <div className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl text-xs space-y-1">
            <span className="font-semibold text-[#D4AF37] block">Standard Timing at BelAir Dehradun:</span>
            <p className="text-gray-400">Check-in: 2:00 PM | Check-out: 12:00 PM</p>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="bg-[#0B0B0B] border border-gray-700 text-gray-300 px-5 py-2.5 rounded text-xs font-bold"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="gold-button px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              Review Extras & Summary
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Order Summary & Review */}
      {step === 3 && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl font-serif font-bold text-white">03 — Reservation & Order Summary</h2>
          </div>

          {/* Cart Items List */}
          <div className="space-y-3 border-b border-gray-800 pb-4">
            {cartItems.map((item, idx) => (
              <div key={idx} className="bg-[#0B0B0B] border border-gray-800 p-3 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{item.name}</h4>
                    <span className="text-[10px] text-gray-400">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="font-serif font-bold text-[#D4AF37]">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          {/* Price Calculations */}
          <div className="space-y-1.5 text-xs text-gray-400 pt-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="text-white">₹{rawSubtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Luxury Hospitality Taxes (12%):</span>
              <span className="text-white">₹{taxes.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-gray-800">
              <span>Total Payable Amount:</span>
              <span className="text-[#D4AF37] font-serif text-lg">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => setStep(2)}
              className="bg-[#0B0B0B] border border-gray-700 text-gray-300 px-5 py-2.5 rounded text-xs font-bold"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="gold-button px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              Proceed to Secure Payment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Payment Gateway */}
      {step === 4 && (
        <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Lock className="w-5 h-5" />
              <h2 className="text-xl font-serif font-bold text-white">04 — Payment Authorization</h2>
            </div>
            <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <ShieldCheck className="w-4 h-4" /> 256-Bit SSL Encryption
            </span>
          </div>

          {/* Payment Method Selector */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { id: 'upi', label: 'UPI / QR' },
              { id: 'card', label: 'Credit / Debit Card' },
              { id: 'netbanking', label: 'Net Banking' },
              { id: 'wallet', label: 'Wallets' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setPaymentMethod(m.id)}
                className={`py-3 rounded-lg text-xs font-bold border transition-all ${
                  paymentMethod === m.id
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-[#0B0B0B] text-gray-300 border-gray-700'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* UPI Form */}
          {paymentMethod === 'upi' && (
            <div className="bg-[#0B0B0B] border border-gray-800 p-5 rounded-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-white p-2 rounded-lg shrink-0 flex items-center justify-center">
                  {/* Simulated QR */}
                  <div className="w-full h-full bg-gray-900 rounded p-1 flex flex-col items-center justify-center text-[9px] text-white font-mono text-center">
                    <span>BELAIR UPI QR</span>
                    <span className="text-[7px] text-[#D4AF37] mt-1">SCAN & PAY</span>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <label className="text-xs text-gray-300 block">Enter UPI VPA (GPay / PhonePe / Paytm)</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full bg-[#141414] border border-gray-700 text-white rounded p-2 text-xs focus:border-[#D4AF37]"
                  />
                  <p className="text-[11px] text-gray-500">Scan QR or authorize request on your UPI App.</p>
                </div>
              </div>
            </div>
          )}

          {/* Card Form */}
          {paymentMethod === 'card' && (
            <div className="bg-[#0B0B0B] border border-gray-800 p-5 rounded-xl space-y-3">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full bg-[#141414] border border-gray-700 text-white rounded p-2 text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Expiry Date</label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    className="w-full bg-[#141414] border border-gray-700 text-white rounded p-2 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">CVV / CVC</label>
                  <input
                    type="password"
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    className="w-full bg-[#141414] border border-gray-700 text-white rounded p-2 text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit Payment */}
          <div className="pt-4 flex items-center justify-between border-t border-gray-800">
            <div>
              <span className="text-[11px] text-gray-400 block">Total Amount to Pay</span>
              <span className="text-2xl font-serif font-bold text-[#D4AF37]">₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={handleCompletePayment}
              className="gold-button px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-2xl flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              Authorize & Confirm Booking
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Booking Confirmed Screen */}
      {step === 5 && confirmedBooking && (
        <div className="bg-[#141414] border border-emerald-500/50 rounded-2xl p-8 space-y-6 text-center shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Payment Successful</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">BOOKING CONFIRMED</h2>
            <p className="text-xs text-gray-400 mt-1">We look forward to welcoming you to BelAir Luxury Stay, Dehradun.</p>
          </div>

          {/* Booking Pass Receipt */}
          <div className="bg-[#0B0B0B] border border-[#D4AF37] rounded-xl p-6 max-w-lg mx-auto text-left space-y-4 shadow-xl">
            <div className="flex justify-between items-start border-b border-gray-800 pb-3">
              <div>
                <h3 className="font-serif font-bold text-[#D4AF37] text-lg">BELAIR LUXURY STAY</h3>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">{HOTEL_DETAILS.address}</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-1 rounded">
                CONFIRMED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
              <div>
                <span className="text-[10px] text-gray-500 block">Booking Reference ID</span>
                <strong className="text-white font-mono">{confirmedBooking.bookingId}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block">Order Transaction ID</span>
                <strong className="text-white font-mono">{confirmedBooking.orderId}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block">Guest Name</span>
                <strong className="text-white">{confirmedBooking.guest.firstName} {confirmedBooking.guest.lastName}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block">Contact Phone</span>
                <strong className="text-white">{confirmedBooking.guest.phone}</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block">Check-In</span>
                <strong className="text-white">{confirmedBooking.booking.checkIn} (2:00 PM)</strong>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block">Check-Out</span>
                <strong className="text-white">{confirmedBooking.booking.checkOut} (12:00 PM)</strong>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-3 flex justify-between items-center text-sm font-bold text-white">
              <span>Total Paid ({confirmedBooking.paymentMethod})</span>
              <span className="text-[#D4AF37] font-serif text-xl">₹{confirmedBooking.totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}?text=Hello!%20My%20booking%20ID%20is%20${confirmedBooking.bookingId}.%20Please%20send%20my%20check-in%20voucher.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Receive Voucher on WhatsApp
            </a>

            <button
              onClick={() => alert(`Invoice generated for ${confirmedBooking.bookingId}`)}
              className="gold-outline-button px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Digital Invoice PDF
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
