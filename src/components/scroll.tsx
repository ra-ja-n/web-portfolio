"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    images: ["/assets/images/ecom1.jpeg", "/assets/images/ecom2.jpeg"]
  },
  {
    title: "Animated SaaS Platform",
    category: "Design & Development",
    images: ["/assets/images/img1.png", "/assets/images/img3.png"]
  },
  {
    title: "Corporate Ecommerce Website",
    category: "Web Development",
    images: ["/assets/images/lens1.jpeg", "/assets/images/lens2.jpeg"]
  },
  {
    title: "Restaurant Website",
    category: "Full-Stack Development",
    images: ["/assets/images/restro1.jpeg", "/assets/images/restro2.jpeg"]
  },
  {
    title: "Personal Portfolio",
    category: "Personal Development",
    images: ["/assets/images/web1.png", "/assets/images/web2.png"]
  },
  {
    title: "Home and Decor Ecommerce",
    category: "Ecommerce Management",
    images: ["/assets/images/decor1.png", "/assets/images/decor2.png"]
  }
];

export const InfiniteScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex gap-6">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -2400],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className="relative min-w-[300px] sm:min-w-[400px] aspect-[16/9] rounded-xl overflow-hidden"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index < 3 ? "high" : "low"}
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
