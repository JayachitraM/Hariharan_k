import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../UI/Card';

const TimelineItem = ({ experience, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      {/* Content */}
      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
        <Card className="p-6" hover glow>
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{experience.position}</h3>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                experience.type === 'Full-time' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {experience.type}
              </span>
            </div>
            
            <h4 className="text-lg font-semibold gradient-text mb-2">{experience.company}</h4>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {experience.duration}
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{experience.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-md"
                >
                  {tech}
                </span>
              ))}
              {experience.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-md">
                  +{experience.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10 mt-4">
              {/* Responsibilities */}
              <div className="mb-4">
                <h5 className="text-white font-semibold mb-2">Key Responsibilities:</h5>
                <ul className="space-y-1 text-gray-300 text-sm">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                <ul className="space-y-1 text-gray-300 text-sm">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Technologies */}
              <div>
                <h5 className="text-white font-semibold mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Card>
      </div>

      {/* Timeline Dot */}
      <div className="w-2/12 flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
          className="relative"
        >
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50"></div>
          <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-ping opacity-75"></div>
        </motion.div>
      </div>

      {/* Empty Space */}
      <div className="w-5/12"></div>
    </motion.div>
  );
};

export default TimelineItem;