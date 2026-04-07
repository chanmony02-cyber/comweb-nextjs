// src/data/career/career.js
import { ROUTES } from "@/config/routes";

export const careerHero = {
  title: "Build the Future with Us",
  subtitle:
    "We're a team of innovators, and engineers working together to solve the industry's biggest challenges.",
  backgroundImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&fit=crop",
};

export const careerBenefits = [
  {
    id: 1,
    icon: "growth-budget",
    title: "Growth Budget",
    description:
      "We invest in your professional development with training programs, certifications, and conference sponsorships to help you grow your career.",
  },
  {
    id: 2,
    icon: "health",
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, wellness programs, and flexible work arrangements to support your well-being.",
  },
  {
    id: 3,
    icon: "knowledge",
    title: "Growth Knowledge",
    description:
      "Access to cutting-edge technologies, mentorship from industry leaders, and continuous learning opportunities.",
  },
];

export const careerDepartments = [
  { id: 1, label: "All Departments", value: "all" },
  { id: 2, label: "Engineer", value: "Engineer" },
  { id: 3, label: "Designer", value: "Designer" },
  { id: 4, label: "IT", value: "IT" },
];

export const careerPositions = [
  {
    id: 1,
    title: "Electrical Engineer",
    department: "Engineer",
    location: "Char Om Pov / Cambodia",
    detailLocation: "Phnom Penh / Cambodia",
    jobType: "Full Time",
    salary: "800$ - 1000$",
    experience: "+2 Years",
    aboutRole:
      "We are looking for an experienced Electrical Engineer to design, develop, and maintain electrical systems and components for our infrastructure projects. You will work on cutting-edge power distribution solutions across Cambodia.",
    responsibilities: [
      "Design and develop electrical systems for power distribution projects",
      "Conduct feasibility studies and prepare technical specifications",
      "Oversee installation and commissioning of electrical equipment",
      "Ensure compliance with national and international electrical codes",
      "Collaborate with project managers and cross-functional teams",
      "Troubleshoot and resolve technical issues on site",
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering or related field",
      "Minimum 2 years of experience in power distribution or related industry",
      "Proficiency in AutoCAD, ETAP, or similar design software",
      "Strong knowledge of electrical codes and safety standards",
      "Excellent communication and teamwork skills",
      "Willingness to travel to project sites",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "IT",
    location: "Char Om Pov / Cambodia",
    detailLocation: "Phnom Penh / Cambodia",
    jobType: "Full Time",
    salary: "700$ - 1200$",
    experience: "+1 Year",
    aboutRole:
      "We are looking for a skilled Backend Developer to design, build, and maintain efficient server-side applications and APIs. You will work closely with the frontend team and product team to deliver robust digital solutions for our smart infrastructure platform.",
    responsibilities: [
      "Design and implement RESTful APIs and backend services",
      "Manage databases and ensure data integrity and performance",
      "Collaborate with frontend developers and product managers",
      "Write clean, maintainable, and well-documented code",
      "Conduct code reviews and implement best practices",
      "Monitor application performance and resolve issues proactively",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Minimum 1 year of experience in backend development",
      "Proficiency in Node.js, Python, or similar server-side languages",
      "Experience with relational and non-relational databases",
      "Familiarity with cloud platforms such as AWS or GCP",
      "Strong problem-solving and analytical skills",
    ],
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Designer",
    location: "Char Om Pov / Cambodia",
    detailLocation: "Phnom Penh / Cambodia",
    jobType: "Full Time",
    salary: "600$ - 900$",
    experience: "+1 Year",
    aboutRole:
      "We are seeking a creative and user-focused UX/UI Designer to craft intuitive and visually compelling digital experiences. You will collaborate with product and development teams to translate user needs into elegant interface designs.",
    responsibilities: [
      "Create user flows, wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing sessions",
      "Collaborate with developers to ensure design implementation quality",
      "Maintain and evolve the product design system",
      "Iterate on designs based on data and user feedback",
      "Present and communicate design decisions to stakeholders",
    ],
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "Minimum 1 year of experience in UX/UI or product design",
      "Proficiency in Figma or similar design tools",
      "Strong portfolio demonstrating user-centered design skills",
      "Understanding of accessibility standards and responsive design",
      "Excellent visual and communication skills",
    ],
  },
];

export const careerCTA = {
  text: "We're always looking for talented individuals to join our mission.\nSend us your resume anyway!",
  buttonLabel: "Contact Us",
  buttonHref: ROUTES.CONTACT,
};
