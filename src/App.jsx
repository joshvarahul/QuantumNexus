import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-300">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
