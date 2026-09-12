import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-box rounded-3xl p-8 sm:p-14 border border-white/10 relative overflow-hidden">
          
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 inline-block">
            ABOUT US
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
            About Quantum Nexus
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            <p>
              Quantum Nexus is a technology-focused freelance team dedicated to transforming ideas into practical digital solutions.
            </p>
            <p>
              We work across web development, application development, UI/UX design, e-commerce stores, academic project development and custom software solutions.
            </p>
            <p className="font-semibold text-white pt-2">
              Our goal is simple — understand your idea, build it properly, and deliver a solution that creates real value.
            </p>
          </div>

          {/* Value Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
            {[
              { label: "Innovative Solutions", text: "Modern Tech Stacks" },
              { label: "On-Time Delivery", text: "Agile Execution" },
              { label: "Quality Assurance", text: "Tested & Responsive" },
              { label: "Affordable Pricing", text: "Transparent Quotes" }
            ].map((v, i) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs font-bold text-white">{v.label}</div>
                <div className="text-[11px] font-mono text-purple-300 mt-0.5">{v.text}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
