// src/pages/Industries/components/OurSolutionsGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

export function OurSolutionsGrid({ label, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          align="center"
          labelClassName="text-lg tracking-widest"
          titleClassName="text-3xl md:text-4xl text-navy"
          subtitleClassName="text-base max-w-2xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((solution) => (
            <div
              key={solution.id}
              className="bg-card rounded-2xl overflow-hidden shadow-sm flex flex-col"
            >
              {/* Image — top portion of the card */}
              <div className="overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-64 md:h-72 xl:h-[700px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title — white area below the image */}
              <div className="px-5 py-4">
                <p className="text-base font-bold text-navy font-display">
                  {solution.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
