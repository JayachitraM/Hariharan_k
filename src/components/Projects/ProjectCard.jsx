import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Card from '../UI/Card';

const ProjectCard = ({ project, index, isVisible, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="p-0 h-full overflow-hidden group cursor-pointer" hover glow>
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
            <div className="text-6xl opacity-50">{project.category.includes('AI') ? '🤖' : project.category.includes('Full-Stack') ? '💻' : project.category.includes('IoT') ? '📡' : '🏢'}</div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Eye size={20} />
            </motion.button>
            
            {project.github && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, '_blank');
                }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <Github size={20} />
              </motion.button>
            )}
            
            {project.demo && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demo, '_blank');
                }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={20} />
              </motion.button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Status */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
              {project.category}
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-blue-500/20 text-blue-400'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Role & Duration */}
          <div className="text-xs text-gray-400 space-y-1">
            <div><strong>Role:</strong> {project.role}</div>
            <div><strong>Duration:</strong> {project.duration}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;