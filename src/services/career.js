import {
  careerBenefits,
  careerCTA,
  careerDepartments,
  careerHero,
  careerPositions,
} from "@/data/career/career";

export function getCareerHero() {
  return careerHero;
}

export function getCareerBenefits() {
  return [...careerBenefits];
}

export function getCareerDepartments() {
  return [...careerDepartments];
}

export function getCareerPositions() {
  return [...careerPositions];
}

export function getCareerCTA() {
  return careerCTA;
}

export function getCareerPositionById(id) {
  const positionId = Number(id);
  if (Number.isNaN(positionId)) return null;

  return careerPositions.find((item) => item.id === positionId) ?? null;
}
