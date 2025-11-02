// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-purple-600">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hi, I’m Chamidi Lakshika, a passionate Web Developer from Sri Lanka.
With a BSc (Hons) in Computer Science & Software Engineering from the University of Bedfordshire (UK), I bring both a strong technical foundation and a creative approach to every project I take on.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I specialize in WordPress Development, E-commerce, and Custom Website Solutions.
Using tools like Elementor Pro, WooCommerce, and responsive design techniques, I build modern, high-performing, and user-friendly websites that help businesses grow and stand out online.<br/>
My goal is to craft websites that are not only visually engaging but also fast, secure, and optimized for success.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-400 text-lg">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-gray-400 text-lg">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;