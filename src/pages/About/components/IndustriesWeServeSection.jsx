// src/pages/About/components/IndustriesWeServeSection.jsx

import { Link } from "react-router-dom";
import distributionIcon from "@/assets/icons/distribution.svg";
import cityIcon from "@/assets/icons/city.svg";
import agricultureIcon from "@/assets/icons/agriculture.svg";

const INDUSTRY_ICONS = {
  distribution: distributionIcon,
  city: cityIcon,
  agriculture: agricultureIcon,
};

export function IndustriesWeServeSection({ eyebrow, title, subtitle, items }) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold mb-4 font-sans">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="group relative rounded-2xl overflow-hidden shadow-md border border-white/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-primary-blue/90 flex items-center justify-center shadow-lg">
                    <img
                      src={INDUSTRY_ICONS[item.icon]}
                      alt=""
                      className="w-5 h-5"
                    />
                  </span>
                  <h3 className="text-lg font-semibold font-display">
                    {item.title}
                  </h3>
                </div>
                <p className="text-md text-white/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
