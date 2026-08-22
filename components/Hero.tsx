import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Hero() {
  const previews = projects.slice(0, 3);

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-12 md:gap-8 md:px-10 md:pt-20 md:pb-28">
      <Reveal mode="mount" className="md:col-span-7">
        <h1 className="text-4xl font-medium tracking-tighter text-ink md:text-6xl">
          {site.heroHeadline}
        </h1>
        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-soft md:text-lg">
          {site.heroSubtext}
        </p>
        <Link
          href="#projects"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-ink transition-transform hover:opacity-90 active:scale-[0.98]"
        >
          View the work
        </Link>
      </Reveal>

      <Reveal mode="mount" delay={0.15} className="md:col-span-5">
        <div className="grid grid-cols-2 gap-3">
          {previews[0] && (
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-line">
              <Image
                src={previews[0].coverImage}
                alt={previews[0].title}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          )}
          {previews[1] && (
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line">
              <Image
                src={previews[1].coverImage}
                alt={previews[1].title}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          )}
          {previews[2] && (
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line">
              <Image
                src={previews[2].coverImage}
                alt={previews[2].title}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
