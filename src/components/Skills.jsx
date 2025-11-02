// src/components/Skills.jsx
import React from 'react';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-purple-600">Skills</span>
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-600 transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-gray-300 flex items-center">
                      <span className="text-purple-600 mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;