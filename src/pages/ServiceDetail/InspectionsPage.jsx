// src/pages/ServiceDetail/InspectionsPage.jsx

import { FaqSection } from "@/components/ui/FaqSection";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { inspectionsData } from "@/data/services/inspections";
import { ServiceDetailHeroSection } from "./components/ServiceDetailHeroSection";
import { ServiceOverview } from "./components/ServiceOverview";
import { CommonIssuesGrid } from "./components/CommonIssuesGrid";
import { EquipmentGrid } from "./components/EquipmentGrid";

export default function InspectionsPage() {
  const { hero, overview, commonIssues, equipment, faqs } = inspectionsData;

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
      <CommonIssuesGrid
        title={commonIssues.title}
        subtitle={commonIssues.subtitle}
        items={commonIssues.items}
      />
      <EquipmentGrid
        title={equipment.title}
        subtitle={equipment.subtitle}
        items={equipment.items}
      />
      <FaqSection items={faqs} />
      <GetInTouchSection />
    </>
  );
}
