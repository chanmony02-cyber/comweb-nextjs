import Link from "next/link";
import Image from "next/image";

export function NewsEventsListingSection({
  filters,
  activeFilter,
  onFilter,
  visibleItems,
  currentPage,
  totalPages,
  onPage,
}) {
  return (
    <section className="py-14 bg-background">
      <div className="container">
        <div className="flex items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilter(filter)}
              className={`px-5 py-2 rounded-full text-md font-semibold border transition-colors ${
                activeFilter === filter
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-foreground border-border hover:border-navy"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-72 lg:h-96 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold">
                  {item.type}
                </span>
                <p className="text-muted-foreground text-md">
                  Date: {item.date}
                </p>
                <h3 className="text-navy font-bold text-md font-display leading-snug">
                  Title: {item.title}
                </h3>
                <p className="text-muted-foreground text-md leading-relaxed line-clamp-3 font-sans flex-1">
                  {item.summary}
                </p>
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-1 px-4 py-2 border border-border rounded-md text-md font-semibold text-foreground hover:border-primary-blue hover:text-white hover:bg-primary-blue transition-colors w-fit mt-1 font-sans"
                >
                  Read More {"->"}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => onPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                currentPage === 1
                  ? "border-border text-muted-foreground cursor-not-allowed"
                  : "border-border text-foreground hover:border-navy"
              }`}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => onPage(page)}
                className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                  page === currentPage
                    ? "bg-navy text-white border-navy"
                    : "border-border text-foreground hover:border-navy"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => onPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                currentPage === totalPages
                  ? "border-border text-muted-foreground cursor-not-allowed"
                  : "border-border text-foreground hover:border-navy"
              }`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
