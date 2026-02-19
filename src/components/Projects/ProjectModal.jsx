import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, User, Target, Lightbulb, TrendingUp, Quote } from 'lucide-react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div className="flex space-x-2 ml-4">
              {project.github && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                  icon={<Github size={16} />}
                >
                  Code
                </Button>
              )}
              {project.demo && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.open(project.demo, '_blank')}
                  icon={<ExternalLink size={16} />}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {project.duration}
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              {project.role}
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-blue-500/20 text-blue-400'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
          <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Target size={18} className="mr-2 text-cyan-400" />
            Key Features
          </h3>
          <ul className="grid md:grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-cyan-400 mr-2 mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <Lightbulb size={18} className="mr-2 text-yellow-400" />
            Technical Challenges
          </h3>
          <ul className="space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-yellow-400 mr-2 mt-1">⚡</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
            <TrendingUp size={18} className="mr-2 text-green-400" />
            Results & Impact
          </h3>
          <ul className="space-y-2">
            {project.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="glass-card p-4 border-l-4 border-cyan-400">
            <div className="flex items-start">
              <Quote size={20} className="text-cyan-400 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-300 italic">{project.testimonial}</p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;