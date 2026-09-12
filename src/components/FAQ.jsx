import React, { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-dark-950/90 border-t border-white/10">
      
      {/* Radial background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-quantum-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            FREQUENTLY ASKED <span className="gradient-text-purple-cyan">QUESTIONS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Everything you need to know about starting a project with Quantum Nexus.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-quantum-purple/50 bg-dark-900/90 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-quantum-cyan bg-white/5 px-2.5 py-1 rounded-md">
                      0{faq.id}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-quantum-cyan bg-quantum-cyan/10 border-quantum-cyan/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
