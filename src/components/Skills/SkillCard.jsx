import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../UI/Card';

const SkillCard = ({ skill, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card 
        className="p-6 h-full cursor-default" 
        hover={true}
        glow={isHovered}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
          </div>
          <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
            />
          </div>
          
          {/* Glow Effect */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-50 blur-sm"
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillCard;