import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { CONTACT_CONFIG } from '../config/contact';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filterTabs = ['All', 'AI Platforms', 'Web Apps', 'Analytics & Data'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'AI Platforms') return proj.technologies.includes('AI');
    if (selectedFilter === 'Web Apps') return proj.category.includes('Platform') || proj.category.includes('Builder');
    if (selectedFilter === 'Analytics & Data') return proj.technologies.includes('Analytics') || proj.category.includes('Data');
    return true;
  });

  return (
    <section id="portfolio" className="py-24 relative bg-dark-950 border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-quantum-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            OUR <span className="gradient-text-purple-cyan">WORK</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Turning ideas into working digital products. Inspect case studies and live project architectures.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
                selectedFilter === tab
                  ? 'bg-gradient-to-r from-quantum-purple to-quantum-cyan text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-dark-900 text-slate-400 hover:text-white hover:bg-dark-850 border border-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* View All Projects CTA Banner */}
        <div className="text-center">
          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-dark-900 border border-quantum-purple/40 hover:border-quantum-cyan hover:bg-dark-850 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 group"
          >
            <span>Discuss Custom Project Requirements</span>
            <ExternalLink className="w-4 h-4 text-quantum-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Modal View for Project Details */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
