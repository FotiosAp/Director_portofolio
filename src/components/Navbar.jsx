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

      {/* Mobile Menu Overlay - Moved outside Nav for absolute stability */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black md:hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full"></div>
              <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center">
              <div className="flex flex-col space-y-10 text-center">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, type: 'spring', damping: 20 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-serif font-bold text-white hover:text-accent transition-all duration-300 tracking-tighter"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-16 flex flex-col items-center space-y-6"
              >
                <div className="flex space-x-8">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em] font-bold">Instagram</a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em] font-bold">Vimeo</a>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


  );
};

export default Navbar;
