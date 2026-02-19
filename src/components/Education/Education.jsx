import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { educationData, certificationsData } from '../../data/education';
import { staggerContainer, staggerItem } from '../../utils/animations';
import Card from '../UI/Card';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800">
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
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My academic foundation and professional certifications that drive my expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-heading font-semibold text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-cyan-400" size={28} />
                Education
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Card className="p-6" hover glow>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                          <p className="text-cyan-400 font-semibold mb-2">{edu.field}</p>
                          <p className="text-lg font-medium text-gray-300 mb-2">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold gradient-text">{edu.grade}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{edu.description}</p>

                      {/* Coursework */}
                      <div className="mb-4">
                        <h5 className="text-white font-semibold mb-2">Key Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.slice(0, 6).map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                          {edu.coursework.length > 6 && (
                            <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-md">
                              +{edu.coursework.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-white font-semibold mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-heading font-semibold text-white mb-8 flex items-center">
                <Award className="mr-3 text-cyan-400" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="p-4" hover glow>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                          <p className="text-cyan-400 font-medium mb-1">{cert.issuer}</p>
                          <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-400">{cert.date}</div>
                          {/* {cert.verificationUrl && (
                            <motion.a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-xs mt-1"
                            >
                              <ExternalLink size={12} className="mr-1" />
                              Verify
                            </motion.a>
                          )} */}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Credential ID */}
                      <div className="mt-2 text-xs text-gray-500">
                        ID: {cert.credentialId}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Certification Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8"
              >
                <Card className="p-6 text-center" glow>
                  <h4 className="text-lg font-semibold text-white mb-4">Continuous Learning</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold gradient-text">{certificationsData.length}</div>
                      <div className="text-gray-400 text-sm">Certifications</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-gray-400 text-sm">Verified</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I'm committed to staying current with industry standards and emerging technologies 
                    through continuous learning and professional development.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;