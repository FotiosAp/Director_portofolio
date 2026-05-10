import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Education />
        <Contact />
      </main>
    </div>
  );
}



export default App;
