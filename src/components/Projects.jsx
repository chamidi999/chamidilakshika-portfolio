// src/components/Projects.jsx
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-purple-600">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Click on any project to view screenshots</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 cursor-pointer border border-gray-800 hover:border-purple-600"
                onClick={() => setSelectedProject(project)}
              >
                {/* Replace icon with thumbnail image */}
                <div className="h-48 overflow-hidden bg-gray-800">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-purple-900 text-purple-200 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;