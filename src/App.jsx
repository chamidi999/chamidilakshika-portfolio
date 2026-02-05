// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Posters from './components/Posters';
import LandingPages from './components/LandingPages';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Posters />
      <LandingPages />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
