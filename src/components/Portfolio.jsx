import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "The Echo",
      category: "Music Video",
      image: "/the-echo.png?v=3",
    },
    {
      id: 2,
      title: "Urban Rhythm",
      category: "Commercial",
      image: "/urban-rhythm.png?v=3",
    },
    {
      id: 3,
      title: "Show Dance",
      category: "Contemporary",
      image: "/midnight-soul.png?v=3",
    },
    {
      id: 4,
      title: "Kinetic Energy",
      category: "Art Film",
      image: "/kinetic-energy.png?v=3",
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-tighter">
            A FEW WORKS CHOREOGRAPHED BY ALEXANDER V.
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 bg-[#0a0a0a]">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className={`relative group cursor-pointer overflow-hidden aspect-[16/9] md:aspect-square lg:aspect-[16/9] border-white/10 
                ${idx === 0 ? 'border-b md:border-r' : ''} 
                ${idx === 1 ? 'border-b' : ''} 
                ${idx === 2 ? 'md:border-r' : ''}
              `}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                loading="eager"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-accent uppercase tracking-widest text-[10px] mb-2">{project.category}</p>
                  <h3 className="text-3xl font-serif text-white mb-4">{project.title}</h3>
                  <div className="flex items-center text-white/70 space-x-2">
                    <Play size={18} fill="currentColor" />
                    <span className="text-xs uppercase tracking-widest">Watch Now</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
