import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Users } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Float } from '@react-three/drei';

function FloatingTorus() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="absolute inset-0 -z-10"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <TorusKnot args={[1, 0.3, 128, 16]}>
          <meshStandardMaterial
            color="#60A5FA"
            wireframe
            transparent
            opacity={0.2}
          />
        </TorusKnot>
      </Float>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

function DifferentiatorCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="card-gradient p-6 rounded-2xl border border-gray-800"
    >
      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default function Differentiators() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            How I'm Different
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            You're great at what you do. Let's make sure your website tells that story.
          </p>
          <div className="absolute inset-0 -z-10">
            <FloatingTorus />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <DifferentiatorCard
            icon={Heart}
            title="Understanding First"
            description="I take the time to understand your business and goals before starting any project. No rushing, just careful planning for success."
          />
          <DifferentiatorCard
            icon={Target}
            title="Results-Driven"
            description="I care about your business outcomes and create websites that speak to your customers in your authentic voice and drive sales."
          />
          <DifferentiatorCard
            icon={Users}
            title="Personal Connection"
            description="My clients become friends. I'm enthusiastic, approachable, and always ready to help with every detail of your project."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            You need a professional website to attract ideal clients and create the successful business of your dreams. 
            I'm here to make the design process simple and painless, delivering a beautiful, converting, and easy-to-update website just for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}