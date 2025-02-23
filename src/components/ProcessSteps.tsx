import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Vibrate as Strategy, Palette, Rocket } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Float } from '@react-three/drei';

function ProcessIcon({ step }: { step: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="absolute w-full h-full -z-10" children={undefined}>
    </Canvas>
  );
}

function ProcessStep({ number, title, description, icon: Icon }: {
  number: number;
  title: string;
  description: string;
  icon: any;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: number * 0.2 }}
      className="relative"
    >
      <div className="card-gradient p-8 rounded-2xl border border-gray-800 h-full relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-5xl font-bold text-white/70">{number}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white-300">{description}</p>
        </div>
        <div className="absolute inset-0 opacity-30">
          <ProcessIcon step={number} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-7">
            We'll Go Through These 4 Easy Steps
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A streamlined process to transform your vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProcessStep
            number={1}
            title="Understanding Your Business"
            description="We dive deep into your business to understand your pain-points, audience, and brand. This foundation ensures we create a website that truly represents you."
            icon={Search}
          />
          <ProcessStep
            number={2}
            title="Developing a Strategy"
            description="We create a comprehensive website strategy and content architecture to achieve your goals, whether it's increasing sales, signups, or engagement."
            icon={Strategy}
          />
          <ProcessStep
            number={3}
            title="Creating the Design"
            description="Using our insights, we craft a captivating website that positions you as an industry leader while maintaining aesthetic appeal and user-friendliness."
            icon={Palette}
          />
          <ProcessStep
            number={4}
            title="Development and Launch"
            description="We build your optimized website following modern web practices, ensure it works perfectly across all devices, and provide training for content updates."
            icon={Rocket}
          />
        </div>
      </div>
    </section>
  );
}