import { agricultureData } from "@/data/industries/agriculture";
import { IndustryHero } from "../components/IndustryHero";
import { ProblemSection } from "../components/ProblemSection";
import { OurSolutionsGrid } from "../components/OurSolutionsGrid";
import { RecentProjectsList } from "../components/RecentProjectsList";
import { IndustryCTA } from "../components/IndustryCTA";

export default function AgriculturePage() {
  const { hero, problem, solutions, projects, cta } = agricultureData;

  return (
    <>
      <IndustryHero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />
      <ProblemSection
        title={problem.title}
        paragraphs={problem.paragraphs}
        image={problem.image}
      />
      <OurSolutionsGrid
        label={solutions.label}
        title={solutions.title}
        subtitle={solutions.subtitle}
        items={solutions.items}
      />
      <RecentProjectsList
        label={projects.label}
        title={projects.title}
        items={projects.items}
      />
      <IndustryCTA title={cta.title} subtitle={cta.subtitle} />
    </>
  );
}
