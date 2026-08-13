import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Crown
} from 'lucide-react';
import { HOTEL_DETAILS } from '../data/hotelDetails';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  cartCount, 
  setIsCartOpen, 
  wishlistCount, 
  user, 
  onBookNowClick 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'packages', label: 'Packages' },
    { id: 'dining-spa', label: 'Dining & Spa' },
    { id: 'contact', label: 'Contact & Map' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#C5A028]/30 py-3' 
          : 'bg-[#F9F8F5]/90 backdrop-blur-sm border-b border-gray-200 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div 
              onClick={() => setActiveTab('home')}
              className="cursor-pointer group flex flex-col"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-serif font-extrabold tracking-widest text-[#0B0B0C] group-hover:text-[#C5A028] transition-colors">
                  BEL AIR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028]"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C5A028] font-bold uppercase">
                LUXURY STAY
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-xs font-medium uppercase tracking-widest transition-all duration-200 py-1 relative ${
                    activeTab === link.id
                      ? 'text-[#C5A028] font-bold'
                      : 'text-[#55534E] hover:text-[#C5A028]'
                  }`}
                >
                  {link.label}
                  {activeTab === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A028] rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Search Toggle */}
              <button 
                onClick={() => setShowSearchModal(true)}
                className="p-2 text-[#55534E] hover:text-[#C5A028] transition-colors"
                title="Search BelAir"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Icon */}
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="p-2 text-[#55534E] hover:text-[#C5A028] transition-colors relative"
                title="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A028] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Toggle */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-[#55534E] hover:text-[#C5A028] transition-colors relative"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C5A028] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Account Button */}
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="hidden sm:flex items-center gap-1.5 text-xs text-[#0B0B0C] hover:text-[#C5A028] border border-gray-300 hover:border-[#C5A028] px-3 py-1.5 rounded transition-all bg-white shadow-xs"
              >
                <User className="w-3.5 h-3.5 text-[#C5A028]" />
                <span>{user ? user.name : 'Account'}</span>
              </button>

              {/* Admin Panel Quick Link */}
              <button 
                onClick={() => setActiveTab('admin')}
                className="hidden xl:flex items-center gap-1 text-[11px] font-bold text-[#C5A028] hover:underline"
              >
                <Crown className="w-3.5 h-3.5" />
                Admin
              </button>

              {/* Book Now Primary Button */}
              <button 
                onClick={() => {
                  if (onBookNowClick) onBookNowClick();
                  else setActiveTab('rooms');
                }}
                className="gold-button px-4 py-2 text-xs font-bold uppercase tracking-wider rounded shadow-md"
              >
                Book Stay
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#0B0B0C] hover:text-[#C5A028]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#C5A028]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm uppercase tracking-widest py-2 border-b border-gray-100 ${
                    activeTab === link.id ? 'text-[#C5A028] font-bold' : 'text-[#0B0B0C]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => {
                  setActiveTab('dashboard');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm uppercase tracking-widest py-2 text-[#0B0B0C] flex items-center justify-between"
              >
                <span>My Dashboard & Bookings</span>
                <User className="w-4 h-4 text-[#C5A028]" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('admin');
                  setMobileMenuOpen(false);
                }}
                className="text-left text-sm uppercase tracking-widest py-2 text-[#C5A028] flex items-center justify-between font-bold"
              >
                <span>Admin Management Panel</span>
                <Crown className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${HOTEL_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 text-white text-center py-2.5 rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" /> Direct WhatsApp Booking
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-24 px-4">
          <div className="bg-white border border-[#C5A028]/40 rounded-xl w-full max-w-2xl p-6 shadow-2xl relative">
            <button 
              onClick={() => setShowSearchModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-serif font-bold text-[#C5A028] mb-1">Search BelAir Luxury Stay</h3>
            <p className="text-xs text-gray-500 mb-4">Find luxury suites, e-commerce gift vouchers, spa packages, or fine dining.</p>

            <div className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 'Royal Suite', 'Gift Voucher', 'Spa Massage', 'Candlelight Dinner'..."
                className="w-full bg-[#F9F8F5] border border-[#C5A028]/50 rounded-lg px-4 py-3 text-sm text-[#0B0B0C] placeholder-gray-400 focus:outline-none focus:border-[#C5A028]"
                autoFocus
              />
              <Search className="absolute right-4 top-3.5 w-5 h-5 text-[#C5A028]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-gray-400 uppercase tracking-widest block mb-2 font-semibold">Popular Quick Searches</span>
              <div className="flex flex-wrap gap-2">
                {['Royal Suite', 'Romantic Escape Package', 'Gift Voucher ₹5,000', 'Couple Spa', 'Cliff Tower Dining'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      if (term.includes('Suite')) setActiveTab('rooms');
                      else if (term.includes('Voucher') || term.includes('Package')) setActiveTab('packages');
                      else setActiveTab('dining-spa');
                      setShowSearchModal(false);
                    }}
                    className="text-xs bg-[#F5F2EA] border border-gray-300 hover:border-[#C5A028] text-[#0B0B0C] hover:text-[#C5A028] px-3 py-1.5 rounded-full transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
