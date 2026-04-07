// src/pages/Services/components/ServicesHero.jsx

import Image from "next/image";

export function ServicesHero({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 flex items-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 container pb-10 md:pb-14">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-display max-w-3xl leading-tight mb-3">
          {title}
        </h1>
        <p className="text-sky-accent text-sm md:text-base font-sans max-w-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
