import { allServicesData } from "@/data/services/allServices";
import { consultantsData } from "@/data/services/consultants";
import { inspectionsData } from "@/data/services/inspections";
import { maintenanceData } from "@/data/services/maintenance";

export function getAllServicesData() {
  return allServicesData;
}

export function getConsultantsData() {
  return consultantsData;
}

export function getMaintenanceData() {
  return maintenanceData;
}

export function getInspectionsData() {
  return inspectionsData;
}
