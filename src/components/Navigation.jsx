import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home', icon: '✨' },
    { path: '/shop', label: 'Shop', icon: '🌸' },
    { path: '/upcoming', label: 'Coming Soon', icon: '🌙' },
    { path: '/sales', label: 'Holiday Sales', icon: '🎁' },
  ];

  return (
    <>
      {/* Decorative header blob */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-blush-200/30 via-lavender-200/30 to-sage-200/30 rounded-blob-1 blur-3xl -z-10 animate-blob" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-md border-b-2 border-sand-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose-300 to-lavender-300 rounded-blob-2 flex items-center justify-center">
                  <span className="text-2xl">🌙</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-sage-300 rounded-full animate-float" />
              </motion.div>
              <div>
                <h1 className="font-script text-3xl text-dusty-rose-500 group-hover:text-dusty-rose-600 transition-colors">
                  Luna & Clover
                </h1>
                <p className="text-xs text-sage-500 font-light tracking-widest">BOHO KIDS</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="group flex items-center space-x-2 text-sand-500 hover:text-dusty-rose-500 transition-colors font-medium"
                  >
                    <span className="group-hover:animate-wave inline-block">{item.icon}</span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Cart */}
              <Link to="/cart" className="relative group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-blush-200 to-lavender-200 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">🛒</span>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-dusty-rose-500 text-cream-50 rounded-full text-xs flex items-center justify-center font-bold"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center text-2xl"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream-100/95 backdrop-blur-md border-t border-sand-200"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 text-sand-500 hover:text-dusty-rose-500 transition-colors text-lg py-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-sand-500 hover:text-dusty-rose-500 transition-colors text-lg py-2"
                >
                  <span>🛒</span>
                  <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;
