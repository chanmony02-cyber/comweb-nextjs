import { assetSrc } from "@/lib/assetSrc";
const ictImg = "/images/logo/Institute_of_Technology_of_Cambodia_logo.png";
const ruppImg = "/images/logo/RUPP_logo.png";
const npicImg = "/images/logo/npic.jpg";

export const partners = [
  {
    id: 1,
    name: "ITC",
    description:
      "A community of thriving business in our region and represent our network.",
    color: "#001439",
    image: assetSrc(ictImg),
    initials: "P1",
  },
  {
    id: 2,
    name: "RUPP",
    description: "A global network of thriving businesses for excellent expertise.",
    color: "#001439",
    image: assetSrc(ruppImg),
    initials: "P2",
  },
  {
    id: 3,
    name: "NPIC",
    description: "A community of thriving businesses and expands your network.",
    color: "#001439",
    image: assetSrc(npicImg),
    initials: "P3",
  },
];

