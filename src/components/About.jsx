import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0e18] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-craft p-8 sm:p-12">
          
          <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-4">
            ABOUT QUANTUM NEXUS
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-6">
            Your Idea. Our Mission.
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            <p>
              Quantum Nexus is a technology-focused freelance team dedicated to transforming ideas into practical digital solutions.
            </p>
            <p>
              We work across web development, application development, UI/UX design, e-commerce, academic project development, and custom software solutions.
            </p>
            <p className="font-semibold text-slate-100 pt-2 border-l-2 border-indigo-500 pl-4">
              "Our goal is simple — understand the idea, build it properly, and deliver a solution that creates real value."
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-800/80">
            {[
              { title: "Innovative Solutions", text: "Modern Web Stack" },
              { title: "On-Time Delivery", text: "Agile Execution" },
              { title: "Quality Assurance", text: "Responsive & Tested" },
              { title: "Affordable Pricing", text: "Transparent Quotes" }
            ].map((v, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-xs font-bold text-slate-100">{v.title}</div>
                <div className="text-[11px] font-mono text-indigo-400 mt-0.5">{v.text}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
