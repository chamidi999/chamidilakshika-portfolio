// src/components/ProjectModal.jsx
import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full my-8">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <img
              src={project.screenshots[currentImage]}
              alt={`Screenshot ${currentImage + 1}`}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="flex gap-2 mt-4 justify-center">
              {project.screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentImage === idx ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>

          {project.url && (
            <div className="mb-6">
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-semibold"
              >
                Visit Live Site <ExternalLink size={18} />
              </a>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {project.screenshots.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setCurrentImage(idx)}
                className={`w-full h-32 object-cover rounded cursor-pointer transition ${
                  currentImage === idx ? 'ring-2 ring-purple-600' : 'opacity-70 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;