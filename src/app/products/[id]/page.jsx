import { notFound } from "next/navigation";

import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { ProductDetailContentSection } from "@/screens/ProductDetail/components/ProductDetailContentSection";
import { ProductTabs } from "@/screens/ProductDetail/components/ProductTabs";
import { RelatedProducts } from "@/screens/ProductDetail/components/RelatedProducts";
import {
  getProductById,
  getProducts,
  getRelatedProducts,
} from "@/services/products";

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product.category, product.id);

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
        relatedProducts={relatedProducts}
      />
      <GetInTouchSection />
    </>
  );
}

