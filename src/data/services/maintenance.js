// src/data/services/maintenance.js
import { assetSrc } from "@/lib/assetSrc";
const maintenanceOverview = "/images/servicesImg/maintenance/maintenance-overview.webp";
const switchGear = "/images/products/switch-gear.webp";
const transformer = "/images/products/Transformer.webp";
const autoCloser = "/images/products/automatic-circuit-recloser.webp";

export const maintenanceData = {
  hero: {
    title: "Expert in Maintenance",
    subtitle:
      "Keeping your electrical infrastructure running at peak performance with preventive and corrective maintenance solutions.",
    heroImage: assetSrc(maintenanceOverview),
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "Our maintenance division provides end-to-end care for electrical power systems, from routine inspections to complex overhauls. We combine predictive analytics with hands-on expertise to minimize downtime and extend equipment lifespan across distribution grids, substations, and industrial facilities.",
      "Every maintenance program is tailored to your operational demands, regulatory requirements, and budget constraints — ensuring maximum reliability at optimal cost.",
    ],
    image: assetSrc(maintenanceOverview),
    bgSection: false,
  },
  commonIssues: {
    title: "Common Issues We Resolve",
    subtitle:
      "Our experienced technicians diagnose and fix the most frequent electrical infrastructure problems quickly and safely.",
    items: [
      {
        id: 1,
        icon: "bolt",
        title: "Power Surges",
        description:
          "Sudden voltage spikes that damage sensitive equipment and disrupt operations.",
      },
      {
        id: 2,
        icon: "inbox",
        title: "Circuit Overloads",
        description:
          "Excessive current draw causing breaker trips and potential fire hazards.",
      },
      {
        id: 3,
        icon: "fire",
        title: "Overheating Components",
        description:
          "Thermal failures in switchgear, transformers, and connection points.",
      },
      {
        id: 4,
        icon: "warning",
        title: "Insulation Breakdown",
        description:
          "Deteriorated insulation leading to short circuits and ground faults.",
      },
      {
        id: 5,
        icon: "arrows-up-down",
        title: "Voltage Fluctuations",
        description:
          "Unstable voltage levels affecting equipment performance and longevity.",
      },
      {
        id: 6,
        icon: "arrows-right-left",
        title: "Cable Degradation",
        description:
          "Worn or damaged cables compromising system safety and reliability.",
      },
    ],
  },
  equipment: {
    title: "Electrical Equipment Maintenance",
    subtitle:
      "Specialised in repair and servicing across all major equipment categories used in power distribution.",
    items: [
      {
        id: 1,
        productId: 1, // Circuit Breaker (closest to Switch Gear in products.js)
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
        "We provide comprehensive electrical maintenance services covering preventive, predictive, and corrective maintenance for all types of electrical infrastructure including substations, distribution grids, and industrial facilities.",
    },
    {
      id: 2,
      question: "Do you offer low-voltage system consulting?",
      answer:
        "Yes, our maintenance teams are equipped to service both low-voltage and high-voltage systems, ensuring all work is carried out to the highest safety standards.",
    },
    {
      id: 3,
      question: "Do you offer low-voltage system consulting?",
      answer:
        "We offer flexible maintenance contracts including scheduled preventive maintenance, emergency call-out services, and on-demand corrective maintenance.",
    },
  ],
};


