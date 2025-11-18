import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products, categories, ageGroups } from '../data/products';

const Shop = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const ageMatch = selectedAgeGroup === 'all' || product.ageGroup === selectedAgeGroup;
    return categoryMatch && ageMatch;
  });

  const productIcons = {
    'rompers': '🌸',
    'dresses': '🌙',
    'sets': '🍃',
    'overalls': '🌾',
    'onesies': '🦋',
    'bottoms': '🌻',
    'tops': '☀️',
    'sleepwear': '⭐',
    'outerwear': '🌿'
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-cream-50 to-sand-50">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-lavender-200/20 to-blush-200/20 rounded-blob-1 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-6xl md:text-7xl text-gradient mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-sand-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} available
          </p>
        </motion.div>

        {/* Filter Toggle Button (Mobile) */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full px-6 py-3 bg-white border-2 border-sand-300 rounded-full font-semibold text-sand-600 flex items-center justify-center gap-2"
          >
            <span>🎨</span>
            <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full md:w-64 space-y-6"
              >
                {/* Category Filter */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
                  <h3 className="font-display text-2xl text-sand-600 mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white'
                            : 'hover:bg-sand-100 text-sand-600'
                        }`}
                      >
                        <span>{category.icon}</span>
                        <span className="text-sm font-medium">{category.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Age Group Filter */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
                  <h3 className="font-display text-2xl text-sand-600 mb-4">Age Group</h3>
                  <div className="space-y-2">
                    {ageGroups.map((ageGroup) => (
                      <motion.button
                        key={ageGroup.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedAgeGroup(ageGroup.id)}
                        className={`w-full text-left px-4 py-2 rounded-full transition-colors ${
                          selectedAgeGroup === ageGroup.id
                            ? 'bg-gradient-to-r from-sage-400 to-sand-400 text-white'
                            : 'hover:bg-sand-100 text-sand-600'
                        }`}
                      >
                        <span className="text-sm font-medium">{ageGroup.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-3xl mb-4">🌸</p>
                <p className="text-xl text-sand-500">No products found in this category</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow">
                      {/* Product Image */}
                      <div className="relative aspect-square bg-gradient-to-br from-blush-100 via-lavender-100 to-sage-100 flex items-center justify-center overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="text-8xl"
                        >
                          {productIcons[product.category] || '✨'}
                        </motion.div>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white px-4 py-2 rounded-full font-semibold text-sand-600">
                              Out of Stock
                            </span>
                          </div>
                        )}
                        {/* Shimmer effect */}
                        <motion.div
                          initial={{ x: '-200%' }}
                          whileHover={{ x: '200%' }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 shimmer-bg"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="font-display text-2xl text-sand-600 mb-2 group-hover:text-dusty-rose-500 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sand-400 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        {/* Available colors */}
                        <div className="flex gap-2 mb-3">
                          {product.colors.slice(0, 3).map((color, i) => (
                            <div
                              key={i}
                              className={`w-6 h-6 rounded-full border-2 border-white shadow-sm bg-${color}-300`}
                              title={color}
                            />
                          ))}
                        </div>

                        {/* Price and Add to Cart */}
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-semibold text-2xl text-dusty-rose-500">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.inStock && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => onAddToCart(product)}
                              className="px-6 py-2 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white rounded-full font-semibold text-sm shadow-md"
                            >
                              Add to Cart
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
