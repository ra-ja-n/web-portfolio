"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectImages = [
  "/assets/images/ecom1.jpeg",
  "/assets/images/ecom2.jpeg",
  "/assets/images/img1.png",
  "/assets/images/img3.png",
  "/assets/images/lens1.jpeg",
  "/assets/images/lens2.jpeg",
  "/assets/images/restro1.jpeg",
  "/assets/images/restro2.jpeg",
  "/assets/images/web1.png",
  "/assets/images/web2.png",
  "/assets/images/decor1.png",
  "/assets/images/decor2.png",
  "/assets/images/market1.jpeg",
  "/assets/images/market2.jpeg",
  "/assets/images/market3.jpeg",
  "/assets/images/edu1.jpeg",
  "/assets/images/edu2.jpeg",
  "/assets/images/edu3.jpeg"
];

export const InfiniteScroll = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const duplicatedImages = [...projectImages, ...projectImages];

  return (
    <div ref={ref} className="overflow-hidden py-12 bg-dark-200">
      {inView && (
        <motion.div 
          className="flex space-x-4 animate-scroll"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="flex-shrink-0 w-64 h-48 mx-2"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={image} 
                alt={`Project Image ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
