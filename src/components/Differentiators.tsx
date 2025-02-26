import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

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
      <div className="w-12 h-12 bg-yellow-800/20 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-yellow-300" />
      </div>
      <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
      <p className="text-black-300">{description}</p>
    </motion.div>
  );
}

function TypewriterText({ text, className }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const typeText = () => {
      for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
          if (isMounted) {
            setDisplayText(text.slice(0, i));
            if (i === text.length) {
              setIsComplete(true);
            }
          }
        }, i * 50);
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [text]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      {displayText}
      {!isComplete && <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="inline-block w-1 h-6 bg-black ml-1"
      />}
    </motion.p>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            How I'm <span className="text-yellow-500">Different</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            You're great at what you do. Let's make sure your website tells that <span className="text-yellow-500 font-bold">story</span>.
          </p>
          <div className="absolute inset-0 -z-10">
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
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-['Caveat'] text-black max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            You need a <span className="text-yellow-500">professional</span> website to attract ideal clients and create the successful business of your dreams. 
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-['Caveat'] text-black max-w-4xl mx-auto leading-relaxed"
          >
            I'm here to make the design process simple and painless, delivering a beautiful, <span className="text-yellow-500">converting</span>, and easy-to-update website just for you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}