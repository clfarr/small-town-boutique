import { motion } from 'framer-motion';
import { upcomingReleases } from '../data/products';
import PageTransition from '../components/PageTransition';

const Upcoming = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntil = (dateString) => {
    const today = new Date();
    const releaseDate = new Date(dateString);
    const diffTime = releaseDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <PageTransition>
    <div className="min-h-screen py-12 bg-gradient-to-b from-cream-50 via-lavender-50 to-blush-50">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-sage-200/30 to-lavender-200/30 rounded-blob-2 blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-blush-200/30 to-cream-200/30 rounded-blob-1 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-7xl mb-4"
          >
            🌙
          </motion.div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-gradient mb-4">
            Coming Soon
          </h1>
          <p className="text-lg sm:text-xl text-sand-500 font-script">
            Magical moments on the horizon
          </p>
        </motion.div>

        {/* Upcoming Collections */}
        <div className="space-y-12">
          {upcomingReleases.map((release, index) => {
            const daysUntil = getDaysUntil(release.releaseDate);
            const isComingSoon = daysUntil <= 30 && daysUntil > 0;

            return (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image/Visual Section */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="aspect-square bg-gradient-to-br from-dusty-rose-200 via-lavender-200 to-sage-200 flex items-center justify-center">
                      {/* Decorative pattern */}
                      <div className="relative text-center">
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="text-9xl mb-4"
                        >
                          {index === 0 ? '🌙' : '🌸'}
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-10 -right-10 text-6xl opacity-50"
                        >
                          ✨
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="absolute -bottom-10 -left-10 text-6xl opacity-50"
                        >
                          {index === 0 ? '⭐' : '🦋'}
                        </motion.div>
                      </div>
                    </div>
                    {/* Coming Soon Badge */}
                    {isComingSoon && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute top-4 right-4 bg-gradient-to-r from-dusty-rose-500 to-lavender-500 text-white px-6 py-3 rounded-full font-bold shadow-lg"
                      >
                        Releasing Soon!
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Info Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="font-display text-5xl md:text-6xl text-gradient mb-2"
                    >
                      {release.name}
                    </motion.h2>
                    <p className="text-2xl font-script text-dusty-rose-400">
                      {formatDate(release.releaseDate)}
                    </p>
                  </div>

                  <p className="text-lg text-sand-500 leading-relaxed">
                    {release.description}
                  </p>

                  {/* Items in Collection */}
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl text-sand-600">
                      Featured Items:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {release.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1 }}
                          className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
                        >
                          <span className="text-xl">
                            {['✨', '🌸', '🌙'][itemIndex % 3]}
                          </span>
                          <span className="text-sand-600 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="bg-gradient-to-r from-blush-100 to-lavender-100 rounded-2xl p-6">
                    <div className="text-center">
                      {daysUntil > 0 ? (
                        <>
                          <p className="text-sm text-sand-500 mb-2">Launches in</p>
                          <motion.p
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="font-display text-5xl text-dusty-rose-500"
                          >
                            {daysUntil} {daysUntil === 1 ? 'Day' : 'Days'}
                          </motion.p>
                        </>
                      ) : daysUntil === 0 ? (
                        <p className="font-display text-3xl text-dusty-rose-500">
                          Launching Today! 🎉
                        </p>
                      ) : (
                        <p className="font-display text-2xl text-sage-500">
                          Now Available in Shop
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Notify Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-dusty-rose-400 to-lavender-400 text-white rounded-full font-semibold text-lg shadow-lg"
                  >
                    Notify Me When Available ✨
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-sage-100 via-cream-100 to-blush-100 rounded-3xl p-12"
        >
          <h3 className="font-script text-4xl text-dusty-rose-500 mb-4">
            Never Miss a Launch
          </h3>
          <p className="text-lg text-sand-500 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter and be the first to know about new collections,
            exclusive previews, and special early-bird offers.
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
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Upcoming;
