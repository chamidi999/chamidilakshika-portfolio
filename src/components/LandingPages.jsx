// src/components/LandingPages.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { landingPages, categories, getLandingPagesByCategory } from '../data/landingPagesData';
import ProjectModal from './ProjectModal';

const LandingPages = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredPages = getLandingPagesByCategory(activeCategory);
  const displayedPages = showAll ? filteredPages : filteredPages.slice(0, 9);

  return (
    <section id="landing-pages" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Next.js <span className="text-purple-600">Landing Pages</span>
        </h2>
        <p className="text-center text-gray-400 mb-8">
          {landingPages.length} Professional Landing Pages Built with Next.js & React
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full transition duration-300 flex items-center gap-2 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter size={16} />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPages.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 cursor-pointer border border-gray-800 hover:border-purple-600 group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="h-48 overflow-hidden bg-gray-800 relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/1f2937/9333ea?text=Landing+Page';
                  }}
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-purple-400 rounded ml-2">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-purple-900 text-purple-200 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    className="flex-1 text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details <ExternalLink size={14} />
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredPages.length > 9 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300"
            >
              {showAll ? 'Show Less' : `Show All ${filteredPages.length} Landing Pages`}
            </button>
          </div>
        )}

        {/* Results Count */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Showing {displayedPages.length} of {filteredPages.length} landing pages
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </p>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default LandingPages;