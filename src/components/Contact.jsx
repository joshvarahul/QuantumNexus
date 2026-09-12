import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Linkedin, Github, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_CONFIG.EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;

  const channels = [
    {
      name: "Direct Email",
      value: CONTACT_CONFIG.EMAIL,
      icon: Mail,
      action: copyEmail,
      actionLabel: copied ? "Copied!" : "Copy Email",
      color: "from-purple-500 to-indigo-600",
      accent: "text-quantum-purple"
    },
    {
      name: "WhatsApp Direct",
      value: CONTACT_CONFIG.WHATSAPP_NUMBER,
      icon: MessageCircle,
      href: whatsappUrl,
      actionLabel: "Open Chat",
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400"
    },
    {
      name: "Instagram",
      value: "@quantumnexus.dev",
      icon: Instagram,
      href: CONTACT_CONFIG.INSTAGRAM_URL,
      actionLabel: "Follow Us",
      color: "from-pink-500 to-rose-600",
      accent: "text-pink-400"
    },
    {
      name: "LinkedIn",
      value: "Quantum Nexus",
      icon: Linkedin,
      href: CONTACT_CONFIG.LINKEDIN_URL,
      actionLabel: "Connect",
      color: "from-blue-500 to-cyan-600",
      accent: "text-quantum-cyan"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-dark-950/90 border-t border-white/10">
      
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-quantum-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quantum-purple/10 border border-quantum-purple/30 text-quantum-purple-light text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-quantum-cyan" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            LET'S <span className="gradient-text-purple-cyan">CONNECT</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Have an idea? Let's talk. Reach out to Quantum Nexus through any of our official channels.
          </p>
        </div>

        {/* Contact Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {channels.map((chan, idx) => {
            const Icon = chan.icon;
            return (
              <div
                key={idx}
                className="group glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chan.color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {chan.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mb-6 truncate">
                    {chan.value}
                  </p>
                </div>

                {chan.action ? (
                  <button
                    onClick={chan.action}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/5 border border-white/10 hover:border-quantum-purple hover:bg-dark-900 transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-quantum-cyan" />}
                    <span>{chan.actionLabel}</span>
                  </button>
                ) : (
                  <a
                    href={chan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/5 border border-white/10 hover:border-quantum-cyan hover:bg-dark-900 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{chan.actionLabel}</span>
                    <ExternalLink className="w-4 h-4 text-quantum-cyan" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Form Prompt Box */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
          <h3 className="font-display font-bold text-xl text-white mb-2">
            Prefer standard project forms?
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Fill out our comprehensive Google Form with your project requirements, expected timeline, and budget.
          </p>
          <a
            href={CONTACT_CONFIG.GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
          >
            <span>Fill Out Project Inquiry Form</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
