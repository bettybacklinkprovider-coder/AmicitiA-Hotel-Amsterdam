import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { OffersPage } from './pages/OffersPage';
import { ContactReviewsPage } from './pages/ContactReviewsPage';

// Scroll to top component on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleOpenBooking = (roomId?: string, offerId?: string) => {
    setSelectedRoomId(roomId);
    setSelectedOfferId(offerId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenBooking={handleOpenBooking}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        {/* Main Content Area Routing across 4 Separate Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/rooms" element={<RoomsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/offers" element={<OffersPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactReviewsPage onOpenBooking={handleOpenBooking} />} />
            {/* Catch-all route redirecting back to home */}
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Floating WhatsApp Button */}
        <WhatsAppFloat />

        {/* Global Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          selectedRoomId={selectedRoomId}
          selectedOfferId={selectedOfferId}
        />

      </div>
    </BrowserRouter>
  );
}
