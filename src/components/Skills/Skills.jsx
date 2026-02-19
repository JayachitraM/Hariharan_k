import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skillsData } from '../../data/skills';
import { staggerContainer, staggerItem } from '../../utils/animations';
import SkillCard from './SkillCard';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsData)[0]);

  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={staggerItem} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <SkillCard
                key={`${activeCategory}-${skill.name}`}
                skill={skill}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={staggerItem} className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about staying current with emerging technologies and best practices. 
                My skill set continues to evolve as I take on new challenges and explore innovative 
                solutions in both development and quality assurance domains.
              </p>
              <div className="flex justify-center mt-6 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">20+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;