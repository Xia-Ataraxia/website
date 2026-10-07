# XIA website

Company site for [XIA](https://github.com/Xia-Ataraxia): knowledge management, AI agents with an owner, and the defense of cognitive resources. Live at https://xia-website.vercel.app.

Static HTML, CSS, and ES modules. No framework. The hero is a 3D constellation rendered with `3d-force-graph`; every node is real (an idea from the Ataraxia vault, a repository, a hub, or a principle) and clicking one opens a detail panel.

## Pages

- `/` and `/ko/`: home. A Korean browser's first visit to `/` redirects to `/ko/`. `?node=<id>` opens a node on load.
- `/manifesto/` and `/ko/manifesto/`: the manifesto, five parts, sourced from the founder's vault notes.
- `/work/<slug>/` and `/ko/work/<slug>/`: one page per repository with summary, install snippet, stats, and related ideas.
- `/404.html`: bilingual not-found page.

## Source of truth

- `assets/concepts.js`: hubs, ideas, and principles (bilingual label, summary, related ids, vault source).
- `assets/repos.js`: the twelve repositories (bilingual copy, install, facts, stats read from GitHub and the Obsidian registry).
- `content/manifesto.js`: the manifesto text in both languages.
- `assets/main.js`: theme, language, reveal, copy buttons, and the constellation (data from the two files above).
- `assets/style.css`: the Ataraxia palette. Light: `#ffffff` / `#e6e6e6` / `#737373` / `#0f0f0f`, accent `#a52142`, soft `#c75b75`. Dark: `#090b12` base, panels `#11141c`. Fonts: Newsreader, Inter, IBM Plex Mono, plus Noto Serif KR / Noto Sans KR on Korean pages.

## Build

Repository pages, manifesto pages, the 404 page, and the work cards on both home pages are generated and committed:

```sh
node scripts/build.mjs
```

Edit the data files, run the build, commit the output. `scripts/og.html` is the source of `assets/og.png` (1200×630).

## Run locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/. The constellation needs WebGL; without it the page still renders and `?node=` still opens the panel.

## Deploy

Vercel, static. `vercel.json` only sets cache headers for `assets/`; `cleanUrls` and `trailingSlash` are deliberately absent because they broke directory indexes.

```sh
vercel --prod
```
