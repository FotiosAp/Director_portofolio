import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, UserCheck, Music } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Creative Direction",
    description: "Full-scale concept development for music videos, fashion films, and brand narratives.",
    image: "/creative-direction.png",
    icon: <Sparkles size={20} />
  },
  {
    id: 2,
    title: "Choreography for Camera",
    description: "Specialized movement designed for cinematic angles, lighting, and technical camera movement.",
    image: "/choreography-camera.png",
    icon: <Camera size={20} />
  },
  {
    id: 3,
    title: "Movement Direction",
    description: "Tailored movement coaching for artists, models, and actors for editorial and commercial shoots.",
    image: "/movement-direction.png",
    icon: <UserCheck size={20} />
  },
  {
    id: 4,
    title: "Live Staging & Tours",
    description: "Complete stage choreography and creative staging for large-scale live performances and tours.",
    image: "/live-staging.png",
    icon: <Music size={20} />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">Creative Services</h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Bringing technical precision and artistic vision to every frame. Specialized motion solutions for high-end productions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden hover:border-accent/40 transition-all duration-500 group relative"
            >
              <div className="h-64 overflow-hidden relative">
                <div 
                   className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                   style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 w-10 h-10 bg-accent/90 text-dark flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-white mb-4 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light h-20">
                  {item.description}
                </p>
                <a 
                  href="#contact"
                  className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-bold hover:text-white transition-colors duration-300"
                >
                  Inquire Now &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
