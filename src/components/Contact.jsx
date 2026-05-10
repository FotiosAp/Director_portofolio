import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);


const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Bio & Representation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Let's Create.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
              Alexander V. is an award-winning Director and Choreographer based in London & Los Angeles. 
              His work explores the intersection of human emotion and technical precision, creating 
              visceral experiences that linger long after the final frame.
            </p>

            <div className="mb-12 p-8 bg-white/5 border-l-2 border-accent">
              <h4 className="text-accent uppercase tracking-widest text-xs mb-4">Agency Representation</h4>
              <p className="text-white font-serif text-xl mb-1">Creative Artists Agency (CAA)</p>
              <p className="text-gray-400 text-sm mb-4">Agent: Sarah Jenkins</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center"><Mail size={14} className="mr-2" /> s.jenkins@caa.com</p>
                <p className="flex items-center"><Phone size={14} className="mr-2" /> +1 (310) 555-0123</p>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={24} /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] p-10 rounded-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full bg-[#111] border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors">
                  <option>Collaboration Inquiries</option>
                  <option>Booking Masterclass</option>
                  <option>General Message</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button className="w-full py-4 bg-white text-dark font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 mt-4">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
          <p>&copy; 2026 Alexander V. All Rights Reserved.</p>
          <p>Designed for the Motion</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
