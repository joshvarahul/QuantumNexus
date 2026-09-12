import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 p-3.5 rounded-full bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Chat with Quantum Nexus on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold font-sans pr-1">
        Chat on WhatsApp
      </span>
      {/* Outer Pulse Ring */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
    </a>
  );
}
