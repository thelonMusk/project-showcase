import type { ProjectVideo } from "@/lib/projects";

export function VideoEmbed({ video }: { video: ProjectVideo }) {
  if (video.type === "youtube") {
    return (
      <div className="aspect-video overflow-hidden rounded-xl border border-line bg-surface-raised">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (video.type === "vimeo") {
    return (
      <div className="aspect-video overflow-hidden rounded-xl border border-line bg-surface-raised">
        <iframe
          className="h-full w-full"
          src={`https://player.vimeo.com/video/${video.id}`}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <video
      className="aspect-video w-full rounded-xl border border-line bg-surface-raised"
      controls
      preload="metadata"
      poster={video.poster}
      src={video.src}
    >
      <track kind="captions" />
    </video>
  );
}
