import React from 'react';
import { Sparkles, Compass, FileText, Code, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';
import { CONTACT_CONFIG } from '../config/contact';

const iconMap = {
  Compass,
  FileText,
  Sparkles,
  Code,
  ShieldCheck,
  Rocket
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-dark-950 border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-quantum-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>AGILE WORKFLOW</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            HOW WE TURN <span className="gradient-text-purple-cyan">IDEAS INTO REALITY</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            A transparent 6-step engineering timeline designed for speed, communication, and high-quality deliverables.
          </p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((stepItem, idx) => {
            const IconComponent = iconMap[stepItem.icon] || Code;

            return (
              <div
                key={stepItem.step}
                className="group glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Glowing Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-quantum-purple to-quantum-cyan">
                    {stepItem.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-quantum-purple/30 flex items-center justify-center text-quantum-purple group-hover:text-quantum-cyan group-hover:border-quantum-cyan/50 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Title & Description */}
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-quantum-cyan transition-colors">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs font-mono text-quantum-purple mb-3">
                    "{stepItem.shortDescription}"
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {stepItem.detailedDescription}
                  </p>
                </div>

                {/* Step Bottom Indicator */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>STAGE {idx + 1} OF 6</span>
                  <span className="text-quantum-cyan font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    READY FOR NEXT →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-16 text-center">
          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-quantum-purple via-indigo-600 to-quantum-cyan shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 group"
          >
            <span>Start Step 01: Discover Your Requirements</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
