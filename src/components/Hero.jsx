import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Glass Card Frame (Exact match to reference screenshot) */}
          <div className="lg:col-span-7">
            <div className="glass-box rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle background gradient glow inside box */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Main Headline */}
              <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-[1.15] mb-6">
                Building the Future <br className="hidden sm:inline" />
                of <span className="text-purple-400 font-extrabold">Digital Solutions</span>, Today.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
                We are a strategic software development team, delivering web applications, e-commerce stores, mobile apps, and technical solutions <strong className="text-purple-300 font-semibold">tailored to your vision</strong>.
              </p>

              {/* Action Buttons (Matching reference screenshot pill buttons) */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
                >
                  Start Your Project
                </a>

                <a
                  href="#what-we-do"
                  className="px-7 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-full transition-all"
                >
                  What We Do
                </a>
              </div>

            </div>
          </div>

          {/* Right Constellation Network Visual (Matching right side of reference image) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Outer soft aura */}
              <div className="absolute inset-0 bg-purple-600/10 rounded-full blur-3xl" />

              {/* SVG Constellation Network Mesh (Recreating right side graphic from reference screenshot) */}
              <svg className="w-full h-full text-slate-400/60" viewBox="0 0 400 400" fill="none">
                {/* Connecting Lines */}
                <g stroke="rgba(167, 139, 250, 0.35)" strokeWidth="1.2">
                  <line x1="80" y1="120" x2="160" y2="60" />
                  <line x1="160" y1="60" x2="240" y2="100" />
                  <line x1="240" y1="100" x2="320" y2="70" />
                  <line x1="320" y1="70" x2="340" y2="160" />
                  <line x1="80" y1="120" x2="140" y2="200" />
                  <line x1="160" y1="60" x2="200" y2="180" />
                  <line x1="240" y1="100" x2="280" y2="210" />
                  <line x1="340" y1="160" x2="330" y2="270" />
                  <line x1="140" y1="200" x2="220" y2="260" />
                  <line x1="200" y1="180" x2="280" y2="210" />
                  <line x1="280" y1="210" x2="330" y2="270" />
                  <line x1="140" y1="200" x2="160" y2="310" />
                  <line x1="220" y1="260" x2="260" y2="340" />
                  <line x1="330" y1="270" x2="260" y2="340" />
                </g>

                {/* Glowing Nodes */}
                <g fill="#ffffff">
                  <circle cx="80" cy="120" r="4" className="animate-pulse" />
                  <circle cx="160" cy="60" r="4" />
                  <circle cx="240" cy="100" r="5" fill="#a78bfa" />
                  <circle cx="320" cy="70" r="4" />
                  <circle cx="340" cy="160" r="4" />
                  <circle cx="140" cy="200" r="4" />
                  <circle cx="200" cy="180" r="5" fill="#c084fc" />
                  <circle cx="280" cy="210" r="4" />
                  <circle cx="330" cy="270" r="4" />
                  <circle cx="160" cy="310" r="4" />
                  <circle cx="220" cy="260" r="4" />
                  <circle cx="260" cy="340" r="4" />
                </g>
              </svg>

            </div>
          </div>

        </div>
      </div>

      {/* Mouse Scroll Indicator (Matching reference image bottom center) */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4">
        <a href="#what-we-do" className="text-slate-400 hover:text-purple-400 transition-colors flex flex-col items-center gap-2">
          <div className="w-5 h-9 rounded-full border-2 border-slate-400/60 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
}
