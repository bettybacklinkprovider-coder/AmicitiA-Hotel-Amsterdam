import React, { useState } from 'react';
import { 
  HOTEL_INFO, CUSTOMER_REVIEWS, RATING_BREAKDOWN 
} from '../data/hotelData';
import { ReviewQRCodeCard } from '../components/ReviewQRCodeCard';
import { 
  MapPin, Phone, Mail, MessageSquare, Star, ShieldCheck, 
  Send, ExternalLink, CheckCircle2, Clock, Navigation
} from 'lucide-react';

interface ContactReviewsPageProps {
  onOpenBooking: () => void;
}

export const ContactReviewsPage: React.FC<ContactReviewsPageProps> = ({ onOpenBooking }) => {
  const [userRating, setUserRating] = useState<number>(5);
  const [authorName, setAuthorName] = useState<string>('');
  const [locationName, setLocationName] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');
  const [submittedReview, setSubmittedReview] = useState<boolean>(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !reviewText) return;
    setSubmittedReview(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#FAF8F5] dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-amber-500/20">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Direct Assistance & Guest Trust · Oosterdok 2
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Contact & Guest Reviews
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our 24/7 concierge team in Amsterdam or discover authentic reviews and ratings from our valued international guests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* =========================================================================
            SECTION A: HOTEL CONTACT & MAPS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-amber-500/20 space-y-6">
            <div>
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-1">
                Hotel Location & Concierge
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                Get in Touch
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase">Hotel Address</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">{HOTEL_INFO.address}, {HOTEL_INFO.postalCode} {HOTEL_INFO.city}, {HOTEL_INFO.country}</p>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Adjacent to NEMO Science Museum & Maritime Quarter</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase">Phone Line</h4>
                  <a href={`tel:${HOTEL_INFO.phone}`} className="text-slate-700 dark:text-slate-200 font-bold hover:text-amber-600 transition-colors">
                    {HOTEL_INFO.displayPhone}
                  </a>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Available 24 Hours Daily</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-500/30">
                <MessageSquare className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-xs uppercase">WhatsApp Direct Booking</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Chat directly with our front desk concierge for fast room queries and instant booking.
                  </p>
                  <a
                    href={HOTEL_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline uppercase tracking-wider"
                  >
                    Open Chat (+31630002018) <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-xs uppercase">Email Inquiry</h4>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="text-slate-600 dark:text-slate-300 font-medium hover:text-amber-600">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl uppercase tracking-wider shadow transition-colors"
              >
                Book Your Stay Directly
              </button>
            </div>
          </div>

          {/* Google Maps Embed Container */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-amber-500/20 flex flex-col h-full min-h-[480px]">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span className="font-serif text-sm font-bold">Interactive Location Map</span>
              </div>
              <a
                href="https://maps.google.com/?q=Oosterdok+2,+1011+VZ+Amsterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full relative min-h-[400px]">
              <iframe
                title="AmicitiA Hotel Amsterdam Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.807954157582!2d4.908581676839366!3d52.37389277202359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609bcf7737243%3A0x6b4020f1df21590f!2sOosterdok%202%2C%201011%20VZ%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
              <span>📍 Oosterdok 2, 1011 VZ Amsterdam</span>
              <span className="font-semibold text-amber-600 dark:text-amber-400">8 min walk from Central Station</span>
            </div>
          </div>

        </div>

        {/* =========================================================================
            SECTION B: CUSTOMER REVIEWS & RATINGS BREAKDOWN
            ========================================================================= */}
        <div className="space-y-12 pt-8 border-t border-amber-500/10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-amber-600 dark:text-amber-400 font-semibold text-xs tracking-widest uppercase">
              Customer Ratings & Verified Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              What Our Guests Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Discover why our guests love staying at AmicitiA Hotel Amsterdam.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Overall Rating Score Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-amber-500/20 text-center flex flex-col justify-center items-center">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Overall Rating</span>
              <span className="font-serif text-6xl font-bold text-amber-500 my-2">{RATING_BREAKDOWN.average}</span>
              <div className="flex text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">428 Verified Ratings across Google & Trustpilot</p>
            </div>

            {/* Rating Breakdown Bars Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-2">
                5-Star Rating Breakdown
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

            {/* Review QR Code Card */}
            <div>
              <ReviewQRCodeCard />
            </div>

          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CUSTOMER_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">{review.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div>
                  {review.roomType && (
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold block mb-2">
                      Stayed in {review.roomType}
                    </span>
                  )}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center justify-between">
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
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================================
            SECTION C: SUBMIT GUEST REVIEW FORM
            ========================================================================= */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-amber-500/20 max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              Share Your AmicitiA Experience
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Were you a recent guest at Oosterdok 2? Leave a review for future travelers.
            </p>
          </div>

          {submittedReview ? (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-xl border border-emerald-500/30 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Thank You for Your Feedback!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Your review has been submitted and queued for guest verification.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitReview} className="space-y-4">
              
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className="p-1 text-amber-400 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= userRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Thorne"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Amsterdam, NL"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Review Comments *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your room, canal view, staff service, and overall stay..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Guest Review
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
