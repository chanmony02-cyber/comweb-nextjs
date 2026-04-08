// src/pages/ServiceDetail/components/ServiceOverview.jsx

export function ServiceOverview({
  title,
  paragraphs,
  image,
  bgSection = false,
  bgAlt,
}) {
  const isAlt = bgAlt ?? bgSection;

  return (
    <section
      className={`py-16 md:py-20 ${isAlt ? "bg-section-alt" : "bg-background"}`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-navy font-display mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed font-sans"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-80 lg:h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
