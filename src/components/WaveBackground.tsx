import { motion } from 'framer-motion';

const WaveBackground = () => {
  return (
    <>
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0 opacity-30">
        <svg
          className="relative block w-full h-[100px] sm:h-[150px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1a1f3c"
          />
        </svg>
      </div>

      {/* Side wave - left (half circle) */}
      <div className="absolute left-0 top-1/4 h-96 w-48 overflow-hidden z-0">
        <div className="relative w-full h-full">
          {/* Subtle background circle */}
          <div className="absolute left-0 top-1/2 w-32 h-32 bg-gradient-to-r from-[#1a1f3c] to-transparent opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* Main half circle */}
          <motion.div
            className="absolute left-0 top-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-r from-[#1a1f3c] to-transparent opacity-10 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Side wave - right */}
      <div className="absolute right-0 top-1/2 h-96 w-24 overflow-hidden z-0 opacity-5">
        <svg
          className="relative h-full"
          viewBox="0 0 120 400"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            d="M120,0 Q90,100 120,200 Q90,300 120,400"
            stroke="#1a1f3c"
            strokeWidth="120"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Floating circles - now only in upper left area */}
      <motion.div
        className="absolute left-12 top-24 w-16 h-16 rounded-full bg-[#1a1f3c] opacity-5"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-32 top-16 w-12 h-12 rounded-full bg-[#1a1f3c] opacity-5"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute left-20 top-36 w-8 h-8 rounded-full bg-[#1a1f3c] opacity-5"
        animate={{
          y: [0, -6, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );
};

export default WaveBackground; 