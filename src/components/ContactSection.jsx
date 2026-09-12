import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const whatsappLink1 = `https://wa.me/91${CONTACT_CONFIG.WHATSAPP_PRIMARY}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;
  const whatsappLink2 = `https://wa.me/91${CONTACT_CONFIG.WHATSAPP_SECONDARY}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            CONNECT WITH US
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 tracking-tight">
            Start Your Project
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Have an idea or requirement? Submit your project details through our Google Form or get in touch directly via WhatsApp, Instagram, or Email.
          </p>
        </div>

        {/* Primary Google Form Banner */}
        <div className="glass-box rounded-3xl p-8 sm:p-12 border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)] mb-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
              Ready to submit your requirements?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Fill out our official project inquiry form and our team will review your concept and get back to you promptly.
            </p>
            <div className="pt-4">
              <a
                href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span>Fill Project Inquiry Form 🚀</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* WhatsApp Primary */}
          <div className="glass-card-simple rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">WhatsApp #1</h4>
              <p className="font-mono text-xs text-slate-400 mb-4">+91 {CONTACT_CONFIG.WHATSAPP_PRIMARY}</p>
            </div>
            <div className="space-y-2 pt-2">
              <a
                href={whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* WhatsApp Secondary */}
          <div className="glass-card-simple rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">WhatsApp #2</h4>
              <p className="font-mono text-xs text-slate-400 mb-4">+91 {CONTACT_CONFIG.WHATSAPP_SECONDARY}</p>
            </div>
            <div className="space-y-2 pt-2">
              <a
                href={whatsappLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="glass-card-simple rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                <Instagram className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Instagram</h4>
              <p className="font-mono text-xs text-slate-400 mb-4">@{CONTACT_CONFIG.INSTAGRAM_HANDLE}</p>
            </div>
            <div className="pt-2">
              <a
                href={CONTACT_CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-lg text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Email */}
          <div className="glass-card-simple rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Direct Email</h4>
              <p className="font-mono text-xs text-slate-400 mb-4 truncate">{CONTACT_CONFIG.EMAIL}</p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => copyToClipboard(CONTACT_CONFIG.EMAIL, 'email')}
                className="w-full py-2 rounded-lg text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedField === 'email' ? 'Copied Email!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
