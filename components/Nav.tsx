import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-line bg-surface/85 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="text-sm font-medium tracking-tight text-ink">
          {site.name}
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`https://github.com/${site.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <GithubLogo size={16} weight="bold" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
