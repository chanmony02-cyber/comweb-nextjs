import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FaqSection({
  title = "FAQs",
  items,
  bgClassName = "bg-background",
  sectionClassName = "py-16 md:py-20",
  containerClassName = "container",
  titleClassName = "text-3xl font-bold text-navy font-display text-center mb-10",
}) {
  return (
    <section className={`${sectionClassName} ${bgClassName}`}>
      <div className={containerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
