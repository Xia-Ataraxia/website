// Generates /work/<slug>/, /ko/work/<slug>/, /manifesto/, /ko/manifesto/ and /404.html
// from assets/repos.js, assets/concepts.js and content/manifesto.js. Output is committed.
//   node scripts/build.mjs
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { REPOS, KIND_LABEL } from "../assets/repos.js";
import { CONCEPTS } from "../assets/concepts.js";
import { MANIFESTO } from "../content/manifesto.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://xia-website.vercel.app";
const LANGS = ["en", "ko"];
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const conceptById = Object.fromEntries(CONCEPTS.map((c) => [c.id, c]));
const repoById = Object.fromEntries(REPOS.map((r) => [r.id, r]));

const T = {
  en: {
    nav: ["Vision", "Manifesto", "Open source", "Ataraxia"],
    home: "XIA", work: "Open source", manifesto: "Manifesto",
    stars: "stars", downloads: "downloads", updated: "updated", install: "Install", copy: "Copy", copied: "Copied",
    facts: "At a glance", links: "Links", github: "View on GitHub ↗", community: "Obsidian community plugin ↗",
    related: "Related ideas on the map", prev: "Previous", next: "Next", all: "All projects",
    lang: "Language", license: "License", none: "none yet", kind: "Kind",
    footerBrand: "Knowledge infrastructure and AI agents that keep your attention yours.",
    footerCols: [["Site", [["/", "Home"], ["/manifesto/", "Manifesto"], ["/#work", "Open source"], ["/#ataraxia", "Why Ataraxia"]]], ["Elsewhere", [["https://github.com/Xia-Ataraxia", "GitHub"], ["https://beomsukoh.com/", "beomsukoh.com"], ["/ko/", "한국어"]]]],
    copyright: "© 2026 XIA · Ataraxia, made operational.",
    lostTitle: "Not on the map.", lostBody: "That page does not exist, or it moved. The constellation is still here.", lostBtn: "Back to the start",
    ogTitle: "XIA — Ataraxia, made operational",
    fmtDate: (d) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" }),
    fonts: "",
  },
  ko: {
    nav: ["비전", "선언", "오픈소스", "아타락시아"],
    home: "XIA", work: "오픈소스", manifesto: "선언",
    stars: "스타", downloads: "다운로드", updated: "업데이트", install: "설치", copy: "복사", copied: "복사됨",
    facts: "한눈에", links: "링크", github: "GitHub에서 보기 ↗", community: "Obsidian 커뮤니티 플러그인 ↗",
    related: "지도에서 이어지는 개념", prev: "이전", next: "다음", all: "모든 프로젝트",
    lang: "언어", license: "라이선스", none: "아직 없음", kind: "종류",
    footerBrand: "주의를 빼앗기지 않게 돕는 지식 인프라와 AI 에이전트.",
    footerCols: [["사이트", [["/ko/", "홈"], ["/ko/manifesto/", "선언"], ["/ko/#work", "오픈소스"], ["/ko/#ataraxia", "왜 아타락시아인가"]]], ["바깥", [["https://github.com/Xia-Ataraxia", "GitHub"], ["https://beomsukoh.com/ko/", "beomsukoh.com"], ["/", "English"]]]],
    copyright: "© 2026 XIA · 아타락시아를 일상으로.",
    lostTitle: "지도에 없는 곳이다.", lostBody: "이 페이지는 없거나 자리를 옮겼다. 별자리는 그대로다.", lostBtn: "처음으로",
    ogTitle: "XIA — 아타락시아를 일상으로",
    fmtDate: (d) => { const [y, m] = d.split("-"); return `${y}년 ${Number(m)}월`; },
    fonts: "&family=Noto+Sans+KR:wght@400;500;600&family=Noto+Serif+KR:wght@400;500",
  },
};

const prefix = (lang) => (lang === "ko" ? "/ko" : "");
const altLang = (lang) => (lang === "ko" ? "en" : "ko");

function layout({ lang, title, description, path, body, image, altPath, solidChrome = true, extraHead = "" }) {
  const t = T[lang];
  const p = prefix(lang);
  const other = altLang(lang);
  const otherPath = altPath ?? (other === "ko" ? "/ko" + path : path.replace(/^\/ko/, ""));
  const navHref = [`${p}/#vision`, `${p}/manifesto/`, `${p}/#work`, `${p}/#ataraxia`];
  const nav = t.nav.map((label, i) => `<a href="${navHref[i]}"${navHref[i] === path ? ' aria-current="page"' : ""}${i === 0 || i === 3 ? ' class="hide-sm"' : ""}>${label}</a>`).join("\n      ");
  const footerCols = t.footerCols.map(([h, links]) => `<div><h4>${h}</h4><ul>${links.map(([href, l]) => `<li><a href="${href}"${href.startsWith("http") ? ' rel="noopener"' : ""}>${l}</a></li>`).join("")}</ul></div>`).join("\n      ");
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${SITE}${path}">
  <link rel="alternate" hreflang="${lang}" href="${SITE}${path}">
  <link rel="alternate" hreflang="${other}" href="${SITE}${otherPath}">
  <link rel="alternate" hreflang="x-default" href="${SITE}${lang === "ko" ? otherPath : path}">
  <link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="apple-touch-icon" href="/assets/icon-512.png">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="XIA">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${image ?? SITE + "/assets/og.png"}">
  <meta property="og:url" content="${SITE}${path}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#090b12" media="(prefers-color-scheme: dark)">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=IBM+Plex+Mono:wght@400${t.fonts}&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/style.css">
  <script>try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t;}catch(e){}</script>
${extraHead}</head>
<body>
  <a class="sr-only" href="#main">${lang === "ko" ? "본문으로 건너뛰기" : "Skip to content"}</a>
  <header class="chrome${solidChrome ? " chrome--solid" : ""}">
    <a class="wordmark" href="${p}/" aria-label="XIA home"><span class="wordmark__x">X</span><span class="wordmark__ia">IA</span></a>
    <nav class="chrome__nav" aria-label="Primary">
      ${nav}
      <span class="chrome__lang"><a href="${lang === "en" ? path : otherPath}"${lang === "en" ? ' aria-current="page"' : ' hreflang="en"'} data-lang-link="en">EN</a> · <a href="${lang === "ko" ? path : otherPath}"${lang === "ko" ? ' aria-current="page"' : ' hreflang="ko"'} data-lang-link="ko">KO</a></span>
      <button id="theme" class="iconbtn" type="button" aria-label="Toggle dark mode">
        <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/></svg>
      </button>
    </nav>
  </header>
  <main id="main">
${body}
  </main>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <a class="wordmark" href="${p}/" aria-label="XIA home"><span class="wordmark__x">X</span><span class="wordmark__ia">IA</span></a>
        <p>${t.footerBrand}</p>
      </div>
      ${footerCols}
    </div>
    <div class="footer__meta"><span>${t.copyright}</span><span>Beomsu Koh · Korea</span></div>
  </footer>
  <script type="module" src="/assets/main.js"></script>
</body>
</html>
`;
}

function chips(ids, lang) {
  const p = prefix(lang);
  const items = ids.map((id) => {
    const c = conceptById[id];
    const r = repoById[id];
    if (c) return `<li><a class="chip" href="${p}/?node=${id}"><i></i>${esc(c.label[lang])}</a></li>`;
    if (r) return `<li><a class="chip" href="${p}/work/${r.slug}/"><i></i>${esc(r.name)}</a></li>`;
    return "";
  }).filter(Boolean);
  return items.length ? `<ul class="chips">${items.join("")}</ul>` : "";
}

function repoPage(repo, lang, i) {
  const t = T[lang];
  const p = prefix(lang);
  const prev = REPOS[(i - 1 + REPOS.length) % REPOS.length];
  const next = REPOS[(i + 1) % REPOS.length];
  const kind = KIND_LABEL[repo.kind][lang];
  const meta = [
    `<span>${t.kind} <em>${esc(kind)}</em></span>`,
    `<span>${t.lang} <em>${esc(repo.language)}</em></span>`,
    `<span>${t.license} <em>${repo.license ?? t.none}</em></span>`,
    `<span>★ <em>${repo.stats.stars}</em> ${t.stars}</span>`,
    repo.stats.downloads ? `<span>↓ <em>${repo.stats.downloads.toLocaleString("en-US")}</em> ${t.downloads}</span>` : "",
    `<span>${t.updated} <em>${t.fmtDate(repo.stats.pushed)}</em></span>`,
  ].filter(Boolean).join("\n          ");
  const figure = repo.image ? `<figure class="figure"><img src="${repo.image.src}" alt="${esc(repo.image.alt)}" loading="lazy"><figcaption>${esc(repo.name)}</figcaption></figure>` : "";
  const body = repo.body[lang].map((para) => `<p>${esc(para)}</p>`).join("\n          ");
  const install = repo.install ? `<h2><small>${t.install}</small>${esc(repo.install.label)}</h2>
          <div class="codeblock"><pre><code>${esc(repo.install.code)}</code></pre><span class="codeblock__label"><button class="codeblock__copy" type="button" data-copy data-copied="${t.copied}">${t.copy}</button></span></div>` : "";
  const links = [
    `<a class="btn btn--accent" href="https://github.com/Xia-Ataraxia/${repo.slug}" rel="noopener">${t.github}</a>`,
    repo.community ? `<a class="btn" href="https://obsidian.md/plugins?id=${repo.community}" rel="noopener">${t.community}</a>` : "",
  ].filter(Boolean).join("\n              ");
  const html = `    <article class="doc">
      <div class="doc__wide">
        <p class="crumbs"><a href="${p}/">${t.home}</a> / <a href="${p}/#work">${t.work}</a> / <span>${esc(kind)}</span></p>
        <h1>${esc(repo.name)}</h1>
        <p class="doc__tagline">${esc(repo.tagline[lang])}</p>
        <div class="doc__meta">
          ${meta}
        </div>
        <div class="doc__grid">
          <div class="prose">
          ${figure}
          <p><strong>${esc(repo.summary[lang])}</strong></p>
          ${body}
          ${install}
          ${repo.related?.length ? `<div class="related"><h4>${t.related}</h4>${chips(repo.related, lang)}</div>` : ""}
          </div>
          <aside class="aside">
            <div class="aside__box"><h4>${t.facts}</h4><ul>${repo.facts[lang].map((f) => `<li><span>${esc(f)}</span></li>`).join("")}</ul></div>
            <div class="aside__links">
              ${links}
            </div>
          </aside>
        </div>
        <nav class="docnav" aria-label="${t.prev} / ${t.next}">
          <a href="${p}/work/${prev.slug}/"><small>← ${t.prev}</small><b>${esc(prev.name)}</b></a>
          <a href="${p}/work/${next.slug}/"><small>${t.next} →</small><b>${esc(next.name)}</b></a>
        </nav>
      </div>
    </article>`;
  return layout({
    lang, path: `${p}/work/${repo.slug}/`,
    title: `${repo.name} — XIA`,
    description: repo.summary[lang],
    image: repo.image?.src?.endsWith(".svg") ? undefined : repo.image?.src,
    body: html,
  });
}

function manifestoPage(lang) {
  const t = T[lang];
  const p = prefix(lang);
  const m = MANIFESTO[lang];
  const parts = m.parts.map((part, i) => {
    const paras = part.paragraphs.map((para) => `<p>${para}</p>`).join("\n          ");
    const quote = part.quote ? `<blockquote><p>${part.quote.text}</p><cite>${esc(part.quote.source)}</cite></blockquote>` : "";
    return `          <h2><small>${String(i + 1).padStart(2, "0")}</small>${part.heading}</h2>
          ${paras}
          ${quote}`;
  }).join("\n");
  const html = `    <article class="doc">
      <div class="doc__inner">
        <p class="crumbs"><a href="${p}/">${t.home}</a> / <span>${t.manifesto}</span></p>
        <h1>${m.title}</h1>
        <p class="doc__tagline">${m.tagline}</p>
        <div class="doc__meta"><span>${m.meta}</span></div>
        <div class="prose">
          <p><strong>${m.intro}</strong></p>
${parts}
          <hr>
          <p class="sig">${m.signature}</p>
          <div class="related"><h4>${t.related}</h4>${chips(m.related, lang)}</div>
        </div>
        <nav class="docnav" aria-label="${t.prev} / ${t.next}">
          <a href="${p}/"><small>← ${t.home}</small><b>${lang === "ko" ? "별자리로 돌아가기" : "Back to the constellation"}</b></a>
          <a href="${p}/#work"><small>${t.next} →</small><b>${t.work}</b></a>
        </nav>
      </div>
    </article>`;
  return layout({ lang, path: `${p}/manifesto/`, title: `${m.plainTitle} — XIA`, description: m.description, body: html });
}

function lostPage() {
  const t = T.en;
  const html = `    <section class="lost"><div><p class="section__kicker">404</p><h1>${t.lostTitle}</h1><p>${t.lostBody}<br><span lang="ko">${T.ko.lostBody}</span></p><a class="btn btn--accent" href="/">${t.lostBtn}</a></div></section>`;
  return layout({ lang: "en", path: "/404.html", altPath: "/", title: "404 — XIA", description: t.lostBody, body: html });
}


function workCards(lang) {
  const t = T[lang];
  const p = prefix(lang);
  const groups = ["foundation", "plugin", "publishing"];
  return groups.map((kind) => {
    const cards = REPOS.filter((r) => r.kind === kind).map((r) => {
      const meta = [
        `<span>★ <em>${r.stats.stars}</em></span>`,
        r.stats.downloads ? `<span>↓ <em>${r.stats.downloads.toLocaleString("en-US")}</em></span>` : "",
        `<span class="card__date">${t.fmtDate(r.stats.pushed)}</span>`,
      ].filter(Boolean).join("");
      return `          <a class="card" href="${p}/work/${r.slug}/"><b>${esc(r.name)}</b><span>${esc(r.summary[lang].split(/(?<=[.。다])\s/)[0])}</span><div class="card__meta">${meta}</div></a>`;
    }).join("\n");
    return `          <p class="work__group">${KIND_LABEL[kind][lang]}</p>\n${cards}`;
  }).join("\n\n");
}

async function injectHome(lang) {
  const rel = `${prefix(lang)}/index.html`.replace(/^\//, "");
  const file = join(ROOT, rel);
  const html = await readFile(file, "utf8");
  const next = html.replace(/<!-- work:start -->[\s\S]*?<!-- work:end -->/, `<!-- work:start -->\n${workCards(lang)}\n<!-- work:end -->`);
  await writeFile(file, next);
  console.log("injected cards into", rel);
}

async function out(rel, html) {
  const file = join(ROOT, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  console.log("wrote", rel);
}

for (const lang of LANGS) {
  for (const [i, repo] of REPOS.entries()) await out(`${prefix(lang)}/work/${repo.slug}/index.html`.replace(/^\//, ""), repoPage(repo, lang, i));
  await out(`${prefix(lang)}/manifesto/index.html`.replace(/^\//, ""), manifestoPage(lang));
  await injectHome(lang);
}
await out("404.html", lostPage());
