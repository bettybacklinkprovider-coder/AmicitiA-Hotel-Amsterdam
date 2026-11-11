export interface HotelInfo {
  name: string;
  phone: string;
  displayPhone: string;
  whatsappLink: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
  checkIn: string;
  checkOut: string;
  rating: number;
  totalReviews: number;
  googleRating: number;
  trustpilotRating: number;
  googleReviewUrl: string;
  trustpilotReviewUrl: string;
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  pricePerNight: number;
  originalPrice?: number;
  capacity: number;
  sizeSqM: number;
  bedType: string;
  view: string;
  image: string;
  description: string;
  amenities: string[];
  featured?: boolean;
  available: boolean;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  image: string;
}

export interface SpecialOffer {
  id: string;
  category: 'Weekend Getaway' | 'Romantic Stay Package' | 'Extended Stay Package' | 'Family Stay Package' | 'Business Stay Package' | 'Seasonal Special Offers';
  title: string;
  subtitle: string;
  discountBadge: string;
  pricePerNight: number;
  originalPrice: number;
  minNights: number;
  image: string;
  description: string;
  inclusions: string[];
  bookingConditions: string;
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  platform: 'Google' | 'Trustpilot';
  comment: string;
  verifiedGuest: boolean;
  avatar?: string;
  roomType?: string;
}

export const HOTEL_INFO: HotelInfo = {
  name: "AmicitiA",
  phone: "+31 630002018",
  displayPhone: "+31 630002018",
  whatsappLink: "https://wa.me/31630002018",
  address: "Oosterdok 2",
  postalCode: "1011 VZ",
  city: "Amsterdam",
  country: "Netherlands",
  email: "reservations@amicitia-hotel.nl",
  checkIn: "15:00",
  checkOut: "11:00",
  rating: 4.9,
  totalReviews: 428,
  googleRating: 4.9,
  trustpilotRating: 4.8,
  googleReviewUrl: "https://g.page/r/amicitia-hotel-amsterdam/review",
  trustpilotReviewUrl: "https://www.trustpilot.com/evaluate/amicitia-hotel.nl"
};

export const HOTEL_ROOMS: Room[] = [
  {
    id: "deluxe-canal-suite",
    name: "Canal View Deluxe Suite",
    subtitle: "Classic Dutch elegance facing historic Oosterdok canal",
    pricePerNight: 240,
    originalPrice: 280,
    capacity: 2,
    sizeSqM: 38,
    bedType: "King Size Hypnos Bed",
    view: "Waterfront & Historic Canal",
    image: "/assets/images/room_deluxe_canal_1794383924606.jpg",
    description: "Immerse yourself in Dutch heritage with floor-to-ceiling windows overlooking Amsterdam's historic Oosterdok canal. Features hand-crafted oak parquet, luxury Italian marble bathroom, rain shower, and complimentary artisan espresso bar.",
    amenities: [
      "Canal View", "Free High-Speed Wi-Fi", "King Size Bed", "Marble Bathroom & Rain Shower", 
      "Artisan Nespresso Machine", "Smart 4K TV & Bose Sound", "Mini Bar & Wine Cooler", "Individual Climate Control"
    ],
    featured: true,
    available: true
  },
  {
    id: "executive-loft-suite",
    name: "Executive Oosterdok Loft",
    subtitle: "Panoramic penthouse space with exposed timber architecture",
    pricePerNight: 320,
    originalPrice: 370,
    capacity: 2,
    sizeSqM: 52,
    bedType: "Super King Custom Mattress",
    view: "Panoramic Harbour & NEMO Skyline",
    image: "/assets/images/room_executive_loft_1794383925513.jpg",
    description: "Our signature loft suite boasts double-height ceilings with original exposed timber beams and uninterrupted views of Amsterdam's maritime quarter. Includes separate lounge area, deep soaking freestanding tub, and dedicated executive work hub.",
    amenities: [
      "360 Waterfront Skyline View", "Freestanding Soaking Tub", "Executive Work Suite", "Complimentary Lounge Access",
      "Pillow Menu Selection", "Bose Wireless Audio", "Private In-Room Dining", "Daily Turn-down Service"
    ],
    featured: true,
    available: true
  },
  {
    id: "romantic-heritage-suite",
    name: "Romantic Heritage Suite",
    subtitle: "Intimate candlelit sanctuary designed for couple's retreats",
    pricePerNight: 290,
    originalPrice: 330,
    capacity: 2,
    sizeSqM: 42,
    bedType: "Plush Canopy King Bed",
    view: "Canal Sunset & City Lights",
    image: "/assets/images/room_romantic_suite_1794383925842.jpg",
    description: "Designed for romance and serene relaxation. Features a magnificent freestanding bathtub with panoramic water views, soft mood lighting, champagne on arrival, and plush velour seating.",
    amenities: [
      "Welcome Chilled Champagne", "Freestanding Oval Tub", "Mood Lighting System", "Fluffy Bathrobes & Slippers",
      "Organic Rituals Bath Products", "Canal Sunset View", "Breakfast in Bed Included", "Late Check-out Option"
    ],
    featured: true,
    available: true
  },
  {
    id: "waterfront-family-suite",
    name: "Waterfront Family Suite",
    subtitle: "Spacious dual-chamber suite ideal for families or groups",
    pricePerNight: 360,
    originalPrice: 410,
    capacity: 4,
    sizeSqM: 64,
    bedType: "1 King + 2 Twin Beds",
    view: "Oosterdok Promenade & Garden",
    image: "/assets/images/about_amicitia_lounge_1794383907715.jpg",
    description: "Generous interconnected living space tailored for families. Features two private bedrooms, dual luxury bathrooms, family gaming setup, child amenities, and direct access to the hotel waterfront garden terrace.",
    amenities: [
      "Accommodates up to 4 Guests", "2 Separate Bedrooms", "Dual Bathrooms", "Interconnected Layout",
      "Kid Friendly Welcome Kit", "Espresso & Tea Station", "2x 4K Smart TVs", "Complimentary Museum Passes"
    ],
    featured: false,
    available: true
  },
  {
    id: "superior-double-room",
    name: "Boutique Superior Double",
    subtitle: "Comfortable boutique elegance for solo travelers or couples",
    pricePerNight: 195,
    originalPrice: 225,
    capacity: 2,
    sizeSqM: 28,
    bedType: "Queen Size Plush Bed",
    view: "Courtyard & Garden View",
    image: "/assets/images/hero_amicitia_hotel_1794383906646.jpg",
    description: "A cozy, thoughtfully designed room featuring quiet courtyard views, custom Dutch oak furniture, walk-in rainfall shower, and high-speed workspace.",
    amenities: [
      "Quiet Courtyard View", "Queen Size Bed", "Walk-in Rain Shower", "Work Desk", 
      "Free High-Speed Wi-Fi", "Organic Bath Products", "Safe Box", "Teatime Amenities"
    ],
    featured: false,
    available: true
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "weekend-getaway",
    category: "Weekend Getaway",
    title: "Amsterdam Weekend Getaway",
    subtitle: "Unwind on the historic Oosterdok canals with complimentary breakfast & late checkout",
    discountBadge: "15% OFF",
    pricePerNight: 204,
    originalPrice: 240,
    minNights: 2,
    image: "/assets/images/offer_weekend_getaway_1794383925652.jpg",
    description: "Escape to Amsterdam for a memorable weekend. Enjoy 15% discount on all suites, complimentary daily artisan breakfast in bed or in our lounge, and guaranteed 13:00 late checkout.",
    inclusions: [
      "Daily Gourmet Breakfast Tray", "Guaranteed 13:00 Late Checkout", "Welcome Dutch Craft Beer or Wine", "15% Room Rate Discount"
    ],
    bookingConditions: "Valid for Friday through Sunday arrivals. Minimum 2 nights stay.",
    featured: true
  },
  {
    id: "romantic-stay",
    category: "Romantic Stay Package",
    title: "Canal Romance & Champagne Package",
    subtitle: "An unforgettable romantic celebration in Amsterdam's heart",
    discountBadge: "EXCLUSIVE DEAL",
    pricePerNight: 265,
    originalPrice: 320,
    minNights: 1,
    image: "/assets/images/room_romantic_suite_1794383925842.jpg",
    description: "Pamper your loved one with chilled champagne, rose petal turn-down service, candlelit bath setup, and a private 1-hour evening canal cruise ticket for two.",
    inclusions: [
      "Chilled Moët & Chandon Champagne", "Rose Petal Turn-down Service", "Private 1-Hour Canal Cruise Pass", "Breakfast in Bed Included"
    ],
    bookingConditions: "Available all week. 48-hour advance booking recommended.",
    featured: true
  },
  {
    id: "extended-stay",
    category: "Extended Stay Package",
    title: "Slow Travel Extended Stay",
    subtitle: "Stay 4 nights or more and save 20% on total accommodation",
    discountBadge: "SAVE 20%",
    pricePerNight: 192,
    originalPrice: 240,
    minNights: 4,
    image: "/assets/images/room_deluxe_canal_1794383924606.jpg",
    description: "Experience Amsterdam like a local. Extended stay guests receive 20% off room rates, complimentary laundry service, and unlimited VanMoof bicycle usage.",
    inclusions: [
      "20% Discount on 4+ Night Stays", "Complimentary VanMoof Bicycle Rental", "Weekly Express Laundry Service", "20% Off Hotel Lounge Dining"
    ],
    bookingConditions: "Minimum 4 consecutive nights stay.",
    featured: false
  },
  {
    id: "family-stay",
    category: "Family Stay Package",
    title: "Family Explorer Experience",
    subtitle: "Spacious suite, museum tickets, and child-friendly welcome gifts",
    discountBadge: "FAMILY DEAL",
    pricePerNight: 306,
    originalPrice: 360,
    minNights: 2,
    image: "/assets/images/about_amicitia_lounge_1794383907715.jpg",
    description: "Discover Amsterdam with your family. Includes tickets to the adjacent NEMO Science Museum, family bike rentals, and complimentary breakfast for kids under 12.",
    inclusions: [
      "NEMO Science Museum Tickets (4x)", "Kids Under 12 Eat Free", "Family Bicycle Hire Included", "Child Welcome Gift Basket"
    ],
    bookingConditions: "Valid for Family Suite bookings.",
    featured: false
  },
  {
    id: "business-stay",
    category: "Business Stay Package",
    title: "Executive Business Traveler Package",
    subtitle: "High-speed Wi-Fi, express check-in, laundry service & quiet lounge access",
    discountBadge: "PRO EXECUTIVE",
    pricePerNight: 270,
    originalPrice: 320,
    minNights: 1,
    image: "/assets/images/room_executive_loft_1794383925513.jpg",
    description: "Designed for business professionals seeking efficiency and comfort. Includes priority check-in, daily shirt pressing, executive desk setup, and silent lounge access.",
    inclusions: [
      "Priority Early Check-in / Express Checkout", "Daily Shirt Pressing Service", "High-Speed Wi-Fi 6 Dedicated Line", "Quiet Lounge Access & Espresso"
    ],
    bookingConditions: "Valid Sunday through Thursday.",
    featured: false
  },
  {
    id: "seasonal-special",
    category: "Seasonal Special Offers",
    title: "Amsterdam Canal & Lights Seasonal Package",
    subtitle: "Celebrate Amsterdam's vibrant seasonal festivals in luxury style",
    discountBadge: "LIMITED EDITION",
    pricePerNight: 220,
    originalPrice: 260,
    minNights: 2,
    image: "/assets/images/hero_amicitia_hotel_1794383906646.jpg",
    description: "Celebrate the charm of Amsterdam across seasons. Includes complimentary mulled wine/cocktail upon arrival, festival guide, and canal cruise tickets.",
    inclusions: [
      "Seasonal Welcome Cocktail", "Curated Amsterdam Event Pass", "Private Canal Sightseeing Tour", "Special Seasonal Gift"
    ],
    bookingConditions: "Subject to seasonal availability.",
    featured: true
  }
];

export const HOTEL_FACILITIES: Facility[] = [
  {
    id: "waterfront-mooring",
    title: "Private Canal Mooring",
    category: "Waterfront & Transport",
    description: "Direct private boat mooring access right outside Oosterdok 2 for canal boat tours and water taxi pickups.",
    iconName: "Anchor",
    image: "/assets/images/facility_canal_mooring_1794386051618.jpg"
  },
  {
    id: "bicycles",
    title: "Luxury Bicycle Rental",
    category: "Mobility",
    description: "Complimentary handcrafted Gazelle & VanMoof urban bicycles equipped with GPS and locks for guest exploration.",
    iconName: "Bike",
    image: "/assets/images/facility_bicycle_rental_1794386051256.jpg"
  },
  {
    id: "dining-lounge",
    title: "Waterfront Lounge & Bar",
    category: "Dining & Drinks",
    description: "Artisan breakfast, organic Dutch cheeses, fine wines, and craft coffees served in our canal-view lounge.",
    iconName: "Coffee",
    image: "/assets/images/facility_dining_lounge_1794386052268.jpg"
  },
  {
    id: "spa-sauna",
    title: "Boutique Spa & Sauna",
    category: "Wellness",
    description: "Private wellness area featuring Finnish cedar sauna, rain showers, and organic massage treatments.",
    iconName: "Sparkles",
    image: "/assets/images/facility_spa_sauna_1794386051434.jpg"
  },
  {
    id: "wifi",
    title: "High-Speed Wi-Fi 6",
    category: "Technology",
    description: "Ultra-fast symmetrical gigabit wireless network throughout all rooms, public spaces, and garden patio.",
    iconName: "Wifi",
    image: "/assets/images/facility_wifi_workspace_1794386052020.jpg"
  },
  {
    id: "concierge",
    title: "24/7 Bespoke Concierge",
    category: "Service",
    description: "Dedicated local concierges for restaurant reservations, museum priority tickets, and custom itineraries.",
    iconName: "UserCheck",
    image: "/assets/images/facility_concierge_service_1794386053591.jpg"
  },
  {
    id: "climate-control",
    title: "Smart Climate Control",
    category: "Comfort",
    description: "Whisper-quiet air conditioning, underfloor heating, and double-glazed soundproofed heritage windows.",
    iconName: "Thermometer",
    image: "/assets/images/facility_climate_control_1794386053327.jpg"
  },
  {
    id: "valet-parking",
    title: "Valet & EV Charging",
    category: "Services",
    description: "Secure valet parking with fast electric vehicle charging stations adjacent to the hotel property.",
    iconName: "Car",
    image: "/assets/images/facility_valet_parking_1794386053666.jpg"
  }
];

export const RATING_BREAKDOWN = {
  average: 4.9,
  total: 428,
  breakdown: [
    { stars: 5, percentage: 86, count: 368 },
    { stars: 4, percentage: 11, count: 47 },
    { stars: 3, percentage: 2, count: 9 },
    { stars: 2, percentage: 1, count: 4 },
    { stars: 1, percentage: 0, count: 0 }
  ]
};

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Sophie & Lucas van de Berg",
    location: "Zurich, Switzerland",
    rating: 5,
    date: "November 2, 2026",
    platform: "Google",
    comment: "AmicitiA is hands down the finest boutique hotel in Amsterdam! The view over Oosterdok from our loft suite was breathtaking. The staff greeted us with warm Dutch hospitality and the WhatsApp booking service made everything effortless.",
    verifiedGuest: true,
    roomType: "Executive Oosterdok Loft"
  },
  {
    id: "rev-2",
    author: "James Sterling",
    location: "London, UK",
    rating: 5,
    date: "October 24, 2026",
    platform: "Trustpilot",
    comment: "Flawless stay at Oosterdok 2! Clean, luxurious, and so conveniently close to Amsterdam Central station yet quiet and peaceful. The complimentary VanMoof bicycles were a fantastic touch for exploring the city.",
    verifiedGuest: true,
    roomType: "Canal View Deluxe Suite"
  },
  {
    id: "rev-3",
    author: "Elena Rostova",
    location: "Vienna, Austria",
    rating: 5,
    date: "October 18, 2026",
    platform: "Google",
    comment: "We booked the Romantic Stay package for our anniversary. The champagne, rose petals, and evening canal view made it magical. Staff went out of their way to reserve us dinner at top local spots.",
    verifiedGuest: true,
    roomType: "Romantic Heritage Suite"
  },
  {
    id: "rev-4",
    author: "David & Marcus Chen",
    location: "Singapore",
    rating: 5,
    date: "October 9, 2026",
    platform: "Trustpilot",
    comment: "Highly recommended! The breakfast in bed tray was top tier with hot croissants and fresh berries. 5-star service all round. We will definitely return on our next trip to Europe.",
    verifiedGuest: true,
    roomType: "Waterfront Family Suite"
  },
  {
    id: "rev-5",
    author: "Charlotte Dubois",
    location: "Paris, France",
    rating: 5,
    date: "September 29, 2026",
    platform: "Google",
    comment: "An absolute gem of a hotel. Oosterdok canal views are serene, the beds are exceptionally comfy, and the bathroom marble finishes feel like a 5-star palace.",
    verifiedGuest: true,
    roomType: "Boutique Superior Double"
  }
];
