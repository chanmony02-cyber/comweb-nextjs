// src/pages/About/components/WhyPartnerSection.jsx

import partnerCertifiedIcon from "@/assets/icons/partner-certified.svg";
import partnerOnTimeIcon from "@/assets/icons/partner-ontime.svg";
import partnerSupportIcon from "@/assets/icons/partner-support.svg";
import partnerTechnologyIcon from "@/assets/icons/partner-technology.svg";
import partnerCustomIcon from "@/assets/icons/partner-custom.svg";
import partnerQualityIcon from "@/assets/icons/partner-quality.svg";
import partnerHeadsetIcon from "@/assets/icons/partner-headset.svg";

const PARTNER_ICONS = {
  certified: partnerCertifiedIcon,
  onTime: partnerOnTimeIcon,
  support: partnerSupportIcon,
  technology: partnerTechnologyIcon,
  custom: partnerCustomIcon,
  quality: partnerQualityIcon,
  headset: partnerHeadsetIcon,
};

export function WhyPartnerSection({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  items,
  helpCard,
}) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-blue text-white text-md font-semibold mb-4 font-sans">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mb-4">
              {title}{" "}
              {highlight ? (
                <span className="text-primary-blue">{highlight}</span>
              ) : null}
            </h2>
            <p className="text-muted-foreground text-md md:text-lg max-w-2xl font-sans">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src={PARTNER_ICONS[item.icon] ?? PARTNER_ICONS.quality}
                      alt=""
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-navy font-display mb-1">
                      {item.title}
                    </h3>
                    <p className="text-md text-muted-foreground leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pb-10">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={image}
                alt={title}
                className="w-full h-80 md:h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-card border border-border rounded-2xl shadow-lg p-5 max-w-[260px]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  <img src={PARTNER_ICONS.headset} alt="" className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-md font-semibold text-navy font-display">
                    {helpCard.title}
                  </p>
                  <p className="text-md font-semibold text-primary-blue">
                    {helpCard.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-md text-muted-foreground mt-3 font-sans leading-relaxed">
                {helpCard.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
