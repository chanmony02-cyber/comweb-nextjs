// src/pages/ServiceDetail/MaintenancePage.jsx

import { FaqSection } from "@/components/ui/FaqSection";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { ServiceDetailHeroSection } from "./components/ServiceDetailHeroSection";
import { ServiceOverview } from "./components/ServiceOverview";
import { CommonIssuesGrid } from "./components/CommonIssuesGrid";
import { EquipmentGrid } from "./components/EquipmentGrid";
import { getMaintenanceData } from "@/services/siteServices";

export default function MaintenancePage() {
  const maintenanceData = getMaintenanceData();
  const { hero, overview, commonIssues, equipment, faqs } = maintenanceData;

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
