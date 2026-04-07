// src/pages/ServiceDetail/components/CoreExpertiseGrid.jsx

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import costOptimizationIcon from "@/assets/icons/clock.svg";
import consultingIcon from "@/assets/icons/consulting.svg";
import designIcon from "@/assets/icons/design.svg";
import { assetSrc } from "@/lib/assetSrc";

// Icon map â€” resolves string keys from data layer into SVG elements
const ICONS = {
  "cost-optimization": costOptimizationIcon,
  consulting: consultingIcon,
  design: designIcon,
};

export function CoreExpertiseGrid({ title, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title={title}
          align="center"
          titleClassName="lg:text-4xl text-3xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 items-center text-center xl:p-16 p-6"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full border border-primary-blue/30 bg-sky-accent/10 flex items-center justify-center">
                <Image
                  src={assetSrc(ICONS[item.icon])}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-md lg:text-2xl font-bold text-navy font-display">
                {item.title}
              </h3>
              <p className="text-md text-muted-foreground leading-relaxed font-sans ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
