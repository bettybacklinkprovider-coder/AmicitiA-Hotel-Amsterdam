import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Moon, Sun, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomId?: string, offerId?: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  isDarkMode,
  onToggleDarkMode
}) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Special Offers', path: '/offers' },
    { name: 'Contact & Reviews', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3 border-b border-amber-500/10'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="flex flex-col">
            <span
              className={`font-serif text-2xl font-bold tracking-widest uppercase transition-colors ${
                isScrolled
                  ? 'text-slate-900 dark:text-amber-400 group-hover:text-amber-600'
                  : 'text-amber-300 group-hover:text-white'
              }`}
            >
              AMICITIA
            </span>
            <span
              className={`text-[10px] tracking-[0.25em] uppercase font-sans font-medium -mt-1 ${
                isScrolled ? 'text-amber-600 dark:text-amber-500' : 'text-amber-200/80'
              }`}
            >
              Hotel Amsterdam
            </span>
          </div>
        </Link>

        {/* Zone 2: 4 clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors relative py-1 ${
                  isScrolled
                    ? active
                      ? 'text-amber-600 dark:text-amber-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400'
                    : active
                    ? 'text-amber-300 font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Utilities */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={HOTEL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${
              isScrolled
                ? 'text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800'
                : 'text-emerald-400 hover:bg-white/10'
            }`}
            title="Chat on WhatsApp +31 630002018"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                : 'text-amber-200 hover:bg-white/10'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-md shadow-lg hover:shadow-amber-500/25 transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-full ${isScrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'}`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'}`}
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-slate-100 dark:border-slate-800 ${
                  isActive(link.path)
                    ? 'text-amber-600 dark:text-amber-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-amber-500 text-slate-900 font-semibold rounded-md shadow uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>

              <a
                href={HOTEL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-md shadow uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Direct (+31 630002018)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
