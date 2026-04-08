// src/pages/Industries/components/RecentProjectsList.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function RecentProjectsList({ label, title, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          label={label}
          title={title}
          align="center"
          labelClassName="text-lg tracking-widest"
          titleClassName="text-3xl md:text-4xl text-navy"
        />

        <div className="mt-12 flex flex-col gap-24">
          {items.map((project) => (
            <div
              key={project.id}
              className="
                group relative grid grid-cols-1 sm:grid-cols-5
                rounded-2xl overflow-hidden shadow-sm
                transition-transform duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              {/* Bottom running line — left to right on hover */}
              <span
                className="
                absolute bottom-0 left-0 h-[3px] w-0 bg-primary-blue
                transition-all duration-500 ease-in-out
                group-hover:w-full z-10
              "
              />

              {/* Left — image */}
              <div className="sm:col-span-2 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right — text */}
              <div className="sm:col-span-3 bg-section-alt flex flex-col justify-center gap-4 p-8 md:p-10">
                <h3 className="text-lg md:text-2xl font-bold text-navy font-display">
                  {project.title}
                </h3>
                <p className="text-md text-muted-foreground leading-relaxed font-sans">
                  {project.description}
                </p>
                <Link
                  to={project.href}
                  className="inline-flex items-center gap-1 px-5 py-3 bg-navy text-white text-lg font-semibold rounded-md hover:bg-primary-blue transition-colors w-fit font-sans"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
