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
  // {
  //   id: 2,
  //   title: "Luxury Car Dealership",
  //   category: "Car Listing",
  //   description: "Premium car listing platform with advanced filters and 360° views",
  //   thumbnail: "/projects/carlisting/luxury-cars-thumb.jpg",
  //   screenshots: [
  //     "/projects/carlisting/luxury-cars-1.jpg",
  //     "/projects/carlisting/luxury-cars-2.jpg"
  //   ],
  //   tech: ["Next.js", "React", "Styled Components"],
  //   liveUrl: "https://luxury-cars-demo.netlify.app",
  //   githubUrl: "https://github.com/chamidi999/luxury-cars-landing",
  //   featured: true
  // },
  
  // E-COMMERCE CATEGORY
  {
  id: 8,
  title: "TechZone 3D Electronics Store",
  category: "E-commerce",
  description: "Immersive 3D electronics e-commerce platform with interactive product displays, featuring December deals and responsive design across all devices",
  thumbnail: "/projects/landingpages/Electro/electronics.png",
  screenshots: [
    "/projects/ecommerce/electronics-3d-1.png",
    "/projects/ecommerce/electronics-3d-2.png",
    "/projects/ecommerce/electronics-3d-3.png"
  ],
  tech: ["Next.js", "React", "Three.js", "Tailwind CSS", "Framer Motion"],
  liveUrl: "https://techzone-3d-demo.netlify.app",
  githubUrl: "https://github.com/chamidi999/techzone-3d-landing",
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
    thumbnail: "/projects/landingpages/Travel/travel.png",
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
  thumbnail: "/projects/landingpages/LMS/LMS.png",  // Fixed path
  screenshots: [
    "/projects/landingpages/LMS/LMS.png",  // Fixed path
  ],
  tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  liveUrl: "https://lms-platform-demo.netlify.app",
  githubUrl: "https://github.com/chamidi999/lms-landing",
  featured: true
},
  {
  id: 7,
  title: "Christmas Magic Landing Page",
  category: "Holiday/Seasonal",
  description: "Festive Christmas-themed landing page featuring holiday traditions, gift collections, and customer testimonials with magical animations and snow effects",
  thumbnail: "/projects/landingpages/Christmas/Christmas.png",
  screenshots: [
    "/projects/landingpages/Christmas/Christmas.png", // Use the actual path
    // Add more screenshots if you have them
  ],
  tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  liveUrl: "https://christmas-magic-demo.netlify.app",
  githubUrl: "https://github.com/chamidi999/christmas-magic-landing",
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
  "Education",
  "Holiday/Seasonal"
];

export const mainCategories = [
  {
    key: "ecommerce",
    title: "E-commerce",
    description: "Online stores, sales funnels, and digital retail experiences.",
    accent: "from-amber-500/20 via-orange-500/10 to-transparent"
  },
  {
    key: "realstate",
    title: "Real Estate",
    description: "Booking, travel, and seasonal destination landing pages.",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent"
  },
  {
    key: "product",
    title: "Product",
    description: "Lifestyle brands, education platforms, and product showcases.",
    accent: "from-sky-500/20 via-purple-500/10 to-transparent"
  }
];

const mainCategoryMap = {
  Booking: "realstate",
  Travel: "realstate",
  "Holiday/Seasonal": "realstate",
  "E-commerce": "ecommerce",
  Fashion: "product",
  Education: "product",
  "Car Listing": "product"
};

// Helper function to get featured landing pages
export const getFeaturedLandingPages = () => {
  return landingPages.filter(page => page.featured);
};

// Helper function to filter by category
export const getLandingPagesByCategory = (category) => {
  if (category === "All") return landingPages;
  return landingPages.filter(page => page.category === category);
};

export const getLandingPagesByMainCategory = (mainCategory) => {
  if (mainCategory === "all") return landingPages;
  return landingPages.filter(page => mainCategoryMap[page.category] === mainCategory);
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
