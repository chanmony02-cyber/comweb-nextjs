import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavDropdown } from "@/components/common/Navbar/NavDropdown";
import { TopBar } from "@/components/common/Navbar/TopBar";
import VHTLogo from "@/assets/images/VHT_Logo.png";
import {
  companyDropdownItems,
  industriesDropdownItems,
  navItems,
  productsDropdownItems,
  servicesDropdownItems,
} from "@/data/navigation/navigation";
import { ROUTES } from "@/config/routes";
import { UnderMaintenanceAlert } from "@/components/ui/UnderMaintenanceAlert";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinkClassName =
    "flex items-center gap-1 text-md font-medium text-foreground hover:text-navy transition-colors";

  const [showAlert, setShowAlert] = useState(false);

  const handleSearchClick = () => {
    setShowAlert(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <UnderMaintenanceAlert
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
      />
      {/* Topbar */}
      <TopBar />
      <div className="border-b border-border">
        <div className="container flex items-center justify-between h-[var(--nav-height)]">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img src={VHTLogo} alt="VHT Logo" className="h-14 w-auto" />
          </Link>

          <nav className="hidden xl:flex text-lg items-center gap-8">
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    items={productsDropdownItems}
                    triggerClassName={navLinkClassName}
                  />
                );
              }
              if (item.label === "Company") {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    items={companyDropdownItems}
                    triggerClassName={navLinkClassName}
                  />
                );
              }
              if (item.label === "Services") {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    items={servicesDropdownItems}
                    triggerClassName={navLinkClassName}
                  />
                );
              }
              if (item.label === "Industries") {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    items={industriesDropdownItems}
                    triggerClassName={navLinkClassName}
                  />
                );
              }

              if (item.href && item.href !== "#") {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={navLinkClassName}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={navLinkClassName}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            {/* search icon */}
            <button
              className="p-2 hover:bg-muted rounded-full transition-colors"
              onClick={handleSearchClick}
              type="button"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <Button
              asChild
              className="rounded-full px-6 font-semibold border border-transparent hover:bg-white hover:text-slate-950 hover:border-primary"
            >
              <Link to={ROUTES.CONTACT}>Get in Touch</Link>
            </Button>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            {/* <LanguageSelector variant="compact" /> */}
            <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t border-border bg-background px-4 pb-4">
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <Accordion
                    key={item.label}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem
                      value="products"
                      className="border-border/50"
                    >
                      <AccordionTrigger className="py-3 text-sm font-medium text-foreground no-underline hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 pt-0">
                        <div className="flex flex-col gap-1">
                          {productsDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/60 hover:text-navy transition-colors"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }

              if (item.label === "Company") {
                return (
                  <Accordion
                    key={item.label}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem value="company" className="border-border/50">
                      <AccordionTrigger className="py-3 text-sm font-medium text-foreground no-underline hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 pt-0">
                        <div className="flex flex-col gap-1">
                          {companyDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/60 hover:text-navy transition-colors"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              if (item.label === "Services") {
                return (
                  <Accordion
                    key={item.label}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem
                      value="services"
                      className="border-border/50"
                    >
                      <AccordionTrigger className="py-3 text-sm font-medium text-foreground no-underline hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 pt-0">
                        <div className="flex flex-col gap-1">
                          {servicesDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/60 hover:text-navy transition-colors"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              if (item.label === "Industries") {
                return (
                  <Accordion
                    key={item.label}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem
                      value="industries"
                      className="border-border/50"
                    >
                      <AccordionTrigger className="py-3 text-sm font-medium text-foreground no-underline hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 pt-0">
                        <div className="flex flex-col gap-1">
                          {industriesDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/60 hover:text-navy transition-colors"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }

              if (item.href && item.href !== "#") {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center justify-between py-3 text-sm font-medium text-foreground border-b border-border/50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between py-3 text-sm font-medium text-foreground border-b border-border/50"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </a>
              );
            })}
            <div className="mt-4">
              <Button asChild className="w-full rounded-full font-semibold">
                <Link to={ROUTES.CONTACT} onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
