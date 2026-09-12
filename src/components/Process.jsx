import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Scope & Requirements",
      description: "We review your project concept, target audience, core features, and delivery milestones."
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "We select modern technology stacks, plan modular code structure, and design intuitive UI components."
    },
    {
      step: "03",
      title: "Development & Build",
      description: "We write clean, efficient, maintainable code to bring your requirements to life."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "We test functionality across mobile and desktop devices, optimize speed, and deploy your project."
    }
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
            WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-2 tracking-tight">
            How We Turn Ideas Into Reality
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            A simple, transparent 4-step execution workflow for speed and reliability.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="card-craft p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-indigo-500/80 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                MILESTONE {idx + 1} OF 4
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            <span>Start Step 01: Discuss Your Scope</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
