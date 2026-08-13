import React, { useState } from 'react';
import { Crown, DollarSign, Calendar, ShoppingBag, Users, Percent, CheckCircle2, XCircle, Clock, Plus, Tag, RefreshCw, BarChart3, Shield, Star } from 'lucide-react';
import { ROOMS_DATA } from '../data/roomsData';
import { SHOP_PRODUCTS } from '../data/shopData';

export default function AdminDashboard() {
  const [role, setRole] = useState('Super Admin');
  const [activeModule, setActiveModule] = useState('overview');

  // Simulated Admin State
  const [bookings, setBookings] = useState([
    { id: 'BELAIR-BK-894201', guest: 'Rohan Sharma', room: 'BelAir Executive Suite', dates: '15 Aug - 16 Aug', amount: 4800, status: 'Confirmed', payment: 'Paid (UPI)' },
    { id: 'BELAIR-BK-894202', guest: 'Priya Malhotra', room: 'BelAir Royal Suite', dates: '15 Aug - 17 Aug', amount: 15000, status: 'Checked In', payment: 'Paid (Card)' },
    { id: 'BELAIR-BK-894203', guest: 'Vikram Kapoor', room: 'BelAir Deluxe Room', dates: '16 Aug - 18 Aug', amount: 5000, status: 'Pending', payment: 'Pending' },
    { id: 'BELAIR-BK-894204', guest: 'Ananya Deshmukh', room: 'BelAir Grand Penthouse', dates: '18 Aug - 20 Aug', amount: 37000, status: 'Confirmed', payment: 'Paid (NetBanking)' },
  ]);

  const [coupons, setCoupons] = useState([
    { code: 'BELAIR10', discount: '10%', type: 'Percentage', usage: 48, status: 'Active' },
    { code: 'LUXURY2026', discount: '₹1,500', type: 'Fixed', usage: 19, status: 'Active' },
  ]);

  const [newCouponCode, setNewCouponCode] = useState('');
  const [newDiscount, setNewDiscount] = useState('');

  const updateBookingStatus = (id, newStatus) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const handleAddCoupon = (e) => {
    e.preventDefault();
    if (newCouponCode && newDiscount) {
      setCoupons([...coupons, {
        code: newCouponCode.toUpperCase(),
        discount: newDiscount,
        type: 'Custom',
        usage: 0,
        status: 'Active'
      }]);
      setNewCouponCode('');
      setNewDiscount('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Top Role Switcher Header */}
      <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-black font-extrabold flex items-center justify-center">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Management Console</span>
            <h1 className="text-2xl font-serif font-bold text-white">BELAIR ADMIN DASHBOARD</h1>
          </div>
        </div>

        {/* Staff Role Selector */}
        <div className="flex items-center gap-2 bg-[#0B0B0B] border border-gray-800 p-2 rounded-xl">
          <Shield className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs text-gray-400 font-medium">Active Staff Role:</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-[#141414] border border-[#D4AF37]/50 text-[#D4AF37] rounded px-3 py-1 text-xs font-bold focus:outline-none"
          >
            <option value="Super Admin">Super Admin (Full Access)</option>
            <option value="Hotel Manager">Hotel Manager (Bookings & Rooms)</option>
            <option value="Receptionist">Receptionist (Check-in / Desk)</option>
            <option value="E-commerce Manager">E-commerce Manager (Shop & Coupons)</option>
            <option value="Accountant">Accountant (Payments & Invoices)</option>
          </select>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Revenue', value: '₹14,85,200', change: '+18.4%', icon: DollarSign, color: 'text-emerald-400' },
          { label: "Today's Bookings", value: '8 Bookings', change: '3 Pending', icon: Calendar, color: 'text-[#D4AF37]' },
          { label: 'E-commerce Sales', value: '34 Orders', change: '₹1,42,000', icon: ShoppingBag, color: 'text-blue-400' },
          { label: 'Occupancy Rate', value: '88%', change: 'Cliff Tower', icon: Percent, color: 'text-[#E6C76A]' },
          { label: 'Total Guests', value: '412 Registered', change: '+12 this week', icon: Users, color: 'text-purple-400' },
          { label: 'Pending Payments', value: '₹12,500', change: '2 Actions', icon: Clock, color: 'text-amber-400' },
        ].map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-[#141414] border border-gray-800 p-4 rounded-xl space-y-2 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{s.label}</span>
                <Icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <div className="text-lg font-serif font-bold text-white">{s.value}</div>
              <span className="text-[10px] text-gray-400 block">{s.change}</span>
            </div>
          );
        })}
      </div>

      {/* Module Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-800 pb-4">
        {[
          { id: 'overview', label: 'Dashboard Analytics' },
          { id: 'bookings', label: 'Booking Management' },
          { id: 'inventory', label: 'Room & Suite Inventory' },
          { id: 'ecommerce', label: 'Shop Products & Coupons' },
          { id: 'reviews', label: 'Review Approvals' },
          { id: 'reports', label: 'Financial Reports' },
        ].map((mod) => (
          <button
            key={mod.id}
            onClick={() => setActiveModule(mod.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeModule === mod.id
                ? 'bg-[#D4AF37] text-black font-bold shadow-lg'
                : 'bg-[#141414] text-gray-300 hover:text-white border border-gray-800'
            }`}
          >
            {mod.label}
          </button>
        ))}
      </div>

      {/* MODULE 1: BOOKINGS MANAGEMENT */}
      {(activeModule === 'overview' || activeModule === 'bookings') && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div>
              <h3 className="text-lg font-serif font-bold text-white">Live Booking Reservations Management</h3>
              <p className="text-xs text-gray-400">Update reservation lifecycle (Pending → Confirmed → Checked In → Completed → Cancelled)</p>
            </div>
            <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] font-bold px-3 py-1 rounded">
              Role: {role}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#0B0B0B] text-gray-400 uppercase tracking-widest text-[10px] border-b border-gray-800">
                <tr>
                  <th className="p-3">Ref ID</th>
                  <th className="p-3">Guest Name</th>
                  <th className="p-3">Room / Suite</th>
                  <th className="p-3">Dates Schedule</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Payment</th>
                  <th className="p-3">Current Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-[#0B0B0B]/60 transition-colors">
                    <td className="p-3 font-mono font-bold text-[#D4AF37]">{b.id}</td>
                    <td className="p-3 font-medium text-white">{b.guest}</td>
                    <td className="p-3">{b.room}</td>
                    <td className="p-3">{b.dates}</td>
                    <td className="p-3 font-serif font-bold text-white">₹{b.amount.toLocaleString('en-IN')}</td>
                    <td className="p-3">
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-medium">
                        {b.payment}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        b.status === 'Checked In' ? 'bg-blue-950 text-blue-400 border border-blue-500/30' :
                        b.status === 'Confirmed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' :
                        b.status === 'Pending' ? 'bg-amber-950 text-amber-400 border border-amber-500/30' :
                        'bg-red-950 text-red-400'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <select
                        value={b.status}
                        onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                        className="bg-[#0B0B0B] border border-gray-700 text-white text-[11px] rounded px-2 py-1 focus:border-[#D4AF37]"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Checked In">Checked In</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODULE 2: ROOM & INVENTORY */}
      {activeModule === 'inventory' && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <h3 className="text-lg font-serif font-bold text-white">Hotel Room Inventory & Dynamic Pricing</h3>
            <button className="gold-button px-4 py-2 rounded text-xs font-bold flex items-center gap-1">
              <Plus className="w-4 h-4" /> Add New Suite
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROOMS_DATA.map((r) => (
              <div key={r.id} className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">{r.name}</h4>
                  <span className="text-xs font-serif text-[#D4AF37] font-bold">₹{r.price}/night</span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-1">{r.size} • {r.bed}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-800">
                  <span className="text-emerald-400 font-medium">✓ Available</span>
                  <button className="text-[#D4AF37] underline text-[11px]">Edit Rates</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODULE 3: E-COMMERCE PRODUCTS & COUPONS */}
      {activeModule === 'ecommerce' && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <h3 className="text-lg font-serif font-bold text-white">Coupons & Offer Code Creator</h3>
          </div>

          {/* Create Coupon Form */}
          <form onSubmit={handleAddCoupon} className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl flex flex-col md:flex-row gap-3 items-end">
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">New Coupon Code</label>
              <input
                type="text"
                placeholder="e.g. FESTIVE15"
                value={newCouponCode}
                onChange={(e) => setNewCouponCode(e.target.value)}
                className="w-full bg-[#141414] border border-gray-700 text-white rounded p-2 text-xs uppercase"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">Discount Value</label>
              <input
                type="text"
                placeholder="e.g. 15% or ₹1,000"
                value={newDiscount}
                onChange={(e) => setNewDiscount(e.target.value)}
                className="w-full bg-[#141414] border border-gray-700 text-white rounded p-2 text-xs"
              />
            </div>
            <button
              type="submit"
              className="gold-button px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Create Coupon Code
            </button>
          </form>

          {/* Active Coupons List */}
          <div className="space-y-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">Active Coupon Codes</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coupons.map((c, i) => (
                <div key={i} className="bg-[#0B0B0B] border border-[#D4AF37]/30 p-4 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#D4AF37] font-mono text-sm block">{c.code}</strong>
                    <span className="text-gray-400">{c.discount} Discount • Used {c.usage} times</span>
                  </div>
                  <span className="bg-emerald-950 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold">
                    ACTIVE
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* MODULE 4: REVIEWS APPROVAL */}
      {activeModule === 'reviews' && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="text-lg font-serif font-bold text-white">Review Approvals & Moderation</h3>
          <p className="text-xs text-gray-400">All 21 Google reviews and direct customer submissions are approved for public display.</p>

          <div className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl flex items-center justify-between text-xs text-gray-300">
            <div>
              <div className="flex text-[#D4AF37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <strong className="text-white block">Rohan Sharma — "Absolute perfection in Dehradun..."</strong>
            </div>
            <span className="bg-emerald-950 text-emerald-400 px-3 py-1 rounded font-bold text-[10px]">
              APPROVED & PUBLISHED
            </span>
          </div>
        </div>
      )}

      {/* MODULE 5: REPORTS */}
      {activeModule === 'reports' && (
        <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <h3 className="text-lg font-serif font-bold text-white">Financial & Occupancy Analytics Report</h3>
          
          <div className="grid grid-cols-3 gap-4 text-center text-xs">
            <div className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl">
              <span className="text-gray-500 block">Monthly Revenue</span>
              <strong className="text-xl font-serif text-[#D4AF37]">₹14.85 Lakhs</strong>
            </div>
            <div className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl">
              <span className="text-gray-500 block">Average Daily Rate (ADR)</span>
              <strong className="text-xl font-serif text-white">₹5,420</strong>
            </div>
            <div className="bg-[#0B0B0B] border border-gray-800 p-4 rounded-xl">
              <span className="text-gray-500 block">RevPAR</span>
              <strong className="text-xl font-serif text-emerald-400">₹4,770</strong>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
