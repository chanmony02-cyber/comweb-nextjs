import { AboutHero } from "./components/AboutHero";
import { CompanyStorySection } from "./components/CompanyStorySection";
import { PowerSection } from "./components/PowerSection";
import { MissionVisionSection } from "./components/MissionVisionSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { ServicesSection } from "./components/ServicesSection";
import { IndustriesWeServeSection } from "./components/IndustriesWeServeSection";
import { WhyPartnerSection } from "./components/WhyPartnerSection";
import { TeamSection } from "./components/TeamSection";
// import PartnershipSection from "../Home/components/PartnershipSection";
import { OurLocationSection } from "@/screens/Contact/components/OurLocationSection";
import { getAboutData } from "@/services/about";

export default function AboutPage() {
  const aboutData = getAboutData();
  const { hero, story, powerSection, mission, coreValues, services } =
    aboutData;
  const { industries, whyPartner, team } = aboutData;

  return (
    <>
      <AboutHero {...hero} />
      <CompanyStorySection {...story} />
      <PowerSection {...powerSection} />
      <MissionVisionSection {...mission} />
      <CoreValuesSection {...coreValues} />
      <ServicesSection {...services} />
      <IndustriesWeServeSection {...industries} />
      <WhyPartnerSection {...whyPartner} />
      <TeamSection {...team} />
      {/* <PartnershipSection /> */}
      <OurLocationSection />
    </>
  );
}
