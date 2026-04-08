import { industrySolutions } from "@/data/industries/industries";

export default function IndustriesSolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-foreground font-bold text-3xl lg:text-4xl md:text-[2.6rem] tracking-wide mb-3 font-display">
            INDUSTRIES SOLUTION
          </h2>
          <p className="text-muted-foreground text-md lg:text-lg max-w-2xl mx-auto font-sans">
            Tailored end-to-end infrastructure solutions for different industry
            needs.
          </p>
        </div>
        {/* UPDATED: spacing tuned for better tablet (iPad) layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {industrySolutions.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                item.imageRight ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-16 xl:gap-24 items-center`}
            >
              {/* Image */}
              <div className="w-full h-[560px] md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-blue flex-shrink-0" />
                  <h3 className="text-foreground font-bold text-2xl md:text-3xl font-display">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5 max-w-md font-sans">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-lg text-muted-foreground font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
