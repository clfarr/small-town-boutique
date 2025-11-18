import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 8.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-b from-cream-50 to-sand-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-6"
          >
            🛒
          </motion.div>
          <h2 className="font-display text-4xl text-sand-600 mb-4">
            Your cart is empty
          </h2>
          <p className="text-lg text-sand-500 mb-8">
            Let's find something beautiful for your little one
          </p>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white rounded-full font-semibold text-lg shadow-lg"
            >
              Start Shopping ✨
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-cream-50 to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-6xl md:text-7xl text-gradient mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg text-sand-500">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-display text-2xl text-sand-600 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sand-400 text-sm">{item.description}</p>
                      </div>

                      {/* Selected options */}
                      {item.selectedColor && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-sand-500">Color:</span>
                          <div className={`w-6 h-6 rounded-full border-2 border-sand-300 bg-${item.selectedColor}-300`} />
                          <span className="text-sm text-sand-600 capitalize">{item.selectedColor}</span>
                        </div>
                      )}
                      {item.selectedSize && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-sand-500">Size:</span>
                          <span className="text-sm text-sand-600 font-medium">{item.selectedSize}</span>
                        </div>
                      )}

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-sand-500">Quantity:</span>
                          <div className="flex items-center gap-2 bg-sand-100 rounded-full px-3 py-1">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-6 h-6 flex items-center justify-center text-sand-600 hover:text-dusty-rose-500 font-bold"
                            >
                              −
                            </motion.button>
                            <span className="w-8 text-center font-semibold text-sand-700">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-sand-600 hover:text-dusty-rose-500 font-bold"
                            >
                              +
                            </motion.button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-2xl text-dusty-rose-500">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-xs text-sand-400">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>

                      {/* Remove button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onRemoveItem(item.id)}
                        className="text-sm text-dusty-rose-400 hover:text-dusty-rose-600 font-medium"
                      >
                        Remove
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Continue Shopping */}
            <Link to="/shop">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-sand-500 hover:text-dusty-rose-500 transition-colors mt-6"
              >
                <span>←</span>
                <span>Continue Shopping</span>
              </motion.button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl sticky top-24"
            >
              <h2 className="font-display text-3xl text-sand-600 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sand-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sand-600">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && subtotal < 75 && (
                  <p className="text-sm text-sage-500 bg-sage-50 rounded-lg p-3">
                    💚 Spend ${(75 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
                <div className="border-t-2 border-sand-200 pt-4 flex justify-between text-sand-700 text-xl">
                  <span className="font-display">Total</span>
                  <span className="font-display text-dusty-rose-500">${total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white rounded-full font-semibold text-lg shadow-lg mb-4"
              >
                Proceed to Checkout 🎉
              </motion.button>

              <div className="space-y-3 mt-6 pt-6 border-t border-sand-200">
                <h3 className="font-display text-lg text-sand-600 mb-3">
                  We Accept
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {['💳', '📱', '🏦', '✨'].map((icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center text-2xl"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-sand-400 mt-4">
                  🔒 Secure checkout • 30-day returns • Free shipping over $75
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
