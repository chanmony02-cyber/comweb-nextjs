// src/pages/Services/ServicesPage.jsx

import { FaqSection } from "@/components/ui/FaqSection";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { ServicesHero } from "./components/ServicesHero";
import { OurServicesGrid } from "./components/OurServicesGrid";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { getAllServicesData } from "@/services/siteServices";

export default function ServicesPage() {
  const allServicesData = getAllServicesData();
  const { hero, services, whyChoose, faqs } = allServicesData;

  return (
    <>
      <ServicesHero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
      <OurServicesGrid
        title={services.title}
        subtitle={services.subtitle}
        items={services.items}
      />
      <WhyChooseUsSection
        image={whyChoose.image}
        title={whyChoose.title}
        items={whyChoose.items}
      />
      <FaqSection items={faqs} />
      <GetInTouchSection />
    </>
  );
}
