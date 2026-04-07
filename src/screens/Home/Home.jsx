import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import IndustriesSolutionSection from "./components/IndustriesSolutionSection";
import RecentProjectsSection from "./components/RecentProjectsSection";
import PartnershipSection from "./components/PartnershipSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhatWeDoSection />
      <FeaturedProductsSection />
      <IndustriesSolutionSection />
      <RecentProjectsSection />
      <PartnershipSection />
    </main>
  );
}
