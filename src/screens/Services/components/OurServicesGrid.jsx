// src/pages/Services/components/OurServicesGrid.jsx

import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function OurServicesGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="text-navy text-3xl md:text-4xl lg:text-5xl"
          subtitleClassName="text-lg md:text-xl mb-5"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-primary-blue transition-all duration-300 flex flex-col"
            >
              {/* Image with padding */}
              <div className="p-10">
                <div className="relative overflow-hidden rounded-xl h-48 lg:h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-5 pb-6 flex flex-col gap-3 flex-1 text-center">
                <p className="text-2xl font-bold text-primary-blue group-hover:text-white transition-colors duration-300 font-display">
                  {service.title}
                </p>
                <p className="text-md text-muted-foreground group-hover:text-white/80 leading-relaxed font-sans transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
