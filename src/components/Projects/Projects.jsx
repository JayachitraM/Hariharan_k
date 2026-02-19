import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projectsData } from '../../data/projects';
import { staggerContainer, staggerItem } from '../../utils/animations';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding bg-dark-900">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my work spanning development, testing, and AI integration across various domains
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={staggerItem} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
                onViewDetails={handleViewDetails}
              />
            ))}
          </motion.div>

          {/* Projects Summary */}
          <motion.div variants={staggerItem} className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                Project Impact & Learning
              </h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-300 text-sm">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Technologies Used</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Features Delivered</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-6">
                Each project represents a unique challenge that helped me grow as both a developer and QA engineer. 
                From AI-powered applications to real-time tracking systems, I've consistently delivered solutions 
                that exceed expectations while maintaining the highest quality standards.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;