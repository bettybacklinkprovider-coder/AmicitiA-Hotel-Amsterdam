import React, { useState } from 'react';
import { SPECIAL_OFFERS, SpecialOffer } from '../data/hotelData';
import { Check, ArrowRight, Clock, ShieldCheck, Sparkles, Tag } from 'lucide-react';

interface OffersPageProps {
  onOpenBooking: (roomId?: string, offerId?: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Packages', value: 'all' },
    { label: 'Weekend Getaway', value: 'Weekend Getaway' },
    { label: 'Romantic Stay', value: 'Romantic Stay Package' },
    { label: 'Extended Stay', value: 'Extended Stay Package' },
    { label: 'Family Stay', value: 'Family Stay Package' },
    { label: 'Business Stay', value: 'Business Stay Package' },
    { label: 'Seasonal Special', value: 'Seasonal Special Offers' },
  ];

  const filteredOffers = SPECIAL_OFFERS.filter((offer) => {
    if (activeCategory === 'all') return true;
    return offer.category === activeCategory;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#FAF8F5] dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/images/offer_weekend_getaway_1794383925652.jpg"
            alt="AmicitiA Special Offers"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Tag className="w-4 h-4" /> Exclusive Direct Hotel Deals
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Special Offers & Packages
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Elevate your stay at AmicitiA with curated packages including gourmet breakfasts, champagne upgrades, museum passes, and late checkouts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Limited Offer Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 p-8 rounded-3xl shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-950 text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Featured Deal of the Month
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Canal Romance & Champagne Suite Upgrade
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
              Book any suite for 2+ nights and receive complimentary chilled Moët & Chandon champagne, rose petals, and a 1-hour private evening canal cruise ticket for two.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking(undefined, 'romantic-stay')}
            className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            Claim Featured Deal <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-slate-200/80 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === cat.value
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Package Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:border-amber-500/40 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded shadow uppercase">
                    {offer.discountBadge}
                  </span>
                  <span className="absolute top-4 right-4 bg-slate-950/80 text-amber-400 font-serif font-bold text-xs px-2.5 py-1 rounded">
                    Min {offer.minNights} Night{offer.minNights > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
                    {offer.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Included Facilities & Perks */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                      Package Inclusions:
                    </span>
                    {offer.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Terms */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">Booking Conditions:</span>
                    {offer.bookingConditions}
                  </div>

                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-slate-400 line-through">€{offer.originalPrice}</span>
                  <span className="font-serif text-2xl font-bold text-amber-600 dark:text-amber-400 ml-2">€{offer.pricePerNight}</span>
                  <span className="text-[10px] text-slate-500 block">/ night</span>
                </div>

                <button
                  onClick={() => onOpenBooking(undefined, offer.id)}
                  className="py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg uppercase tracking-wider transition-colors shadow flex items-center gap-1.5"
                >
                  Explore Offer <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-amber-500/20 text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-amber-500 mx-auto" />
          <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
            Transparent Price Guarantee
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            All prices and discounts displayed are verified for direct bookings on AmicitiA's official website or via WhatsApp (+31 630002018). No hidden resort fees.
          </p>
        </div>

      </div>

    </div>
  );
};
