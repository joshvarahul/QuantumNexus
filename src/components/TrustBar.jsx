import React from 'react';
import { Lightbulb, Zap, ShieldCheck, DollarSign } from 'lucide-react';

export default function TrustBar() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge technologies tailored for modern digital standards",
      color: "text-amber-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
    },
    {
      icon: Zap,
      title: "On-Time Delivery",
      description: "Agile execution milestones committed to tight schedule targets",
      color: "text-quantum-cyan",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous testing across performance, security, and responsive layouts",
      color: "text-quantum-purple-light",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Premium software development scaled transparently to your budget",
      color: "text-emerald-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
    }
  ];

  return (
    <section className="relative z-20 py-8 border-y border-white/10 bg-dark-900/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group p-4 rounded-xl bg-dark-850/50 border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-4 ${item.bgGlow}`}
              >
                <div className={`p-3 rounded-lg bg-dark-950 border border-white/10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-quantum-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
