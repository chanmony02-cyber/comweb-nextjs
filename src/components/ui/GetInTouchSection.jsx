import { GetInTouchForm } from "@/components/ui/GetInTouchForm";

export function GetInTouchSection({
  bgClassName = "bg-section-alt",
  sectionClassName = "py-16",
  cardClassName = "max-w-md mx-auto bg-card border border-border rounded-2xl shadow-sm p-8",
}) {
  return (
    <section className={`${sectionClassName} ${bgClassName}`}>
      <div className="container">
        <div className={cardClassName}>
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
}
