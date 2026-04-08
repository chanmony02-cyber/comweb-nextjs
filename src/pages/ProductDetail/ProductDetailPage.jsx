import { useParams } from "react-router-dom";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductDetailContentSection } from "./components/ProductDetailContentSection";
import { ProductTabs } from "./components/ProductTabs";
import { products } from "@/data/products/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <>
      <ProductDetailContentSection product={product} />
      <ProductTabs
        description={product.description}
        features={product.features}
        scopeOfApplication={product.scopeOfApplication}
        specs={product.specs}
      />
      <RelatedProducts
        currentId={product.id}
        category={product.category}
        scrollToTop={scrollToTop}
      />
      <GetInTouchSection />
    </>
  );
}
