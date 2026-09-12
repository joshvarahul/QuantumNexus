import React from 'react';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans relative selection:bg-purple-500/30 selection:text-purple-300">
      
      {/* Interactive Constellation Network Canvas Background */}
      <NetworkBackground />

      {/* Header Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <About />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
