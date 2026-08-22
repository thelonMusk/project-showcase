import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
        <h1 className="text-3xl font-medium tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-3 text-ink-soft">
          This project doesn't exist, or it moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-ink hover:opacity-90"
        >
          Back home
        </Link>
      </main>
    </>
  );
}
