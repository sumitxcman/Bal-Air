import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMsg, setCouponMsg] = useState(null);

  if (!isOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'BELAIR10') {
      setDiscountPercent(10);
      setCouponMsg({ success: true, text: 'BELAIR10 applied! 10% Luxury Discount activated.' });
    } else {
      setDiscountPercent(0);
      setCouponMsg({ success: false, text: 'Invalid coupon code. Try BELAIR10' });
    }
  };

  const rawSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const taxableSubtotal = rawSubtotal - discountAmount;
  const taxes = taxableSubtotal * 0.12; // 12% luxury hospitality tax
  const total = taxableSubtotal + taxes;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end">
      
      <div className="bg-white border-l border-[#C5A028]/40 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[#0B0B0C]">
            <ShoppingBag className="w-5 h-5 text-[#C5A028]" />
            <h3 className="text-lg font-serif font-bold">Your Luxury Cart</h3>
            <span className="text-xs bg-[#C5A028]/20 text-[#C5A028] px-2 py-0.5 rounded-full font-bold">
              {cartItems.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-black p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-gray-500 space-y-3">
              <ShoppingBag className="w-12 h-12 stroke-1 text-gray-400 mx-auto" />
              <p className="text-sm font-medium">Your cart is currently empty.</p>
              <p className="text-xs text-gray-400">Explore suites, dining packages, or digital gift vouchers.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="bg-[#F9F8F5] border border-gray-200 rounded-xl p-3.5 flex gap-3 relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200 shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-[#0B0B0C] line-clamp-1">{item.name}</h4>
                    {item.details && (
                      <span className="text-[10px] text-[#C5A028] font-medium block">{item.details}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-300 rounded bg-white overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-gray-500 hover:text-black hover:bg-gray-100 font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 font-bold text-[#0B0B0C] text-[11px]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2 py-0.5 text-gray-500 hover:text-black hover:bg-gray-100 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif font-bold text-[#C5A028] text-sm">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(idx)}
                  className="text-gray-400 hover:text-red-600 p-1 self-start"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Coupon Code Section */}
        {cartItems.length > 0 && (
          <div className="pt-3 border-t border-gray-200 space-y-2">
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon (e.g. BELAIR10)"
                  className="w-full bg-[#F9F8F5] border border-gray-300 text-[#0B0B0C] rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#C5A028] uppercase font-bold"
                />
                <Tag className="absolute right-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="gold-outline-button px-3 py-1.5 rounded text-xs font-bold"
              >
                Apply
              </button>
            </form>

            {couponMsg && (
              <p className={`text-[11px] font-bold flex items-center gap-1 ${
                couponMsg.success ? 'text-emerald-700' : 'text-red-600'
              }`}>
                {couponMsg.success && <CheckCircle2 className="w-3 h-3" />}
                {couponMsg.text}
              </p>
            )}
          </div>
        )}

        {/* Pricing Summary & Checkout Button */}
        {cartItems.length > 0 && (
          <div className="pt-4 space-y-3">
            <div className="space-y-1.5 text-xs text-[#55534E] border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#0B0B0C] font-semibold">₹{rawSubtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Luxury Offer (10% Off)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Hospitality Tax & GST (12%)</span>
                <span className="text-[#0B0B0C] font-semibold">₹{taxes.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#0B0B0C] pt-2 border-t border-gray-200">
                <span>Total Amount</span>
                <span className="text-[#C5A028] font-serif text-lg">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={onClose}
                className="bg-white border border-gray-300 hover:border-gray-500 text-[#0B0B0C] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                Continue Shopping
              </button>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="gold-button py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-md"
              >
                Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
