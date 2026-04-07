import { assetSrc } from "@/lib/assetSrc";
const meterImg = "/images/products/meter/meter.webp";

export const featuredProducts = [
  {
    id: 1,
    image: assetSrc(meterImg),
    title: "Smart Electricity Meter",
    description:
      "Advanced digital metering solution for accurate energy consumption monitoring and remote data collection.",
    href: "/products/1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80&fit=crop",
    title: "Control Panel Systems",
    description:
      "Industrial-grade control panels engineered to improve safety and optimize system performance.",
    href: "/products/2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    title: "Distribution Transformer",
    description:
      "High-efficiency distribution transformers designed for reliable power delivery to utility networks.",
    href: "/products/3",
  },
];

