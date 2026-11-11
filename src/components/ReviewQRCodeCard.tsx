import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Star, QrCode, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const ReviewQRCodeCard: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'Google' | 'Trustpilot'>('Google');

  const reviewTargetUrl =
    activePlatform === 'Google' ? HOTEL_INFO.googleReviewUrl : HOTEL_INFO.trustpilotReviewUrl;

  return (
    <div className="bg-gradient-to-br from-white to-amber-50/50 dark:from-slate-900 dark:to-slate-900/80 p-8 rounded-2xl shadow-xl border border-amber-500/20 max-w-md mx-auto text-center relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="p-2 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full">
          <QrCode className="w-5 h-5" />
        </span>
        <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
          Review Us QR Code
        </h3>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 max-w-xs mx-auto">
        Scan with your smartphone camera to quickly share your feedback on Google or Trustpilot.
      </p>

      {/* Segmented Platform Selector */}
      <div className="flex justify-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg mb-6 border border-slate-200 dark:border-slate-700 max-w-xs mx-auto">
        <button
          onClick={() => setActivePlatform('Google')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
            activePlatform === 'Google'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <span className="font-bold text-blue-500">G</span> Google Review
        </button>
        <button
          onClick={() => setActivePlatform('Trustpilot')}
          className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
            activePlatform === 'Trustpilot'
              ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" /> Trustpilot
        </button>
      </div>

      {/* QR Code Container */}
      <div className="bg-white p-5 rounded-xl shadow-inner border border-amber-200 dark:border-slate-700 inline-block mb-6 relative group">
        <QRCodeSVG
          value={reviewTargetUrl}
          size={180}
          level="H"
          includeMargin={false}
          bgColor="#FFFFFF"
          fgColor="#0F172A"
        />
        <div className="mt-3 flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-600">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
          Verified Direct Scan
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-xs mx-auto">
        <a
          href={reviewTargetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          <span>Write a Review on {activePlatform}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Instant Mobile Connect for Guests</span>
        </div>
      </div>
    </div>
  );
};
