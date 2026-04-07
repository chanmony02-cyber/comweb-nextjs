// src/pages/Industries/components/ProblemSection.jsx

import Image from "next/image";

export function ProblemSection({ title, paragraphs, image }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy font-display mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-relaxed font-sans"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-72 md:h-80 xl:h-[600px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
