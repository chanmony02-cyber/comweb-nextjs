// src/data/services/consultants.js
import { assetSrc } from "@/lib/assetSrc";
const consultantHero = "/images/servicesImg/consultants/consultant-hero.webp";
const consultantOverview = "/images/servicesImg/consultants/consultant-overview.webp";

export const consultantsData = {
  hero: {
    title: "Expert in Consultants",
    subtitle: "Explore our range of services tailored to meet your needs.",
    heroImage: assetSrc(consultantHero),
  },
  overview: {
    title: "Comprehensive Consulting Service Overview",
    paragraphs: [
      "Our consulting services encompass every aspect of electrical infrastructure planning and execution. From initial feasibility studies and system design to project management and commissioning, we guide organizations through complex technical decisions with clarity and confidence.",
      "Our multidisciplinary team brings together decades of field experience, ensuring that every recommendation is grounded in practical, real-world application.",
    ],
    image: assetSrc(consultantOverview),
    bgSection: true,
  },
  expertise: {
    title: "Core Expertise",
    items: [
      {
        id: 1,
        icon: "cost-optimization",
        title: "Cost Optimization",
        description:
          "We analyze your electrical infrastructure to identify cost-saving opportunities without compromising performance or safety standards.",
      },
      {
        id: 2,
        icon: "consulting",
        title: "Consulting",
        description:
          "Our seasoned consultants provide strategic guidance on system design, regulatory compliance, and technology adoption for your projects.",
      },
      {
        id: 3,
        icon: "design",
        title: "Design",
        description:
          "Our specialized consultants provide strategic guidance on system design, regulatory compliance, and technology adoption for your projects.",
      },
    ],
  },
  process: {
    title: "Our Process",
    subtitle:
      "A structured approach that delivers consistent, high-quality results for every engagement.",
    steps: [
      {
        id: 1,
        step: "STEP 01",
        icon: "search",
        title: "Discovery",
        description:
          "We assess your current infrastructure, identify pain points, and define project objectives through in-depth consultation.",
      },
      {
        id: 2,
        step: "STEP 02",
        icon: "clock",
        title: "Analysis",
        description:
          "Our engineers conduct detailed technical analysis, feasibility studies, and risk assessments to build a solid foundation.",
      },
      {
        id: 3,
        step: "STEP 03",
        icon: "pencil",
        title: "Design",
        description:
          "We create comprehensive system designs, specifications, and implementation blueprints tailored to your requirements.",
      },
      {
        id: 4,
        step: "STEP 04",
        icon: "send",
        title: "Delivery",
        description:
          "From project management through commissioning, we ensure seamless execution and handover of your electrical systems.",
      },
    ],
  },
  faqs: [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We provide comprehensive electrical consulting services including system design, feasibility studies, project management, and commissioning support for all scales of electrical infrastructure.",
    },
    {
      id: 2,
      question: "Do you offer low-voltage system consulting?",
      answer:
        "Yes, our consulting team covers the full spectrum from low-voltage distribution to high-voltage transmission systems, tailored to your project requirements.",
    },
    {
      id: 3,
      question: "Can you support us throughout the full project lifecycle?",
      answer:
        "Absolutely. We work with clients at every stage from initial concept through to final handover, providing continuity and expert oversight throughout.",
    },
  ],
};


