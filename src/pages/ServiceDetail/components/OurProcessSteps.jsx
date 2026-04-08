// src/pages/ServiceDetail/components/OurProcessSteps.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";
import searchIcon from "@/assets/icons/search-white.svg";
import clockIcon from "@/assets/icons/clock-white.svg";
import pencilIcon from "@/assets/icons/pencil-white.svg";
import sendIcon from "@/assets/icons/send-white.svg";

const ICONS = {
  search: searchIcon,
  clock: clockIcon,
  pencil: pencilIcon,
  send: sendIcon,
};

export function OurProcessSteps({ title, subtitle, steps }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="lg:text-4xl text-3xl"
          subtitleClassName="lg:text-lg text-md"
        />

        <div
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
          style={{
            gridTemplateColumns:
              steps.length > 2
                ? "repeat(auto-fit, minmax(min(100%, 220px), 1fr))"
                : "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center gap-3 rounded-2xl bg-card p-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-primary-blue flex items-center justify-center shadow-md">
                <img src={ICONS[step.icon]} alt="" className="w-7 h-7" />
              </div>
              <p className="text-xs font-semibold text-primary-blue uppercase tracking-widest font-sans">
                {step.step}
              </p>
              <h3 className="text-base md:text-lg font-bold text-navy font-display">
                {step.title}
              </h3>
              <p className="text-sm md:text-md text-muted-foreground leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
