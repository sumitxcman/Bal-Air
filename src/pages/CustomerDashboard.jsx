import React, { useState } from 'react';
import { User, Calendar, ShoppingBag, Crown, Gift, Heart, FileText, CreditCard, ShieldCheck, Star, Sparkles, LogOut, CheckCircle2 } from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function CustomerDashboard({ user, bookingsHistory = [], wishlist = [], setActiveTab }) {
  const [activeTab, setDashboardTab] = useState('bookings');

  // Sample data fallback if empty
  const sampleBookings = bookingsHistory.length > 0 ? bookingsHistory : [
    {
      bookingId: 'BELAIR-BK-894201',
      date: '10 Aug 2026',
      room: 'BelAir Executive Suite',
      checkIn: '15 Aug 2026',
      checkOut: '16 Aug 2026',
      status: 'Confirmed',
      amount: 4800,
      guests: 2
    },
    {
      bookingId: 'BELAIR-BK-781190',
      date: '02 Jul 2026',
      room: 'BelAir Deluxe Room',
      checkIn: '05 Jul 2026',
      checkOut: '07 Jul 2026',
      status: 'Completed',
      amount: 5000,
      guests: 2
    }
  ];

  const loyaltyPoints = 1450;
  const currentTier = loyaltyPoints > 2000 ? 'Platinum' : loyaltyPoints > 1000 ? 'Gold' : 'Silver';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header Profile Summary */}
      <div className="bg-[#141414] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#E6C76A] text-[#0B0B0B] font-serif font-extrabold text-2xl flex items-center justify-center shadow-lg">
            RS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-serif font-bold text-white">Rohan Sharma</h1>
              <span className="bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" /> {currentTier} Member
              </span>
            </div>
            <p className="text-xs text-gray-400">rohan.sharma@example.com • +91 70175 76573</p>
          </div>
        </div>

        {/* Rewards Counter */}
        <div className="bg-[#0B0B0B] border border-gray-800 px-6 py-3 rounded-xl flex items-center gap-4 text-center">
          <div>
            <span className="text-[10px] text-gray-500 block uppercase">BelAir Reward Points</span>
            <span className="text-xl font-serif font-bold text-[#D4AF37]">{loyaltyPoints.toLocaleString('en-IN')} pts</span>
          </div>
          <div className="h-8 w-px bg-gray-800"></div>
          <div>
            <span className="text-[10px] text-gray-500 block uppercase">Tier Status</span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">{currentTier}</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Navigation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-4 space-y-1.5 h-fit">
          {[
            { id: 'bookings', label: 'My Bookings', icon: Calendar, count: sampleBookings.length },
            { id: 'rewards', label: 'BelAir Rewards', icon: Crown, badge: `${loyaltyPoints} pts` },
            { id: 'wishlist', label: 'Saved Wishlist', icon: Heart, count: wishlist.length },
            { id: 'vouchers', label: 'My Gift Vouchers', icon: Gift },
            { id: 'invoices', label: 'Invoices & Receipts', icon: FileText },
            { id: 'profile', label: 'Profile & Security', icon: User },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setDashboardTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                  isActive
                    ? 'bg-[#D4AF37] text-black font-bold shadow-lg'
                    : 'text-gray-300 hover:bg-[#0B0B0B] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#D4AF37]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-black text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {item.count}
                  </span>
                )}
                {item.badge && (
                  <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] font-bold px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content View */}
        <div className="lg:col-span-3">
          
          {/* TAB 1: MY BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <h3 className="text-lg font-serif font-bold text-white">Your Hotel Reservations</h3>
                <button 
                  onClick={() => setActiveTab('rooms')}
                  className="gold-button px-4 py-2 rounded text-xs font-bold"
                >
                  + Book New Suite
                </button>
              </div>

              <div className="space-y-4">
                {sampleBookings.map((b, idx) => (
                  <div key={idx} className="bg-[#0B0B0B] border border-gray-800 p-5 rounded-xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800/80 pb-3 text-xs">
                      <div>
                        <span className="text-[10px] text-gray-500 block">Booking Reference</span>
                        <strong className="text-white font-mono">{b.bookingId}</strong>
                      </div>

                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        b.status === 'Confirmed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' :
                        b.status === 'Completed' ? 'bg-blue-950 text-blue-400 border border-blue-500/30' :
                        'bg-gray-800 text-gray-400'
                      }`}>
                        ● {b.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
                      <div>
                        <span className="text-[10px] text-gray-500 block">Accommodation</span>
                        <strong className="text-white">{b.room}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">Dates Schedule</span>
                        <span className="text-white">{b.checkIn} → {b.checkOut}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">Total Paid</span>
                        <span className="text-[#D4AF37] font-serif font-bold text-sm">₹{b.amount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button 
                        onClick={() => alert(`Showing digital pass for ${b.bookingId}`)}
                        className="gold-outline-button px-3.5 py-1.5 rounded text-xs font-semibold"
                      >
                        View Digital Pass
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: BELAIR REWARDS LOYALTY */}
          {activeTab === 'rewards' && (
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Tier Status & Rewards</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">BELAIR PRIVILEGE CLUB</h3>
              </div>

              {/* Tiers Progress Bar */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs pt-2">
                {[
                  { name: 'Silver', req: '0 pts', active: true },
                  { name: 'Gold', req: '1,000 pts', active: true },
                  { name: 'Platinum', req: '2,500 pts', active: false },
                  { name: 'Royal', req: '5,000 pts', active: false },
                ].map((tier) => (
                  <div key={tier.name} className={`p-3 rounded-xl border ${
                    tier.active ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-[#0B0B0B] border-gray-800 text-gray-500'
                  }`}>
                    <Crown className={`w-4 h-4 mx-auto mb-1 ${tier.active ? 'text-[#D4AF37]' : 'text-gray-600'}`} />
                    <span className="font-bold block text-xs">{tier.name}</span>
                    <span className="text-[10px] text-gray-400">{tier.req}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0B0B0B] border border-gray-800 p-5 rounded-xl space-y-3 text-xs text-gray-300">
                <h4 className="font-serif font-bold text-[#D4AF37]">Your Current Gold Privileges:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">✓ 10% Extra Bonus Points on all Suite Bookings & Dining</li>
                  <li className="flex items-center gap-2">✓ Early Check-in & Late Checkout (subject to availability)</li>
                  <li className="flex items-center gap-2">✓ Complimentary Welcome Champagne & Belgian Truffles</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-white">Your Saved Wishlist</h3>
              <p className="text-xs text-gray-400">Save suites, stay packages, or vouchers for your future visits.</p>
              
              <div className="bg-[#0B0B0B] border border-gray-800 p-8 rounded-xl text-center text-xs text-gray-500 space-y-2">
                <Heart className="w-8 h-8 text-[#D4AF37] mx-auto opacity-50" />
                <p>Saved suites will appear here for quick booking.</p>
              </div>
            </div>
          )}

          {/* TAB 4: VOUCHERS */}
          {activeTab === 'vouchers' && (
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-white">Digital Gift Vouchers</h3>
              
              <div className="bg-[#0B0B0B] border border-[#D4AF37] p-5 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between font-bold text-[#D4AF37]">
                  <span>BELAIR GOLD PRIVILEGE PASS</span>
                  <span>₹5,000</span>
                </div>
                <p className="text-gray-400">Voucher Code: <strong>BELAIR-GIFT-99214A</strong></p>
                <span className="text-emerald-400 font-medium block">Valid until 31 Dec 2026</span>
              </div>
            </div>
          )}

          {/* TAB 5: INVOICES */}
          {activeTab === 'invoices' && (
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-white">Tax Invoices & Receipts</h3>
              
              <div className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl flex items-center justify-between text-xs text-gray-300">
                <div>
                  <strong className="text-white block">BELAIR-BK-894201</strong>
                  <span className="text-[10px] text-gray-500">Issued 10 Aug 2026 • ₹4,800</span>
                </div>
                <button 
                  onClick={() => alert('Downloading tax invoice PDF...')}
                  className="gold-outline-button px-3 py-1.5 rounded text-xs font-bold"
                >
                  Download PDF
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: PROFILE */}
          {activeTab === 'profile' && (
            <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-lg font-serif font-bold text-white">Account Profile & Security</h3>
              
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-gray-400 block mb-1">Full Name</label>
                  <input type="text" defaultValue="Rohan Sharma" className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2" />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Email</label>
                  <input type="email" defaultValue="rohan.sharma@example.com" className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2" />
                </div>
                <div>
                  <label className="text-gray-400 block mb-1">Phone</label>
                  <input type="text" defaultValue="070175 76573" className="w-full bg-[#0B0B0B] border border-gray-700 text-white rounded p-2" />
                </div>
                <button className="gold-button px-5 py-2 rounded text-xs font-bold mt-2">
                  Update Profile
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
