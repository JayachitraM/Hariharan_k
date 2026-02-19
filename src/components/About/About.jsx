import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { aboutMe } from '../../data/personal';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../../utils/animations';
import Card from '../UI/Card';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6">
                Bridging Development & Quality Assurance
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {aboutMe.introduction}
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">What I Bring:</h4>
                <ul className="space-y-3">
                  {aboutMe.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      variants={staggerItem}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="text-cyan-400 mt-1 text-lg">{highlight.split(' ')[0]}</span>
                      <span>{highlight.substring(highlight.indexOf(' ') + 1)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {aboutMe.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="text-center p-6" glow>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-300 font-medium">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info Card */}
              <motion.div variants={staggerItem}>
                <Card className="p-6" glow>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">My Approach</h4>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in writing code that not only works but is also thoroughly tested and maintainable. 
                    My dual expertise in development and QA allows me to build robust applications while ensuring 
                    they meet the highest quality standards from day one.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section - Technologies Preview */}
          <motion.div variants={staggerItem} className="mt-16 text-center">
            <h4 className="text-xl font-semibold text-white mb-8">Technologies I Work With</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', '.NET', 'JavaScript', 'Python', 'Selenium', 'SQL', 'Azure', 'Git'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass-card text-cyan-400 font-medium rounded-full cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;