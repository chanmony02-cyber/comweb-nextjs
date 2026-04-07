import Link from "next/link";

import { Button } from "@/components/ui/button";
import ScreenPreview from "./ScreenPreview";

export function SoftwareApplicationHero({ hero }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-blue to-sky-accent text-white">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-accent/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="container relative py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-sm text-primary-blue font-semibold uppercase tracking-wide">
            {hero.badge}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
            {hero.subtitle}
          </p>
          <div className="mt-6 grid gap-3 text-md text-white/90">
            {hero.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="text-md rounded-full hover:bg-primary-blue hover:border hover:border-white"
            >
              <Link href="/contact">Request a demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-md rounded-full border-white/50 text-navy hover:bg-primary-blue hover:text-white"
            >
              <a href="#app-highlights">See UI highlights</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[36px] border border-white/30 bg-white/10 p-6 backdrop-blur">
            <ScreenPreview type="dashboard" />
          </div>
          <div className="absolute -bottom-10 -left-10 hidden md:block w-44">
            <ScreenPreview type="login" className="shadow-lg" />
          </div>
          <div className="absolute -top-8 right-2 hidden md:block w-44">
            <ScreenPreview type="gateway" className="shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
