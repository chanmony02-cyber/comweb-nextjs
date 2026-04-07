// src/data/services/inspections.js
import { assetSrc } from "@/lib/assetSrc";
const inspectionOverview = "/images/servicesImg/inspection/inspection-overview.webp";
const switchGear = "/images/products/switch-gear.webp";
const transformer = "/images/products/Transformer.webp";
const autoCloser = "/images/products/automatic-circuit-recloser.webp";

export const inspectionsData = {
  hero: {
    title: "Comprehensive Inspection Service",
    subtitle:
      "Expert electrical inspection services ensuring safety, compliance, and reliability across your entire infrastructure.",
    heroImage: assetSrc(inspectionOverview),
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "Our inspection division delivers thorough assessments of electrical infrastructure — from switchgear and transformers to overhead lines and underground cables. We use advanced diagnostic tools including thermal imaging and insulation testing to identify issues before they escalate.",
      "Every inspection follows strict regulatory protocols and industry standards, providing detailed reports with actionable recommendations to maintain safety, compliance, and operational reliability.",
    ],
    image: assetSrc(inspectionOverview),
    bgSection: false,
  },
  commonIssues: {
    title: "Common Issues We Detect",
    subtitle:
      "Our certified inspectors identify critical issues across all types of electrical infrastructure before they become costly failures.",
    items: [
      {
        id: 1,
        icon: "search",
        title: "Visual & Physical Inspection",
        description:
          "Thorough visual and physical examination of electrical components, connections, and enclosures to detect wear, corrosion, or damage.",
      },
      {
        id: 2,
        icon: "clipboard",
        title: "Compliance Auditing",
        description:
          "Detailed audits against IEC, IEEE, and local regulatory standards to ensure full compliance and certification readiness.",
      },
      {
        id: 3,
        icon: "shield-check",
        title: "Safety System Verification",
        description:
          "Testing of earthing systems, lightning protection, safety interlocks, and emergency shutdown mechanisms for proper operation.",
      },
      {
        id: 4,
        icon: "fire",
        title: "Thermal Imaging Analysis",
        description:
          "Infrared thermography inspections to identify hotspots, overloaded circuits, and failing connections before they cause outages.",
      },
      {
        id: 5,
        icon: "bolt",
        title: "Insulation Resistance Testing",
        description:
          "Comprehensive insulation testing of cables, switchgear, and transformers to detect deterioration and prevent failures.",
      },
      {
        id: 6,
        icon: "cog",
        title: "Protection Relay Testing",
        description:
          "Functional testing and calibration of protection relays to ensure correct fault detection and tripping coordination.",
      },
    ],
  },
  equipment: {
    title: "Electrical Equipment Inspection",
    subtitle:
      "Specialised inspection services across all major equipment categories used in power distribution and grid infrastructure.",
    items: [
      {
        id: 1,
        productId: 1, // Circuit Breaker (closest to Switch Gear)
        title: "Switch Gear",
        description:
          "Complete switchgear maintenance including testing, calibration, and component replacement.",
        image: assetSrc(switchGear),
        bullets: ["NREN", "BR/OAA", "WNAL", "BR/O"],
      },
      {
        id: 2,
        productId: 3, // Current Transformer (closest to Auto Closer)
        title: "Auto Closer",
        description:
          "Auto-recloser servicing for distribution network reliability and fault protection.",
        image: assetSrc(autoCloser),
        bullets: ["NREN", "BR/OAA", "WNAL", "BR/O"],
      },
      {
        id: 3,
        productId: 5, // Distribution Transformer
        title: "Transformer",
        description:
          "Transformer maintenance including oil testing, winding analysis, and thermal imaging.",
        image: assetSrc(transformer),
        bullets: ["NREN", "BR/OAA", "WNAL", "BR/O"],
      },
    ],
  },
  faqs: [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We provide comprehensive electrical inspection services covering visual assessments, thermal imaging, compliance auditing, insulation testing, and protection relay testing for all types of electrical infrastructure.",
    },
    {
      id: 2,
      question: "How often should electrical inspections be performed?",
      answer:
        "We recommend annual inspections for most electrical systems, with more frequent checks for high-load or critical infrastructure. Our team will advise on the optimal inspection schedule for your specific setup.",
    },
    {
      id: 3,
      question: "What standards do your inspections follow?",
      answer:
        "All inspections are conducted in accordance with IEC, IEEE, and applicable local regulatory standards, ensuring full compliance and certification readiness.",
    },
  ],
};


