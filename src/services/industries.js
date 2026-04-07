import { industrySolutions } from "@/data/industries/industries";
import { agricultureData } from "@/data/industries/agriculture";
import { cityInfrastructureData } from "@/data/industries/cityInfrastructure";
import { distributionGridData } from "@/data/industries/distributionGrid";

export function getIndustrySolutions() {
  return [...industrySolutions];
}

export function getAgricultureData() {
  return agricultureData;
}

export function getCityInfrastructureData() {
  return cityInfrastructureData;
}

export function getDistributionGridData() {
  return distributionGridData;
}
