// src/components/Posters.jsx
import React from 'react';
import { posters } from '../data/portfolioData';

const Posters = () => {
  return (
    <section id="posters" className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-purple-400 uppercase tracking-[0.3em] text-xs">Graphic Design</p>
            <h2 className="text-4xl font-bold">
              Poster <span className="text-purple-600">Designs</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl">
              A curated collection of concept posters exploring different moods, typography styles, and visual storytelling.
            </p>
          </div>
          <div className="bg-gray-900/70 border border-gray-800 rounded-2xl px-6 py-4">
            <p className="text-sm text-gray-300">Specialty</p>
            <p className="text-lg font-semibold">Concept posters & event branding</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posters.map((poster, index) => (
            <article
              key={poster.id}
              className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-950"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={poster.thumbnail}
                  alt={poster.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{poster.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-400">0{index + 1}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{poster.description}</p>
                <div className="flex flex-wrap gap-2">
                  {poster.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-900/40 text-purple-200 border border-purple-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posters;
