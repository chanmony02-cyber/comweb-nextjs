// src/data/industries/distributionGrid.js
import { assetSrc } from "@/lib/assetSrc";
const di1 = "/images/industries/distribution-grid/dg-solution-1.webp";
const di2 = "/images/industries/distribution-grid/dg-solution-2.webp";
const di3 = "/images/industries/distribution-grid/dg-solution-3.webp";
const ds1 = "/images/industries/distribution-grid/ci-project-1.webp";
const ds2 = "/images/industries/distribution-grid/ci-project-2.webp";
const ds3 = "/images/industries/distribution-grid/ci-project-3.webp";
const dHero = "/images/industries/distribution-grid/distribution-grid-hero.webp";
const dProblem = "/images/industries/distribution-grid/distribution-grid-problem.webp";
import { ROUTES } from "@/config/routes";

export const distributionGridData = {
  hero: {
    title: "Distribution Grid",
    subtitle:
      "Building and maintaining efficient power distribution networks that deliver electricity safely to communities.",
    backgroundImage: assetSrc(dHero),
  },
  problem: {
    title: "We Understand Your Problem.",
    paragraphs: [
      "Power distribution networks are the backbone of modern society. Aging infrastructure, increasing demand, and the need for reliability create significant challenges for utilities and communities.",
      "From voltage fluctuations to grid instability, we recognize the critical issues that affect power delivery. Our team of experienced engineers brings deep industry knowledge to diagnose and solve even the most complex distribution challenges.",
      "Whether you're upgrading existing systems or building new infrastructure, we partner with you to design solutions that are safe, efficient, and built to last.",
    ],
    image: assetSrc(dProblem),
  },
  solutions: {
    label: "INDUSTRY SOLUTIONS",
    title: "Our Solutions",
    subtitle:
      "Comprehensive services to design, build, and maintain power distribution infrastructure.",
    items: [
      {
        id: 1,
        title: "Substation Design & Construction",
        image: assetSrc(di1),
      },
      {
        id: 2,
        title: "Overhead Line Installation",
        image: assetSrc(di2),
      },
      {
        id: 3,
        title: "Smart Grid Monitoring",
        image: assetSrc(di3),
      },
    ],
  },
  projects: {
    label: "PORTFOLIO",
    title: "Recent Projects in the Industry",
    items: [
      {
        id: 1,
        title: "Provincial Grid Expansion",
        description:
          "Designed and constructed a 115kV distribution network spanning over 200km, connecting rural communities to the national power grid with reliable and sustainable infrastructure.",
        image: assetSrc(ds1),
        href: ROUTES.PROJECT_DETAIL.replace(":id", 1),
      },
      {
        id: 2,
        title: "Underground Cable Network",
        description:
          "Installed an extensive underground cable system for urban areas, minimizing visual impact while providing reliable power distribution to residential and commercial zones.",
        image: assetSrc(ds2),
        href: ROUTES.PROJECT_DETAIL.replace(":id", 2),
      },
      {
        id: 3,
        title: "Rural Electrification Program",
        description:
          "Deployed overhead distribution lines across agricultural regions, bringing consistent electricity access to farming communities and boosting local productivity.",
        image: assetSrc(ds3),
        href: ROUTES.PROJECT_DETAIL.replace(":id", 3),
      },
    ],
  },
  cta: {
    title: "Let's Build Collaborative Projects",
    subtitle:
      "Discover the advantages of partnering with us to modernize your infrastructure.",
  },
};


