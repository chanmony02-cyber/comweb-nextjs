// src/pages/About/components/AboutHero.jsx

import heroImage from "@/assets/images/industries/distribution-grid/distribution-grid-hero.jpg";

export function AboutHero({ title, subtitle }) {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-display mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-white/85 text-md md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
