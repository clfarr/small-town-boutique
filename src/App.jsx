import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Upcoming from './pages/Upcoming';
import Sales from './pages/Sales';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Show a brief toast notification
    showToast('Added to cart! ✨');
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    showToast('Item removed');
  };

  const showToast = (message) => {
    // Simple toast notification (you could enhance this with a library)
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'fixed top-24 right-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-float';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <Navigation cartCount={totalItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop onAddToCart={handleAddToCart} />}
          />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/sales" element={<Sales />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
              />
            }
          />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-sand-100 via-blush-100 to-lavender-100 py-16 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="font-script text-4xl text-dusty-rose-500 mb-4">
                  Luna & Clover
                </h3>
                <p className="text-sand-500 mb-4 max-w-md">
                  Boho-inspired clothing for free-spirited little ones.
                  Made with love, organic materials, and a touch of magic.
                </p>
                <div className="flex gap-4">
                  {['🌸', '🌙', '🦋', '✨'].map((icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-display text-lg text-sand-600 mb-4">Shop</h4>
                <ul className="space-y-2 text-sand-500">
                  <li><a href="/shop" className="hover:text-dusty-rose-500">All Products</a></li>
                  <li><a href="/upcoming" className="hover:text-dusty-rose-500">New Arrivals</a></li>
                  <li><a href="/sales" className="hover:text-dusty-rose-500">Sales</a></li>
                </ul>
              </div>

              {/* Customer Care */}
              <div>
                <h4 className="font-display text-lg text-sand-600 mb-4">Support</h4>
                <ul className="space-y-2 text-sand-500">
                  <li><a href="#" className="hover:text-dusty-rose-500">Contact Us</a></li>
                  <li><a href="#" className="hover:text-dusty-rose-500">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-dusty-rose-500">Returns</a></li>
                  <li><a href="#" className="hover:text-dusty-rose-500">Size Guide</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-sand-300 pt-8 text-center text-sand-400 text-sm">
              <p>© 2025 Luna & Clover. Made with 💜 for little dreamers.</p>
              <p className="mt-2">A portfolio project by Carrie Farr</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
