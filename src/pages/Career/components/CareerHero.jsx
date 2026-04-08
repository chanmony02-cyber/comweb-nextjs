// src/pages/Career/components/CareerHero.jsx

export function CareerHero({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative h-56 md:h-72 lg:h-80 flex items-center justify-center overflow-hidden">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
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
