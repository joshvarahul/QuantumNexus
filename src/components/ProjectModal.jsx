import React from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-8 border border-quantum-purple/40 shadow-[0_0_60px_rgba(168,85,247,0.35)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs font-bold text-quantum-cyan bg-quantum-cyan/10 px-3 py-1 rounded-full border border-quantum-cyan/20">
            {project.category}
          </span>
          {project.badge && (
            <span className="font-mono text-xs font-bold text-quantum-purple-light bg-quantum-purple/20 px-3 py-1 rounded-full border border-quantum-purple/30">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2">
          {project.title}
        </h3>
        <p className="text-quantum-purple font-mono text-sm mb-6">
          {project.tagline}
        </p>

        {/* Long Description */}
        <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.longDescription}
        </div>

        {/* Technologies Used */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Technology Stack & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-quantum-cyan border border-quantum-cyan/20"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Details if available */}
        {project.caseStudyDetails && (
          <div className="space-y-4 mb-8 pt-4 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">The Problem</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{project.caseStudyDetails.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">The Solution</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{project.caseStudyDetails.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Platform Features</h5>
              <div className="space-y-1.5">
                {project.caseStudyDetails.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-quantum-cyan shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-dark-900 border border-white/10"
          >
            Close
          </button>

          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2"
          >
            <span>Request Similar Solution</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
