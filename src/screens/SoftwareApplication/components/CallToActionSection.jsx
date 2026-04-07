import Link from "next/link";

import { Button } from "@/components/ui/button";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";

export function CallToActionSection({ cta }) {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-display">
            {cta.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl">
            {cta.subtitle}
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
        <div className="bg-card border border-border rounded-3xl shadow-sm p-8">
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
}
