// src/pages/ServiceDetail/components/ServiceDetailHero.jsx

export function ServiceDetailHero({ title, subtitle, heroImage }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {heroImage ? (
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy via-navy/90 to-primary-blue/30" />
        )}
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="relative z-10 container py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display max-w-3xl leading-tight mb-4">
          {title}
        </h1>
        <p className="text-sky-accent text-sm md:text-base leading-relaxed max-w-2xl font-sans">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
