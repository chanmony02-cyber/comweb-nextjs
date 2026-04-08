// src/pages/Contact/ContactPage.jsx

import { ContactHeroSection } from "./components/ContactHeroSection";
import { OurLocationSection } from "./components/OurLocationSection";
import { NetworkBackground } from "./components/NetworkBackground";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Wrapper covers both sections with the live network behind everything */}
      <NetworkBackground />
      <div className="relative z-10">
        <ContactHeroSection />
        <OurLocationSection />
      </div>
    </div>
  );
}
