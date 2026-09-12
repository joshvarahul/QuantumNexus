import React from 'react';
import { Globe, ShoppingBag, Code2, Smartphone, Palette, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function WhatWeDo() {
  const services = [
    {
      title: "Website Development",
      description: "Responsive, modern and user-friendly websites designed for businesses, portfolios, organizations and personal brands.",
      icon: Globe,
      tag: "Web"
    },
    {
      title: "E-Commerce Solutions",
      description: "Custom online stores designed to help businesses showcase products, process orders, and grow online.",
      icon: ShoppingBag,
      tag: "Storefront"
    },
    {
      title: "Web Application Development",
      description: "Custom web applications built around unique business logic and modern user interaction requirements.",
      icon: Code2,
      tag: "SaaS & Software"
    },
    {
      title: "Mobile App Development",
      description: "Modern mobile applications and cross-platform UI components engineered for Android and mobile users.",
      icon: Smartphone,
      tag: "Mobile"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, clean, and engaging digital interfaces focused on accessibility, visual hierarchy, and user experience.",
      icon: Palette,
      tag: "Design Systems"
    },
    {
      title: "Academic & Final Year Projects",
      description: "Technical project development, software architecture support, and practical implementation guidance for students.",
      icon: GraduationCap,
      tag: "Academic Guidance"
    },
    {
      title: "Assignments & Technical Work",
      description: "Well-researched technical academic solutions, algorithm mentoring, and hands-on coding guidance.",
      icon: BookOpen,
      tag: "Mentorship"
    }
  ];

  return (
    <section id="what-we-do" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            OUR CAPABILITIES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight">
            What We Do
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            We provide end-to-end software development and technical solutions designed to turn your ideas into digital reality.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-card-simple rounded-2xl p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-purple-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
