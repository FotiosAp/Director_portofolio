import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-accent uppercase tracking-[0.5em] text-sm mb-4 block">
            Visionary Artist
          </span>
          <h1 className="text-5xl md:text-9xl font-serif font-bold text-white mb-6 tracking-tighter leading-[0.9]">
            ALEXANDER <span className="italic">V.</span>
          </h1>
          <p className="text-base md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-12">
            Director / Choreographer
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="w-full md:w-auto px-10 py-4 bg-white text-dark font-semibold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 rounded-sm text-center"
          >
            View Work
          </a>
          <a
            href="#education"
            className="w-full md:w-auto px-10 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300 rounded-sm text-center"
          >
            Join Masterclass
          </a>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
