// src/pages/Industries/components/IndustryHero.jsx

import Image from "next/image";

export function IndustryHero({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-4">
          {title}
        </h1>
        <p className="text-sky-accent text-md md:text-lg leading-relaxed max-w-3xl mx-auto font-sans">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
