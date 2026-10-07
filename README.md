# XIA website

Company site for [XIA](https://github.com/Xia-Ataraxia): knowledge management, AI agents with an owner, and the defense of cognitive resources.

Static HTML, no build step. The hero is a 3D constellation of XIA's concept map rendered with `3d-force-graph`, in the same palette and tone as [beomsukoh.com](https://beomsukoh.com/) and the [Quartz Graph Landing](https://github.com/Xia-Ataraxia/quartz-graph-landing) plugin.

- `/` English, `/ko/` Korean. First visit to `/` with a Korean browser redirects to `/ko/`.
- `assets/style.css` holds the Ataraxia palette: white `#ffffff`, light gray `#e6e6e6`, gray `#737373`, ink `#0f0f0f`, rose `#a52142` / `#c75b75`; dark base `#262626` on `#090b12`.
- `assets/main.js` holds the graph data (labeled hubs, concepts, products, principles plus seeded filler nodes) and the renderer.

## Run locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/. The constellation needs WebGL; without it the page still renders.

## Deploy

Vercel, static. `vercel.json` enables clean URLs and caches `assets/`.

```sh
vercel --prod
```
