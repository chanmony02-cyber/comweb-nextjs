import { SectionHeader } from "@/components/ui/SectionHeader";
import ScreenPreview from "./ScreenPreview";

export function AppHighlightsSection({ screens }) {
  return (
    <section
      id="app-highlights"
      className="py-16 md:py-24 bg-background scroll-mt-24"
    >
      <div className="container">
        <SectionHeader
          label={screens.label}
          title={screens.title}
          subtitle={screens.subtitle}
          align="left"
          titleClassName="text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {screens.items.map((screen) => (
            <div
              key={screen.id}
              className="group bg-card border border-border rounded-3xl p-6 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-blue/30"
            >
              <div className="rounded-2xl bg-section-alt/70 p-4 border border-white transition-transform duration-300 group-hover:scale-[1.02]">
                <ScreenPreview type={screen.id} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy font-display transition-colors duration-300 group-hover:text-primary-blue">
                  {screen.title}
                </h3>
                <p className="text-md text-muted-foreground mt-2">
                  {screen.description}
                </p>
              </div>
              <div className="grid gap-2 text-md text-muted-foreground">
                {screen.points.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-blue" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-section-alt border border-border px-6 py-4 text-md text-muted-foreground">
          All identifiers shown are placeholders. Sensitive data is masked in
          production views by design.
        </div>
      </div>
    </section>
  );
}
