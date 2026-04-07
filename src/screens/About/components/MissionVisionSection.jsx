// src/pages/About/components/MissionVisionSection.jsx

import Image from "next/image";
import missionBoltIcon from "@/assets/icons/mission-bolt.svg";
import visionEyeIcon from "@/assets/icons/vision-eye.svg";
import { assetSrc } from "@/lib/assetSrc";

export function MissionVisionSection({
  eyebrow,
  title,
  subtitle,
  missionTitle,
  missionText,
  missionBullets,
  visionTitle,
  visionText,
  visionBullets,
}) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
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

        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className=" h-full bg-card border border-border rounded-2xl p-8 xl:p-20 flex flex-col gap-5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-blue/30 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-blue/10 flex items-center justify-center">
              <Image
                src={assetSrc(missionBoltIcon)}
                alt=""
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-navy font-display">
              {missionTitle}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed font-sans">
              {missionText}
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {missionBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base text-muted-foreground font-sans"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="h-full bg-card border border-border rounded-2xl p-8 xl:p-20 flex flex-col gap-5 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-blue/30 transition-all duration-300">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-blue/10 flex items-center justify-center">
              <Image
                src={assetSrc(visionEyeIcon)}
                alt=""
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-navy font-display">
              {visionTitle}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed font-sans">
              {visionText}
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {visionBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base text-muted-foreground font-sans"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
