import Link from "next/link";
import Image from "next/image";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const visibleTags = project.tags.slice(0, 3);
  const extra = project.tags.length - visibleTags.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-raised transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
    >
      <div
        className={`relative overflow-hidden ${featured ? "aspect-[21/10]" : "aspect-[16/10]"}`}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes={
            featured
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
          <GithubLogo size={16} weight="bold" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-medium tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{project.tagline}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft">
              +{extra}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
