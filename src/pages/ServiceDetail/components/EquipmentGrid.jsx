// src/pages/ServiceDetail/components/EquipmentGrid.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTES } from "@/config/routes";
import checkCircleIcon from "@/assets/icons/check-circle.svg";

function CheckItem({ label }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
      <img src={checkCircleIcon} alt="" className="w-4 h-4 flex-shrink-0" />
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
            const linkTo = item.productId
              ? ROUTES.PRODUCT_DETAIL.replace(":id", item.productId)
              : "#";

            return (
              <Link
                key={item.id}
                to={linkTo}
                className="group bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col
                  hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Image with padding */}
                <div className="xl:p-10 p-6">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 xl:h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
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