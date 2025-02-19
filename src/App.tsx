import React, { useState, useRef } from 'react';
import { Globe, Shield, ChevronRight, Rocket, Users, Target, MessageSquare, Mail, Phone, MapPin, Clock, Award, Sparkles, Brain, Laptop, Instagram, Linkedin, Twitter, ExternalLink, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroScene from './components/HeroScene';
import ImageCarousel from './components/ImageCarousel';
import ProcessSteps from './components/ProcessSteps';
import Differentiators from './components/Differentiators';
import SocialLinks from './components/SocialLinks';
import emailjs from '@emailjs/browser';
import { InfiniteScroll } from './components/scroll';

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_pshubzg",
          "template_vec844j",
          form.current,
          "txvllnc9LNHONirDb"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message Sent Successfully!");
          },
          (error) => {
            console.log("Email send error:", error.text);
            alert("Failed to send message!");
          }
        );
    }
  };

  return (
    <form className="space-y-4" ref={form} onSubmit={sendEmail}>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-400 text-white"
        required
      />
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type="email"
        name="user_email"
        placeholder="Your Email"
        className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-400 text-white"
        required
      />
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        placeholder="Your Message"
        name="message"
        rows={4}
        className="w-full px-4 py-3 bg-dark-100 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-400 text-white"
        required
      ></motion.textarea>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-glow"
      >
        Send Message
      </motion.button>
    </form>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      interval: 2000,
      images: [
        "/assets/images/ecom1.jpeg",
        "/assets/images/ecom2.jpeg",
      ]
    },
    {
      title: "Animated SaaS Platform",
      category: "Design & Development",
      interval: 2500,
      images: [
        "/assets/images/img1.png",
        "/assets/images/img3.png",
      ]
    },
    {
      title: "Corporate Ecommerce Website",
      category: "Web Development",
      interval: 3000,
      images: [
        "/assets/images/lens1.jpeg",
        "/assets/images/lens2.jpeg",
      ]
    },
    {
      title: "Restaurant Website",
      category: "Full-Stack Development",
      interval: 3500,
      images: [
        "/assets/images/restro1.jpeg",
        "/assets/images/restro2.jpeg",
      ]
    },
    {
      title: "Personal Portfolio",
      category: "Personal Development",
      interval: 2200,
      images: [
        "/assets/images/web1.png",
        "/assets/images/web2.png",
      ]
    },
    {
      title: "Home and Decor Ecommerce Shopify Website",
      category: "Ecommerce Management",
      interval: 2400,
      images: [
        "/assets/images/decor1.png",
        "/assets/images/decor2.png",
      ]
    },
    {
      title: " Coming Soon",
      category: "E-commerce",
      interval: 2600,
      images: [
        "/assets/images/market1.jpeg",
        "/assets/images/market2.jpeg",
        "/assets/images/market3.jpeg"
      ]
    },
    {
      title: "Coming Soon",
      category: "Full Stack Coded Website",
      interval: 2800,
      images: [
        "/assets/images/edu1.jpeg",
        "/assets/images/edu2.jpeg",
        "/assets/images/edu3.jpeg"
      ]
    }
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-white relative h-screen flex flex-col">
        <HeroScene />
        <nav className="relative z-50">
          <div className="flex justify-between items-center md:hidden">
            <img
              src="/assets/images/logo.png"
              alt="Make A Web Logo"
              className="w-8 h-8 object-contain glow-effect"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-16 left-0 right-0 bg-dark-100 card-gradient rounded-xl shadow-lg p-4 md:hidden"
              >
                <div className="flex flex-col space-y-4">
                  <a href="#why-website" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">Why Website</a>
                  <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">About Us</a>
                  <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">Projects</a>
                  <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">Testimonials</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">Contact</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hidden md:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 card-gradient px-6 md:px-8 py-4 rounded-2xl"
            >
              <a href="#why-website" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">Why Website</a>
              <a href="#about" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">About Us</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">Projects</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">Testimonials</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">Contact</a>
            </motion.div>
          </div>
        </nav>
        
        <div className="max-w-3xl mx-auto text-center relative mt-auto mb-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative w-48 h-48 sm:w-72 sm:h-72 mx-auto"
          >
            <img
              src="/assets/images/logo.png"
              alt="Make A Web Logo"
              className="w-full h-full object-contain glow-effect"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
          >
            Transforming Ideas into Digital Excellence
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-colors shadow-glow"
          >
            Get Started
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </header>

      <Differentiators />
      <ProcessSteps />

      <section id="why-website" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Why Your Business Needs a Website</h2>
          </FadeInWhenVisible>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-blue-400" />,
                title: "Global Reach",
                description: "Break geographical barriers and reach customers worldwide, 24/7."
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-400" />,
                title: "Credibility",
                description: "Build trust and establish your brand's professional presence online."
              },
              {
                icon: <Target className="w-8 h-8 text-blue-400" />,
                title: "Market Targeting",
                description: "Reach your ideal customers with precision and effectiveness."
              },
              {
                icon: <Rocket className="w-8 h-8 text-blue-400" />,
                title: "Growth Potential",
                description: "Scale your business with digital marketing and e-commerce."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-400" />,
                title: "Customer Engagement",
                description: "Interact with your audience and build lasting relationships."
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-400" />,
                title: "24/7 Availability",
                description: "Your website works round the clock, even when you're not."
              }
            ].map((item, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card-gradient p-6 rounded-2xl h-full border border-gray-800"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Who We Are</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <FadeInWhenVisible>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Expert Web Development Agency</h3>
                <p className="text-gray-300">
                  Make A Web is a team of passionate developers, designers, and digital strategists dedicated to creating exceptional web experiences. With years of expertise in the industry, we transform ideas into powerful digital solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-blue-400" />
                    <span className="text-white">10+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-400" />
                    <span className="text-white">100+ Satisfied Clients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    <span className="text-white">Award-winning Designs</span>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="card-gradient p-6 rounded-2xl border border-gray-800">
                  <Brain className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-300">Cutting-edge solutions for modern businesses</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="card-gradient p-6 rounded-2xl border border-gray-800">
                  <Laptop className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Technology</h4>
                  <p className="text-gray-300">Latest tech stack for optimal performance</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="card-gradient p-6 rounded-2xl border border-gray-800">
                  <Target className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Strategy</h4>
                  <p className="text-gray-300">Result-driven development approach</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="card-gradient p-6 rounded-2xl border border-gray-800">
                  <Users className="w-8 h-8 text-blue-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
                  <p className="text-gray-300">Dedicated customer service team</p>
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 bg-dark-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Latest Projects
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our diverse portfolio of innovative digital solutions that transform businesses and enhance user experiences.
              </p>
            </div>

            <InfiniteScroll />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
              {projects.map((project, index) => (
                <FadeInWhenVisible key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="group relative overflow-hidden rounded-2xl card-gradient p-3 border border-gray-800"
                  >
                    <img
                      src={hoveredIndex === index ? project.images[1] : project.images[0]}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="mt-3">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <p className="text-blue-400 text-sm">{project.category}</p>
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              ))}
            </div>

            <InfiniteScroll />
          </FadeInWhenVisible>
        </div>
      </section>

      <section id="testimonials" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Client Testimonials</h2>
          </FadeInWhenVisible>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                text: "I liked working with Rajan ( Make A Web ) because he is so kind and offered to help meprofessional. He transformed my online presence completely. Their attention to detail and professional approach exceeded my expectations.Recommended 100%",
                author: "Davey From Solvakia",
                role: "PERSONAL BRAND",
                image: "/assets/images/client1.jpg"
              },
              {
                text: "Working with Make A Web was a game-changer for My business. They delivered a website that perfectly represents our brand and our goals.Provides Instant support that no one will provide",
                author: "Ajay From Canada",
                role: "Founder, Innovation Labs",
                image: "/assets/images/client2.jpg"
              },
              {
                text: "The team's expertise and dedication to our project was impressive. They turned our vision into reality with exceptional results.",
                author: "Emma Thompson",
                role: "Marketing Director, GrowthCo",
                image: "/assets/images/client3.jpg"
              }
            ].map((testimonial, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="card-gradient p-8 border border-opacity-50 border-white rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <p className="text-white mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="text-white font-bold">{testimonial.author}</h4>
                      <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">makeaweb0@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">+91 8529497792</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Jaipur, Rajasthan</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <p className="text-gray-300">Monday - Friday: 10:00 AM - 00:00 AM</p>
                      <p className="text-gray-300">Saturday: 7:00 AM - 00:00 AM</p>
                      <p className="text-gray-300">Sunday: 7:00 AM - 00:00 AM</p>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="py-16 sm:py-20 card-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Earn With Our Referral Program</h2>
              <div className="card-gradient p-4 sm:p-8 rounded-2xl border border-gray-800">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center mt-1">
                          <span className="text-blue-400 text-sm">1</span>
                        </div>
                        <span>Refer a client to our web development services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center mt-1">
                          <span className="text-blue-400 text-sm">2</span>
                        </div>
                        <span>When they sign up for a project, you earn a commission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center mt-1">
                          <span className="text-blue-400 text-sm">3</span>
                        </div>
                        <span>Get paid once the project is completed</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Commission Structure</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-400" />
                        <span>10% commission on project value</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span>No limit on referrals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-blue-400" />
                        <span>Quick payment processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-colors shadow-glow w-full sm:w-auto"
                >
                  Start Referring
                </motion.button>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <footer className="py-6 sm:py-8 card-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/logo.png"
                alt="Make A Web Logo"
                className="w-8 h-8 object-contain glow-effect"
              />
              <span className="text-white font-bold">Make A Web</span>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <motion.a
                href="https://instagram.com/make.a_web"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/make-a-web/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com/make-a-web"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.fiverr.com/s/pd5VdZY"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm sm:text-base text-center"> 2024 Make A Web. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <SocialLinks />
    </div>
  );
}

export default App;