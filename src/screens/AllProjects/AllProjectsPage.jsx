"use client";

import { useState } from "react";
import { AllProjectsHeroSection } from "./components/AllProjectsHeroSection";
import { ProjectsListingSection } from "./components/ProjectsListingSection";
import { getProjectsByCategory } from "@/services/projects";

const PAGE_SIZE = 6;
const FILTERS = [
  "All",
  "Distribution Grid",
  "Agriculture",
  "City Infrastructure",
];

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = getProjectsByCategory(activeFilter);

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
      <AllProjectsHeroSection title="All Projects" />
      <ProjectsListingSection
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilter={handleFilter}
        visibleProjects={visible}
        currentPage={currentPage}
        totalPages={totalPages}
        onPage={handlePage}
      />
    </>
  );
}
