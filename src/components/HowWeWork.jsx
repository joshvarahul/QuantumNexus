import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "We understand your core project vision, target goals, feature requirements, and timeline expectations."
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "We plan optimal technology stacks, outline modular code structure, and design clean, modern user interfaces."
    },
    {
      step: "03",
      title: "Development & Engineering",
      description: "Our team writes clean, scalable, performant code to transform the design into a fully functional product."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "We test responsiveness across devices, optimize performance, launch your solution, and provide support."
    }
  ];

  return (
    <section id="process" className="py-24 relative z-10 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            OUR PROCESS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight">
            How We Work
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            A simple, transparent development workflow designed for efficiency and quality delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-card-simple rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-purple-400/80 block mb-4">
                  {item.step}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-500">
                STEP {idx + 1} OF 4
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
