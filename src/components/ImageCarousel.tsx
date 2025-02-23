import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  text: string;
  author: string;
  image?: string;
}

interface ImageCarouselProps {
  items: string[] | Testimonial[];
  interval?: number;
  variant?: 'image' | 'testimonial';
}

export default function ImageCarousel({ 
  items, 
  interval = 5000, 
  variant = 'image' 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, interval]);

  const newPhotos = [
    'url1.jpg',
    'url2.jpg',
    'url3.jpg',
  ];

  const renderContent = () => {
    if (variant === 'image') {
      const images = [...items, ...newPhotos] as string[];
      return (
        <div className="relative w-full h-48 overflow-hidden rounded-lg group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            {currentIndex + 1} / {images.length}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      );
    } else {
      const testimonials = items as Testimonial[];
      const currentTestimonial = testimonials[currentIndex];
      
      return (
        <div className="relative w-full p-6 bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {currentTestimonial.image && (
                <img 
                  src={currentTestimonial.image} 
                  alt={`${currentTestimonial.author}'s profile`} 
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
              )}
              <p className="text-lg italic mb-4">"{currentTestimonial.text}"</p>
              <p className="text-sm font-semibold">- {currentTestimonial.author}</p>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-2 right-2 bg-black/30 px-2 py-1 rounded text-xs text-white">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      );
    }
  };

  return renderContent();
}