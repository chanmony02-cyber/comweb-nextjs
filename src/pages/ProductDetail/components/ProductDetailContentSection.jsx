import { BackButton } from "@/components/ui/BackButton";
import { ProductImageGallery } from "./ProductImageGallery";

export function ProductDetailContentSection({ product }) {
  return (
    <section className="container py-10">
      <BackButton />

      <h1 className="text-3xl md:text-5xl font-bold text-navy text-center mt-6 mb-12 font-display">
        Product Detail
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <ProductImageGallery images={product.images} name={product.name} />

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-display">
            {product.name}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            {product.description}
          </p>

          {product.features?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-navy font-display mb-4">
                Features
              </h3>
              <ul className="flex flex-col gap-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground text-md font-sans"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
