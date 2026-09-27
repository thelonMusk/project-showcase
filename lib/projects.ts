import { site } from "./site";

export type ProjectVideo =
  | { type: "youtube"; id: string; title: string }
  | { type: "vimeo"; id: string; title: string }
  | { type: "file"; src: string; poster?: string; title: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage: string;
  images: string[];
  videos: ProjectVideo[];
};

/**
 * ---- HOW TO ADD A PROJECT ----
 * 1. Copy one of the objects below and change every field.
 * 2. Put your real photos in public/projects/<slug>/ and reference them
 *    as "/projects/<slug>/photo-1.jpg" (a local path, no https:// needed).
 * 3. For videos, use ONE of these three shapes inside the `videos` array:
 *      { type: "youtube", id: "VIDEO_ID", title: "Demo walkthrough" }
 *      { type: "vimeo", id: "VIDEO_ID", title: "Demo walkthrough" }
 *      { type: "file", src: "/projects/<slug>/clip.mp4", poster: "/projects/<slug>/poster.jpg", title: "Demo walkthrough" }
 *    Prefer an unlisted YouTube/Vimeo upload for anything over ~20MB.
 *    See README.md for why.
 * 4. Save, commit, and push. Vercel redeploys automatically.
 */
export const projects: Project[] = [
  {
    slug: "rfid-project",
    title: "RFID Project",
    // TODO: replace with a real one-line summary.
    tagline: "An RFID-based system built for CSC3.",
    // TODO: replace with a real description: what problem this solves, how the
    // hardware and software fit together, and what you built it with.
    description:
      "Replace this paragraph with a real description of the RFID project: what it does, the problem it solves, and the hardware/software behind it.",
    year: "2026",
    // TODO: add more tags, e.g. the language/hardware you used (Arduino, Python, etc.)
    tags: ["RFID"],
    // TODO: uncomment and point at your real repo once it's up.
    // githubUrl: `https://github.com/${site.githubUsername}/rfid-project`,
    // Using frame grabs from your own demo clips as placeholders below —
    // swap in real photos if you have them.
    coverImage: "/projects/rfid-project/rfid-demo-1-poster.jpg",
    images: [
      "/projects/rfid-project/rfid-demo-1-poster.jpg",
      "/projects/rfid-project/rfid-demo-2-poster.jpg",
      "/projects/rfid-project/rfid-final-demo-poster.jpg",
    ],
    videos: [
      {
        type: "file",
        src: "/projects/rfid-project/rfid-demo-1.mp4",
        poster: "/projects/rfid-project/rfid-demo-1-poster.jpg",
        title: "Demo clip 1",
      },
      {
        type: "file",
        src: "/projects/rfid-project/rfid-demo-2.mp4",
        poster: "/projects/rfid-project/rfid-demo-2-poster.jpg",
        title: "Demo clip 2",
      },
      {
        type: "file",
        src: "/projects/rfid-project/rfid-final-demo.mp4",
        poster: "/projects/rfid-project/rfid-final-demo-poster.jpg",
        title: "Final demo",
      },
    ],
  },
  {
    slug: "tidegate",
    title: "Tidegate",
    tagline: "Self-hosted analytics without the invoice.",
    description:
      "Tidegate ingests events from a small JS snippet and renders dashboards you can actually read in under a second. Built for indie projects that outgrew spreadsheets but don't need a vendor contract.",
    year: "2025",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
    githubUrl: `https://github.com/${site.githubUsername}/tidegate`,
    coverImage: "https://picsum.photos/seed/tidegate-cover/1200/750",
    images: [
      "https://picsum.photos/seed/tidegate-1/900/700",
      "https://picsum.photos/seed/tidegate-2/900/700",
      "https://picsum.photos/seed/tidegate-3/900/700",
    ],
    videos: [],
  },
  {
    slug: "fieldscope",
    title: "Fieldscope",
    tagline: "Collect field data where the signal doesn't reach.",
    description:
      "A React Native app for ecology fieldwork. Forms sync automatically once you're back in range, and every entry is timestamped and geotagged offline, so nobody loses a day's survey to a dead connection.",
    year: "2024",
    tags: ["React Native", "SQLite", "Offline-first"],
    githubUrl: `https://github.com/${site.githubUsername}/fieldscope`,
    coverImage: "https://picsum.photos/seed/fieldscope-cover/1200/750",
    images: [
      "https://picsum.photos/seed/fieldscope-1/900/700",
      "https://picsum.photos/seed/fieldscope-2/900/700",
    ],
    videos: [],
  },
  {
    slug: "loomcraft",
    title: "Loomcraft",
    tagline: "Terrain that never repeats itself.",
    description:
      "A WebGL renderer that builds explorable terrain from a handful of noise parameters, tuned for fast iteration in the browser rather than a full game engine.",
    year: "2025",
    tags: ["Rust", "WebGL", "Procedural generation"],
    githubUrl: `https://github.com/${site.githubUsername}/loomcraft`,
    coverImage: "https://picsum.photos/seed/loomcraft-cover/1200/750",
    images: [
      "https://picsum.photos/seed/loomcraft-1/900/700",
      "https://picsum.photos/seed/loomcraft-2/900/700",
      "https://picsum.photos/seed/loomcraft-3/900/700",
    ],
    videos: [],
  },
];
