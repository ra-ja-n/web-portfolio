import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  Vibrate as Strategy, 
  Palette, 
  Rocket, 
  Code, 
  CloudCog, 
  Users, 
  Zap, 
  Target 
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';

// Placeholder component for lazy loading
const ImagePlaceholder = () => (
  <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
    <span className="text-gray-500">Loading...</span>
  </div>
);

function ProcessIcon({ step }: { step: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="absolute w-full h-full -z-10" 
      style={{ opacity: 0.2 }}
      children={undefined}
    >
    </Canvas>
  );
}

function ProcessStep({ 
  number, 
  title, 
  description, 
  icon: Icon,
  className = ''
}: {
  number: number;
  title: string;
  description: string;
  icon: any;
  className?: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#1a1f3c]/10 rounded-xl flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-[#1a1f3c]" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-yellow-500">0{number}</span>
            <h3 className="text-xl font-bold text-[#1a1f3c]">{title}</h3>
          </div>
          <p className="text-[#1a1f3c]/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-[#1a1f3c] mb-4"
          >
            Process We Follow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#1a1f3c]/80 max-w-2xl mx-auto"
          >
            Our streamlined approach ensures your project is delivered efficiently and effectively
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First Row */}
          <ProcessStep
            number={1}
            title="Discovery"
            description="Deep dive into your project requirements, goals, and target audience analysis"
            icon={Search}
            className="md:col-span-2"
          />
          <ProcessStep
            number={2}
            title="Design"
            description="Create visually stunning, user-centric designs that reflect your brand"
            icon={Palette}
          />

          {/* Middle Row */}
          <ProcessStep
            number={3}
            title="Development"
            description="Transform designs into robust, scalable solutions using cutting-edge tech"
            icon={Code}
          />
          <ProcessStep
            number={4}
            title="Testing"
            description="Rigorous quality assurance to ensure perfect functionality"
            icon={Rocket}
            className="md:col-span-2"
          />

          {/* Last Row */}
          <ProcessStep
            number={5}
            title="Deployment"
            description="Seamless launch with comprehensive support and maintenance"
            icon={CloudCog}
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}