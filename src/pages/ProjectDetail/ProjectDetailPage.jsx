import { useParams } from "react-router-dom";
import { allProjects } from "@/data/projects/projects";
import { ProjectDetailContentSection } from "./components/ProjectDetailContentSection";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === Number(id));

  const related = project
    ? allProjects
        .filter(
          (item) => item.category === project.category && item.id !== project.id,
        )
        .slice(0, 4)
    : [];

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground text-md">Project not found.</p>
      </div>
    );
  }

  return (
    <ProjectDetailContentSection project={project} related={related} />
  );
}
