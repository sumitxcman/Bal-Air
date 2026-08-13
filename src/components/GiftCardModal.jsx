import React, { useState } from 'react';
import { X, Gift, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function GiftCardModal({ isOpen, onClose, onAddToCart }) {
  const [amount, setAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Wishing you an unforgettable luxury stay at BelAir!');
  const [generatedCode, setGeneratedCode] = useState(null);

  if (!isOpen) return null;

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const handleCreateVoucher = (e) => {
    e.preventDefault();
    const voucherCode = 'BELAIR-GIFT-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setGeneratedCode(voucherCode);

    const giftProduct = {
      id: `gift-voucher-${Date.now()}`,
      name: `BelAir Digital Gift Voucher (₹${finalAmount.toLocaleString('en-IN')})`,
      price: finalAmount,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      details: `For: ${recipientName || 'Valued Guest'} | Code: ${voucherCode}`
    };

    onAddToCart(giftProduct);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      
      <div className="bg-[#141414] border border-[#D4AF37]/50 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
          <Gift className="w-5 h-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">BelAir Digital Privileges</span>
        </div>

        <h2 className="text-2xl font-serif font-bold text-white mb-2">
          Create Luxury Gift Voucher
        </h2>

        <p className="text-xs text-gray-400 mb-6">
          Gift an unforgettable 5-star experience in Dehradun. Redeemable for suites, spa, fine dining, or experiences.
        </p>

        {!generatedCode ? (
          <form onSubmit={handleCreateVoucher} className="space-y-4">
            
            {/* Amount Presets */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-300 block mb-2">
                Select Voucher Value
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {[2500, 5000, 10000, 25000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount('');
                    }}
                    className={`py-2 rounded text-xs font-bold border transition-all ${
                      amount === val && !customAmount
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                        : 'bg-[#0B0B0B] text-gray-300 border-gray-700 hover:border-[#D4AF37]'
                    }`}
                  >
                    ₹{val.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Or enter custom amount in INR (Min ₹1,000)"
                className="w-full bg-[#0B0B0B] border border-gray-700 focus:border-[#D4AF37] text-white rounded px-3 py-2 text-xs focus:outline-none"
              />
            </div>

            {/* Recipient Details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-gray-400 block mb-1">Recipient Name</label>
                <input
                  type="text"
                  required
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="text-[11px] text-gray-400 block mb-1">Sender Name</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Ananya"
                  className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-gray-400 block mb-1">Recipient Email for Digital Delivery</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recipient@example.com"
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="text-[11px] text-gray-400 block mb-1">Personal Message</label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded px-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full gold-button py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              <Sparkles className="w-4 h-4" />
              Generate Voucher & Add to Cart (₹{finalAmount.toLocaleString('en-IN')})
            </button>

          </form>
        ) : (
          <div className="space-y-4 text-center py-4">
            <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-serif font-bold text-white">Voucher Generated Successfully!</h3>
            
            {/* Voucher Preview Card */}
            <div className="bg-[#0B0B0B] border border-[#D4AF37] rounded-xl p-5 text-left relative overflow-hidden space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-serif text-[#D4AF37] font-bold text-base">BELAIR LUXURY STAY</h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">Digital Privilege Pass</span>
                </div>
                <span className="text-xl font-bold font-serif text-[#D4AF37]">₹{finalAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="text-xs space-y-1 text-gray-300 border-t border-gray-800 pt-2">
                <p><strong>To:</strong> {recipientName}</p>
                <p><strong>From:</strong> {senderName}</p>
                <p className="text-[11px] italic text-[#E6C76A]">"{message}"</p>
              </div>

              <div className="bg-[#141414] border border-[#D4AF37]/40 p-2 rounded text-center text-xs font-mono font-bold text-[#D4AF37] tracking-wider">
                VOUCHER CODE: {generatedCode}
              </div>
            </div>

            <p className="text-xs text-gray-400">Item added to your cart. Complete checkout to finalize email & WhatsApp dispatch.</p>

            <button
              onClick={onClose}
              className="gold-button w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Continue & View Cart
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
