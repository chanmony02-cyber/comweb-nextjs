// src/pages/Industries/components/IndustryCTA.jsx

import Link from "next/link";

export function IndustryCTA({ title, subtitle }) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <div className="max-w-3xl mx-auto border border-primary-blue/30 rounded-2xl bg-card px-10 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-display mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-md leading-relaxed font-sans mb-8">
            {subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-6 py-2.5 border border-primary-blue text-primary-blue text-lg font-semibold rounded-md hover:bg-primary-blue hover:text-white transition-colors font-sans"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
