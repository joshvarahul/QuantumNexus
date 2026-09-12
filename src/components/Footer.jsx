import React from 'react';
import { CONTACT_CONFIG } from '../config/contact';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const whatsappLink1 = `https://wa.me/91${CONTACT_CONFIG.WHATSAPP_PRIMARY}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 pt-16 pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 15l4 4" />
                </svg>
              </div>
              <span className="font-bold text-lg text-slate-100">
                Quantum Nexus
              </span>
            </div>
            <p className="font-mono text-indigo-400 text-xs">
              "{CONTACT_CONFIG.TAGLINE}"
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We turn ideas into impactful digital solutions. Strategic software development team for websites, e-commerce, web apps, mobile apps, and academic guidance.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Navigation</h4>
            <ul className="space-y-1.5">
              <li><a href="#home" className="hover:text-slate-100 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-slate-100 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-slate-100 transition-colors">Our Process</a></li>
              <li><a href="#about" className="hover:text-slate-100 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-slate-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-2 font-mono">
            <h4 className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider mb-2">Contact Details</h4>
            <p>Email: <a href={`mailto:${CONTACT_CONFIG.EMAIL}`} className="text-indigo-400 hover:underline">{CONTACT_CONFIG.EMAIL}</a></p>
            <p>WhatsApp: <a href={whatsappLink1} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 {CONTACT_CONFIG.WHATSAPP_PRIMARY} / {CONTACT_CONFIG.WHATSAPP_SECONDARY}</a></p>
            <p>Instagram: <a href={CONTACT_CONFIG.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">@{CONTACT_CONFIG.INSTAGRAM_HANDLE}</a></p>
            <div className="pt-2 font-sans">
              <a
                href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-slate-100"
              >
                <span>Google Inquiry Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono">
          <div>© 2026 Quantum Nexus. All rights reserved.</div>
          <div>Code. Create. Connect.</div>
        </div>

      </div>
    </footer>
  );
}
