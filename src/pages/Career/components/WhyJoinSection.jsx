// src/pages/Career/components/WhyJoinSection.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";
import growthBudgetIcon from "@/assets/icons/growth-budget.svg";
import healthIcon from "@/assets/icons/health.svg";
import knowledgeIcon from "@/assets/icons/knowledge.svg";

const ICONS = {
  "growth-budget": growthBudgetIcon,
  health: healthIcon,
  knowledge: knowledgeIcon,
};

export function WhyJoinSection({ benefits }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title="Why Join Our Company?"
          subtitle="We take care of our people so they can take care of the mission."
          align="center"
          titleClassName="text-3xl md:text-4xl lg:text-5xl text-navy"
          subtitleClassName="text-md md:text-lg"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-card border border-border rounded-2xl p-8 xl:p-10 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-sky-accent/30 flex items-center justify-center">
                <img src={ICONS[benefit.icon]} alt="" className="w-7 h-7" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-navy font-display">
                {benefit.title}
              </h3>
              <p className="text-md text-muted-foreground leading-relaxed font-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
