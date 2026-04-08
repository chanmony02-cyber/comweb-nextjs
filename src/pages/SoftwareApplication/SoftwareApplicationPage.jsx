// src/pages/SoftwareApplication/SoftwareApplicationPage.jsx

import { softwareApplicationData } from "@/data/softwareApplication/softwareApplication";
import { SoftwareApplicationHero } from "./components/SoftwareApplicationHero";
import { AppHighlightsSection } from "./components/AppHighlightsSection";
import { MobileExperienceSection } from "./components/MobileExperienceSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { PrivacySection } from "./components/PrivacySection";
import { CallToActionSection } from "./components/CallToActionSection";

export default function SoftwareApplicationPage() {
  const { hero, screens, mobileExperience, capabilities, privacy, cta } =
    softwareApplicationData;

  return (
    <main className="flex-1 bg-background">
      <SoftwareApplicationHero hero={hero} />
      <AppHighlightsSection screens={screens} />
      <MobileExperienceSection mobileExperience={mobileExperience} />
      <CapabilitiesSection capabilities={capabilities} />
      <PrivacySection privacy={privacy} />
      <CallToActionSection cta={cta} />
    </main>
  );
}
