// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { landingPages } from '../data/landingPagesData';

const Hero = () => {
  const carouselItems = landingPages
    .filter((project) => project.thumbnail)
    .slice(0, 6)
    .map((project) => ({
      title: project.title,
      thumbnail: project.thumbnail
    }));
  const fallbackItems = [
    {
      title: 'Project Highlight',
      thumbnail: 'https://via.placeholder.com/800x600/111827/9333ea?text=Project+Preview'
    }
  ];
  const itemsToShow = carouselItems.length ? carouselItems : fallbackItems;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemsToShow.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [itemsToShow.length]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950/80 to-purple-950/80" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 h-24 w-24 rounded-full border border-purple-400/40 animate-bounce" />

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-purple-200 shadow-lg shadow-purple-500/20">
                Hello, I'm
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Chamidi Lakshika
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-4xl md:text-5xl mt-2">
                Web Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              WordPress Web Developer with hands-on experience in building and customizing websites using Elementor, WooCommerce, and custom plugins/themes. Skilled in responsive design, SEO optimization, and e-commerce development.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Currently working as an Associate Web Developer at <span className="text-purple-400 font-semibold">Axcertro (Pvt) Ltd</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-semibold transition shadow-lg shadow-purple-500/30"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-400 hover:bg-purple-600 rounded-full font-semibold transition"
              >
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <a 
                href="https://github.com/chamidi999?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/80 hover:bg-purple-600 rounded-xl transition shadow-md shadow-purple-500/10"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="http://www.linkedin.com/in/chamidi-lakshika-699b93217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/80 hover:bg-purple-600 rounded-xl transition shadow-md shadow-purple-500/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mchamidi888@gmail.com"
                className="p-3 bg-gray-800/80 hover:bg-purple-600 rounded-xl transition shadow-md shadow-purple-500/10"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-purple-500/30 blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 right-6 h-28 w-28 rounded-full bg-blue-500/30 blur-3xl animate-pulse" />
              <div className="relative h-[26rem] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
                {itemsToShow.map((item, index) => (
                  <div
                    key={item.title}
                    className={`absolute inset-0 transition duration-700 ease-out ${
                      index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/10 to-transparent" />
                  </div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-purple-500/40 flex items-center justify-center">
                      <Code size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-purple-200/80">
                        Featured project
                      </p>
                      <h3 className="text-lg font-semibold text-white">
                        {itemsToShow[activeIndex]?.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {itemsToShow.map((_, index) => (
                      <span
                        key={`indicator-${index}`}
                        className={`h-1.5 flex-1 rounded-full transition ${
                          index === activeIndex ? 'bg-purple-400' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-300 text-center">
                Browse a rotating preview of recent landing page builds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
