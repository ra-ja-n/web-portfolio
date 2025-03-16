import { motion } from 'framer-motion';

const MarqueeText = () => {
  const texts = [
    "Modern Web Design Tailored to Your Needs",
    "Professional Shopify Ecommerce Store",
    "Websites that Convert",
    "Custom Web Development Solutions",
    "SEO-Optimized Websites",
    "Responsive & Mobile-First Design"
  ];

  return (
    <div className="bg-[#1a1f3c] overflow-hidden py-8">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {texts.map((text, index) => (
            <span key={index} className="text-white text-xl font-semibold mx-8">
              {text} <span className="text-yellow-400 mx-4">•</span>
            </span>
          ))}
          {texts.map((text, index) => (
            <span key={index + 'repeat'} className="text-white text-xl font-semibold mx-8">
              {text} <span className="text-yellow-400 mx-4">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeText; 