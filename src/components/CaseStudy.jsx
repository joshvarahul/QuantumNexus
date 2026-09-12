import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Award, Zap, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { CONTACT_CONFIG } from '../config/contact';

export default function CaseStudy({ onOpenProjectModal }) {
  const examverse = PROJECTS_DATA.find((p) => p.id === 'examverse') || PROJECTS_DATA[0];
  const { caseStudyDetails } = examverse;

  return (
    <section className="py-24 relative bg-dark-900/90 border-t border-white/10 overflow-hidden">
      
      {/* Radial glow background */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-quantum-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan animate-pulse" />
            <span>FEATURED CASE STUDY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            FROM IDEA TO <span className="gradient-text-purple-cyan">IMPLEMENTATION</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            An in-depth breakdown of how we architected and deployed ExamVerse — an AI-powered competitive exam learning engine.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center glass-card rounded-3xl p-6 sm:p-10 border border-quantum-purple/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          
          {/* Left Mockup View */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-dark-950 p-4 border border-white/10 shadow-2xl overflow-hidden group">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-full">
                  https://examverse.ai/arena
                </span>
                <span className="text-[10px] font-mono text-quantum-cyan bg-quantum-cyan/10 px-2 py-0.5 rounded">
                  LIVE v2.4
                </span>
              </div>

              {/* Main Simulated App Visual */}
              <div className="space-y-4">
                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-2">
                  {caseStudyDetails.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-dark-900 border border-white/5 text-center">
                      <div className="text-lg font-extrabold text-quantum-cyan">{m.value}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated Battle Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-quantum-purple/20 via-dark-900 to-quantum-cyan/20 border border-quantum-purple/30 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 text-quantum-purple-light font-bold">
                      <Zap className="w-4 h-4 text-quantum-cyan" /> AI BATTLE ARENA
                    </span>
                    <span className="text-emerald-400 font-bold">MATCH IN PROGRESS</span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium">
                    "Predict the reaction enthalpy matrix when subject to high-frequency laser node bombardment."
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded bg-emerald-500/20 border border-emerald-500/40 text-xs text-emerald-300 font-bold flex items-center justify-between">
                      <span>✓ ΔH = -245.8 kJ</span>
                      <span className="text-[10px]">AI Picked</span>
                    </div>
                    <div className="p-2 rounded bg-white/5 text-xs text-slate-400">
                      ΔH = +112.4 kJ
                    </div>
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5 font-mono">
                  <span>Stack: React • Supabase • AI</span>
                  <span className="text-quantum-purple font-bold">100% Responsive</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Case Study Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-mono text-xs text-quantum-cyan uppercase tracking-wider font-bold">
                {examverse.category}
              </span>
              <h3 className="font-display font-extrabold text-3xl text-white mt-1">
                {examverse.title}
              </h3>
            </div>

            {/* Problem & Solution Split */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-dark-950/70 border-l-4 border-l-rose-500 border border-white/5">
                <h4 className="text-xs font-mono text-rose-400 font-bold uppercase mb-1">Problem Statement</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudyDetails.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/70 border-l-4 border-l-emerald-500 border border-white/5">
                <h4 className="text-xs font-mono text-emerald-400 font-bold uppercase mb-1">Engineered Solution</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudyDetails.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Key Platform Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudyDetails.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-quantum-cyan shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenProjectModal(examverse)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all group"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-dark-950 border border-white/10 hover:border-quantum-cyan/40"
              >
                <span>Start Your App Project</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
