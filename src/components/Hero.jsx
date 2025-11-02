// src/components/Hero.jsx
import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="text-purple-400 text-lg font-semibold">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Chamidi Lakshika
              <span className="block text-purple-600 text-4xl md:text-5xl mt-2">Web Developer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              WordPress Web Developer with hands-on experience in building and customizing websites using Elementor, WooCommerce, and custom plugins/themes. Skilled in responsive design, SEO optimization, and e-commerce development.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Currently working as an Associate Web Developer at <span className="text-purple-400 font-semibold">Axcertro (Pvt) Ltd</span>
            </p>
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-600 hover:bg-purple-600 rounded-lg font-semibold transition"
              >
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <a 
                href="https://github.com/chamidi999?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="http://www.linkedin.com/in/chamidi-lakshika-699b93217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mchamidi888@gmail.com"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-purple-600 to-gray-900 rounded-full flex items-center justify-center">
                <Code size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;