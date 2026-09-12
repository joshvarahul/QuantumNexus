import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_CONFIG.EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappLink1 = `https://wa.me/91${CONTACT_CONFIG.WHATSAPP_PRIMARY}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;
  const whatsappLink2 = `https://wa.me/91${CONTACT_CONFIG.WHATSAPP_SECONDARY}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mt-2 tracking-tight">
            Let's Connect & Start Your Project
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Have an idea or requirement? Submit your project details through our Google Form or contact us directly via WhatsApp, Instagram, or Email.
          </p>
        </div>

        {/* Google Form Primary Banner */}
        <div className="card-craft p-8 sm:p-12 mb-12 text-center bg-gradient-to-b from-[#111728] to-[#0e1320] border-indigo-500/30">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              Ready to submit your project requirements?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Submit your requirements through our official inquiry form and our team will get back to you promptly.
            </p>
            <div className="pt-2">
              <a
                href={CONTACT_CONFIG.GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-950/50"
              >
                <FileText className="w-5 h-5" />
                <span>Fill Out Project Inquiry Form 🚀</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* WhatsApp #1 */}
          <div className="card-craft p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-100 mb-1">WhatsApp #1</h4>
              <p className="font-mono text-xs text-slate-400 mb-4">+91 {CONTACT_CONFIG.WHATSAPP_PRIMARY}</p>
            </div>
            <a
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp #2 */}
          <div className="card-craft p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-100 mb-1">WhatsApp #2</h4>
              <p className="font-mono text-xs text-slate-400 mb-4">+91 {CONTACT_CONFIG.WHATSAPP_SECONDARY}</p>
            </div>
            <a
              href={whatsappLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instagram */}
          <div className="card-craft p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-pink-950/80 border border-pink-800/40 flex items-center justify-center text-pink-400 mb-4">
                <Instagram className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-100 mb-1">Instagram</h4>
              <p className="font-mono text-xs text-slate-400 mb-4">@{CONTACT_CONFIG.INSTAGRAM_HANDLE}</p>
            </div>
            <a
              href={CONTACT_CONFIG.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-pink-400 bg-pink-950/40 border border-pink-800/40 hover:bg-pink-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Direct Email */}
          <div className="card-craft p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-100 mb-1">Direct Email</h4>
              <p className="font-mono text-xs text-slate-400 mb-4 truncate">{CONTACT_CONFIG.EMAIL}</p>
            </div>
            <button
              onClick={copyEmail}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-indigo-400 bg-indigo-950/40 border border-indigo-800/40 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Email!' : 'Copy Email Address'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
