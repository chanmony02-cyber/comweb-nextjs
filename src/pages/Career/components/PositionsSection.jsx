// src/pages/Career/components/PositionsSection.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";

function MapPinIcon() {
  return (
    <svg
      className="w-4 h-4 text-muted-foreground flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-muted-foreground group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export function PositionsSection({ departments, positions }) {
  const allValue = departments[0]?.value ?? "all";
  const [active, setActive] = useState(allValue);

  const filtered =
    active === allValue
      ? positions
      : positions.filter((p) => p.department === active);

  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display text-center mb-8">
          Our Positions
        </h2>

        {/* Filter tabs */}
        <div className="flex items-center md:justify-center justify-start gap-2 flex-wrap mb-10">
          {departments.map((dept) => (
            <button
              key={dept.id}
              type="button"
              onClick={() => setActive(dept.value)}
              className={`px-5 py-2 rounded-full text-md font-semibold border transition-colors ${
                active === dept.value
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-foreground border-border hover:border-navy"
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Job rows */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {filtered.map((position) => (
            <Link
              key={position.id}
              to={ROUTES.CAREER_DETAIL.replace(":id", position.id)}
              className="group bg-card border border-border rounded-2xl px-6 py-5 flex items-center justify-between gap-4 shadow-sm hover:border-primary-blue hover:shadow-md transition-all duration-300"
            >
              {/* Left — title + meta */}
              <div className="flex flex-col gap-2">
                <h3 className="text-md md:text-lg font-bold text-navy font-display group-hover:text-primary-blue transition-colors">
                  {position.title}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-1 text-md text-muted-foreground font-sans">
                    <MapPinIcon />
                    {position.location}
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold">
                    {position.jobType}
                  </span>
                </div>
              </div>

              {/* Right — arrow */}
              <ArrowIcon />
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground text-md py-10 font-sans">
              No positions available in this department at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
