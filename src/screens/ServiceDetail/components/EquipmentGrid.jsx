// src/pages/ServiceDetail/components/EquipmentGrid.jsx

import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import checkCircleIcon from "@/assets/icons/check-circle.svg";
import { assetSrc } from "@/lib/assetSrc";

function CheckItem({ label }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
      <Image
        src={assetSrc(checkCircleIcon)}
        alt=""
        width={16}
        height={16}
        className="w-4 h-4 flex-shrink-0"
      />
      {label}
    </li>
  );
}

export function EquipmentGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="text-3xl md:text-4xl"
          subtitleClassName="max-w-xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item) => {
            const linkTo = item.productId ? `/products/${item.productId}` : "#";

            return (
              <Link
                key={item.id}
                href={linkTo}
                className="group bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col
                  hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Image with padding */}
                <div className="xl:p-10 p-6">
                  <div className="relative overflow-hidden rounded-xl h-52 xl:h-[350px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="px-5 pb-6 flex flex-col gap-3">
                  <p className="text-md lg:text-xl font-bold text-navy font-display">
                    {item.title}
                  </p>
                  <p className="text-md lg:text-lg text-muted-foreground leading-relaxed font-sans">
                    {item.description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-1">
                    {item.bullets.map((bullet) => (
                      <CheckItem
                        key={bullet}
                        label={bullet}
                        labelClassName="text-md"
                      />
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
