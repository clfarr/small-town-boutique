import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className={`${sizes[size]} rounded-full border-4 border-sand-200 border-t-dusty-rose-400`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
