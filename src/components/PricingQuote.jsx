import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function PricingQuote() {
  return (
    <section className="py-20 relative bg-dark-950 border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-quantum-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-quantum-purple/40 shadow-[0_0_50px_rgba(168,85,247,0.25)] text-center relative overflow-hidden">
          
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quantum-purple via-quantum-cyan to-quantum-magenta" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>TAILORED SCOPING</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            EVERY IDEA IS <span className="gradient-text-purple-cyan">DIFFERENT.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us what you want to build and we'll understand your requirements before suggesting a suitable solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={CONTACT_CONFIG.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-quantum-purple via-indigo-600 to-quantum-cyan shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 group"
            >
              <span>Get a Free Project Discussion</span>
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <p className="text-xs font-mono text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No obligation. Just tell us your idea.</span>
          </p>

        </div>
      </div>
    </section>
  );
}
