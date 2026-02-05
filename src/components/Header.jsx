// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-40 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-900">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold hover:opacity-80 transition"
          >
            <span className="text-white">Chamidi</span>
            <span className="text-purple-600"> Lakshika</span>
          </button>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'posters'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-purple-600 transition capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          
          {/* <a
            href="mailto:mchamidi888@gmail.com"
            className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
          >
            Hire Me
          </a> */}
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {['home', 'about', 'skills', 'experience', 'projects', 'posters'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-gray-300 hover:text-purple-600 transition capitalize font-medium"
              >
                {item}
              </button>
            ))}
            <a
              href="mailto:mchamidi888@gmail.com"
              className="block w-full text-center py-2 mt-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
