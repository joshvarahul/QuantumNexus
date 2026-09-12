import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Code2, 
  Smartphone, 
  Palette, 
  Layers, 
  Server, 
  Rocket, 
  GraduationCap, 
  BookOpenCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import ServiceModal from './ServiceModal';

const iconMap = {
  Globe,
  ShoppingBag,
  Code2,
  Smartphone,
  Palette,
  Layers,
  Server,
  CloudRocket: Rocket,
  GraduationCap,
  BookOpenCheck
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 relative bg-dark-950/80 border-t border-white/10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-quantum-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            WHAT WE <span className="gradient-text-purple-cyan">BUILD</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Digital solutions designed around your ideas. End-to-end technical execution from initial scope to production deployment.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-extrabold text-slate-500 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      {service.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-dark-900 border border-quantum-purple/30 flex items-center justify-center text-quantum-purple group-hover:text-quantum-cyan group-hover:border-quantum-cyan/50 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-quantum-cyan transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1 group-hover:text-quantum-cyan">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 text-quantum-cyan group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Modal Popup */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
