import Link from "next/link";
import { GithubLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {year} {site.name}. {site.role}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`https://github.com/${site.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <GithubLogo size={16} weight="bold" />
            GitHub
          </Link>
          {site.email && (
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent"
            >
              <EnvelopeSimple size={16} weight="bold" />
              Email
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
