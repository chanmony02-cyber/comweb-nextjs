// src/pages/ServiceDetail/ConsultantsPage.jsx

import { FaqSection } from "@/components/ui/FaqSection";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { ServiceDetailHeroSection } from "./components/ServiceDetailHeroSection";
import { ServiceOverview } from "./components/ServiceOverview";
import { CoreExpertiseGrid } from "./components/CoreExpertiseGrid";
import { OurProcessSteps } from "./components/OurProcessSteps";
import { getConsultantsData } from "@/services/siteServices";

export default function ConsultantsPage() {
  const consultantsData = getConsultantsData();
  const { hero, overview, expertise, process, faqs } = consultantsData;

  return (
    <>
      <ServiceDetailHeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        heroImage={hero.heroImage}
      />
      <ServiceOverview
        title={overview.title}
        paragraphs={overview.paragraphs}
        image={overview.image}
        bgSection={overview.bgSection}
      />
      <CoreExpertiseGrid
        title={expertise.title}
        items={expertise.items}
      />
      <OurProcessSteps
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
      />
      <FaqSection items={faqs} />
      <GetInTouchSection />
    </>
  );
}
