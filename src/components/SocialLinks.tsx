import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <motion.a
        href="https://wa.me/918529497792"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors"
        title="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="sms:+918529497792"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition-colors"
        title="Send SMS"
      >
      </motion.a>
    </div>
  );
}