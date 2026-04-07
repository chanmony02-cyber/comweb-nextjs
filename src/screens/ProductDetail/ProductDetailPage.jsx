import { notFound } from "next/navigation";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductDetailContentSection } from "./components/ProductDetailContentSection";
import { ProductTabs } from "./components/ProductTabs";
import { getProductById, getRelatedProducts } from "@/services/products";

export default function ProductDetailPage({ params }) {
  const product = getProductById(params?.id);

  if (!product) notFound();

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
        relatedProducts={getRelatedProducts(product.category, product.id)}
      />
      <GetInTouchSection />
    </>
  );
}
