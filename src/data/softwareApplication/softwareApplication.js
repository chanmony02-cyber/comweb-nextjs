// src/data/softwareApplication/softwareApplication.js

export const softwareApplicationData = {
  hero: {
    badge: "Software application",
    title: "Operate devices and gateways with total clarity",
    subtitle:
      "A mobile-first UI that turns complex infrastructure into simple, actionable views. Every screen uses masked identifiers and summary metrics so operators see only what they need.",
    highlights: [
      "Tenant-aware login and role access",
      "Status rings, device counts, and map filters",
      "Private data masked by default",
    ],
  },
  screens: {
    label: "App highlights",
    title: "User interface built from the real workflow",
    subtitle:
      "These previews mirror the live experience while hiding all sensitive values.",
    items: [
      {
        id: "login",
        title: "Login & tenant selection",
        description:
          "Let each team choose their workspace without exposing tenant IDs.",
        points: ["Tenant dropdown", "Single-tap login", "Version indicator"],
      },
      {
        id: "dashboard",
        title: "Operational dashboard",
        description:
          "Status rings and quick totals reveal health at a glance.",
        points: ["Device health split", "Gateway uptime", "Map filters"],
      },
      {
        id: "application",
        title: "Application list",
        description:
          "Search applications and see device totals without drilling into private data.",
        points: ["Fast search", "Device counts", "Tap-through details"],
      },
      {
        id: "gateway",
        title: "Gateway overview",
        description:
          "Track gateway availability with masked identifiers and last-seen status.",
        points: ["Masked IDs", "Private IP hidden", "Status badge"],
      },
      {
        id: "more",
        title: "Account & support",
        description:
          "Profile, dark mode, and help access in one place.",
        points: ["Role profile", "Dark mode toggle", "Help & logout"],
      },
    ],
  },
  mobileExperience: {
    label: "Mobile experience",
    title: "See the app on a phone, in motion",
    subtitle:
      "The phone view cycles through core app states so operators can picture the real workflow on a handheld device.",
    highlights: [
      "Auto-rotating app screens",
      "Animated phone shell with floating motion",
      "Masked data and compact operator views",
    ],
    slides: [
      {
        id: "login",
        title: "Tenant login",
        description: "Choose a workspace and sign in quickly.",
      },
      {
        id: "dashboard",
        title: "Operations dashboard",
        description: "Read device health at a glance.",
      },
      {
        id: "application",
        title: "Application list",
        description: "Search and scan live app totals.",
      },
      {
        id: "gateway",
        title: "Gateway status",
        description: "Monitor last-seen state and masked IDs.",
      },
    ],
  },
  capabilities: {
    label: "Capabilities",
    title: "Built for operators, safe for data",
    subtitle:
      "Every feature emphasizes clarity, speed, and data protection across teams.",
    items: [
      {
        id: "realtime",
        icon: "activity",
        title: "Real-time status",
        description: "Live health indicators update without noisy tables.",
      },
      {
        id: "multi-tenant",
        icon: "layers",
        title: "Multi-tenant control",
        description: "Switch tenants while keeping data neatly isolated.",
      },
      {
        id: "map",
        icon: "map",
        title: "Map intelligence",
        description: "Filter sites and clusters with quick map controls.",
      },
      {
        id: "alerts",
        icon: "bell",
        title: "Alerts & insights",
        description: "Surface exceptions before they impact uptime.",
      },
      {
        id: "search",
        icon: "search",
        title: "Fast search",
        description: "Find devices and apps in seconds with clean filtering.",
      },
      {
        id: "secure",
        icon: "lock",
        title: "Privacy-first UI",
        description: "Sensitive identifiers are masked at every layer.",
      },
    ],
  },
  privacy: {
    label: "Privacy",
    title: "Show only what matters",
    subtitle:
      "Operators can work confidently knowing the interface hides private or regulated fields.",
    points: [
      "Masked device IDs, IPs, and tenant identifiers",
      "Role-based visibility for sensitive modules",
      "Audit-friendly views with minimal exposure",
    ],
    steps: [
      {
        id: "step-1",
        title: "View",
        description: "See high-level health and counts.",
      },
      {
        id: "step-2",
        title: "Filter",
        description: "Narrow by status, region, or application.",
      },
      {
        id: "step-3",
        title: "Act",
        description: "Open detail screens with approved access only.",
      },
    ],
  },
  cta: {
    title: "Ready to explore the software application?",
    subtitle:
      "We can tailor the UI to your operation and deployment model.",
  },
};
