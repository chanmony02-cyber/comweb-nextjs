// src/data/projects/projects.js

// ── All Projects (full data for AllProjectsPage + ProjectDetailPage) ─────────

const IMG_DG_1 =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop";
const IMG_DG_2 =
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&fit=crop";
const IMG_DG_3 =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop";
const IMG_CI_1 =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&fit=crop";
const IMG_CI_2 =
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&fit=crop";
const IMG_CI_3 =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop";
const IMG_AG_1 =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&fit=crop";
const IMG_AG_2 =
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80&fit=crop";
const IMG_AG_3 =
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80&fit=crop";

export const allProjects = [
  // ── Distribution Grid ────────────────────────────────────
  {
    id: 1,
    category: "Distribution Grid",
    date: "July 20, 2026",
    location: "Phnom Penh",
    title: "Provincial Grid Expansion",
    summary:
      "Designed and constructed a 115kV distribution network spanning over 200km, connecting rural communities to the national power grid with reliable and sustainable infrastructure.",
    image: IMG_DG_1,
    tag: "Distribution Grid",
    body: [
      "Designed and constructed a 115kV distribution network spanning over 200km, connecting rural communities to the national power grid.",
      "This large-scale project required careful route planning, environmental assessments, and close collaboration with local authorities. The team deployed advanced protection systems and remote monitoring capabilities to ensure long-term grid reliability.",
      "The project was delivered on time and within budget, serving over 80,000 residents and significantly reducing transmission losses across the region.",
    ],
    keyFeatures: [
      "115kV transmission network spanning 200+ km",
      "Advanced SCADA-based remote monitoring installed",
      "Reduced transmission losses by 18% across the corridor",
      "Commissioned within scheduled timeline and budget",
    ],
  },
  {
    id: 2,
    category: "Agriculture",
    date: "June 15, 2026",
    location: "Kampong Speu",
    title: "Underground Cable Network",
    summary:
      "Installed an extensive underground cable system for urban areas, minimizing visual impact while providing reliable power distribution to residential and commercial zones.",
    image: IMG_DG_2,
    tag: "Distribution Grid",
    body: [
      "The underground cable network project replaced aging overhead lines in high-density urban districts, dramatically improving supply reliability and reducing outage frequency.",
      "Our engineers used trenchless installation techniques to minimize disruption to daily business operations and road traffic throughout the construction phase.",
      "The network now serves over 40,000 commercial and residential consumers with a redundancy design that guarantees 99.9% uptime.",
    ],
    keyFeatures: [
      "22kV underground cable network across 12 city districts",
      "Trenchless installation to minimize surface disruption",
      "Redundant ring topology for 99.9% supply availability",
      "Integrated fault detection and isolation systems",
    ],
  },
  {
    id: 3,
    category: "Distribution Grid",
    date: "May 10, 2026",
    location: "Siem Reap",
    title: "Rural Electrification Program",
    summary:
      "Deployed overhead distribution lines across agricultural regions, bringing consistent electricity access to farming communities and boosting local productivity significantly.",
    image: IMG_DG_3,
    tag: "Distribution Grid",
    body: [
      "The rural electrification program extended distribution infrastructure into 24 previously unserved villages across three provinces.",
      "Each village connection included a small distribution transformer, metering kiosks, and service drops to individual households, ensuring safety and compliance with national standards.",
      "The program successfully connected over 15,000 households and 400 small businesses, catalyzing economic growth and improving quality of life across the region.",
    ],
    keyFeatures: [
      "Connected 15,000+ households across 24 villages",
      "Installed 72 distribution transformers",
      "Deployed pre-paid metering infrastructure",
      "Full regulatory compliance and grid code adherence",
    ],
  },
  // ── City Infrastructure ──────────────────────────────────
  {
    id: 4,
    category: "City Infrastructure",
    date: "April 22, 2026",
    location: "Phnom Penh",
    title: "Metropolitan Interchange Upgrade",
    summary:
      "Engineered a multi-level highway interchange serving over 150,000 vehicles daily, integrating smart traffic signals and energy-efficient LED lighting throughout the corridor.",
    image: IMG_CI_1,
    tag: "City Infrastructure",
    body: [
      "The metropolitan interchange upgrade involved a complete overhaul of the electrical and control systems at one of the city's most trafficked road junctions.",
      "Smart traffic management software was integrated with adaptive signal controllers, reducing average vehicle wait times by 35% during peak hours.",
      "Energy-efficient LED luminaires replaced the previous high-pressure sodium fixtures, cutting street lighting energy consumption by 60% while improving visibility and safety.",
    ],
    keyFeatures: [
      "Adaptive signal controllers installed at 18 junctions",
      "LED lighting reduced energy consumption by 60%",
      "Real-time traffic data integration with city control center",
      "Delivered with zero major traffic disruption during construction",
    ],
  },
  {
    id: 5,
    category: "City Infrastructure",
    date: "March 8, 2026",
    location: "Battambang",
    title: "Urban Water Treatment Facility",
    summary:
      "Designed the complete electrical and control systems for a modern water treatment plant, ensuring 24/7 automated operations with redundant power supply and remote monitoring.",
    image: IMG_CI_2,
    tag: "City Infrastructure",
    body: [
      "The urban water treatment facility project involved designing and installing a comprehensive medium-voltage power distribution system feeding all process equipment and utilities.",
      "A dedicated UPS system and emergency diesel generator were integrated to ensure continuous operation during grid supply interruptions, protecting critical treatment processes.",
      "PLC-based automation systems were commissioned to control filtration, chemical dosing, and pump operations remotely from the city SCADA center.",
    ],
    keyFeatures: [
      "MV/LV distribution system for 5MW process load",
      "Redundant UPS and generator backup systems installed",
      "PLC-based automation with city SCADA integration",
      "Treatment capacity of 120,000 m³ per day achieved",
    ],
  },
  {
    id: 6,
    category: "City Infrastructure",
    date: "February 14, 2026",
    location: "Kampong Cham",
    title: "Public Transit Electrification",
    summary:
      "Delivered end-to-end electrical infrastructure for a new urban rail line, including traction power substations, platform systems, and integrated safety and communication networks.",
    image: IMG_CI_3,
    tag: "City Infrastructure",
    body: [
      "The public transit electrification project encompassed traction power supply design, substation construction, and overhead catenary installation for a 14km urban rail corridor.",
      "Four traction substations were constructed and commissioned, each capable of delivering 3MW to the catenary system, supporting peak-hour train headways of 5 minutes.",
      "Platform edge doors, passenger information displays, fire detection systems, and CCTV networks were integrated into a unified building management system.",
    ],
    keyFeatures: [
      "4 traction substations at 3MW each commissioned",
      "14km overhead catenary system installed",
      "Integrated BMS for all platform systems",
      "System achieved 99.6% operational availability in first year",
    ],
  },
  // ── Agriculture ──────────────────────────────────────────
  {
    id: 7,
    category: "Agriculture",
    date: "January 30, 2026",
    location: "Takeo Province",
    title: "Rice Farm Electrification",
    summary:
      "Deployed a complete rural power distribution network across 500 hectares of rice farmland, providing stable electricity to irrigation pumps and processing facilities year-round.",
    image: IMG_AG_1,
    tag: "Agriculture",
    body: [
      "The rice farm electrification project brought reliable three-phase power to a large-scale agricultural operation for the first time, replacing costly diesel generators.",
      "A dedicated 22kV feeder was extended 18km from the nearest grid connection point, with step-down transformers installed at strategic locations across the farm.",
      "Energy metering and demand management systems were installed to optimize electricity costs and monitor consumption patterns across all farm operations.",
    ],
    keyFeatures: [
      "22kV feeder extended 18km to serve the farm complex",
      "Replaced 12 diesel generators, cutting fuel costs by 70%",
      "Smart metering installed at all major load centers",
      "Grid connection completed within one dry season",
    ],
  },
  {
    id: 8,
    category: "Agriculture",
    date: "December 5, 2025",
    location: "Kandal Province",
    title: "Solar-Powered Irrigation System",
    summary:
      "Installed a solar-powered smart irrigation system with automated scheduling and remote monitoring, reducing water consumption by 40% while maintaining optimal crop yields.",
    image: IMG_AG_2,
    tag: "Agriculture",
    body: [
      "The solar irrigation project deployed a 200kW photovoltaic array to power submersible borehole pumps serving 300 hectares of cultivated land.",
      "A battery energy storage system was integrated to provide irrigation capability during cloudy periods and after sunset, maximizing water delivery during critical growth phases.",
      "IoT soil moisture sensors connected to the control system enable fully automated irrigation scheduling based on real-time crop water demand data.",
    ],
    keyFeatures: [
      "200kW solar PV array with 150kWh battery storage",
      "Automated scheduling via IoT soil moisture sensors",
      "40% reduction in total water consumption achieved",
      "Monitoring and control accessible via mobile application",
    ],
  },
  {
    id: 9,
    category: "Agriculture",
    date: "November 18, 2025",
    location: "Prey Veng Province",
    title: "Greenhouse Automation Project",
    summary:
      "Engineered the full electrical and control infrastructure for a large-scale greenhouse complex, including climate control, grow lighting, and integrated SCADA monitoring systems.",
    image: IMG_AG_3,
    tag: "Agriculture",
    body: [
      "The greenhouse automation project provided a turnkey electrical and building automation solution for a modern horticultural facility producing year-round vegetables and herbs.",
      "Variable frequency drives were fitted to all ventilation fans and cooling systems, reducing energy consumption while maintaining precise climate control for optimal growing conditions.",
      "Full SCADA integration allows agronomists to monitor and adjust temperature, humidity, CO₂ levels, and lighting schedules remotely from any device at any time.",
    ],
    keyFeatures: [
      "Building automation system for 8 individual greenhouse zones",
      "VFD-controlled ventilation and cooling systems",
      "LED grow lighting with programmable spectrum control",
      "Full SCADA integration with mobile access capability",
    ],
  },
];

// ── Recent Projects (subset used on the Home page) ────────────────────────────
// Picks the first 6 items so the homepage always reflects real project data.
export const recentProjects = allProjects.slice(0, 6);
