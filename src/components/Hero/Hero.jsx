import { motion } from 'framer-motion';
import { Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../UI/Button';
import TypingAnimation from './TypingAnimation';
import { personalInfo } from '../../data/personal';
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from '../../utils/animations';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="text-cyan-400 text-lg font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={fadeInDown}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-shadow-lg"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="text-2xl md:text-4xl font-medium h-16 flex items-center justify-center">
              <span className="text-white mr-3">I'm a</span>
              <TypingAnimation texts={personalInfo.roles} />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
              icon={<Eye size={20} />}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open(personalInfo.resume, '_blank')}
              icon={<Download size={20} />}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={staggerItem}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card-hover rounded-full text-cyan-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card-hover rounded-full text-cyan-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card-hover rounded-full text-cyan-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;