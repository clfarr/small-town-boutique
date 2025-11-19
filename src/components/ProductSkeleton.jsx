import { motion } from 'framer-motion';

const ProductSkeleton = ({ count = 8 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
            {/* Image Skeleton */}
            <div className="relative aspect-square overflow-hidden bg-sand-200 animate-pulse">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>

            {/* Content Skeleton */}
            <div className="p-6 space-y-3">
              {/* Title */}
              <div className="h-6 bg-sand-200 rounded-full w-3/4 animate-pulse" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 bg-sand-100 rounded-full w-full animate-pulse" />
                <div className="h-4 bg-sand-100 rounded-full w-5/6 animate-pulse" />
              </div>

              {/* Colors */}
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-sand-200 animate-pulse" />
                <div className="w-6 h-6 rounded-full bg-sand-200 animate-pulse" />
                <div className="w-6 h-6 rounded-full bg-sand-200 animate-pulse" />
              </div>

              {/* Price and Button */}
              <div className="flex items-center justify-between mt-4">
                <div className="h-6 bg-sand-200 rounded-full w-20 animate-pulse" />
                <div className="h-10 bg-sand-200 rounded-full w-28 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
