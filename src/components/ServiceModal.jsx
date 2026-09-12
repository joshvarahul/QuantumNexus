import React from 'react';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-card rounded-2xl p-6 sm:p-8 border border-quantum-purple/40 shadow-[0_0_50px_rgba(168,85,247,0.3)] overflow-hidden">
        
        {/* Top Gradient Beam */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quantum-purple via-quantum-cyan to-quantum-magenta" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-quantum-cyan bg-quantum-cyan/10 px-3 py-1 rounded-full border border-quantum-cyan/20">
            SERVICE #{service.id}
          </span>
          {service.badge && (
            <span className="font-mono text-xs font-bold text-quantum-purple-light bg-quantum-purple/20 px-3 py-1 rounded-full border border-quantum-purple/30">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDescription || service.shortDescription}
        </p>

        {/* Features Checklist */}
        {service.features && (
          <div className="mb-8">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Included Capabilities & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-dark-900/60 border border-white/5 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-quantum-cyan shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-dark-900 border border-white/10 hover:bg-dark-850"
          >
            Close
          </button>

          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center gap-2"
          >
            <span>Start Project for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
