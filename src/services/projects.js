import { allProjects } from "@/data/projects/projects";

export function getProjects() {
  return [...allProjects];
}

export function getProjectById(id) {
  const projectId = Number(id);
  if (Number.isNaN(projectId)) return null;

  return allProjects.find((project) => project.id === projectId) ?? null;
}

export function getProjectsByCategory(category) {
  if (!category || category === "All") {
    return getProjects();
  }

  return allProjects.filter((project) => project.category === category);
}

export function getRelatedProjects(category, currentId, limit = 4) {
  if (!category) return [];

  return allProjects
    .filter((project) => project.category === category && project.id !== currentId)
    .slice(0, limit);
}

export function getRecentProjects(limit = 6) {
  return allProjects.slice(0, limit);
}
