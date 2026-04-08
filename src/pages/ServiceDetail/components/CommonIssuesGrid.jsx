// src/pages/ServiceDetail/components/CommonIssuesGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";
import boltIcon from "@/assets/icons/bolt.svg";
import inboxIcon from "@/assets/icons/inbox.svg";
import fireIcon from "@/assets/icons/fire.svg";
import warningIcon from "@/assets/icons/warning.svg";
import arrowsUpDownIcon from "@/assets/icons/arrows-up-down.svg";
import arrowsRightLeftIcon from "@/assets/icons/arrows-right-left.svg";
import searchIcon from "@/assets/icons/search.svg";
import clipboardIcon from "@/assets/icons/clipboard.svg";
import shieldCheckIcon from "@/assets/icons/shield-check.svg";
import cogIcon from "@/assets/icons/cog.svg";

// Icon map â€” resolves string keys from data layer into SVG elements
// Covers all icons used by both Maintenance and Inspections data files
const ICONS = {
  bolt: boltIcon,
  inbox: inboxIcon,
  fire: fireIcon,
  warning: warningIcon,
  "arrows-up-down": arrowsUpDownIcon,
  "arrows-right-left": arrowsRightLeftIcon,
  search: searchIcon,
  clipboard: clipboardIcon,
  "shield-check": shieldCheckIcon,
  cog: cogIcon,
};

export function CommonIssuesGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="lg:text-4xl text-3xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 items-center text-center xl:p-16 p-6"
            >
              <div className="w-10 h-10 rounded-full bg-sky-accent/20 flex items-center justify-center">
                <img src={ICONS[item.icon]} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-md lg:text-2xl font-bold text-navy font-display">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}