import Link from "next/link";
import Image from "next/image";
import { BackButton } from "@/components/ui/BackButton";

export function NewsDetailContentSection({ item, related }) {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <BackButton label="Back" />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold mb-4">
              {item.type}
            </span>

            <h1 className="text-navy font-bold text-2xl md:text-3xl font-display leading-snug mb-4">
              Title: {item.title}
            </h1>

            <div className="flex flex-wrap gap-8 text-muted-foreground text-md mb-4 pb-4 border-b border-border">
              <span>Date: {item.date}</span>
              <span>Location: {item.location}</span>
            </div>

            <div className="relative rounded-xl overflow-hidden mb-8 h-72 md:h-[600px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            <div className="flex flex-col gap-5 mb-10">
              {item.body.map((para, i) => (
                <p
                  key={i}
                  className="text-foreground text-md leading-relaxed font-sans"
                >
                  {para}
                </p>
              ))}
            </div>

            {item.keyFeatures && item.keyFeatures.length > 0 && (
              <div>
                <h2 className="text-navy font-bold text-xl md:text-2xl font-display mb-4">
                  Key Features
                </h2>
                <ul className="flex flex-col gap-2">
                  {item.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground text-md font-sans"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-navy font-bold text-md md:text-xl font-display mb-4 pb-3 border-b border-border">
              Related News
            </h3>

            {related.length > 0 ? (
              <div className="flex flex-col gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/news/${rel.id}`}
                    className="flex items-center gap-4 bg-card border border-border rounded-xl p-3 hover:border-primary-blue hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <p className="text-navy text-md font-semibold font-display leading-snug line-clamp-2">
                      {rel.title}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-md font-sans">
                No related articles found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
