import { Link } from "react-router-dom";
import VHTLogo from "@/assets/images/VHT_Logo.png";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="bg-topbar text-topbar-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-16 mb-12">
          <div>
            <div className="card-logo bg-white p-1 rounded-lg w-fit">
              <Link to={ROUTES.HOME} className="flex items-center">
                <img src={VHTLogo} alt="VHT Logo" className="h-14 w-auto" />
              </Link>
            </div>
            <p className="mt-4 text-md text-topbar-foreground/70 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={siteConfig.socials.facebook}
                className="w-9 h-9 rounded-full bg-topbar-foreground/10 flex items-center justify-center hover:bg-primary-blue hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                className="w-9 h-9 rounded-full bg-topbar-foreground/10 flex items-center justify-center hover:bg-primary-blue hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Industries
            </h3>
            <ul className="space-y-5 text-md text-topbar-foreground/70">
              <li>
                <Link
                  to={ROUTES.DISTRIBUTION_GRID}
                  className="hover:text-primary-blue transition-colors"
                >
                  Distribution Grid
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CITY_INFRASTRUCTURE}
                  className="hover:text-primary-blue transition-colors"
                >
                  City Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.AGRICULTURE}
                  className="hover:text-primary-blue transition-colors"
                >
                  Agriculture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-5 text-md text-topbar-foreground/70">
              <li>
                <Link
                  to={ROUTES.SERVICES}
                  className="hover:text-primary-blue transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONSULTANTS}
                  className="hover:text-primary-blue transition-colors"
                >
                  Consultants
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.MAINTENANCE}
                  className="hover:text-primary-blue transition-colors"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.INSPECTIONS}
                  className="hover:text-primary-blue transition-colors"
                >
                  Inspections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-5 text-md text-topbar-foreground/70">
              <li>
                <Link
                  to={ROUTES.HOME}
                  className="hover:text-primary-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.OUR_PRODUCTS}
                  className="hover:text-primary-blue transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SERVICES}
                  className="hover:text-primary-blue transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className="hover:text-primary-blue transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-5 text-md text-topbar-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary-blue transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-blue transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-topbar-foreground/10 pt-6 text-center text-md text-topbar-foreground/50">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
