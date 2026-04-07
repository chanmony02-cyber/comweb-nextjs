import {
  companyDropdownItems,
  industriesDropdownItems,
  navItems,
  productsDropdownItems,
  servicesDropdownItems,
} from "@/data/navigation/navigation";

export function getNavItems() {
  return [...navItems];
}

export function getProductsDropdownItems() {
  return [...productsDropdownItems];
}

export function getCompanyDropdownItems() {
  return [...companyDropdownItems];
}

export function getServicesDropdownItems() {
  return [...servicesDropdownItems];
}

export function getIndustriesDropdownItems() {
  return [...industriesDropdownItems];
}
