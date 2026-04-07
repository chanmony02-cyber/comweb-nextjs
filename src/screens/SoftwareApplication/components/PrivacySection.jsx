import { ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";

export function PrivacySection({ privacy }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 items-center">
        <div>
          <SectionHeader
            label={privacy.label}
            title={privacy.title}
            subtitle={privacy.subtitle}
            align="left"
            titleClassName="text-3xl md:text-4xl"
          />
          <div className="mt-6 grid gap-3 text-md text-muted-foreground">
            {privacy.points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-blue" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-md text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary-blue" />
            <span>Masking is enabled by default for every account.</span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary-blue" />
            </div>
            <div>
              <p className="text-md font-semibold text-navy">
                Privacy-first workflow
              </p>
              <p className="text-sm text-muted-foreground">
                See the right data, not all data.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {privacy.steps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl bg-section-alt border border-white px-4 py-3"
              >
                <p className="text-md font-semibold text-navy">{step.title}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white border border-border px-4 py-3 text-sm text-muted-foreground">
            Sensitive fields such as tenant IDs, device IDs, and IP addresses
            remain hidden unless explicitly authorized.
          </div>
        </div>
      </div>
    </section>
  );
}
