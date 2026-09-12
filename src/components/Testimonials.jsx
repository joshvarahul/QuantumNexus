import React from 'react';
import { Sparkles, MessageCircleCode, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 relative bg-dark-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            WHAT OUR <span className="gradient-text-purple-cyan">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Elegant Placeholder Box (No Fake Reviews) */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-quantum-purple/10 border border-quantum-purple/30 mx-auto flex items-center justify-center text-quantum-purple mb-4">
            <MessageCircleCode className="w-7 h-7 animate-pulse" />
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Client Stories & Reviews Coming Soon
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            We are actively completing new software projects and client milestones. Verified project case studies and genuine client feedback will be published here soon.
          </p>
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Fake Testimonials Policy • 100% Genuine Client Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
