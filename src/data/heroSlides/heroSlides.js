// src/data/heroSlides/heroSlides.js
import { ROUTES } from "@/config/routes";
import hero1 from "@/assets/images/heroSections/companyHero1.png";

export const heroSlides = [
  {
    id: 1,
    eyebrow: "SMART INFRASTRUCTURE",
    title: "FUTURE-READY CITIES",
    description:
      "Transforming urban landscapes with intelligent electrical systems, smart metering, and sustainable energy infrastructure for modern cities.",
    buttons: [
      {
        label: "Learn More",
        href: ROUTES.CITY_INFRASTRUCTURE,
        variant: "primary",
      },
      { label: "Contact Us", href: ROUTES.CONTACT, variant: "outline" },
    ],
    image: hero1,
    overlay: "from-primary/5 via-primary/20 to-accent/5",
  },
  {
    id: 2,
    eyebrow: "OUR MISSION",
    title: "WE MAKE QUALITY",
    description:
      "Providing innovative electrical infrastructure solutions for utilities and enterprises. Excellence in consulting, maintenance, and inspection services.",
    buttons: [
      { label: "About Us", href: ROUTES.HOME, variant: "primary" },
      { label: "Contact Us", href: ROUTES.CONTACT, variant: "outline" },
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&fit=crop",
    overlay: "from-primary/85 via-primary/60 to-accent/25",
  },
  {
    id: 3,
    variant: "bubble-network",
    eyebrow: "VH Technology",
    title: "CORE VALUES",
    description:
      "Our products are the building blocks of digital infrastructure, engineered to provide:",
    bubbles: [
      "Enhancing system reliability",
      "Improving operational efficiency",
      "Strengthening resiliency",
      "Ensuring safety",
      "Elevating customer engagement and service quality",
    ],
    buttons: [
      {
        label: "Explore Solutions",
        href: ROUTES.DISTRIBUTION_GRID,
        variant: "primary",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop",
    overlay: "from-primary/80 via-primary/58 to-accent/35",
  },
];
