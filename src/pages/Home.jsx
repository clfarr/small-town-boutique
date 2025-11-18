import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Organic Shapes */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blush-200/40 to-lavender-200/40 rounded-blob-1 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-sage-200/40 to-cream-200/40 rounded-blob-2 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main heading with unique styling */}
            <div className="relative inline-block">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="font-display text-7xl md:text-9xl text-gradient mb-4"
              >
                Wild & Free
              </motion.h1>
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 text-6xl"
              >
                🌸
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-8 text-5xl"
              >
                🦋
              </motion.div>
            </div>

            <p className="font-script text-4xl md:text-5xl text-dusty-rose-400 max-w-2xl mx-auto">
              Boho-inspired threads for free-spirited little ones
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-sand-500 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our carefully curated collection of organic, sustainable clothing
              that celebrates childhood wonder and embraces the beauty of nature.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-cream-50 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Explore Collection ✨
                </motion.button>
              </Link>
              <Link to="/upcoming">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-sage-400 text-sage-500 rounded-full font-semibold text-lg hover:bg-sage-50 transition-colors"
                >
                  Coming Soon 🌙
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-4xl">↓</div>
          <p className="text-sm text-sand-400">Scroll to explore</p>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
              Customer Favorites
            </h2>
            <p className="text-lg text-sand-500">Pieces that capture hearts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blush-100 to-lavender-100 aspect-square mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                    {/* Placeholder for product image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-8xl"
                      >
                        {['🌸', '🌙', '🦋', '🌻'][index]}
                      </motion.div>
                    </div>
                    {/* Shimmer effect on hover */}
                    <motion.div
                      initial={{ x: '-200%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 shimmer-bg animate-shimmer"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-sand-600 mb-2 group-hover:text-dusty-rose-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sand-400 text-sm mb-2">{product.description}</p>
                  <p className="font-semibold text-lg text-dusty-rose-500">
                    ${product.price.toFixed(2)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-sage-400 to-sand-400 text-cream-50 rounded-full font-semibold text-lg shadow-lg"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section with Organic Layout */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-cream-100 to-blush-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
              Our Promise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '🌿', title: 'Organic Materials', desc: 'Soft, sustainable fabrics kind to delicate skin and our planet' },
              { icon: '✋', title: 'Handcrafted Love', desc: 'Each piece made with care and attention to detail' },
              { icon: '🌈', title: 'Free Spirit', desc: 'Designs that celebrate imagination and childhood wonder' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-3xl bg-white/50 backdrop-blur-sm shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="text-7xl mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-display text-2xl text-sand-600 mb-3">{value.title}</h3>
                <p className="text-sand-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-dusty-rose-100 via-lavender-100 to-sage-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-script text-5xl text-dusty-rose-500 mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-sand-500 mb-8">
              Be the first to know about new collections, sales, and special moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-sand-300 focus:border-dusty-rose-400 focus:outline-none bg-white/70 backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-cream-50 rounded-full font-semibold shadow-lg whitespace-nowrap"
              >
                Subscribe ✨
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
