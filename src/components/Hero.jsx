// src/components/Hero.jsx
import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
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
            <div className="relative w-[22rem] h-[22rem]">
              <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/20" />
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-2xl bg-purple-500/30 blur-xl animate-pulse" />
              <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl animate-pulse" />
              <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-purple-600/60 via-purple-500/40 to-blue-500/40 flex flex-col items-center justify-center text-center gap-4">
                <Code size={90} className="text-white" />
                <div className="text-white font-semibold tracking-wide">
                  Building modern web experiences
                </div>
                <div className="text-sm text-purple-100/80">React • Next.js • WordPress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
