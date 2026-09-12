import React from 'react';
import { Globe, Code2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function FeaturedServices({ onSelectService }) {
  const featuredList = [
    {
      id: "01",
      title: "Website Development",
      tagline: "Build your digital presence with high-converting web experiences.",
      description: "Responsive, modern and user-friendly websites designed for businesses, portfolios, organizations and personal brands.",
      icon: Globe,
      color: "from-purple-500 to-indigo-600",
      accent: "#a855f7",
      features: ["Custom UI/UX Styling", "SEO & Speed Optimization", "Mobile Breakpoint Perfection"],
      mockup: (
        <div className="w-full h-44 bg-dark-950/90 rounded-xl p-3 border border-white/10 flex flex-col justify-between overflow-hidden relative group-hover:border-quantum-purple/50 transition-colors">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">https://brand.dev</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="h-4 w-3/4 bg-gradient-to-r from-quantum-purple to-quantum-cyan rounded animate-pulse" />
            <div className="h-2 w-1/2 bg-slate-700 rounded" />
            <div className="grid grid-cols-3 gap-1.5 pt-2">
              <div className="h-10 bg-white/5 rounded border border-white/5" />
              <div className="h-10 bg-white/5 rounded border border-white/5" />
              <div className="h-10 bg-white/5 rounded border border-white/5" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "03",
      title: "Web Applications",
      tagline: "Scale operations with custom web app software.",
      description: "Custom web applications built around unique business and user requirements.",
      icon: Code2,
      color: "from-cyan-500 to-blue-600",
      accent: "#06b6d4",
      features: ["Interactive Dashboards", "React Architecture", "Scalable Data Pipelines"],
      mockup: (
        <div className="w-full h-44 bg-dark-950/90 rounded-xl p-3 border border-white/10 flex flex-col justify-between overflow-hidden relative group-hover:border-quantum-cyan/50 transition-colors">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] font-mono text-quantum-cyan font-bold">CORE APP DASHBOARD</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div className="grid grid-cols-2 gap-2 py-1">
            <div className="p-2 bg-quantum-purple/10 rounded border border-quantum-purple/30">
              <div className="text-[9px] text-slate-400">Total Users</div>
              <div className="text-sm font-bold text-white">24.5k</div>
            </div>
            <div className="p-2 bg-quantum-cyan/10 rounded border border-quantum-cyan/30">
              <div className="text-[9px] text-slate-400">Uptime</div>
              <div className="text-sm font-bold text-quantum-cyan">99.9%</div>
            </div>
          </div>
          <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded flex items-center justify-center border border-white/5">
            <span className="text-[10px] font-mono text-slate-300">Live Analytics Feed</span>
          </div>
        </div>
      )
    },
    {
      id: "02",
      title: "E-Commerce Development",
      tagline: "High-converting online store experiences.",
      description: "Custom online stores designed to help businesses showcase products and grow online.",
      icon: ShoppingBag,
      color: "from-magenta-500 to-purple-600",
      accent: "#ec4899",
      features: ["Seamless Shopping Cart", "Payment Integrations", "Optimized Checkout Flow"],
      mockup: (
        <div className="w-full h-44 bg-dark-950/90 rounded-xl p-3 border border-white/10 flex flex-col justify-between overflow-hidden relative group-hover:border-quantum-magenta/50 transition-colors">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[10px] font-mono text-quantum-magenta font-bold">STOREFRONT MOCKUP</span>
            <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">CHECKOUT READY</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 py-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-1.5 bg-white/5 rounded border border-white/5 text-center">
                <div className="w-full h-7 bg-quantum-purple/20 rounded mb-1" />
                <div className="h-1.5 w-3/4 bg-slate-600 mx-auto rounded" />
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-quantum-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-quantum-cyan/10 border border-quantum-cyan/20">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-4 tracking-tight">
            FEATURED <span className="gradient-text-purple-cyan">SOLUTIONS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Our 3 flagship development verticals engineered to transform your business goals into revenue-generating software.
          </p>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative glass-card rounded-2xl p-6 border border-white/10 hover:border-quantum-purple/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">SERVICE #{service.id}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-quantum-cyan transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-quantum-purple mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Visual Mockup Container */}
                  <div className="mb-6">
                    {service.mockup}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-quantum-cyan" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-quantum-cyan hover:text-white transition-colors"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-quantum-purple/20 text-quantum-purple-light hover:bg-quantum-purple hover:text-white transition-all border border-quantum-purple/30"
                  >
                    Inquire
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
