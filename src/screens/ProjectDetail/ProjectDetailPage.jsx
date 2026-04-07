import { notFound } from "next/navigation";
import { ProjectDetailContentSection } from "./components/ProjectDetailContentSection";
import {
  getProjectById,
  getRelatedProjects,
} from "@/services/projects";

export default function ProjectDetailPage({ params }) {
  const project = getProjectById(params?.id);

  if (!project) notFound();

  const related = getRelatedProjects(project.category, project.id);

  return <ProjectDetailContentSection project={project} related={related} />;
}
