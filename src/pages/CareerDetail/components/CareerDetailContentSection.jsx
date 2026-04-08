import { BackButton } from "@/components/ui/BackButton";

function SectionDivider({ title }) {
  return (
    <div className="mb-5">
      <h2 className="text-lg md:text-xl font-bold text-navy font-display mb-2">
        {title}
      </h2>
      <hr className="border-border" />
    </div>
  );
}

export function CareerDetailContentSection({ position }) {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <BackButton />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy font-display">
              {position.title}
            </h1>

            <div>
              <SectionDivider title="About the Role" />
              <p className="text-md md:text-lg text-muted-foreground leading-relaxed font-sans">
                {position.aboutRole}
              </p>
            </div>

            <div>
              <SectionDivider title="Key Responsibilities" />
              <ul className="flex flex-col gap-2">
                {position.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-md md:text-lg text-muted-foreground font-sans"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionDivider title="Requirements" />
              <ul className="flex flex-col gap-2">
                {position.requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-md md:text-lg text-muted-foreground font-sans"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4 lg:sticky lg:top-28">
            <div className="border border-border rounded-2xl p-6 flex flex-col divide-y divide-border">
              <div className="pb-4">
                <p className="text-md text-muted-foreground font-sans mb-1">
                  Location
                </p>
                <p className="text-md md:text-lg font-bold text-navy font-display">
                  {position.detailLocation}
                </p>
              </div>

              <div className="py-4">
                <p className="text-md text-muted-foreground font-sans mb-1">
                  Job Type
                </p>
                <p className="text-md md:text-lg font-bold text-navy font-display">
                  {position.jobType}
                </p>
              </div>

              <div className="py-4">
                <p className="text-md text-muted-foreground font-sans mb-1">
                  Salary Range
                </p>
                <p className="text-md md:text-lg font-bold text-navy font-display">
                  {position.salary}
                </p>
              </div>

              <div className="pt-4">
                <p className="text-md text-muted-foreground font-sans mb-1">
                  Experiences
                </p>
                <p className="text-md md:text-lg font-bold text-primary-blue font-display">
                  {position.experience}
                </p>
              </div>
            </div>

            <a
              href={`mailto:info@company.com?subject=Application for ${position.title}`}
              className="w-full flex items-center justify-center py-4 bg-navy text-white rounded-xl text-md md:text-lg font-bold font-display hover:bg-primary-blue transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
