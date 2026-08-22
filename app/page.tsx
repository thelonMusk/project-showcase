import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section id="projects" className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-ink md:text-3xl">
            Selected projects
          </h2>
          <ProjectGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
