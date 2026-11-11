import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const predefinedMessage = encodeURIComponent(
    "Hello AmicitiA Hotel! I would like to inquire about room availability and booking details at Oosterdok 2, Amsterdam."
  );

  const fullWhatsappUrl = `https://wa.me/31630002018?text=${predefinedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip message bubble */}
      {showTooltip && (
        <div className="bg-slate-900 dark:bg-slate-800 text-white p-3 rounded-xl shadow-2xl border border-emerald-500/30 max-w-xs text-xs relative animate-bounce-short flex items-start gap-2">
          <div className="flex-1">
            <p className="font-semibold text-emerald-400 mb-0.5">Need instant assistance?</p>
            <p className="text-slate-300">Chat with AmicitiA Concierge on WhatsApp (+31 630002018)</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full shrink-0"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={fullWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Book via WhatsApp +31630002018"
      >
        <MessageSquare className="w-7 h-7" />
        
        {/* Active online status badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white dark:border-slate-900 rounded-full"></span>
      </a>
    </div>
  );
};
