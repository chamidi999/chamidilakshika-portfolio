// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Chamidi</span>
              <span className="text-purple-600"> Lakshika</span>
            </h3>
            <p className="text-gray-400">
              WordPress Web Developer with hands-on experience in building and customizing websites using Elementor, WooCommerce, and custom plugins/themes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'about', 'projects', 'posters'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-gray-400 hover:text-purple-600 transition capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:mchamidi888@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-purple-600 transition">
                <Mail size={18} />
                <span>mchamidi888@gmail.com</span>
              </a>
              <a href="tel:+94766364650" className="flex items-center gap-3 text-gray-400 hover:text-purple-600 transition">
                <Phone size={18} />
                <span>+94 76 636 4650</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Mathugama, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Chamidi Lakshika. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/chamidi999?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="http://www.linkedin.com/in/chamidi-lakshika-699b93217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-600 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
