import React, { useState } from 'react';
import { HOTEL_ROOMS, Room } from '../data/hotelData';
import { Star, Check, Users, Maximize, Bed, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedModalRoom, setSelectedModalRoom] = useState<Room | null>(null);

  const filteredRooms = HOTEL_ROOMS.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'canal' && room.view.toLowerCase().includes('waterfront')) return true;
    if (filter === 'suite' && room.name.toLowerCase().includes('suite')) return true;
    if (filter === 'family' && room.capacity >= 4) return true;
    return true;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#FAF8F5] dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      
      {/* Page Hero Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/src/assets/images/room_deluxe_canal_1794383924606.jpg"
            alt="AmicitiA Hotel rooms header"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
            Waterfront Accommodation · Oosterdok 2
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Rooms & Luxury Suites
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Each space at AmicitiA is thoughtfully crafted with natural light, premium soundproofing, Egyptian cotton linens, and panoramic views of Amsterdam.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Interactive Filter Controls (Functional Button Tabs) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/80 dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Accommodations ({HOTEL_ROOMS.length})
            </button>
            <button
              onClick={() => setFilter('canal')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'canal'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Waterfront & Canal View
            </button>
            <button
              onClick={() => setFilter('suite')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'suite'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Luxury Suites
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === 'family'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Family & Large Groups
            </button>
          </div>

          <div className="text-xs text-slate-500">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredRooms.length}</span> verified room options
          </div>
        </div>

        {/* Room List Grid */}
        <div className="space-y-12">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-amber-500/40 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 font-serif font-bold px-3 py-1.5 rounded text-sm border border-amber-500/30">
                  €{room.pricePerNight} <span className="text-xs font-sans text-slate-300 font-normal">/ night</span>
                </div>
                {room.originalPrice && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    Save €{room.originalPrice - room.pricePerNight}
                  </div>
                )}
              </div>

              {/* Specs & Description Section */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div>
                  <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest block mb-1">
                    {room.subtitle}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {room.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Quick Attributes */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Users className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Up to {room.capacity} Guests</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Maximize className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{room.sizeSqM} m² Space</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Bed className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="truncate">{room.bedType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Eye className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="truncate">{room.view}</span>
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                      Included Facilities & Amenities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking CTA Bar */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 block">Rate starting from</span>
                    <span className="font-serif text-3xl font-bold text-amber-600 dark:text-amber-400">€{room.pricePerNight}</span>
                    <span className="text-[10px] text-slate-400 ml-1">incl. taxes & city fees</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedModalRoom(room)}
                      className="px-4 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Quick Preview
                    </button>
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="flex-1 sm:flex-none px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center gap-2"
                    >
                      Book Room Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Quick Preview Drawer/Modal */}
      {selectedModalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 border border-amber-500/20 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                {selectedModalRoom.name}
              </h3>
              <button
                onClick={() => setSelectedModalRoom(null)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <img
              src={selectedModalRoom.image}
              alt={selectedModalRoom.name}
              className="w-full h-64 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedModalRoom.description}
            </p>

            <div className="flex justify-between items-center pt-2">
              <span className="font-serif text-2xl font-bold text-amber-500">€{selectedModalRoom.pricePerNight}/night</span>
              <button
                onClick={() => {
                  const id = selectedModalRoom.id;
                  setSelectedModalRoom(null);
                  onOpenBooking(id);
                }}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg uppercase tracking-wider"
              >
                Proceed to Booking
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
