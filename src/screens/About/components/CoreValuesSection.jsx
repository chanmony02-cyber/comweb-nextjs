// src/pages/About/components/CoreValuesSection.jsx

import Image from "next/image";
import coreQualityIcon from "@/assets/icons/core-quality.svg";
import coreSafetyIcon from "@/assets/icons/core-safety.svg";
import coreAccuracyIcon from "@/assets/icons/core-accuracy.svg";
import coreRelianceIcon from "@/assets/icons/core-reliance.svg";
import coreInnovationIcon from "@/assets/icons/core-innovation.svg";
import coreIntegrityIcon from "@/assets/icons/core-integrity.svg";
import { assetSrc } from "@/lib/assetSrc";

const ICONS = {
  quality: coreQualityIcon,
  safety: coreSafetyIcon,
  accuracy: coreAccuracyIcon,
  reliance: coreRelianceIcon,
  innovation: coreInnovationIcon,
  integrity: coreIntegrityIcon,
};

export function CoreValuesSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-blue text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mt-2 mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl px-7 py-16 flex-col gap-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-blue/30 transition-all duration-300 flex justify-center items-center"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-accent/20 flex items-center justify-center flex-shrink-0">
                {ICONS[item.icon] ? (
                  <Image
                    src={assetSrc(ICONS[item.icon])}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary-blue" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-navy font-display">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-md leading-relaxed font-sans text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
