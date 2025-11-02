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
    title: 'Paradise Travel Agency',
    category: 'travel',
    description: 'Complete travel booking platform with destination guides and tour packages',
    thumbnail: '/projects/travel/paradise-thumb.jpg',
    tech: ['WordPress', 'WooCommerce', 'Custom Theme'],
    screenshots: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Wanderlust Adventures',
    category: 'travel',
    description: 'Adventure travel website with booking system and customer reviews',
    thumbnail: '/projects/travel/travel-agency-image01.png',
    tech: ['WordPress', 'ElementorPro', 'Booking Plugin', 'SEO Optimization'],
    screenshots: [
      '/projects/travel/travel-agency-image02.png',
      '/projects/travel/travel-agency-image03.png',
      '/projects/travel/travel-agency-image04.png'
    ]
  },
  {
    id: 3,
    title: 'Global Tours & Travels',
    category: 'travel',
    description: 'Multi-destination travel portal with advanced search filters',
    thumbnail: '/projects/travel/Travel.png',
    tech: ['WordPress', 'Custom Plugin', 'Payment Gateway'],
    screenshots: [
      '/projects/travel/travel-image1.png',
      '/projects/travel/travel-image2.png',
      '/projects/travel/travel-image3.png'
    ]
  },
  {
    id: 4,
    title: 'Fashion Boutique Store',
    category: 'ecommerce',
    description: 'High-end fashion eCommerce with advanced product filtering',
    thumbnail: '/projects/fashion/Fashion E-commerce Store.png',
    tech: ['WooCommerce', 'Custom Theme', 'Payment Integration'],
    screenshots: [
      '/projects/fashion/fashion e-commerce store-image1.png',
      '/projects/fashion/fashion e-commerce store-image1.png',
      '/projects/fashion/fashion e-commerce store-image1.png'
    ]
  },
  {
    id: 5,
    title: 'Tech Gadgets Hub',
    category: 'ecommerce',
    description: 'Electronics store with product comparison and reviews',
    thumbnail: '/projects/ecommerce/E-commerce Store.png',
    tech: ['WooCommerce', 'WPBakery', 'Stripe/PayPal'],
    screenshots: [
      '/projects/ecommerce/ecom-image1.png',
      '/projects/ecommerce/ecom-image2.png',
      '/projects/ecommerce/ecom-image3.png'
    ]
  },
  {
    id: 6,
    title: 'Organic Food Market',
    category: 'ecommerce',
    description: 'Organic products store with subscription model',
    thumbnail: '/projects/ecommerce/grocerystore-image1.png',
    tech: ['WooCommerce', 'Subscriptions', 'Custom Checkout'],
    screenshots: [
      '/projects/ecommerce/grocery-store-image02.png',
      '/projects/ecommerce/grocery-store-image03.png',
      '/projects/ecommerce/grocery-store-image04.png'
    ]
  },
  {
    id: 7,
    title: 'Hotel Reservation System',
    category: 'booking',
    description: 'Complete hotel booking platform with room management',
    thumbnail: '/projects/booking/hotelbooking.png',
    tech: ['WordPress', 'Booking Calendar', 'Payment Gateway'],
    screenshots: [
      '/projects/booking/hotel booking-image1.png',
      '/projects/booking/hotel booking-image2.png',
      '/projects/booking/hotel booking-image6.png'
    ]
  },
  {
    id: 8,
    title: 'Restaurant Booking Portal',
    category: 'booking',
    description: 'Table reservation system with menu integration',
    thumbnail: '/projects/booking/Hotel.png',
    tech: ['WordPress', 'OpenTable API', 'Custom Forms'],
    screenshots: [
      '/projects/booking/restaurant-image1.png',
      '/projects/booking/restaurant-image2.png',
      '/projects/booking/restaurant-image3.png'
    ]
  },
  {
    id: 9,
    title: 'Hotel Booking Site',
    category: 'booking',
    description: 'Multi-event booking system with ticketing',
    thumbnail: '/projects/booking/hotelbooking2.png',
    tech: ['WordPress', 'Events Calendar', 'WooCommerce'],
    screenshots: [
      '/projects/booking/hotel booking-image4.png',
      '/projects/booking/hotel booking-image5.png',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 10,
    title: 'Auto Dealer Marketplace',
    category: 'carlisting',
    description: 'Car dealership platform with advanced search and filters',
    icon: Car,
    tech: ['WordPress', 'Custom Post Types', 'Advanced Search'],
    screenshots: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=500&fit=crop'
    ]
  },
  {
    id: 11,
    title: 'Multi-Vendor Marketplace',
    category: 'marketplace',
    description: 'Complete marketplace platform with vendor management and commission system',
    thumbnail: '/projects/ecommerce/ecom-image.png',
    tech: ['WooCommerce', 'Dokan/WCFM', 'Multi-Vendor'],
    screenshots: [
      '/projects/ecommerce/marketplace-image1.png',
      '/projects/ecommerce/marketplace-image2.png',
      '/projects/ecommerce/marketplace-image3.png'
    ]
  }
];