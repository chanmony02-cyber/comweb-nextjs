import { notFound } from "next/navigation";

import { ProjectDetailContentSection } from "@/screens/ProjectDetail/components/ProjectDetailContentSection";
import {
  getProjectById,
  getProjects,
  getRelatedProjects,
} from "@/services/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const related = getRelatedProjects(project.category, project.id);

  return <ProjectDetailContentSection project={project} related={related} />;
}

