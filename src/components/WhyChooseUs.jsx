import React from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function WhyChooseUs() {
  const reasons = [
    { title: "Experienced & Skilled Team", description: "Deep expertise in modern JavaScript, React, web security, and UI/UX design." },
    { title: "Custom Solutions", description: "Zero generic cookie-cutter templates. Every project engineered around unique goals." },
    { title: "Transparent Communication", description: "Direct updates, milestone progress tracking, and zero hidden costs." },
    { title: "Affordable Packages", description: "Competitive, transparent pricing tailored for startups, businesses, and students." },
    { title: "Quality Focused", description: "Comprehensive testing across devices, speed optimization, and clean source code." },
    { title: "Reliable Support", description: "Post-deployment launch guidance and ongoing technical maintenance." }
  ];

  return (
    <section className="py-24 relative bg-dark-950 border-t border-white/10 overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-quantum-purple/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-6">
              <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
              <span>THE NEXUS DIFFERENCE</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              WE DON'T JUST <br className="hidden sm:inline" />
              BUILD SOFTWARE. <br />
              <span className="gradient-text-purple-cyan">WE BUILD SOLUTIONS.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Your idea deserves more than a standard template. We take ownership of the technical complexity so you can focus on making an impact.
            </p>

            <div>
              <a
                href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all group"
              >
                <span>Work With Quantum Nexus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Checklist Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="group glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center text-quantum-cyan group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 animate-pulse" />
                    </div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-quantum-cyan transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
