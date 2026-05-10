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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-dark md:hidden"
          >
            {/* Simplified Background Elements for better performance */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-accent/10 blur-[60px] rounded-full"></div>
            </div>

            {/* Close Button Inside Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-white p-2 z-[70]"
            >
              <X size={40} strokeWidth={1.5} />
            </button>

            <div className="relative h-full flex flex-col items-center justify-center">
              <div className="flex flex-col space-y-8 text-center">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif font-bold text-white hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="absolute bottom-12 flex flex-col items-center space-y-6">
                <div className="flex space-x-8">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em] font-bold">Instagram</a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em] font-bold">Vimeo</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default Navbar;
