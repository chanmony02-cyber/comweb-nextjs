// src/data/heroSlides/heroSlides.js
import { ROUTES } from "@/config/routes";
import { assetSrc } from "@/lib/assetSrc";
const gridImage = "/images/herosection/Grid.webp";

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
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80&fit=crop",
    overlay: "from-primary/85 via-primary/55 to-accent/25",
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
    image: assetSrc(gridImage),
    overlay: "from-primary/85 via-primary/60 to-accent/25",
  },
  {
    id: 3,
    eyebrow: "POWER DISTRIBUTION",
    title: "RELIABLE GRID SOLUTIONS",
    description:
      "Building resilient power distribution networks that ensure uninterrupted electricity supply to communities and industries across the nation.",
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

