// src/pages/About/components/CompanyStorySection.jsx

import Link from "next/link";
import Image from "next/image";
import checkmarkIcon from "@/assets/icons/checkmark.svg";
import { assetSrc } from "@/lib/assetSrc";

function CheckIcon() {
  return (
    <Image
      src={assetSrc(checkmarkIcon)}
      alt=""
      width={16}
      height={16}
      className="w-4 h-4 flex-shrink-0 mt-0.5"
    />
  );
}

export function CompanyStorySection({
  label,
  title,
  stat,
  paragraphs,
  checkItems,
  cta,
  images = {},
}) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* â”€â”€ Left â€” image collage with stat badge â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="relative">
            {/* Stat badge â€” top-left overlap */}
            <div className="absolute -top-4 -left-4 z-10 bg-primary-blue text-white rounded-xl px-5 py-4 shadow-lg text-center min-w-[90px]">
              <p className="text-2xl xl:text-4xl font-bold font-display leading-none">
                {stat.value}
              </p>
              <p className="text-xs font-sans mt-1 leading-tight opacity-90">
                {stat.label}
              </p>
            </div>

            {/* Two stacked images mimicking the collage in the mockup */}
            <div className="grid grid-cols-2 gap-3 pt-6 pl-6">
              <div className="relative rounded-xl overflow-hidden shadow-md col-span-1 row-span-2 min-h-[280px]">
                <Image
                  src={images.left}
                  alt="Electrical work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md h-40 md:h-60">
                <Image
                  src={images.topRight}
                  alt="Infrastructure project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md h-40 md:h-60">
                <Image
                  src={images.bottomRight}
                  alt="Engineering team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* â”€â”€ Right â€” text content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div>
            {/* Label pill */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-accent/30 text-primary-blue text-md font-semibold mb-4 font-sans">
              {label}
            </span>

            {/* Title â€” supports \n line breaks */}
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-navy font-display mb-5 leading-tight whitespace-pre-line">
              {title.split("Electrical Infrastructure").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="text-primary-blue">
                      Electrical Infrastructure
                    </span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-3 mb-6">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-muted-foreground text-md leading-relaxed font-sans"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Check items â€” 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {checkItems.map((item) => (
                <div key={item.id} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-md text-foreground font-sans">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={cta.href}
              className="inline-flex items-center gap-1 px-6 py-2.5 bg-primary-blue text-white text-lg font-semibold rounded-md hover:bg-white  hover:text-primary-blue hover:border hover:border-primary-blue transition-colors font-display"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
