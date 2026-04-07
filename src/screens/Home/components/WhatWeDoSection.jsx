import { getHomeServices } from "@/services/homeServices";

export default function WhatWeDoSection() {
  const services = getHomeServices();

  return (
    <section className="py-20 bg-background">
      <div className="container text-center">
        <p className="text-primary-blue text-sm font-semibold tracking-widest uppercase mb-2 font-display">
          OUR SERVICES
        </p>
        <h2 className="text-foreground font-bold text-4xl md:text-5xl mb-4 font-display">
          WHAT WE DO?
        </h2>
        <p className="text-muted-foreground text-md max-w-2xl mx-auto mb-14 leading-relaxed font-sans">
          We deliver comprehensive solutions for electrical infrastructure, from
          program console to reliable maintenance and thorough inspections.
        </p>
        {/* UPDATED: refined grid for tablet (iPad) responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group h-full px-12 py-20 rounded-[20px] border border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center text-primary-blue flex flex-col items-center justify-start"
            >
              <div className="flex justify-center mb-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-accent/50 text-primary-blue [&_svg]:h-8 [&_svg]:w-8">
                  {svc.icon}
                </div>
              </div>
              <h3 className="text-foreground font-bold text-2xl mb-3 font-display">
                {svc.title}
              </h3>
              <p className="text-muted-foreground text-md leading-relaxed font-sans">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
