// src/components/Experience.jsx
import React from 'react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work <span className="text-purple-600">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-8 relative pl-8 border-l-2 border-purple-600">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <div className="text-purple-400 mb-2">{exp.company}</div>
                <div className="text-gray-500 text-sm mb-3">{exp.period}</div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-600 mr-2 mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
                {exp.keyProjects && exp.keyProjects.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Projects:</h4>
                    <ul className="space-y-3">
                      {exp.keyProjects.map((project, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          <span className="text-purple-600 mr-2">•</span>
                          <span className="font-semibold">{project.name}</span>: {project.description}
                          <span className="block text-xs text-gray-400 mt-1 ml-4">
                            Technologies: {project.technologies.join(', ')}
                            {project.liveLink && (
                              <>
                                {' '}| Live: <a
                                  className="text-purple-400 hover:text-purple-300 underline"
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {project.liveLink}
                                </a>
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;