import {
  electricalEquipmentCategories,
  electricalEquipmentContent,
} from "@/data/electricalEquipment/electricalEquipment";

export function getElectricalEquipmentCategories() {
  return [...electricalEquipmentCategories];
}

export function getElectricalEquipmentContent() {
  return electricalEquipmentContent;
}
