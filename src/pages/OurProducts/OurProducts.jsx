import { useState } from "react";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import {
  ourProductsCategories,
  ourProductsContent,
} from "@/data/ourProducts/ourProducts";
import { products } from "@/data/products/products";
import { OurProductsHeroSection } from "./components/OurProductsHeroSection";
import { OurProductsCatalogSection } from "./components/OurProductsCatalogSection";

export default function OurProducts() {
  const allCategoryValue = ourProductsCategories[0]?.value ?? "all";
  const [activeCategory, setActiveCategory] = useState(allCategoryValue);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const filteredProducts =
    activeCategory === allCategoryValue
      ? products
      : products.filter((product) => product.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <main className="flex-1 bg-background">
      <OurProductsHeroSection title={ourProductsContent.heroTitle} />
      <OurProductsCatalogSection
        title={ourProductsContent.categoryTitle}
        categories={ourProductsCategories}
        activeCategory={activeCategory}
        onCategoryChange={(categoryValue) => {
          setActiveCategory(categoryValue);
          setCurrentPage(1);
          window.scrollTo({ top: 300, behavior: "smooth" });
        }}
        visibleProducts={visibleProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagination={ourProductsContent.pagination}
      />
      <GetInTouchSection />
    </main>
  );
}
