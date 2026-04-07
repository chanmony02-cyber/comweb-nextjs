// src/pages/About/components/TeamSection.jsx

import { Linkedin } from "lucide-react";
import Image from "next/image";
import mailIcon from "@/assets/icons/mail.svg";
import { assetSrc } from "@/lib/assetSrc";

export function TeamSection({ eyebrow, title, subtitle, members }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold mb-4 font-sans">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy font-display mb-3">
            {title}
          </h2>
          <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="relative w-52 h-52 rounded-full border-4 border-sky-accent/60 p-1 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-primary-blue/60">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  sizes="208px"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-navy font-display">
                  {member.name}
                </h3>
                <p className="text-md text-muted-foreground font-sans">
                  {member.role}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 rounded-full bg-sky-accent/40 flex items-center justify-center hover:bg-primary-blue/20 transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5 text-primary-blue" />
                </a>
                <a
                  href={member.email}
                  className="w-10 h-10 rounded-full bg-sky-accent/40 flex items-center justify-center hover:bg-primary-blue/20 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Image
                    src={assetSrc(mailIcon)}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
