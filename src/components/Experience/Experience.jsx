import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { experienceData } from '../../data/experience';
import { staggerContainer, staggerItem } from '../../utils/animations';
import TimelineItem from './TimelineItem';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My journey through different roles and organizations, building expertise in both development and quality assurance
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isVisible ? { height: '100%' } : { height: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"
            />

            {/* Timeline Items */}
            <div className="relative">
              {experienceData.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Summary */}
          <motion.div variants={staggerItem} className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Career Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <div className="text-gray-300">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-300">Test Cases Written</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-6">
                Throughout my career, I've consistently delivered high-quality software solutions while 
                maintaining rigorous testing standards. My experience spans across different industries 
                and technologies, giving me a well-rounded perspective on software development lifecycle.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;