import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, CheckCircle2 } from 'lucide-react';

const sessions = [
  {
    id: 1,
    title: "Cinematic Movement Masterclass",
    date: "June 15, 2026",
    time: "10:00 AM - 2:00 PM",
    price: "$150",
    description: "Deep dive into movement designed for the lens. Learn how to translate choreography into cinematic frames.",
    image: "/choreography-camera.png"
  },
  {
    id: 2,
    title: "Director's Vision: The Frame",
    date: "June 22, 2026",
    time: "11:00 AM - 4:00 PM",
    price: "$200",
    description: "For directors who want to understand the rhythm of human motion and how to direct dancers effectively.",
    image: "/creative-direction.png"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Professional Growth</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Educational Sessions</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            Exclusive training sessions designed for aspiring directors and choreographers. 
            Bridging the gap between artistic expression and technical execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {sessions.map((session, idx) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  style={{ backgroundImage: `url(${session.image})` }}
                />
              </div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-white">{session.title}</h3>
                  <span className="text-accent font-bold text-xl">{session.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 font-light">{session.description}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar size={16} className="mr-3 text-accent" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Clock size={16} className="mr-3 text-accent" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <CheckCircle2 size={16} className="mr-3 text-accent" />
                    <span>In-person & Digital Recording</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-transparent border border-accent text-accent uppercase tracking-widest text-xs font-bold hover:bg-accent hover:text-dark transition-all duration-300">
                  Secure Your Spot
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Payment & Agency Info */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex-1 w-full">
            <span className="text-accent uppercase tracking-widest text-[10px] mb-6 block opacity-80">Official Payment Methods</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-6">
              {/* Visa */}
              <div className="flex items-center">
                <div className="w-14 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden border border-white/20 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" className="w-full h-full">
                    <text x="50" y="16" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '900', fontStyle: 'italic', fontSize: '20px', fill: '#1a1f71', letterSpacing: '-0.5px' }}>VISA</text>
                  </svg>
                </div>
              </div>

              {/* Mastercard */}
              <div className="flex items-center">
                <div className="w-14 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden border border-white/20 shadow-sm">
                  <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-110">
                    <circle cx="38" cy="20" r="18" fill="#eb001b" />
                    <circle cx="62" cy="20" r="18" fill="#ff5f00" fillOpacity="0.8" />
                    <text x="50" y="22" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '900', fontStyle: 'italic', fontSize: '10px', fill: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>MasterCard</text>
                  </svg>
                </div>
              </div>

              {/* PayPal */}
              <div className="flex items-center">
                <div className="w-16 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden border border-white/20 shadow-sm">
                  <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <text x="50" y="16" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '900', fontStyle: 'italic', fontSize: '18px', letterSpacing: '-0.5px' }}>
                      <tspan fill="#003087">Pay</tspan>
                      <tspan fill="#009cde">Pal</tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 md:text-right w-full">
            <h4 className="text-white font-serif text-lg mb-2 italic">Representation & Inquiries</h4>
            <p className="text-gray-500 text-[10px] mb-4 font-light uppercase tracking-widest">For Agencies & Global Management</p>
            <a 
              href="mailto:mgmt@alexander-v.com" 
              className="text-white text-sm font-serif border-b border-accent/30 pb-1 hover:text-accent transition-all duration-300 inline-block"
            >
              mgmt@alexander-v.com
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Education;
