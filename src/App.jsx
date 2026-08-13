import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import CartDrawer from './components/CartDrawer';
import RoomDetailModal from './components/RoomDetailModal';
import GiftCardModal from './components/GiftCardModal';
import PolicyModal from './components/PolicyModal';

import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DiningSpaPage from './pages/DiningSpaPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cartItems, setCartItems] = useState([
    {
      id: 'sample-cart-1',
      name: 'BelAir Executive Suite Stay',
      price: 4800,
      quantity: 1,
      image: '/images/executive_suite.jpg',
      details: '1 Night • 2 Guests'
    }
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [selectedRoomModal, setSelectedRoomModal] = useState(null);
  const [activePolicyModal, setActivePolicyModal] = useState(null);

  const [user, setUser] = useState({
    name: 'Rohan Sharma',
    email: 'rohan.sharma@example.com'
  });

  const [bookingsHistory, setBookingsHistory] = useState([]);

  // Cart operations
  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex(i => i.id === product.id);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += (product.quantity || 1);
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity || 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (idx, newQty) => {
    const updated = [...cartItems];
    updated[idx].quantity = newQty;
    setCartItems(updated);
  };

  const handleRemoveCartItem = (idx) => {
    setCartItems(cartItems.filter((_, i) => i !== idx));
  };

  const handleConfirmRoomBooking = (bookingData) => {
    const cartProduct = {
      id: `room-${bookingData.room.id}-${Date.now()}`,
      name: `${bookingData.room.name} (${bookingData.nights} Night${bookingData.nights > 1 ? 's' : ''})`,
      price: bookingData.grandTotal,
      quantity: 1,
      image: bookingData.room.image,
      details: `${bookingData.guestsCount} Guests | Extras: ${bookingData.selectedExtras.length}`
    };

    handleAddToCart(cartProduct);
    setSelectedRoomModal(null);
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.some(w => w.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const handleBookingSuccess = (newBooking) => {
    setBookingsHistory([newBooking, ...bookingsHistory]);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* Header Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        setIsCartOpen={setIsCartOpen}
        wishlistCount={wishlist.length}
        user={user}
        onBookNowClick={() => setActiveTab('rooms')}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectRoom={(r) => setSelectedRoomModal(r)}
            onAddToCart={handleAddToCart}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
          />
        )}

        {activeTab === 'rooms' && (
          <RoomsPage
            onSelectRoom={(r) => setSelectedRoomModal(r)}
          />
        )}

        {activeTab === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
            onAddToWishlist={handleAddToWishlist}
          />
        )}

        {activeTab === 'packages' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
            onAddToWishlist={handleAddToWishlist}
          />
        )}

        {activeTab === 'checkout' && (
          <CheckoutPage
            cartItems={cartItems}
            clearCart={() => setCartItems([])}
            onBookingSuccess={handleBookingSuccess}
          />
        )}

        {activeTab === 'dashboard' && (
          <CustomerDashboard
            user={user}
            bookingsHistory={bookingsHistory}
            wishlist={wishlist}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'admin' && (
          <AdminDashboard />
        )}

        {activeTab === 'dining-spa' && (
          <DiningSpaPage
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => setActiveTab('checkout')}
      />

      {/* Room Detail & Custom Extra Modal */}
      {selectedRoomModal && (
        <RoomDetailModal
          room={selectedRoomModal}
          onClose={() => setSelectedRoomModal(null)}
          onConfirmBooking={handleConfirmRoomBooking}
        />
      )}

      {/* Gift Card Generator Modal */}
      <GiftCardModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Policy Modal */}
      {activePolicyModal && (
        <PolicyModal
          type={activePolicyModal}
          onClose={() => setActivePolicyModal(null)}
        />
      )}

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPolicy={(policyType) => setActivePolicyModal(policyType)}
      />

    </div>
  );
}
