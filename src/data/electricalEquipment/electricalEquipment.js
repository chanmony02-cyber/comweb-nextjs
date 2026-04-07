export const electricalEquipmentCategories = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "LV Products", value: "LV" },
  { id: 3, label: "MV Products", value: "MV" },
];

export const electricalEquipmentContent = {
  heroTitle: "Electrical Equipments",
  categoryTitle: "By Category",
  productDetail: {
    label: "Product Detail",
    name: "Smart Energy Meter",
    summary:
      "Advanced smart energy meters for accurate power measurement and remote monitoring. Supports bidirectional metering for solar installations.",
    actions: {
      backLabel: "Back",
      pdfLabel: "PDF Download",
      contactLabel: "Contact Us",
    },
    tabs: {
      description: "Description",
      specification: "Specification",
    },
    overview: {
      title: "Product Overview",
      text: "Advanced smart energy meters for accurate power measurement and remote monitoring. Supports bidirectional metering for solar installations.",
    },
    features: {
      title: "Product Features",
      items: [
        "Class 0.5S accuracy for precise billing",
        "Bidirectional energy measurement",
        "Built-in communication module (4G/LoRa)",
        "Tamper detection and event logging",
      ],
    },
    scope: {
      title: "Scope of Application",
      items: [
        "Utility revenue metering",
        "Industrial energy management",
        "Solar net metering applications",
      ],
    },
    specs: [
      { label: "Accuracy Class", value: "Class 0.5S" },
      { label: "Metering", value: "Bidirectional" },
      { label: "Communication", value: "4G / LoRa" },
      { label: "Monitoring", value: "Remote, real-time" },
    ],
    relatedTitle: "Related Products",
  },
  pagination: {
    previousLabel: "<",
    nextLabel: ">",
    pages: [1, 2, 3],
  },
};
