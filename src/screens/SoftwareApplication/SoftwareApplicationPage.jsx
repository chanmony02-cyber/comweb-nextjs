import { SoftwareApplicationHero } from "./components/SoftwareApplicationHero";
import { AppHighlightsSection } from "./components/AppHighlightsSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { PrivacySection } from "./components/PrivacySection";
import { CallToActionSection } from "./components/CallToActionSection";
import { getSoftwareApplicationData } from "@/services/softwareApplication";
import { MobileExperienceSection } from "./components/MobileExperienceSection";

export default function SoftwareApplicationPage() {
  const softwareApplicationData = getSoftwareApplicationData();
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
