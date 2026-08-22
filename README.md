# Project showcase

A read-only site for sharing photos, videos, and GitHub links for your projects.
There is no login and no admin panel — you "edit" it by changing files in this
repo and pushing to GitHub. Vercel redeploys automatically. Visitors can only
view; there is nothing on the site that writes data anywhere.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

1. **`lib/site.ts`** — your name, GitHub username, hero headline/subtext, and
   optional email. Everything on the page that isn't a project comes from here.
2. **`lib/projects.ts`** — one object per project. Full instructions are in the
   comment at the top of that file. Short version:
   - Copy an existing project object, change every field.
   - `githubUrl` / `liveUrl` are plain links.
   - `coverImage` / `images` can be local paths (see below) or any URL.
   - `videos` is an array; each entry is a YouTube embed, a Vimeo embed, or a
     local file (see "Adding videos" below).
3. **Your photos and videos** — put them in `public/projects/<slug>/` (make a
   folder per project), then reference them from `lib/projects.ts` as
   `/projects/<slug>/filename.jpg`. No `https://` needed for local files.

Delete the three sample projects (Tidegate, Fieldscope, Loomcraft) once you've
added your own — they're only there so the site isn't empty on first run.

## Adding videos

Vercel and GitHub are not built for hosting large video files:

- GitHub blocks any single file over 100 MB outright.
- Git repos get slow and bloated once they carry a lot of binary video.

**For anything over ~20 MB, upload the video to YouTube or Vimeo as
"Unlisted"** (not public, not searchable, but anyone with the direct project
link on your site can watch it) and embed it:

```ts
videos: [
  { type: "youtube", id: "dQxxxxxxxxx", title: "Demo walkthrough" },
]
```

The `id` is the part of the URL after `watch?v=` (YouTube) or after the last
`/` (Vimeo).

Short local clips (a few MB, e.g. a quick screen capture) can go straight in
`public/projects/<slug>/`:

```ts
videos: [
  { type: "file", src: "/projects/tidegate/demo.mp4", poster: "/projects/tidegate/poster.jpg", title: "Demo" },
]
```

## Deploying

See the deployment steps your assistant gave you, or:
[vercel.com/docs/getting-started-with-vercel](https://vercel.com/docs/getting-started-with-vercel)

Once the GitHub repo is connected to a Vercel project, every `git push` to
`main` redeploys the live site automatically. That auto-deploy is what makes
this "only I can edit" in practice — anyone without push access to your
GitHub repo cannot change what's on the site.
