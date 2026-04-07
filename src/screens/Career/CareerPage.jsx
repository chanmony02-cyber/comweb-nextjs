// src/pages/Career/CareerPage.jsx

import { CareerHero } from "./components/CareerHero";
import { WhyJoinSection } from "./components/WhyJoinSection";
import { PositionsSection } from "./components/PositionsSection";
import { CareerCTA } from "./components/CareerCTA";
import {
  getCareerBenefits,
  getCareerCTA,
  getCareerDepartments,
  getCareerHero,
  getCareerPositions,
} from "@/services/career";

export default function CareerPage() {
  const careerHero = getCareerHero();
  const careerBenefits = getCareerBenefits();
  const careerDepartments = getCareerDepartments();
  const careerPositions = getCareerPositions();
  const careerCTA = getCareerCTA();

  return (
    <>
      <CareerHero
        title={careerHero.title}
        subtitle={careerHero.subtitle}
        backgroundImage={careerHero.backgroundImage}
      />
      <WhyJoinSection benefits={careerBenefits} />
      <PositionsSection
        departments={careerDepartments}
        positions={careerPositions}
      />
      <CareerCTA
        text={careerCTA.text}
        buttonLabel={careerCTA.buttonLabel}
        buttonHref={careerCTA.buttonHref}
      />
    </>
  );
}
