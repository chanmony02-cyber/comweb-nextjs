// src/data/industries/agriculture.js
import ai1 from "@/assets/images/industries/agriculture/solution1.jpg";
import ai2 from "@/assets/images/industries/agriculture/solution2.jpg";
import ai3 from "@/assets/images/industries/agriculture/solution3.jpg";
import as1 from "@/assets/images/industries/agriculture/solution1.jpg";
import as2 from "@/assets/images/industries/agriculture/solution2.jpg";
import as3 from "@/assets/images/industries/agriculture/solution3.jpg";
import aHero from "@/assets/images/industries/agriculture/agri-banner.jpg";
import aProblem from "@/assets/images/industries/agriculture/water.jpg";
import { ROUTES } from "@/config/routes";

export const agricultureData = {
  hero: {
    title: "Agriculture",
    subtitle:
      "Empowering farming communities with smart energy and automation solutions that boost productivity and sustainability.",
    backgroundImage: aHero,
  },
  problem: {
    title: "We Understand Your Problem.",
    paragraphs: [
      "Modern agriculture faces mounting pressure to produce more with less. Unreliable power supply, inefficient irrigation, and the lack of real-time monitoring create significant productivity losses for farmers and agribusinesses.",
      "From remote field electrification to automated greenhouse control, agricultural operations require specialized electrical and automation expertise that understands both the technical and environmental demands of farming.",
      "We work alongside agricultural stakeholders to deliver energy-efficient, weather-resilient solutions — helping farms operate smarter, reduce costs, and increase yields across every season.",
    ],
    image: aProblem,
  },
  solutions: {
    label: "INDUSTRY SOLUTIONS",
    title: "Our Solutions",
    subtitle:
      "Comprehensive services to design, build, and maintain agricultural power and automation infrastructure.",
    items: [
      {
        id: 1,
        title: "Solar-Powered Irrigation Systems",
        image: ai1,
      },
      {
        id: 2,
        title: "Rural Electrification Networks",
        image: ai2,
      },
      {
        id: 3,
        title: "Precision Agriculture Monitoring",
        image: ai3,
      },
    ],
  },
  projects: {
    label: "PORTFOLIO",
    title: "Recent Projects in the Industry",
    items: [
      {
        id: 7,
        title: "Rice Farm Electrification",
        description:
          "Deployed a complete rural power distribution network across 500 hectares of rice farmland, providing stable electricity to irrigation pumps and processing facilities year-round.",
        image: as1,
        href: ROUTES.PROJECT_DETAIL.replace(":id", 7),
      },
      {
        id: 8,
        title: "Irrigation Control System",
        description:
          "Installed a solar-powered smart irrigation system with automated scheduling and remote monitoring, reducing water consumption by 40% while maintaining optimal crop yields.",
        image: as2,
        href: ROUTES.PROJECT_DETAIL.replace(":id", 8),
      },
      {
        id: 9,
        title: "Greenhouse Automation Project",
        description:
          "Engineered the full electrical and control infrastructure for a large-scale greenhouse complex, including climate control, grow lighting, and integrated SCADA monitoring systems.",
        image: as3,
        href: ROUTES.PROJECT_DETAIL.replace(":id", 9),
      },
    ],
  },
  cta: {
    title: "Let's Build Collaborative Projects",
    subtitle:
      "Discover the advantages of partnering with us to modernize your infrastructure.",
  },
};
