import {
  Phone,
  Facebook,
  Linkedin,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function TopBar() {
  return (
    <div className="hidden xl:block bg-background text-foreground pt-4">
      <div className="container flex items-center justify-between h-[var(--topbar-height)] text-sm">
        <div className="flex items-center gap-2">
          <span>Have any questions? Call us: {siteConfig.phone}</span>
          <Phone className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.facebook}
              className="hover:text-primary-blue transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              className="hover:text-primary-blue transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
