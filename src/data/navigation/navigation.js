// src/data/navigation/navigation.js
import { ROUTES } from "@/config/routes";

export const navItems = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Industries", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
];

export const productsDropdownItems = [
  { label: "Electrical Equipment", href: ROUTES.ELECTRICAL_EQUIPMENT },
  { label: "Software application", href: ROUTES.SOFTWARE_APPLICATION },
];

export const companyDropdownItems = [
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Contact Us", href: ROUTES.CONTACT },
  { label: "Career", href: ROUTES.CAREER },
  { label: "News & Events", href: ROUTES.NEWS },
];

export const servicesDropdownItems = [
  { label: "All Services", href: ROUTES.SERVICES },
  { label: "Consultants", href: ROUTES.CONSULTANTS },
  { label: "Maintenance", href: ROUTES.MAINTENANCE },
  { label: "Inspections", href: ROUTES.INSPECTIONS },
];

export const industriesDropdownItems = [
  { label: "Distribution Grid", href: ROUTES.DISTRIBUTION_GRID },
  { label: "City Infrastructure", href: ROUTES.CITY_INFRASTRUCTURE },
  { label: "Agriculture", href: ROUTES.AGRICULTURE },
];
