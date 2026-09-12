import React from 'react';
import { Rocket, MessageCircle, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function CTA() {
  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;

  return (
    <section id="start-project" className="py-24 relative bg-dark-950 border-t border-white/10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-quantum-purple/20 via-quantum-cyan/20 to-quantum-magenta/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-quantum-purple/40 shadow-[0_0_60px_rgba(168,85,247,0.3)] text-center relative overflow-hidden">
          
          {/* Animated top beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quantum-purple via-quantum-cyan to-quantum-magenta" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-quantum-purple/15 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-6">
            <Sparkles className="w-4 h-4 text-quantum-cyan animate-pulse" />
            <span>START YOUR PROJECT TODAY</span>
          </div>

          {/* Main Heading */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            LET'S BUILD SOMETHING <br />
            <span className="gradient-text-purple-cyan">AMAZING TOGETHER.</span>
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
            Have an idea? Tell us what you're thinking. We'll help turn it into a practical digital solution.
          </p>

          <div className="p-4 rounded-xl bg-dark-950/70 border border-white/10 max-w-md mx-auto mb-8 text-xs font-mono text-slate-400">
            Submit your requirements through our project form and our team will get back to you promptly.
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={CONTACT_CONFIG.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-quantum-purple via-indigo-600 to-quantum-cyan shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 transition-all duration-300 group"
            >
              <span>START YOUR PROJECT 🚀</span>
              <FileText className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-white bg-emerald-600/90 border border-emerald-500/50 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          {/* Value Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-6 border-t border-white/5">
            <span>✓ Confidential & NDA Friendly</span>
            <span>•</span>
            <span>✓ Fast 24h Response</span>
            <span>•</span>
            <span>✓ Flexible Budgets</span>
          </div>

        </div>
      </div>
    </section>
  );
}
