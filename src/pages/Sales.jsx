import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { holidaySales } from '../data/products';

const Sales = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isActiveSale = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return now >= start && now <= end;
  };

  const isUpcomingSale = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);
    return now < start;
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-cream-50 via-blush-50 to-lavender-50">
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-dusty-rose-200/30 to-lavender-200/30 rounded-blob-1 blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-7xl mb-4"
          >
            🎁
          </motion.div>
          <h1 className="font-display text-6xl md:text-7xl text-gradient mb-4">
            Holiday Sales
          </h1>
          <p className="text-xl text-sand-500 font-script">
            Special moments deserve special prices
          </p>
        </motion.div>

        {/* Sales Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {holidaySales.map((sale, index) => {
            const isActive = isActiveSale(sale.startDate, sale.endDate);
            const isUpcoming = isUpcomingSale(sale.startDate);

            return (
              <motion.div
                key={sale.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
                  {/* Sale Banner */}
                  <div className={`relative py-12 px-8 ${
                    isActive
                      ? 'bg-gradient-to-br from-dusty-rose-400 via-lavender-400 to-blush-400'
                      : isUpcoming
                      ? 'bg-gradient-to-br from-sage-400 via-sand-400 to-cream-400'
                      : 'bg-gradient-to-br from-sand-300 via-sage-300 to-blush-300'
                  }`}>
                    {/* Status Badge */}
                    {isActive && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute top-4 right-4 bg-white text-dusty-rose-500 px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                      >
                        🔥 ACTIVE NOW
                      </motion.div>
                    )}
                    {isUpcoming && (
                      <div className="absolute top-4 right-4 bg-white/90 text-sage-600 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        Coming Soon
                      </div>
                    )}

                    {/* Discount Circle */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <div className="text-center">
                        <p className="font-display text-4xl text-dusty-rose-500">
                          {sale.discount}%
                        </p>
                        <p className="text-xs text-sand-500 font-semibold">OFF</p>
                      </div>
                    </motion.div>

                    {/* Sale Name */}
                    <div className="text-white mt-8">
                      <h2 className="font-display text-4xl md:text-5xl mb-2">
                        {sale.name}
                      </h2>
                      <p className="text-lg opacity-90">
                        {formatDate(sale.startDate)} - {formatDate(sale.endDate)}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-4 right-4 text-5xl opacity-50"
                    >
                      ✨
                    </motion.div>
                  </div>

                  {/* Sale Details */}
                  <div className="p-8 space-y-6">
                    <p className="text-lg text-sand-600 leading-relaxed">
                      {sale.description}
                    </p>

                    {/* Categories */}
                    <div>
                      <h3 className="font-display text-xl text-sand-600 mb-3">
                        Included Categories:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {sale.categories.map((category, catIndex) => (
                          <motion.span
                            key={catIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-gradient-to-r from-blush-200 to-lavender-200 text-sand-700 px-4 py-2 rounded-full text-sm font-medium capitalize"
                          >
                            {category}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to="/shop">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full px-8 py-4 rounded-full font-semibold text-lg shadow-lg ${
                          isActive
                            ? 'bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white'
                            : 'bg-gradient-to-r from-sage-400 to-sand-400 text-white'
                        }`}
                      >
                        {isActive ? 'Shop Sale Now 🎉' : isUpcoming ? 'Set Reminder 🔔' : 'View Products'}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Savings Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/70 to-cream-100/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl"
        >
          <h2 className="font-display text-4xl text-gradient text-center mb-8">
            How to Save More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📧',
                title: 'Newsletter Subscribers',
                desc: 'Get exclusive early access to sales'
              },
              {
                icon: '🎁',
                title: 'Bundle Deals',
                desc: 'Save extra when you buy multiple items'
              },
              {
                icon: '⭐',
                title: 'Loyalty Rewards',
                desc: 'Earn points with every purchase'
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="text-6xl mb-4"
                >
                  {tip.icon}
                </motion.div>
                <h3 className="font-display text-2xl text-sand-600 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sand-500">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-dusty-rose-100 via-lavender-100 to-blush-100 rounded-3xl p-12"
        >
          <h3 className="font-script text-4xl text-dusty-rose-500 mb-4">
            Never Miss a Sale
          </h3>
          <p className="text-lg text-sand-500 mb-8 max-w-2xl mx-auto">
            Join our mailing list to get notified about upcoming sales, exclusive discounts,
            and special offers just for our community.
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
              className="px-8 py-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white rounded-full font-semibold shadow-lg"
            >
              Subscribe 🎁
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sales;
