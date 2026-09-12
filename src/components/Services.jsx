import React from 'react';
import { Globe, ShoppingBag, Code2, Smartphone, Palette, GraduationCap, BookOpen, ArrowRight, Check } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Services() {
  const servicesList = [
    {
      title: "Website Development",
      description: "Responsive, modern, and user-friendly websites designed for businesses, portfolios, organizations, and personal brands.",
      icon: Globe,
      features: ["Responsive Layouts", "Speed & SEO Optimization", "Clean Modular Code"]
    },
    {
      title: "E-Commerce Development",
      description: "Custom online stores designed to help businesses showcase products, manage orders, and scale online.",
      icon: ShoppingBag,
      features: ["Custom Storefronts", "Payment Integration", "Seamless Checkout Flow"]
    },
    {
      title: "Web Application Development",
      description: "Custom web applications built around unique business logic and modern user interaction requirements.",
      icon: Code2,
      features: ["Interactive Dashboards", "REST & API Architectures", "Scalable Data Storage"]
    },
    {
      title: "Mobile App Development",
      description: "Modern Android and cross-platform mobile application interfaces built for performance and intuitive navigation.",
      icon: Smartphone,
      features: ["Cross-Platform UI", "Mobile-First Design", "Smooth Touch Interactions"]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, clean, and engaging digital interfaces focused on accessibility, visual hierarchy, and user experience.",
      icon: Palette,
      features: ["Wireframes & Flowcharts", "Design System Components", "Modern Interface Layouts"]
    },
    {
      title: "Academic & Final Year Projects",
      description: "Technical project development, implementation support, code architecture, and academic project guidance.",
      icon: GraduationCap,
      features: ["Architecture & Code Mentoring", "Working Prototypes", "Implementation Support"]
    },
    {
      title: "Assignments & Technical Work",
      description: "Well-researched technical academic solutions, algorithm problem-solving support, and project guidance.",
      icon: BookOpen,
      features: ["Technical Problem Solving", "Algorithm Explanations", "Quality Code Reviews"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0e18] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-2 tracking-tight">
            What We Do
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Digital solutions designed around your ideas. End-to-end technical execution from initial requirements to delivery.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="card-craft p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-400 hover:text-slate-100 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire for {service.title}</span>
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
