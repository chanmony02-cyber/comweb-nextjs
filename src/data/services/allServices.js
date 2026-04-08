// src/data/services/allServices.js
import { ROUTES } from "@/config/routes";
import heroBG from "@/assets/images/servicesImg/hero-bg.jpg";
import repairing from "@/assets/images/servicesImg/repairing.jpg";
import serviceConsultants from "@/assets/images/servicesImg/service-consultants.jpg";
import serviceInspections from "@/assets/images/servicesImg/service-inspections.jpg";
import serviceMaintenance from "@/assets/images/servicesImg/service-maintenance.jpg";

export const allServicesData = {
  hero: {
    title: "Expert Services in Consultants, Maintenance, and Inspections",
    subtitle:
      "We provide top-notch services for all your electrical and electronic needs.",
    backgroundImage: heroBG,
  },
  services: {
    title: "Our Services",
    subtitle: "Explore our range of services tailored to meet your needs.",
    items: [
      {
        id: 1,
        title: "Consultants",
        description:
          "Quick and reliable repairing services for all your electrical infrastructure needs.",
        image: serviceConsultants,
        href: ROUTES.CONSULTANTS,
      },
      {
        id: 2,
        title: "Maintenance",
        description:
          "Expert advice tailored for your electrical and electronic system requirements.",
        image: serviceInspections,
        href: ROUTES.MAINTENANCE,
      },
      {
        id: 3,
        title: "Inspections",
        description:
          "Professional installation of electronic and electrical systems with precision.",
        image: serviceMaintenance,
        href: ROUTES.INSPECTIONS,
      },
    ],
  },
  whyChoose: {
    title: "Why choose our services?",
    image: repairing,
    items: [
      {
        id: 1,
        title: "Expert Team",
        description:
          "Highly trained professionals with years of industry experience.",
      },
      {
        id: 2,
        title: "Quality Assurance",
        description:
          "Rigorous quality control processes for every project we undertake.",
      },
      {
        id: 3,
        title: "Cost Effective",
        description:
          "Competitive pricing without compromising on quality or safety.",
      },
      {
        id: 4,
        title: "24/7 Support",
        description:
          "Round-the-clock customer support to address your concerns anytime.",
      },
    ],
  },
  faqs: [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of electrical infrastructure services including consulting, maintenance, and inspections for residential, commercial, and industrial clients.",
    },
    {
      id: 2,
      question: "Is there a warranty on repairs?",
      answer:
        "Yes, all our repair and maintenance work comes with a service warranty. The duration varies depending on the type of work performed.",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including bank transfer, credit card, and cash payments for approved clients.",
    },
  ],
};
