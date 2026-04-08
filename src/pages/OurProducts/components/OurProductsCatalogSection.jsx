import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROUTES } from "@/config/routes";

export function OurProductsCatalogSection({
  title,
  categories,
  activeCategory,
  onCategoryChange,
  visibleProducts,
  currentPage,
  totalPages,
  onPageChange,
  pagination,
}) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col gap-6 mb-10">
          <SectionHeader
            title={title}
            align="left"
            titleClassName="text-2xl sm:text-3xl lg:text-4xl"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.value)}
                className={`px-4 py-1.5 rounded-full text-md md:text-lg font-semibold border transition-colors ${
                  activeCategory === category.value
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-foreground border-border hover:border-navy"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              to={ROUTES.PRODUCT_DETAIL.replace(":id", product.id)}
              className="block w-full"
            >
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                category={product.category}
              />
            </Link>
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded border text-foreground transition-colors ${
                currentPage === 1
                  ? "border-border/60 text-foreground/40"
                  : "border-border hover:border-navy"
              }`}
            >
              {pagination.previousLabel}
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => onPageChange(page)}
                  className={`w-10 h-10 rounded border text-md font-semibold transition-colors ${
                    page === currentPage
                      ? "bg-navy text-white border-navy"
                      : "border-border text-foreground hover:border-navy"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
            <button
              type="button"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded border text-foreground transition-colors ${
                currentPage === totalPages
                  ? "border-border/60 text-foreground/40"
                  : "border-border hover:border-navy"
              }`}
            >
              {pagination.nextLabel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
