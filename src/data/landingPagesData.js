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
  
  // CAR LISTING CATEGORY
  {
    id: 2,
    title: "Luxury Car Dealership",
    category: "Car Listing",
    description: "Premium car listing platform with advanced filters and 360° views",
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
  
  // E-COMMERCE CATEGORY
  {
    id: 3,
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    description: "Modern fashion store with cart, wishlist, and checkout",
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
  
  // FASHION CATEGORY
  {
    id: 4,
    title: "Boutique Fashion Brand",
    category: "Fashion",
    description: "Elegant fashion brand landing with seasonal collections",
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
    id: 5,
    title: "Travel Agency Website",
    category: "Travel",
    description: "Travel booking with tour packages and destination guides",
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

  // EDUCATION / LMS CATEGORY
  {
    id: 6,
    title: "Learning Management System",
    category: "Education",
    description: "Complete LMS platform with course management and student dashboard",
    thumbnail: "/projects/LMS/LMS.png",
    screenshots: [
      "projects/LMS/LMS.png",
      // "/projects/education/lms-2.jpg",
      // "/projects/education/lms-3.jpg",
      // "/projects/education/lms-4.jpg"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://lms-platform-demo.netlify.app",
    githubUrl: "https://github.com/chamidi999/lms-landing",
    featured: true
  }
];

export const categories = [
  "All",
  "Booking",
  "Car Listing",
  "E-commerce",
  "Fashion",
  "Travel",
  "Education"
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

// Helper function to get landing page by ID
export const getLandingPageById = (id) => {
  return landingPages.find(page => page.id === parseInt(id));
};

// Helper function to get related landing pages (same category, different ID)
export const getRelatedLandingPages = (currentId, category, limit = 3) => {
  return landingPages
    .filter(page => page.category === category && page.id !== currentId)
    .slice(0, limit);
};

// Get statistics
export const getLandingPagesStats = () => {
  return {
    total: landingPages.length,
    byCategory: categories.slice(1).map(cat => ({
      category: cat,
      count: getLandingPagesByCategory(cat).length
    })),
    featured: getFeaturedLandingPages().length
  };
};