import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {projects.map((project, i) => {
        const featured = i === 0;
        return (
          <Reveal
            key={project.slug}
            mode="scroll"
            delay={(i % 3) * 0.06}
            className={featured ? "md:col-span-2" : undefined}
          >
            <ProjectCard project={project} featured={featured} />
          </Reveal>
        );
      })}
    </div>
  );
}
