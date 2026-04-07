import { SectionHeader } from "@/components/ui/SectionHeader";

export function ElectricalEquipmentHeroSection({ title }) {
  return (
    <section className="bg-navy">
      <div className="container">
        <div className="min-h-[200px] sm:h-[300px] py-16 md:py-20 flex items-center justify-center">
          <SectionHeader
            title={title}
            align="center"
            as="h1"
            titleClassName="text-white text-3xl sm:text-5xl lg:text-6xl"
          />
        </div>
      </div>
    </section>
  );
}
