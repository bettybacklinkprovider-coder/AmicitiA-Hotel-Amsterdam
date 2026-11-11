import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, Star, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-widest text-amber-400 uppercase">
                AMICITIA
              </span>
              <span className="text-xs tracking-[0.25em] uppercase font-sans font-medium text-amber-200/80 -mt-1">
                Hotel Amsterdam
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Boutique 4-star luxury accommodation situated at Oosterdok 2 in central Amsterdam. Historic Dutch architecture, canal views, bespoke hospitality, and effortless city access.
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-300 font-medium">4.9 / 5.0 Rating (428 Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 tracking-wide uppercase">
              Hotel Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Rooms & Accommodation
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Special Offers & Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  Contact & Guest Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Booking Information */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 tracking-wide uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}, {HOTEL_INFO.postalCode} {HOTEL_INFO.city}, {HOTEL_INFO.country}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-amber-400 transition-colors">
                  {HOTEL_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <a 
                  href={HOTEL_INFO.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 text-emerald-400 font-medium transition-colors flex items-center gap-1"
                >
                  WhatsApp Booking (+31630002018) <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Instant Booking CTA Card */}
          <div className="bg-slate-800/80 p-6 rounded-lg border border-amber-500/20 flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-2">
                Direct Booking Guarantee
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Best rate guaranteed when booking directly on our site or via WhatsApp. Includes free welcome drink and flexible cancellation.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded text-xs uppercase tracking-wider transition-colors shadow"
            >
              Reserve Room Now
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AmicitiA Hotel Amsterdam. All Rights Reserved. Oosterdok 2, 1011 VZ Amsterdam.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
