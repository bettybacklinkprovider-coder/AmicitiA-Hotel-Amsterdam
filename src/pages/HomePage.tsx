import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Star, ArrowRight, ShieldCheck, MapPin, 
  Wifi, Coffee, Anchor, Bike, Sparkles, UserCheck, Thermometer, Car, Check, ChevronRight
} from 'lucide-react';
import { 
  HOTEL_INFO, HOTEL_ROOMS, SPECIAL_OFFERS, HOTEL_FACILITIES, CUSTOMER_REVIEWS, RATING_BREAKDOWN 
} from '../data/hotelData';
import { ReviewQRCodeCard } from '../components/ReviewQRCodeCard';

interface HomePageProps {
  onOpenBooking: (roomId?: string, offerId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const [quickCheckIn, setQuickCheckIn] = useState('2026-11-20');
  const [quickCheckOut, setQuickCheckOut] = useState('2026-11-23');

  const facilityIcons: Record<string, React.ReactNode> = {
    Anchor: <Anchor className="w-6 h-6 text-amber-500" />,
    Bike: <Bike className="w-6 h-6 text-amber-500" />,
    Coffee: <Coffee className="w-6 h-6 text-amber-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
    Wifi: <Wifi className="w-6 h-6 text-amber-500" />,
    UserCheck: <UserCheck className="w-6 h-6 text-amber-500" />,
    Thermometer: <Thermometer className="w-6 h-6 text-amber-500" />,
    Car: <Car className="w-6 h-6 text-amber-500" />
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Large luxury hotel background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_amicitia_hotel_1794383906646.jpg"
            alt="AmicitiA Hotel Amsterdam exterior at Oosterdok canal"
            className="w-full h-full object-cover scale-105 filter brightness-[0.70] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 mt-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Premier Waterfront Boutique Hotel · Oosterdok 2, Amsterdam</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-lg text-balance">
            Where Dutch Charm Meets Luxury Elegance
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light text-balance">
            Welcome to <span className="font-semibold text-amber-400">AmicitiA</span>. Discover refined sanctuary on Amsterdam's historical waterfront with panoramic canal views, bespoke hospitality, and direct WhatsApp concierge.
          </p>

          {/* Floating Quick Search & Booking Bar */}
          <div className="max-w-4xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl border border-amber-500/20 text-slate-800 dark:text-white mt-8 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Check-in
                </label>
                <input
                  type="date"
                  value={quickCheckIn}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Check-out
                </label>
                <input
                  type="date"
                  value={quickCheckOut}
                  onChange={(e) => setQuickCheckOut(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Guests
                </label>
                <select className="w-full p-2.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white font-medium">
                  <option value={2}>2 Adults (1 Room)</option>
                  <option value={1}>1 Adult (Solo)</option>
                  <option value={4}>Family (Up to 4)</option>
                </select>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 pt-2">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-400" /> Best Price Direct Guarantee</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Free Cancellation Options</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> Central Location next to Centraal Station</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT AMICITIA
          ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-500/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-widest uppercase">
              Boutique Dutch Hospitality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              An Authentic Canal Haven at Oosterdok 2
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Nestled at Oosterdok 2 in central Amsterdam, <strong>AmicitiA</strong> combines classic Dutch architectural heritage with warm contemporary luxury. Named after the Latin word for friendship, our hotel welcomes discerning guests into an intimate sanctuary where every detail is tailored.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Step outside to peaceful maritime reflections, private boat mooring, and easy walks to the Maritime Museum, NEMO, and Central Station. Whether relaxing in our velvet waterfront lounge or riding our complimentary bicycles through the historic canal belt, AmicitiA offers an unmatched Amsterdam experience.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="border-l-2 border-amber-500 pl-4">
                <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white block">4.9/5</span>
                <span className="text-xs text-slate-500">Guest Rating Score</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white block">100%</span>
                <span className="text-xs text-slate-500">Waterfront Views</span>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white block">24/7</span>
                <span className="text-xs text-slate-500">Personal Concierge</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider hover:gap-3 transition-all"
              >
                Learn More About Our Location & Guest Reviews <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-amber-500/20">
              <img
                src="/src/assets/images/about_amicitia_lounge_1794383907715.jpg"
                alt="AmicitiA Hotel lounge interior"
                className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 text-white">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                  The AmicitiA Lounge
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Enjoy artisan Dutch cheeses, craft coffees, and fine wines overlooking Oosterdok.
                </p>
              </div>
            </div>

            {/* Accent Card Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-5 rounded-xl shadow-xl border border-amber-500/20 hidden sm:block max-w-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-white">Prime Location</h4>
                  <p className="text-xs text-slate-500">Oosterdok 2, 1011 VZ Amsterdam</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATION SPOTLIGHT
          ========================================================================= */}
      <section className="py-24 bg-stone-100/60 dark:bg-slate-900/40 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-widest uppercase">
                Luxury Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
                Rooms & Signature Suites
              </h2>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider hover:gap-3 transition-all"
            >
              View All 5 Rooms & Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOTEL_ROOMS.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-400 font-serif font-bold px-3 py-1.5 rounded-md text-sm border border-amber-500/30">
                      €{room.pricePerNight} <span className="text-xs font-sans text-slate-300 font-normal">/ night</span>
                    </div>
                    {room.featured && (
                      <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                        Featured Suite
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{room.sizeSqM} m² · {room.capacity} Guests</span>
                      <span className="text-amber-600 dark:text-amber-400 font-medium">{room.view}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                      {room.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {room.amenities.slice(0, 3).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs rounded-lg uppercase tracking-wider transition-colors shadow text-center"
                  >
                    Book Room Now
                  </button>
                  <Link
                    to="/rooms"
                    className="p-2.5 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOTEL FACILITIES
          ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-amber-500/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-widest uppercase">
            Curated Guest Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Bespoke Hotel Facilities & Amenities
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-3">
            At AmicitiA, every service is crafted to ensure effortless relaxation and seamless Amsterdam exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOTEL_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 flex items-center justify-center">
                    {facilityIcons[facility.iconName] || <Sparkles className="w-5 h-5 text-amber-500" />}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                    {facility.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SPECIAL OFFERS HIGHLIGHT
          ========================================================================= */}
      <section className="py-24 bg-stone-100/60 dark:bg-slate-900/40 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-widest uppercase">
                Exclusive Deals & Packages
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
                Featured Hotel Offers
              </h2>
            </div>
            <Link
              to="/offers"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider hover:gap-3 transition-all"
            >
              Explore All 6 Package Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SPECIAL_OFFERS.slice(0, 2).map((offer) => (
              <div
                key={offer.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-amber-500/20 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-1/2 relative min-h-[220px]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded shadow uppercase">
                    {offer.discountBadge}
                  </span>
                </div>

                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 uppercase font-bold tracking-wider">
                      {offer.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-1">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                      {offer.description}
                    </p>

                    <div className="mt-4 space-y-1">
                      {offer.inclusions.slice(0, 2).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 line-through">€{offer.originalPrice}</span>
                      <span className="font-serif font-bold text-xl text-amber-600 dark:text-amber-400 ml-2">€{offer.pricePerNight}</span>
                      <span className="text-[10px] text-slate-500 block">/ night</span>
                    </div>

                    <button
                      onClick={() => onOpenBooking(undefined, offer.id)}
                      className="py-2 px-4 bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white font-semibold text-xs rounded uppercase tracking-wider hover:bg-amber-600 transition-colors shadow"
                    >
                      Explore Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CUSTOMER REVIEWS & TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-widest uppercase">
            What Our Guests Say
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Customer Reviews & Star Ratings
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
            Discover why international travelers love staying at AmicitiA Hotel Amsterdam.
          </p>
        </div>

        {/* Overall Rating & Rating Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* Card 1: Overall Rating Score */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-amber-500/20 text-center flex flex-col justify-center items-center">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Overall Rating</span>
            <span className="font-serif text-6xl font-bold text-amber-500 my-2">{RATING_BREAKDOWN.average}</span>
            <div className="flex text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">Based on {RATING_BREAKDOWN.total} Verified Guest Reviews</p>
          </div>

          {/* Card 2: Rating Breakdown Bars */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-2">
              Rating Distribution
            </h4>
            {RATING_BREAKDOWN.breakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-xs">
                <span className="w-12 text-slate-600 dark:text-slate-400 font-medium">{item.stars} Stars</span>
                <div className="flex-1 h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right text-slate-500 font-mono">{item.percentage}%</span>
              </div>
            ))}
          </div>

          {/* Card 3: QR Code Card */}
          <div>
            <ReviewQRCodeCard />
          </div>

        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${review.platform === 'Google' ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300'}`}>
                    {review.platform} Review
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-white">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-slate-500">{review.location}</span>
                </div>
                {review.verifiedGuest && (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white font-semibold text-xs rounded-lg uppercase tracking-wider hover:bg-amber-600 transition-colors shadow"
          >
            <span>See All Guest Reviews & Rate Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

    </div>
  );
};
