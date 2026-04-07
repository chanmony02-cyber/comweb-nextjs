import {
  Activity,
  Bell,
  Lock,
  MapPin,
  Search,
  Layers,
} from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP = {
  activity: Activity,
  bell: Bell,
  lock: Lock,
  map: MapPin,
  search: Search,
  layers: Layers,
};

export function CapabilitiesSection({ capabilities }) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <SectionHeader
          label={capabilities.label}
          title={capabilities.title}
          subtitle={capabilities.subtitle}
          align="left"
          titleClassName="text-3xl md:text-4xl"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.items.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Activity;
            return (
              <div
                key={item.id}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-blue" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-md text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
