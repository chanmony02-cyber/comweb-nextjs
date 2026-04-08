import { BackButton } from "@/components/ui/BackButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServiceDetailHeroSection({
  title,
  subtitle,
  heroImage,
  imageAlt,
  backLabel = "Back",
  titleClassName = "text-3xl md:text-4xl lg:text-5xl",
}) {
  return (
    <>
      <section className="pt-10 pb-6 bg-background">
        <div className="container">
          <BackButton label={backLabel} />
          <div className="mt-6">
            <SectionHeader
              title={title}
              subtitle={subtitle}
              align="center"
              titleClassName={titleClassName}
            />
          </div>
        </div>
      </section>

      <div className="container pb-10 flex justify-center">
        <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-sm">
          {heroImage ? (
            <img
              src={heroImage}
              alt={imageAlt || title}
              className="w-full h-60 md:h-[500px] lg:h-[700px] object-cover"
            />
          ) : (
            <div className="w-full h-60 md:h-[500px] lg:h-[700px] bg-gradient-to-br from-navy via-navy/90 to-primary-blue/30" />
          )}
        </div>
      </div>
    </>
  );
}
