import React from 'react';
import { 
  Sparkles, 
  Layout, 
  Server, 
  Database, 
  Figma, 
  Wrench, 
  Atom, 
  Code, 
  Paintbrush, 
  FileCode, 
  Wind, 
  Cpu, 
  Terminal, 
  Binary, 
  Flame, 
  Zap, 
  Table, 
  Github, 
  Laptop 
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data/technologies';

const iconMap = {
  Layout,
  Server,
  Database,
  Figma,
  Wrench,
  Atom,
  Code,
  Paintbrush,
  FileCode,
  Wind,
  Cpu,
  Terminal,
  Binary,
  Flame,
  Zap,
  Table,
  Github,
  Laptop
};

export default function Technologies() {
  return (
    <section className="py-24 relative bg-dark-950/90 border-t border-white/10">
      
      {/* Radial background glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-quantum-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>MODERN STACK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            TECHNOLOGIES WE <span className="gradient-text-purple-cyan">WORK WITH</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Modern tools and proven frameworks for engineered, scalable digital products.
          </p>
        </div>

        {/* Categories Stack Grid */}
        <div className="space-y-8">
          {TECH_CATEGORIES.map((cat, idx) => {
            const CatIcon = iconMap[cat.icon] || Layout;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-quantum-purple/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-900 border border-quantum-purple/30 flex items-center justify-center text-quantum-purple">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Pills Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {cat.techs.map((tech, tIdx) => {
                    const TechIcon = iconMap[tech.icon] || Code;
                    return (
                      <div
                        key={tIdx}
                        className="group p-3.5 rounded-xl bg-dark-900/70 border border-white/5 hover:border-quantum-cyan/40 hover:bg-dark-850 transition-all duration-300 flex items-center gap-3 hover:-translate-y-1"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} p-0.5 shrink-0`}>
                          <div className="w-full h-full bg-dark-950 rounded-[6px] flex items-center justify-center text-white">
                            <TechIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-quantum-cyan transition-colors">
                            {tech.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {tech.level}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
