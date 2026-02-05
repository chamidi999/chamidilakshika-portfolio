// src/data/portfolioData.js
import { Plane, ShoppingCart, Calendar, Car } from 'lucide-react';

export const skillCategories = [
  {
    category: "WordPress Development",
    icon: "🌐",
    skills: [
      "Elementor (Free & Pro)",
      "WPBakery",
      "Spectra (Gutenberg Addons)",
      "Theme Customization",
      "Plugin Integration",
      "WordPress Security",
      "SEO Optimization"
    ]
  },
  {
    category: "E-commerce",
    icon: "🛒",
    skills: [
      "WooCommerce Setup",
      "WooCommerce Customization",
      "Payment Gateway Integration",
      "Shipping Solutions",
      "Store Optimization"
    ]
  },
  {
    category: "Frontend Development",
    icon: "💻",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "Responsive Design"
    ]
  },
  {
    category: "Backend & Databases",
    icon: "⚙️",
    skills: [
      "PHP",
      "MySQL",
      "SQL Server",
      "Database Design",
      "Backend Development"
    ]
  },
  {
    category: "Version Control & DevOps",
    icon: "🔧",
    skills: [
      "GitHub",
      "Azure DevOps",
      "Hosting/Server Management"
    ]
  },
  {
    category: "Other Skills",
    icon: "📊",
    skills: [
      "Inventory Management Systems",
      "SEO Optimization",
      "Performance Optimization",
      "Website Maintenance"
    ]
  }
];

export const experiences = [
  {
    role: "Intern / Associate Web Developer",
    company: "Axcertro (Pvt) Ltd",
    period: "2024 - Present",
    responsibilities: [
      "Successfully developed and launched 7 custom WordPress websites for clients across various industries, focusing on creating tailored solutions to meet specific business needs",
      "Built and optimized e-commerce platforms using WooCommerce, Elementor, Elementor Pro, and WPBakery, resulting in fully functional online marketplaces with an enhanced user experience",
      "Customized Elementor Pro layouts and widgets alongside WPBakery elements to create unique, brand-specific designs, boosting both visual appeal and usability",
      "Implemented responsive design features, ensuring websites are mobile-friendly and optimized for different devices, enhancing accessibility and user experience",
      "Optimized sites for performance and SEO, achieving faster loading times and higher search engine rankings, leading to increased traffic and user engagement",
      "Managed ongoing website maintenance, performing content updates, troubleshooting issues, and ensuring sites remain secure and up-to-date",
      "Collaborated with the development team to resolve technical challenges, improve site functionality, and implement feature updates based on client requirements",
      "Integrated payment gateways and shipping solutions in WooCommerce, enabling secure transactions and smooth checkout processes for users"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: 'Comedy Poster',
    category: 'poster',
    description: 'Vibrant comedy event poster with playful typography and warm gradients.',
    thumbnail: '/projects/posters/comedy-poster.svg',
    tech: ['Poster Design', 'Typography', 'Color Theory'],
    screenshots: [
      '/projects/posters/comedy-poster.svg'
    ]
  },
  {
    id: 2,
    title: 'Book Fair Poster',
    category: 'poster',
    description: 'Elegant book fair poster with classic serif styling and cozy tones.',
    thumbnail: '/projects/posters/book-poster.svg',
    tech: ['Poster Design', 'Illustration', 'Layout'],
    screenshots: [
      '/projects/posters/book-poster.svg'
    ]
  },
  {
    id: 3,
    title: 'Horror Night Poster',
    category: 'poster',
    description: 'Moody horror screening poster with bold contrast and dramatic accents.',
    thumbnail: '/projects/posters/horror-poster.svg',
    tech: ['Poster Design', 'Atmosphere', 'Contrast'],
    screenshots: [
      '/projects/posters/horror-poster.svg'
    ]
  },
  {
    id: 4,
    title: 'Wanderlust Adventures',
    category: 'travel',
    description: 'Adventure travel website with booking system and customer reviews',
    thumbnail: '/projects/travel/travel-agency-image01.png',
    tech: ['WordPress', 'ElementorPro', 'Booking Plugin', 'SEO Optimization'],
    url: "https://wanderlust-adventures.com",
    screenshots: [
      '/projects/travel/travel-agency-image02.png',
      '/projects/travel/travel-agency-image03.png',
      '/projects/travel/travel-agency-image04.png'
    ]
  },
  {
    id: 5,
    title: 'Global Tours & Travels',
    category: 'travel',
    description: 'Multi-destination travel portal with advanced search filters',
    thumbnail: '/projects/travel/Global Tours & Travels.png',
    tech: ['WordPress', 'Custom Plugin', 'Payment Gateway'],
    // url: "https://global-tours-travels.com",
    screenshots: [
      '/projects/travel/Global Tours & Travels.png',
      '/projects/travel/Global Tours & Travels.png',
      '/projects/travel/Global Tours & Travels.png'
    ]
  },
  
  {
    id: 6,
    title: 'Fashion Boutique Store',
    category: 'ecommerce',
    description: 'High-end fashion eCommerce with advanced product filtering',
    thumbnail: '/projects/fashion/Fashion E-commerce Store.png',
    tech: ['WooCommerce', 'Custom Theme', 'Payment Integration'],
    // url: "https://fashion-boutique-store.com",
    screenshots: [
      '/projects/fashion/fashion e-commerce store-image1.png',
      '/projects/fashion/fashion e-commerce store-image1.png',
      '/projects/fashion/fashion e-commerce store-image1.png'
    ]
  },
  {
    id: 7,
    title: 'Organic Food Market',
    category: 'ecommerce',
    description: 'Organic products store with subscription model',
    thumbnail: '/projects/ecommerce/grocerystore-image1.png',
    tech: ['WooCommerce', 'Subscriptions', 'Custom Checkout'],
    url: "https://shopsmart.42web.io/",
    screenshots: [
      '/projects/ecommerce/grocery-store-image02.png',
      '/projects/ecommerce/grocery-store-image03.png',
      '/projects/ecommerce/grocery-store-image04.png'
    ]
  },
  {
    id: 8,
    title: 'Hotel Reservation System',
    category: 'booking',
    description: 'Complete hotel booking platform with room management',
    thumbnail: '/projects/booking/hotelbooking.png',
    tech: ['WordPress', 'Booking Calendar', 'Payment Gateway'],
    url: "https://hotel-reservation.42web.io/",
    screenshots: [
      '/projects/booking/hotel booking-image1.png',
      '/projects/booking/hotel booking-image2.png',
      '/projects/booking/hotel booking-image6.png'
    ]
  },
  {
    id: 9,
    title: 'Restaurant Booking Portal',
    category: 'booking',
    description: 'Table reservation system with menu integration',
    thumbnail: '/projects/booking/Hotel.png',
    tech: ['WordPress', 'OpenTable API', 'Custom Forms'],
    // url: "https://restaurant-booking-portal.com",
    screenshots: [
      '/projects/booking/restaurant-image1.png',
      '/projects/booking/restaurant-image2.png',
      '/projects/booking/restaurant-image3.png'
    ]
  },
  {
    id: 10,
    title: 'Hotel Booking Site',
    category: 'booking',
    description: 'Multi-event booking system with ticketing',
    thumbnail: '/projects/booking/hotelbooking2.png',
    tech: ['WordPress', 'Events Calendar', 'WooCommerce'],
    url: "https://hotelbooking-01.42web.io/",
    screenshots: [
      '/projects/booking/hotel booking-image4.png',
      '/projects/booking/hotel booking-image5.png',
      '/projects/booking/hotel booking-image7.png'
    ]
  },
  {
    id: 11,
    title: 'Multi-Vendor Marketplace',
    category: 'marketplace',
    description: 'Complete marketplace platform with vendor management and commission system',
    thumbnail: '/projects/ecommerce/ecom-image.png',
    tech: ['WooCommerce', 'Dokan/WCFM', 'Multi-Vendor'],
    url: "https://marketplace01.42web.io/",
    screenshots: [
      '/projects/ecommerce/marketplace-image1.png',
      '/projects/ecommerce/marketplace-image2.png',
      '/projects/ecommerce/marketplace-image3.png'
    ]
  }
];
