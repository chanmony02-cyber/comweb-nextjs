import Image from "next/image";

const formatSpecLabel = (label) =>
  label
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

export function ProductCard({ image, name, category, description, specs }) {
  const specEntries = specs ? Object.entries(specs).slice(0, 2) : [];

  return (
    <article className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm w-full max-w-sm min-h-96 flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-white relative overflow-hidden">
        {category ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-sky-accent px-3 py-1 text-xs font-semibold text-navy">
            {category}
          </span>
        ) : null}
        <Image
          src={image}
          alt={name}
          fill
          className="z-0 object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1280px) 100vw, 320px"
        />
      </div>
      <div className="bg-navy text-white px-5 py-5 xl:py-7">
        <h3 className="text-md xl:text-lg font-semibold">{name}</h3>
        {/* {description ? (
          <p className="mt-2 text-sm text-white/80">{description}</p>
        ) : null}
        {specEntries.length ? (
          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            {specEntries.map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <dt className="text-[10px] uppercase tracking-wide text-white/60">
                  {formatSpecLabel(label)}
                </dt>
                <dd className="text-xs text-white/90">{value}</dd>
              </div>
            ))}
          </dl>
        ) : null} */}
      </div>
    </article>
  );
}
