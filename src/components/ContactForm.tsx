import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_makeaweb', // Replace with your EmailJS service ID
        'template_makeaweb', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-400 text-white"
      />
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-400 text-white"
      />
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        name="message"
        placeholder="Your Message"
        required
        rows={4}
        className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-400 text-white"
      ></motion.textarea>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-glow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </form>
  );
}