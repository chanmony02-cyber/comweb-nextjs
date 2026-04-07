"use client";

import { useState } from "react";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { ElectricalEquipmentHeroSection } from "./components/ElectricalEquipmentHeroSection";
import { ElectricalEquipmentCatalogSection } from "./components/ElectricalEquipmentCatalogSection";
import { getProductsByCategory } from "@/services/products";
import {
  getElectricalEquipmentCategories,
  getElectricalEquipmentContent,
} from "@/services/electricalEquipment";

export default function ElectricalEquipment() {
  const electricalEquipmentCategories = getElectricalEquipmentCategories();
  const electricalEquipmentContent = getElectricalEquipmentContent();
  const allCategoryValue = electricalEquipmentCategories[0]?.value ?? "all";
  const [activeCategory, setActiveCategory] = useState(allCategoryValue);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const filteredProducts = getProductsByCategory(activeCategory);

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
      <ElectricalEquipmentHeroSection
        title={electricalEquipmentContent.heroTitle}
      />
      <ElectricalEquipmentCatalogSection
        title={electricalEquipmentContent.categoryTitle}
        categories={electricalEquipmentCategories}
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
        pagination={electricalEquipmentContent.pagination}
      />
      <GetInTouchSection />
    </main>
  );
}
