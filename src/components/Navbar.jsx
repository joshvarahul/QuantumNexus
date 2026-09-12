import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'nav-blur py-3.5 shadow-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 15l4 4" />
                <path d="M12 8v4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-100 tracking-tight leading-tight">
                Quantum Nexus
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                Code • Create • Connect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={CONTACT_CONFIG.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={CONTACT_CONFIG.GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg"
            >
              Start
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c101c] border-b border-slate-800 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-indigo-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
