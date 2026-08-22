import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Reveal } from "@/components/Reveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10 md:px-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent"
        >
          <ArrowLeft size={16} weight="bold" />
          Back to projects
        </Link>

        <Reveal mode="mount" className="mt-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
            <span>{project.year}</span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-[60ch] text-base text-ink-soft md:text-lg">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-ink hover:opacity-90"
              >
                <GithubLogo size={17} weight="bold" />
                View code
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
              >
                <ArrowSquareOut size={17} weight="bold" />
                Live demo
              </Link>
            )}
          </div>

          <p className="mt-10 max-w-[65ch] leading-relaxed text-ink">
            {project.description}
          </p>
        </Reveal>

        {project.images.length > 0 && (
          <Reveal mode="scroll" className="mt-14">
            <h2 className="mb-5 text-lg font-medium tracking-tight text-ink">
              Photos
            </h2>
            <Gallery images={project.images} alt={project.title} />
          </Reveal>
        )}

        {project.videos.length > 0 && (
          <Reveal mode="scroll" className="mt-14">
            <h2 className="mb-5 text-lg font-medium tracking-tight text-ink">
              Videos
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.videos.map((video, i) => (
                <VideoEmbed key={i} video={video} />
              ))}
            </div>
          </Reveal>
        )}

        {projects.length > 1 && (
          <div className="mt-20 flex items-center justify-between border-t border-line pt-8 text-sm">
            <Link
              href={`/projects/${prev.slug}`}
              className="text-ink-soft hover:text-accent"
            >
              ← {prev.title}
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="text-ink-soft hover:text-accent"
            >
              {next.title} →
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
