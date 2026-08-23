import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Hızlı WhatsApp İletişim Hattı" className="fixed bottom-6 right-6 z-40">
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
        title="WhatsApp'tan Ulaşın"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Pulse ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:animate-ping pointer-events-none -z-10"></span>

        {/* Tooltip on hover */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-950 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 border border-slate-800">
          WhatsApp'tan Ulaşın
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-950 rotate-45 border-t border-r border-slate-800"></div>
        </div>
      </a>
    </aside>
  );
};
