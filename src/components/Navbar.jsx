import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-dark/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tighter text-white"
          >
            ALEXANDER <span className="text-accent italic">V.</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-accent transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden relative z-[60]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - No Animation for maximum stability */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-dark md:hidden flex flex-col items-center justify-center">
          {/* Static Background Accent */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] rounded-full"></div>
          </div>

          {/* Close Button Inside */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-white p-2"
          >
            <X size={32} />
          </button>

          <div className="relative z-10 flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif font-bold text-white hover:text-accent transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-12 flex space-x-6 justify-center">
              <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">Vimeo</a>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default Navbar;

