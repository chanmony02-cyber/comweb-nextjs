// src/pages/Contact/components/OurLocationSection.jsx

import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import locationPinIcon from "@/assets/icons/location-pin.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import globeIcon from "@/assets/icons/globe.svg";
import emailIcon from "@/assets/icons/email.svg";
import clockIcon from "@/assets/icons/clock.svg";
import { assetSrc } from "@/lib/assetSrc";
import { getContactData } from "@/services/contact";

export function OurLocationSection() {
  const contactData = getContactData();
  const { location, info } = contactData;

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center font-display mb-10 md:mb-16">
          {location.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-40">
          {/* Left â€” address block + contact + business hours */}
          <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between">
            {/* TOP GROUP â€” address + contact details */}
            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={assetSrc(locationPinIcon)}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <h3 className="text-2xl font-bold text-navy font-display">
                    {location.addressTitle}
                  </h3>
                </div>
                <p className="text-muted-foreground text-md leading-relaxed pl-7">
                  {siteConfig.address}
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-3 pl-1">
                {/* Phone */}
                <div className="flex items-center gap-3 text-muted-foreground text-md">
                  <Image
                    src={assetSrc(phoneIcon)}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-primary-blue transition-colors w-fit"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3 text-muted-foreground text-md">
                  <Image
                    src={assetSrc(globeIcon)}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <a
                    href={info.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-blue transition-colors w-fit"
                  >
                    {info.websiteLabel}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-muted-foreground text-md">
                  <Image
                    src={assetSrc(emailIcon)}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary-blue transition-colors w-fit"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM â€” Business Hours */}
            <div className="bg-sky-accent/20 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src={assetSrc(clockIcon)}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 flex-shrink-0"
                />
                <h4 className="text-xl font-bold text-navy font-display">
                  {location.businessHoursTitle}
                </h4>
              </div>
              <ul className="space-y-1.5">
                {location.businessHours.map((item) => (
                  <li
                    key={item.day}
                    className="flex flex-wrap items-center gap-x-2 text-md text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">
                      {item.day}
                    </span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right â€” Google Map */}
          <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Our Location"
              src={location.mapEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0, display: "block", minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
