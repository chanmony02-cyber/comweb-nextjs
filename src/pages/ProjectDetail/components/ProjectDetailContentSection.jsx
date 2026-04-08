import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/BackButton";
import { ROUTES } from "@/config/routes";

export function ProjectDetailContentSection({ project, related }) {
  return (
    <section className="py-10 bg-background">
      <div className="container">
        <BackButton />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-sky-accent/40 text-primary-blue text-md font-semibold mb-4">
              {project.category}
            </span>

            <h1 className="text-navy font-bold text-2xl md:text-3xl font-display leading-snug mb-4">
              Title: {project.title}
            </h1>

            <div className="flex flex-wrap gap-8 text-muted-foreground text-md mb-4 pb-4 border-b border-border">
              <span>Date: {project.date}</span>
              <span>Location: {project.location}</span>
            </div>

            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 md:h-[550px] object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 mb-10">
              {project.body.map((para, i) => (
                <p
                  key={i}
                  className="text-foreground text-md leading-relaxed font-sans"
                >
                  {para}
                </p>
              ))}
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h2 className="text-navy font-bold text-xl md:text-2xl font-display mb-4">
                  Key Features
                </h2>
                <ul className="flex flex-col gap-2">
                  {project.keyFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground text-md font-sans"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-navy font-bold text-md md:text-xl font-display mb-4 pb-3 border-b border-border">
              Related Projects
            </h3>

            {related.length > 0 ? (
              <div className="flex flex-col gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    to={ROUTES.PROJECT_DETAIL.replace(":id", rel.id)}
                    className="flex items-center gap-4 bg-card border border-border rounded-xl p-3 hover:border-primary-blue hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-navy text-md font-semibold font-display leading-snug line-clamp-2">
                      {rel.title}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-md font-sans">
                No related projects found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
