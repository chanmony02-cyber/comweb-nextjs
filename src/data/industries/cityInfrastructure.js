// src/data/industries/cityInfrastructure.js
import { assetSrc } from "@/lib/assetSrc";
const ci1 = "/images/industries/city-infrastructure/ci-project-1.webp";
const ci2 = "/images/industries/city-infrastructure/ci-project-2.webp";
const ci3 = "/images/industries/city-infrastructure/ci-project-3.webp";
const cs1 = "/images/industries/city-infrastructure/ci-solution-1.webp";
const cs2 = "/images/industries/city-infrastructure/ci-solution-2.webp";
const cs3 = "/images/industries/city-infrastructure/ci-solution-3.webp";
const cHero = "/images/industries/city-infrastructure/city-infrastructure-hero.webp";
const cProblem = "/images/industries/city-infrastructure/city-infrastructure-problem.webp";
import { ROUTES } from "@/config/routes";

export const cityInfrastructureData = {
  hero: {
    title: "City Infrastructure",
    subtitle:
      "Powering urban development with reliable electrical systems for transportation, water, and public utilities.",
    backgroundImage: assetSrc(cHero),
  },
  problem: {
    title: "We Understand Your Problem.",
    paragraphs: [
      "Rapid urbanization demands resilient infrastructure that can keep pace with growing populations. From roads and bridges to water systems and public transit, every element depends on reliable electrical and control systems.",
      "Cities face challenges including aging utility networks, traffic congestion, and the need for sustainable energy solutions. These complexities require engineering expertise that bridges multiple disciplines.",
      "Our team specializes in designing and deploying integrated electrical solutions that keep cities running efficiently — from smart lighting and traffic systems to power distribution for critical public facilities.",
    ],
    image: assetSrc(cProblem),
  },
  solutions: {
    label: "INDUSTRY SOLUTIONS",
    title: "Our Solutions",
    subtitle:
      "Comprehensive services to design, build, and maintain power distribution infrastructure.",
    items: [
      {
        id: 1,
        title: "Smart Street Lighting Systems",
        image: assetSrc(cs1),
      },
      {
        id: 2,
        title: "Underground Utility Networks",
        image: assetSrc(cs2),
      },
      {
        id: 3,
        title: "Traffic Management Solutions",
        image: assetSrc(cs3),
      },
    ],
  },
  projects: {
    label: "PORTFOLIO",
    title: "Recent Projects in the Industry",
    items: [
      {
        id: 4,
        title: "Metropolitan Interchange Upgrade",
        description:
          "Engineered and constructed a multi-level highway interchange serving over 150,000 vehicles daily, integrating smart traffic signals and energy-efficient LED lighting throughout the corridor.",
        image: assetSrc(ci1),
        href: ROUTES.PROJECT_DETAIL.replace(":id", 4),
      },
      {
        id: 5,
        title: "Urban Water Treatment Facility",
        description:
          "Designed the complete electrical and control systems for a modern water treatment plant, ensuring 24/7 automated operations with redundant power supply and remote monitoring capabilities.",
        image: assetSrc(ci2),
        href: ROUTES.PROJECT_DETAIL.replace(":id", 5),
      },
      {
        id: 6,
        title: "Public Transit Electrification",
        description:
          "Delivered end-to-end electrical infrastructure for a new urban rail line, including traction power substations, platform systems, and integrated safety and communication networks.",
        image: assetSrc(ci3),
        href: ROUTES.PROJECT_DETAIL.replace(":id", 6),
      },
    ],
  },
  cta: {
    title: "Let's Build Collaborative Projects",
    subtitle:
      "Discover the advantages of partnering with us to modernize your infrastructure.",
  },
};


