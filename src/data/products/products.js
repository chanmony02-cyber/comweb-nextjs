import { assetSrc } from "@/lib/assetSrc";
const productCircuitBreaker = "/images/products/product-circuit-breaker.webp";
const productCapacitor = "/images/products/product-capacitor.webp";
const productCurrentTransformer = "/images/products/product-current-transformer.webp";
const productFuse = "/images/products/product-fuse.webp";
const productGrounding = "/images/products/product-grounding.webp";
const productPanelBoard = "/images/products/product-panel-board.webp";
const productSurgeArrester = "/images/products/product-surge-arrester.webp";
const productTransformer = "/images/products/product-transformer.webp";

export const products = [
  {
    id: 1,
    name: "Circuit Breaker",
    category: "LV",
    image: assetSrc(productCircuitBreaker),
    images: [
      assetSrc(productCircuitBreaker),
      assetSrc(productFuse),
      assetSrc(productCircuitBreaker),
      assetSrc(productSurgeArrester),
      assetSrc(productFuse),
      assetSrc(productFuse),
    ],
    description:
      "Protects low-voltage circuits from overloads and short circuits.",
    features: [
      "Class 0.5S accuracy for precise protection",
      "Thermal-magnetic trip mechanism",
      "Built-in short circuit indicator",
      "Tamper detection and event logging",
    ],
    scopeOfApplication: [
      "Residential and commercial LV panels",
      "Industrial distribution boards",
      "Motor protection circuits",
      "Residential and commercial LV panels",
      "Industrial distribution boards",
      "Motor protection circuits",
      "Residential and commercial LV panels",
      "Industrial distribution boards",
      "Motor protection circuits",
      "Residential and commercial LV panels",
      "Industrial distribution boards",
      "Motor protection circuits",
      "Residential and commercial LV panels",
      "Industrial distribution boards",
      "Motor protection circuits",
    ],
    specs: {
      rating: "Up to 63A",
      standard: "IEC 60898-1",
    },
  },
  {
    id: 2,
    name: "Fuse Link",
    category: "LV",
    image: assetSrc(productFuse),
    images: [assetSrc(productFuse), assetSrc(productSurgeArrester), assetSrc(productFuse)],
    description: "Fast-acting fuse links for reliable LV protection.",
    features: [
      "Fast-acting response for overload protection",
      "High breaking capacity",
      "Wide current range coverage",
      "Tamper-resistant housing",
    ],
    scopeOfApplication: [
      "Utility revenue metering",
      "Industrial energy management",
      "Panel board overcurrent protection",
    ],
    specs: {
      rating: "10A–125A",
      standard: "IEC 60269",
    },
  },
  {
    id: 3,
    name: "Current Transformer",
    category: "MV",
    image: assetSrc(productCurrentTransformer),
    images: [
      assetSrc(productCurrentTransformer),
      assetSrc(productSurgeArrester),
      assetSrc(productFuse),
    ],
    description: "Accurate measurement and protection for MV systems.",
    features: [
      "High accuracy class measurement",
      "Oil-immersed insulation for durability",
      "Wide ratio selection available",
      "Low secondary burden requirement",
    ],
    scopeOfApplication: [
      "MV substation metering",
      "Relay protection systems",
      "Industrial energy monitoring",
    ],
    specs: {
      ratio: "100/5 A",
      accuracy: "Class 0.5",
    },
  },
  {
    id: 4,
    name: "Panel Board",
    category: "LV",
    image: assetSrc(productPanelBoard),
    images: [assetSrc(productPanelBoard), assetSrc(productSurgeArrester), assetSrc(productFuse)],
    description: "Modular LV distribution panels for safe load management.",
    features: [
      "Modular design for easy expansion",
      "IP42 enclosure rating",
      "Busbar up to 400A capacity",
      "Lockable door with dedicated breaker slots",
    ],
    scopeOfApplication: [
      "Commercial building distribution",
      "Industrial plant power management",
      "Residential multi-unit load centers",
    ],
    specs: {
      busbar: "Up to 400A",
      enclosure: "IP42",
    },
  },
  {
    id: 5,
    name: "Distribution Transformer",
    category: "MV",
    image: assetSrc(productTransformer),
    images: [assetSrc(productTransformer), assetSrc(productSurgeArrester), assetSrc(productFuse)],
    description: "Efficient MV/LV power distribution for utility networks.",
    features: [
      "ONAN cooling for reliable operation",
      "Low no-load and load losses",
      "On-load tap changer available",
      "Mineral oil insulation system",
    ],
    scopeOfApplication: [
      "Utility distribution networks",
      "Industrial facility power supply",
      "Rural electrification projects",
    ],
    specs: {
      capacity: "100–1000 kVA",
      cooling: "ONAN",
    },
  },
  {
    id: 6,
    name: "Surge Arrester",
    category: "MV",
    image: assetSrc(productSurgeArrester),
    images: [assetSrc(productSurgeArrester)],
    description: "Protects MV equipment from lightning and switching surges.",
    features: [
      "Polymer housing for lightweight installation",
      "Metal oxide varistor (MOV) technology",
      "High energy absorption capacity",
      "Low residual voltage for effective clamping",
    ],
    scopeOfApplication: [
      "MV overhead line protection",
      "Transformer surge protection",
      "Switchgear and cable termination points",
    ],
    specs: {
      systemVoltage: "11–33 kV",
      housing: "Polymer",
    },
  },
  {
    id: 7,
    name: "Capacitor Bank",
    category: "MV",
    image: assetSrc(productCapacitor),
    images: [assetSrc(productCapacitor)],
    description: "Power factor correction for MV networks.",
    features: [
      "Automatic switching controller included",
      "Individual fuse protection per capacitor",
      "Harmonic filter option available",
      "Wide temperature range operation",
    ],
    scopeOfApplication: [
      "Industrial plant power factor correction",
      "Utility feeder reactive compensation",
      "Substation voltage support",
    ],
    specs: {
      kvar: "100–1000 kvar",
      control: "Automatic",
    },
  },
  {
    id: 8,
    name: "Grounding System",
    category: "LV",
    image: assetSrc(productGrounding),
    images: [assetSrc(productGrounding)],
    description: "Reliable earthing solution for LV installations.",
    features: [
      "Copper-bonded steel rod construction",
      "Corrosion-resistant coating",
      "Low soil resistance performance",
      "Modular rod extension system",
    ],
    scopeOfApplication: [
      "Building structural earthing",
      "LV substation grounding",
      "Lightning protection earth electrode",
    ],
    specs: {
      material: "Copper-bonded",
      resistance: "Under 5 ohms",
    },
  },
  {
    id: 9,
    name: "Grounding System",
    category: "LV",
    image: assetSrc(productGrounding),
    images: [assetSrc(productGrounding)],
    description: "Reliable earthing solution for LV installations.",
    features: [
      "Copper-bonded steel rod construction",
      "Corrosion-resistant coating",
      "Low soil resistance performance",
      "Modular rod extension system",
    ],
    scopeOfApplication: [
      "Building structural earthing",
      "LV substation grounding",
      "Lightning protection earth electrode",
    ],
    specs: {
      material: "Copper-bonded",
      resistance: "Under 5 ohms",
    },
  },
  {
    id: 10,
    name: "Grounding System",
    category: "LV",
    image: assetSrc(productGrounding),
    images: [assetSrc(productGrounding)],
    description: "Reliable earthing solution for LV installations.",
    features: [
      "Copper-bonded steel rod construction",
      "Corrosion-resistant coating",
      "Low soil resistance performance",
      "Modular rod extension system",
    ],
    scopeOfApplication: [
      "Building structural earthing",
      "LV substation grounding",
      "Lightning protection earth electrode",
    ],
    specs: {
      material: "Copper-bonded",
      resistance: "Under 5 ohms",
    },
  },
  {
    id: 11,
    name: "Capacitor Bank",
    category: "MV",
    image: assetSrc(productCapacitor),
    images: [assetSrc(productCapacitor)],
    description: "Power factor correction for MV networks.",
    features: [
      "Automatic switching controller included",
      "Individual fuse protection per capacitor",
      "Harmonic filter option available",
      "Wide temperature range operation",
    ],
    scopeOfApplication: [
      "Industrial plant power factor correction",
      "Utility feeder reactive compensation",
      "Substation voltage support",
    ],
    specs: {
      kvar: "100–1000 kvar",
      control: "Automatic",
    },
  },
  {
    id: 12,
    name: "Capacitor Bank",
    category: "MV",
    image: assetSrc(productCapacitor),
    images: [assetSrc(productCapacitor)],
    description: "Power factor correction for MV networks.",
    features: [
      "Automatic switching controller included",
      "Individual fuse protection per capacitor",
      "Harmonic filter option available",
      "Wide temperature range operation",
    ],
    scopeOfApplication: [
      "Industrial plant power factor correction",
      "Utility feeder reactive compensation",
      "Substation voltage support",
    ],
    specs: {
      kvar: "100–1000 kvar",
      control: "Automatic",
    },
  },
  {
    id: 13,
    name: "Fuse Link",
    category: "LV",
    image: assetSrc(productFuse),
    images: [assetSrc(productFuse)],
    description: "Fast-acting fuse links for reliable LV protection.",
    features: [
      "Fast-acting response for overload protection",
      "High breaking capacity",
      "Wide current range coverage",
      "Tamper-resistant housing",
    ],
    scopeOfApplication: [
      "Utility revenue metering",
      "Industrial energy management",
      "Panel board overcurrent protection",
    ],
    specs: {
      rating: "10A–125A",
      standard: "IEC 60269",
    },
  },
  {
    id: 14,
    name: "Fuse Link",
    category: "LV",
    image: assetSrc(productFuse),
    images: [assetSrc(productFuse)],
    description: "Fast-acting fuse links for reliable LV protection.",
    features: [
      "Fast-acting response for overload protection",
      "High breaking capacity",
      "Wide current range coverage",
      "Tamper-resistant housing",
    ],
    scopeOfApplication: [
      "Utility revenue metering",
      "Industrial energy management",
      "Panel board overcurrent protection",
    ],
    specs: {
      rating: "10A–125A",
      standard: "IEC 60269",
    },
  },
  {
    id: 15,
    name: "Fuse Link",
    category: "LV",
    image: assetSrc(productFuse),
    images: [assetSrc(productFuse)],
    description: "Fast-acting fuse links for reliable LV protection.",
    features: [
      "Fast-acting response for overload protection",
      "High breaking capacity",
      "Wide current range coverage",
      "Tamper-resistant housing",
    ],
    scopeOfApplication: [
      "Utility revenue metering",
      "Industrial energy management",
      "Panel board overcurrent protection",
    ],
    specs: {
      rating: "10A–125A",
      standard: "IEC 60269",
    },
  },
];


