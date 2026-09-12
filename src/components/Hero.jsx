import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Content Box */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Freelance Software Development & Digital Solutions Team</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
            We Turn Ideas Into <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              Impactful Digital Solutions.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We build modern websites, web applications, e-commerce platforms, mobile apps, and technical solutions designed around your unique business and project goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={CONTACT_CONFIG.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-950/50 hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 text-left">
            {[
              { title: "Innovative Solutions", text: "Modern Web Tech" },
              { title: "On-Time Delivery", text: "Agile Milestones" },
              { title: "Quality Assurance", text: "Tested Across Devices" },
              { title: "Affordable Pricing", text: "Tailored Package Scopes" }
            ].map((v, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0e1320] border border-slate-800/60">
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="font-semibold text-sm text-slate-100">{v.title}</span>
                </div>
                <p className="text-xs text-slate-400 pl-6">{v.text}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
