// src/pages/Services/ServicesPage.jsx

import { FaqSection } from "@/components/ui/FaqSection";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { allServicesData } from "@/data/services/allServices";
import { ServicesHero } from "./components/ServicesHero";
import { OurServicesGrid } from "./components/OurServicesGrid";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";

export default function ServicesPage() {
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
