// src/data/landingPagesData.js

export const landingPages = [
  // BOOKING CATEGORY
  {
    id: 1,
    title: "Hotel Booking Landing Page",
    category: "Booking",
    description: "Modern hotel booking interface with search and filter functionality",
    thumbnail: "/projects/booking/hotel-booking-thumb.jpg",
    screenshots: [
      "/projects/booking/hotel-booking-1.jpg",
      "/projects/booking/hotel-booking-2.jpg",
      "/projects/booking/hotel-booking-3.jpg"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hotel-booking-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/hotel-booking-landing",
    featured: true
  },
  {
    id: 2,
    title: "Flight Booking Platform",
    category: "Booking",
    description: "Flight search and booking landing page with date picker",
    thumbnail: "/projects/booking/flight-booking-thumb.jpg",
    screenshots: [
      "/projects/booking/flight-booking-1.jpg",
      "/projects/booking/flight-booking-2.jpg"
    ],
    tech: ["Next.js", "React", "CSS Modules"],
    liveUrl: "https://flight-booking-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/flight-booking-landing",
    featured: false
  },

  // CAR LISTING CATEGORY
  {
    id: 3,
    title: "Luxury Car Dealership",
    category: "Car Listing",
    description: "Premium car listing platform with advanced filters",
    thumbnail: "/projects/carlisting/luxury-cars-thumb.jpg",
    screenshots: [
      "/projects/carlisting/luxury-cars-1.jpg",
      "/projects/carlisting/luxury-cars-2.jpg"
    ],
    tech: ["Next.js", "React", "Styled Components"],
    liveUrl: "https://luxury-cars-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/luxury-cars-landing",
    featured: true
  },
  {
    id: 4,
    title: "Car Rental Service",
    category: "Car Listing",
    description: "Car rental landing page with booking system",
    thumbnail: "/projects/carlisting/car-rental-thumb.jpg",
    screenshots: [
      "/projects/carlisting/car-rental-1.jpg"
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://car-rental-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/car-rental-landing",
    featured: false
  },

  // E-COMMERCE CATEGORY
  {
    id: 5,
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    description: "Modern fashion store with cart and checkout",
    thumbnail: "/projects/ecommerce/fashion-store-thumb.jpg",
    screenshots: [
      "/projects/ecommerce/fashion-store-1.jpg",
      "/projects/ecommerce/fashion-store-2.jpg",
      "/projects/ecommerce/fashion-store-3.jpg"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Redux"],
    liveUrl: "https://fashion-store-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/fashion-store-landing",
    featured: true
  },
  {
    id: 6,
    title: "Electronics Shop",
    category: "E-commerce",
    description: "Electronics e-commerce landing with product filters",
    thumbnail: "/projects/ecommerce/electronics-thumb.jpg",
    screenshots: [
      "/projects/ecommerce/electronics-1.jpg"
    ],
    tech: ["Next.js", "React", "CSS3"],
    liveUrl: "https://electronics-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/electronics-landing",
    featured: false
  },

  // FASHION CATEGORY
  {
    id: 7,
    title: "Boutique Fashion Brand",
    category: "Fashion",
    description: "Elegant fashion brand landing page",
    thumbnail: "/projects/fashion/boutique-thumb.jpg",
    screenshots: [
      "/projects/fashion/boutique-1.jpg",
      "/projects/fashion/boutique-2.jpg"
    ],
    tech: ["Next.js", "React", "SCSS"],
    liveUrl: "https://boutique-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/boutique-landing",
    featured: true
  },

  // TRAVEL CATEGORY
  {
    id: 8,
    title: "Travel Agency Website",
    category: "Travel",
    description: "Travel booking and tour packages landing page",
    thumbnail: "/projects/travel/travel-agency-thumb.jpg",
    screenshots: [
      "/projects/travel/travel-agency-1.jpg",
      "/projects/travel/travel-agency-2.jpg"
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://travel-agency-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/travel-agency-landing",
    featured: true
  },

  // Add more landing pages following the same structure...
  // You can duplicate and modify the above objects for all 100 pages
];

export const categories = [
  "All",
  "Booking",
  "Car Listing",
  "E-commerce",
  "Fashion",
  "Travel"
];

// Helper function to get featured landing pages
export const getFeaturedLandingPages = () => {
  return landingPages.filter(page => page.featured);
};

// Helper function to filter by category
export const getLandingPagesByCategory = (category) => {
  if (category === "All") return landingPages;
  return landingPages.filter(page => page.category === category);
};