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
  className = '',
  variant = 'default'
}: {
  number?: number;
  title: string;
  description: string;
  icon: any;
  className?: string;
  variant?: 'default' | 'horizontal' | 'vertical' | 'developer';
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variantClasses = {
    default: 'md:col-span-1 h-full',
    horizontal: 'md:col-span-2 h-full',
    vertical: 'md:row-span-2 h-full',
    developer: 'md:col-span-1 md:row-span-2 flex items-center justify-center'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={`relative ${variantClasses[variant]} ${className}`}
    >
      {variant === 'developer' ? (
        <motion.div 
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut",
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Suspense fallback={<ImagePlaceholder />}>
            <motion.div 
              className="w-80 h-80 rounded-xl overflow-hidden border-4 border-yellow-400/50 shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/assets/images/dev.png"  
                alt="Developer Activity" 
                loading="lazy"
                width={320}
                height={320}
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </motion.div>
          </Suspense>
        </motion.div>
      ) : (
        <div className="card-gradient p-6 rounded-2xl border border-gray-800 h-full relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center group-hover:bg-yellow-600/40 transition-all duration-300">
                <Icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
              </div>
              {number !== undefined && (
                <span className="text-4xl font-bold text-white/70">{number}</span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{title}</h3>
            <p className="text-white-300 text-lg leading-relaxed tracking-wide">
              {description.split(' ').map((word, index) => {
                const highlightWords = [
                  'pixel-perfect', 
                  'user-centric', 
                  'interactive', 
                  'seamless', 
                  'robust', 
                  'scalable', 
                  'continuous'
                ];
                
                return highlightWords.includes(word.toLowerCase()) ? (
                  <span key={index} className="text-yellow-400 font-semibold">{word} </span>
                ) : (
                  <span key={index}>{word} </span>
                );
              })}
            </p>
          </div>
          <div className="absolute inset-0 opacity-20">
            <ProcessIcon step={number || 0} />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6">
          <ProcessStep 
            number={1} 
            title="Research & Discovery" 
            description="Deep dive into your project requirements, goals, and target audience."
            icon={Search}
            variant="horizontal"
          />
          <ProcessStep 
            number={2} 
            title="Strategic Planning" 
            description="Develop a comprehensive strategy tailored to your unique needs."
            icon={Strategy}
          />
          <ProcessStep 
            number={3} 
            title="Design & Prototyping" 
            description="Transform concepts into visually stunning, user-centric designs. We craft pixel-perfect interfaces, create interactive prototypes, and ensure seamless user experience across all devices and platforms. Our design process combines creativity, user research, and cutting-edge design principles."
            icon={Palette}
            variant="vertical"
          />
          <ProcessStep 
            title="Developer Profile" 
            description="Meet the creative mind behind your project"
            icon={Users}
            variant="developer"
          />
          <ProcessStep 
            number={4} 
            title="Agile Development" 
            description="Transform designs into robust, scalable digital solutions using cutting-edge technologies."
            icon={Code}
            variant="horizontal"
          />
          <ProcessStep 
            number={5} 
            title="Rapid Iteration" 
            description="Continuous improvement through quick, efficient development cycles."
            icon={Zap}
          />
          <ProcessStep 
            number={6} 
            title="Deployment & Support" 
            description="Seamless project launch and comprehensive ongoing support. We handle server configuration, continuous integration, and deployment across multiple environments. Our support includes performance monitoring, security updates, and proactive maintenance to ensure your project remains robust, scalable, and running at peak efficiency."
            icon={CloudCog}
            variant="vertical"
            className="md:col-start-3 md:row-start-2 md:row-span-2"
          />
        </div>
      </div>
    </section>
  );
}