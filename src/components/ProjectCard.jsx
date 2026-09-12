import React from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  // Helper to render customized mockup graphics for each project
  const renderMockup = () => {
    switch (project.mockupType) {
      case 'examverse':
        return (
          <div className="w-full h-48 bg-dark-950 p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono text-quantum-purple bg-quantum-purple/10 px-2 py-0.5 rounded border border-quantum-purple/20">
                EXAMVERSE ARENA AI
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Question #14 (Physics)</span>
                <span className="text-[10px] font-mono text-emerald-400">00:45s</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5 text-[11px] text-slate-300">
                Calculate quantum decay frequency in high energy node state...
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="p-1.5 rounded bg-quantum-purple/20 border border-quantum-purple/40 text-[10px] text-quantum-purple-light font-semibold">
                  ✓ Option A (AI Verified)
                </div>
                <div className="p-1.5 rounded bg-white/5 text-[10px] text-slate-400">
                  Option B
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono text-slate-400">
              <span>LIVE MULTIPLAYER BATTLE</span>
              <span className="text-quantum-cyan">94% Accuracy</span>
            </div>
          </div>
        );
      case 'resume':
        return (
          <div className="w-full h-48 bg-dark-950 p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] font-mono text-quantum-cyan font-bold">RESUME ARCHITECT AI</span>
              <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">ATS SCORE 98%</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 p-2 bg-white/5 rounded space-y-1">
                <div className="w-8 h-8 rounded-full bg-quantum-cyan/20 mx-auto" />
                <div className="h-1.5 w-full bg-slate-600 rounded" />
                <div className="h-1 w-3/4 bg-slate-700 rounded mx-auto" />
              </div>
              <div className="col-span-8 p-2 bg-dark-900 rounded border border-white/5 space-y-1.5">
                <div className="h-2 w-full bg-quantum-purple/40 rounded" />
                <div className="h-1.5 w-5/6 bg-slate-600 rounded" />
                <div className="h-1.5 w-4/6 bg-slate-600 rounded" />
                <div className="h-1.5 w-full bg-slate-700 rounded" />
              </div>
            </div>
            <div className="text-[9px] font-mono text-slate-400 flex items-center justify-between pt-1 border-t border-white/5">
              <span>REAL-TIME TEMPLATE PREVIEW</span>
              <span className="text-quantum-purple">AI Bullet Generator</span>
            </div>
          </div>
        );
      case 'sam':
        return (
          <div className="w-full h-48 bg-dark-950 p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] font-mono text-quantum-cyan font-bold">S.A.M SMART ATTENDANCE</span>
              <span className="text-[9px] font-mono text-slate-400">QR ACTIVE</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white rounded p-1 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-dark-950 rounded border-2 border-dashed border-quantum-purple flex items-center justify-center text-[8px] font-mono text-quantum-cyan">
                  QR SCAN
                </div>
              </div>
              <div className="space-y-1 w-full">
                <div className="text-[10px] font-bold text-white">CS Dept • Sec A</div>
                <div className="h-2 w-full bg-slate-800 rounded overflow-hidden">
                  <div className="h-full w-[85%] bg-quantum-purple" />
                </div>
                <div className="text-[9px] text-slate-400">Present: 48 / 55 (87.2%)</div>
              </div>
            </div>
            <div className="text-[9px] font-mono text-slate-400 flex items-center justify-between pt-1 border-t border-white/5">
              <span>SUPABASE REALTIME</span>
              <span className="text-emerald-400">Automated Reports</span>
            </div>
          </div>
        );
      case 'bioprocessor':
      default:
        return (
          <div className="w-full h-48 bg-dark-950 p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] font-mono text-emerald-400 font-bold">BIO-PROCESSOR PLATFORM</span>
              <span className="text-[9px] font-mono text-slate-400">GENOMIC TAXONOMY</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-1.5 bg-emerald-500/10 rounded border border-emerald-500/30 text-[9px] text-emerald-300 text-center">
                DNA Sequences
              </div>
              <div className="p-1.5 bg-cyan-500/10 rounded border border-cyan-500/30 text-[9px] text-cyan-300 text-center">
                Proteins
              </div>
              <div className="p-1.5 bg-purple-500/10 rounded border border-purple-500/30 text-[9px] text-purple-300 text-center">
                Taxonomy
              </div>
            </div>
            <div className="h-10 bg-white/5 rounded p-1.5 flex items-end justify-between gap-1">
              <div className="w-1/6 h-[40%] bg-emerald-400 rounded" />
              <div className="w-1/6 h-[80%] bg-cyan-400 rounded" />
              <div className="w-1/6 h-[60%] bg-purple-400 rounded" />
              <div className="w-1/6 h-[100%] bg-quantum-purple rounded" />
              <div className="w-1/6 h-[50%] bg-emerald-400 rounded" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group glass-card rounded-2xl border border-white/10 hover:border-quantum-purple/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)] flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Visual Mockup Container */}
        <div className="relative border-b border-white/10 overflow-hidden">
          {renderMockup()}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-quantum-cyan uppercase tracking-wider font-semibold">
              {project.category}
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white group-hover:text-quantum-purple-light transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white transition-colors bg-dark-900/40">
        <span className="flex items-center gap-1 group-hover:text-quantum-cyan">
          View Project Details
        </span>
        <ArrowUpRight className="w-4 h-4 text-quantum-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>

    </div>
  );
}
