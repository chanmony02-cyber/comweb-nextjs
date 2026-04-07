"use client";

import { useState } from "react";
import { NewsEventsHeroSection } from "./components/NewsEventsHeroSection";
import { NewsEventsListingSection } from "./components/NewsEventsListingSection";
import { getNewsEventsByType } from "@/services/news";

const PAGE_SIZE = 6;
const FILTERS = ["All", "News", "Events"];

export default function NewsEventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = getNewsEventsByType(activeFilter);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NewsEventsHeroSection title="News & Events" />
      <NewsEventsListingSection
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilter={handleFilter}
        visibleItems={visible}
        currentPage={currentPage}
        totalPages={totalPages}
        onPage={handlePage}
      />
    </>
  );
}
