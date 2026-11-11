import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Users, Check, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { HOTEL_ROOMS, SPECIAL_OFFERS, HOTEL_INFO } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
  selectedOfferId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId,
  selectedOfferId,
}) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || HOTEL_ROOMS[0].id);
  const [offerId, setOfferId] = useState<string>(selectedOfferId || 'none');
  const [checkIn, setCheckIn] = useState<string>('2026-11-20');
  const [checkOut, setCheckOut] = useState<string>('2026-11-23');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [addBreakfast, setAddBreakfast] = useState<boolean>(true);
  const [addCanalTour, setAddCanalTour] = useState<boolean>(false);
  const [addSauna, setAddSauna] = useState<boolean>(false);

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (selectedRoomId) setRoomId(selectedRoomId);
    if (selectedOfferId) setOfferId(selectedOfferId);
  }, [selectedRoomId, selectedOfferId]);

  if (!isOpen) return null;

  const currentRoom = HOTEL_ROOMS.find((r) => r.id === roomId) || HOTEL_ROOMS[0];
  const currentOffer = SPECIAL_OFFERS.find((o) => o.id === offerId);

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.max(end.getTime() - start.getTime(), 86400000);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  // Base price per night
  let baseRate = currentRoom.pricePerNight;
  if (currentOffer) {
    baseRate = currentOffer.pricePerNight;
  }

  const roomSubtotal = baseRate * nights;
  const breakfastTotal = addBreakfast ? 22 * nights * guests : 0;
  const tourTotal = addCanalTour ? 35 * guests : 0;
  const saunaTotal = addSauna ? 45 : 0;
  const grandTotal = roomSubtotal + breakfastTotal + tourTotal + saunaTotal;

  const handleWhatsAppBooking = () => {
    const messageText = `*AmicitiA Hotel Booking Request*%0A%0A` +
      `*Guest Name:* ${guestName || 'Valued Guest'}%0A` +
      `*Room:* ${currentRoom.name}%0A` +
      `*Offer/Package:* ${currentOffer ? currentOffer.title : 'Standard Direct Booking'}%0A` +
      `*Dates:* ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? 's' : ''})%0A` +
      `*Guests:* ${guests} Adult(s)%0A` +
      `*Add-ons:* ${addBreakfast ? 'Breakfast, ' : ''}${addCanalTour ? 'Canal Cruise, ' : ''}${addSauna ? 'Spa Access' : 'None'}%0A` +
      `*Estimated Total:* €${grandTotal}%0A` +
      `*Contact:* ${guestPhone || guestEmail || 'Provided on chat'}%0A` +
      `*Special Requests:* ${specialRequests || 'None'}`;

    window.open(`https://wa.me/31630002018?text=${messageText}`, '_blank');
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `AMIC-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full border border-amber-500/20 overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 border-b border-amber-500/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-amber-400 tracking-[0.2em] uppercase">
              Official Direct Reservation
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Reserve Your Stay at AmicitiA
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submittedRef ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                Reservation Request Received!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-amber-600">{guestName || 'Guest'}</span>. Your booking inquiry code is <span className="font-mono font-bold text-slate-900 dark:text-white">{submittedRef}</span>.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Room:</span>
                <span className="font-semibold">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Check-in / Check-out:</span>
                <span className="font-semibold">{checkIn} to {checkOut} ({nights} nights)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Guests:</span>
                <span className="font-semibold">{guests} Person(s)</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold text-amber-600 dark:text-amber-400">
                <span>Total Estimated:</span>
                <span>€{grandTotal}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Our reservation team will contact you at <span className="font-medium text-slate-700 dark:text-slate-300">{guestEmail || 'your email'}</span> within 2 hours to confirm your booking.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                Fast-Track via WhatsApp (+31 630002018)
              </button>
              <button
                onClick={onClose}
                className="py-3 px-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white font-semibold text-xs rounded-lg uppercase tracking-wider hover:bg-slate-300 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleOnlineSubmit} className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Room & Package Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Select Room or Suite
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-amber-500"
                >
                  {HOTEL_ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — €{r.pricePerNight}/night
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Special Offer Package (Optional)
                </label>
                <select
                  value={offerId}
                  onChange={(e) => setOfferId(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-amber-500"
                >
                  <option value="none">Standard Direct Booking Rate</option>
                  {SPECIAL_OFFERS.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.title} ({o.discountBadge} — €{o.pricePerNight}/night)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-amber-50/50 dark:bg-slate-800/40 p-4 rounded-xl border border-amber-500/10">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-500" /> Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full p-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-500" /> Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full p-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-amber-500" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family Suite)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Add-on Enhancements */}
            <div>
              <span className="block text-xs font-semibold uppercase text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Enhance Your Stay (Optional Add-ons)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className={`p-3 rounded-lg border text-xs cursor-pointer transition-colors ${addBreakfast ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'}`}>
                  <input
                    type="checkbox"
                    checked={addBreakfast}
                    onChange={(e) => setAddBreakfast(e.target.checked)}
                    className="mr-2 accent-amber-500"
                  />
                  <span className="font-semibold">Daily Breakfast</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">€22 / person / day</p>
                </label>

                <label className={`p-3 rounded-lg border text-xs cursor-pointer transition-colors ${addCanalTour ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'}`}>
                  <input
                    type="checkbox"
                    checked={addCanalTour}
                    onChange={(e) => setAddCanalTour(e.target.checked)}
                    className="mr-2 accent-amber-500"
                  />
                  <span className="font-semibold">Canal Cruise Pass</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">€35 / person</p>
                </label>

                <label className={`p-3 rounded-lg border text-xs cursor-pointer transition-colors ${addSauna ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'}`}>
                  <input
                    type="checkbox"
                    checked={addSauna}
                    onChange={(e) => setAddSauna(e.target.checked)}
                    className="mr-2 accent-amber-500"
                  />
                  <span className="font-semibold">Private Spa Hour</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">€45 / session</p>
                </label>
              </div>
            </div>

            {/* Step 4: Guest Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+31..."
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">
                Special Requests or Arrival Notes
              </label>
              <textarea
                rows={2}
                placeholder="High floor request, quiet room, late arrival..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full p-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-900 dark:text-white"
              />
            </div>

            {/* Price Summary & Action Buttons */}
            <div className="bg-slate-900 text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-medium">Total Price ({nights} Night{nights > 1 ? 's' : ''})</span>
                <span className="font-serif text-3xl font-bold text-amber-400">€{grandTotal}</span>
                <span className="text-[10px] text-slate-400 block">Taxes & City Tax Included</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book via WhatsApp
                </button>

                <button
                  type="submit"
                  className="py-2.5 px-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs rounded-lg uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Confirm Request
                </button>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
