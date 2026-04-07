export function AllProjectsHeroSection({ title }) {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="container flex justify-center items-center lg:h-40">
        <h1 className="text-white font-bold text-4xl md:text-6xl font-display">
          {title}
        </h1>
      </div>
    </section>
  );
}
