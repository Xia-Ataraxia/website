// XIA site: theme, language, reveal, copy buttons, and the 3D constellation hero.
// Every node in the constellation is real: an idea from the Ataraxia vault, a repository, a hub, or a principle.
// Same CDN pins as quartz-graph-landing so three/3d-force-graph/SpriteText share one three instance.
import { CONCEPTS } from "./concepts.js";
import { REPOS } from "./repos.js";

const THREE_VERSION = "0.179.1";
const CDN = {
  three: `https://esm.sh/three@${THREE_VERSION}`,
  graph: `https://esm.sh/3d-force-graph@1.80.0?deps=three@${THREE_VERSION}`,
  text: `https://esm.sh/three-spritetext@1.9.2?deps=three@${THREE_VERSION}`,
};

const root = document.documentElement;
const lang = root.lang.startsWith("ko") ? "ko" : "en";
const P = lang === "ko" ? "/ko" : "";
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const L = (en, ko) => (lang === "ko" ? ko : en);

/* ---------- theme ---------- */
const isDark = () => {
  const t = root.dataset.theme;
  if (t) return t === "dark";
  return matchMedia("(prefers-color-scheme: dark)").matches;
};
try {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.dataset.theme = saved;
} catch {}
document.getElementById("theme")?.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
  dispatchEvent(new Event("themechange"));
});
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (!root.dataset.theme) dispatchEvent(new Event("themechange"));
});

/* ---------- language ---------- */
try {
  const pref = localStorage.getItem("lang");
  if (!pref && lang === "en" && location.pathname === "/" && navigator.language?.toLowerCase().startsWith("ko")) {
    location.replace("/ko/" + location.search);
  }
} catch {}
for (const a of document.querySelectorAll("[data-lang-link]")) {
  a.addEventListener("click", () => { try { localStorage.setItem("lang", a.dataset.langLink); } catch {} });
}

/* ---------- scroll state + reveal ---------- */
const onScroll = () => document.body.classList.toggle("scrolled", scrollY > 80);
addEventListener("scroll", onScroll, { passive: true });
onScroll();
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}, { rootMargin: "0px 0px -8% 0px" });
for (const el of document.querySelectorAll(".section__inner")) { el.classList.add("reveal"); io.observe(el); }

/* ---------- copy buttons (subpages) ---------- */
for (const btn of document.querySelectorAll("[data-copy]")) {
  btn.addEventListener("click", async () => {
    const code = btn.closest(".codeblock")?.querySelector("code")?.textContent ?? "";
    const label = btn.textContent;
    try { await navigator.clipboard.writeText(code); btn.textContent = btn.dataset.copied; } catch { btn.textContent = "×"; }
    setTimeout(() => { btn.textContent = label; }, 1400);
  });
}

/* ---------- constellation data ---------- */
const KIND = {
  hub: L("Hub", "허브"),
  concept: L("Idea from the vault", "볼트에서 온 개념"),
  product: L("Open-source tool", "오픈소스 도구"),
  principle: L("Principle", "원칙"),
};
const nodes = [
  ...CONCEPTS.map((c) => ({
    id: c.id, group: c.group, name: c.label[lang], summary: c.summary[lang],
    related: c.related, anchor: c.anchor, link: c.link, source: c.source?.[lang],
  })),
  ...REPOS.map((r) => ({
    id: r.id, group: "product", name: r.name, summary: r.summary[lang],
    related: r.related ?? [], anchor: "#work", page: `${P}/work/${r.slug}/`, github: `https://github.com/Xia-Ataraxia/${r.slug}`,
  })),
];
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
const neighbors = Object.fromEntries(nodes.map((n) => [n.id, new Set([n.id])]));
const links = [];
const seen = new Set();
for (const n of nodes) {
  for (const t of n.related) {
    if (!byId[t] || t === n.id) continue;
    const key = n.id < t ? `${n.id}|${t}` : `${t}|${n.id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    links.push({ source: n.id, target: t });
    neighbors[n.id].add(t);
    neighbors[t].add(n.id);
  }
}

/* ---------- node panel ---------- */
const panel = document.getElementById("panel");
let select = () => {};
function renderPanel(n) {
  if (!panel) return;
  panel.hidden = false;
  const kind = panel.querySelector(".panel__kind");
  kind.querySelector("i").className = n.group;
  kind.querySelector("span").textContent = KIND[n.group];
  panel.querySelector("h3").textContent = n.name;
  const p = panel.querySelector("p:not(.panel__kind)");
  p.innerHTML = "";
  p.append(n.summary);
  if (n.source) {
    const s = document.createElement("small");
    s.className = "panel__source";
    s.textContent = L("From the vault: ", "볼트의 노트: ") + n.source;
    p.append(document.createElement("br"), s);
  }
  const chips = panel.querySelector(".chips");
  chips.innerHTML = "";
  for (const id of n.related) {
    const r = byId[id];
    if (!r) continue;
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.innerHTML = `<i class="${r.group}"></i>`;
    b.append(r.name);
    b.addEventListener("click", () => select(r.id, true));
    li.append(b);
    chips.append(li);
  }
  const actions = panel.querySelector(".panel__actions");
  actions.innerHTML = "";
  const act = (href, text, accent, ext) => {
    const a = document.createElement("a");
    a.className = "btn btn--small" + (accent ? " btn--accent" : "");
    a.href = href;
    if (ext) a.rel = "noopener";
    a.textContent = text;
    actions.append(a);
  };
  if (n.page) act(n.page, L("Project page →", "프로젝트 페이지 →"), true);
  if (n.github) act(n.github, "GitHub ↗", false, true);
  if (n.id === "ataraxia" || n.id === "intent" || n.id === "attention") act(`${P}/manifesto/`, L("Read the manifesto →", "선언 읽기 →"), true);
  if (n.link) act(n.link, L("beomsukoh.com ↗", "beomsukoh.com ↗"), !n.page, true);
  if (n.anchor && n.anchor !== "#top" && !n.page) {
    const a = document.createElement("a");
    a.className = "btn btn--small";
    a.href = n.anchor;
    a.textContent = L("Go to section ↓", "해당 섹션으로 ↓");
    actions.append(a);
  }
  panel.dataset.open = "true";
}
function closePanel() {
  if (!panel) return;
  panel.dataset.open = "false";
  select(null);
}
panel?.querySelector(".panel__close")?.addEventListener("click", closePanel);
addEventListener("keydown", (e) => { if (e.key === "Escape" && panel?.dataset.open === "true") closePanel(); });

/* ---------- constellation renderer ---------- */
const palette = () => isDark()
  ? { bg: "#090b12", ink: "#d1d1d1", accent: "#c75b75", edge: "#a8b0c2", edgeDim: "#1a1f2b", label: "#9a9a9a", edgeAlpha: 0.3 }
  : { bg: "#ffffff", ink: "#0f0f0f", accent: "#a52142", edge: "#2a3348", edgeDim: "#e9ebf0", label: "#5f5f5f", edgeAlpha: 0.34 };

const RADIUS = { hub: 3.8, concept: 2.1, product: 2.3, principle: 2.5 };
const TEXT = { hub: 6, concept: 3.8, product: 4, principle: 4 };

async function mountGraph() {
  const hero = document.getElementById("hero");
  const el = document.getElementById("graph");
  if (!hero || !el) return;
  try {
    const canvas = document.createElement("canvas");
    if (!(canvas.getContext("webgl2") || canvas.getContext("webgl"))) throw new Error("no webgl");
    const [THREE, { default: ForceGraph3D }, { default: SpriteText }] = await Promise.all([
      import(CDN.three), import(CDN.graph), import(CDN.text),
    ]);

    let p = palette();
    const sphereGeo = {};
    const geo = (r) => (sphereGeo[r] ??= new THREE.SphereGeometry(r, 14, 14));
    const objects = new Map(); // id → { mesh, label }

    const nodeColor = (n) => (n.group === "hub" || n.group === "principle") ? p.accent : p.ink;
    const nodeObject = (n) => {
      const r = RADIUS[n.group];
      const mesh = new THREE.Mesh(geo(r), new THREE.MeshBasicMaterial({ color: nodeColor(n), transparent: true }));
      const group = new THREE.Group();
      group.add(mesh);
      const label = new SpriteText(n.name);
      label.fontFace = lang === "ko" ? "'Noto Sans KR', Inter, system-ui, sans-serif" : "Inter, system-ui, sans-serif";
      label.fontWeight = n.group === "hub" ? "600" : "400";
      label.color = n.group === "hub" ? p.ink : p.label;
      label.textHeight = TEXT[n.group];
      label.backgroundColor = false;
      label.material.depthWrite = false;
      label.material.transparent = true;
      label.center.set(0, 0.5);
      label.position.x = r + 1.6;
      group.add(label);
      objects.set(n.id, { mesh, label });
      return group;
    };

    // Highlight state: a selected node, a hovered node, or a legend group. null = everything lit.
    let selected = null, hovered = null, groupFilter = null;
    const litSet = () => {
      if (selected) return neighbors[selected];
      if (hovered) return neighbors[hovered];
      if (groupFilter) return new Set(nodes.filter((n) => n.group === groupFilter).map((n) => n.id));
      return null;
    };
    let lit = null;
    const isLit = (id) => !lit || lit.has(id);
    const linkColor = (l) => {
      const s = l.source.id ?? l.source, t = l.target.id ?? l.target;
      return !lit || (lit.has(s) && lit.has(t)) ? p.edge : p.edgeDim;
    };
    const applyHighlight = () => {
      lit = litSet();
      for (const [id, { mesh, label }] of objects) {
        const on = isLit(id);
        mesh.material.opacity = on ? 1 : 0.12;
        label.material.opacity = on ? 1 : 0.1;
        if (selected === id) { mesh.material.color.set(p.accent); label.color = p.ink; }
        else { mesh.material.color.set(nodeColor(byId[id])); label.color = byId[id].group === "hub" ? p.ink : p.label; }
      }
      graph.linkColor(linkColor);
    };

    const graph = ForceGraph3D({ controlType: "orbit" })(el)
      .width(el.clientWidth).height(el.clientHeight)
      .backgroundColor("rgba(0,0,0,0)")
      .showNavInfo(false)
      .enableNodeDrag(false)
      .graphData({ nodes, links })
      .nodeThreeObject(nodeObject)
      .nodeThreeObjectExtend(false)
      .linkColor(linkColor)
      .linkOpacity(p.edgeAlpha)
      .linkWidth(0)
      .warmupTicks(90)
      .cooldownTicks(220)
      .onNodeHover((n) => {
        el.style.cursor = n ? "pointer" : "";
        hovered = n?.id ?? null;
        if (!selected) applyHighlight();
      })
      .onNodeClick((n) => select(n.id, true))
      .onBackgroundClick(() => { if (selected) closePanel(); });

    graph.d3Force("charge").strength(-150);
    graph.d3Force("link").distance((l) => {
      const s = l.source.group, t = l.target.group;
      if (s === "hub" && t === "hub") return 120;
      if (s === "hub" || t === "hub") return 64;
      if (s === "product" || t === "product") return 44;
      return 50;
    });

    const scene = graph.scene();
    const applyFog = () => { scene.fog = new THREE.Fog(p.bg, 420, 1500); };
    applyFog();

    const controls = graph.controls();
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 0.22;
    controls.enablePan = false;
    controls.minDistance = 90;
    controls.maxDistance = 900;
    graph.cameraPosition({ x: 120, y: 60, z: 420 }, { x: 0, y: 0, z: 0 }, 0);
    let fitted = false;
    graph.onEngineStop(() => {
      if (fitted) return;
      fitted = true;
      graph.zoomToFit(900, 40);
      const want = new URLSearchParams(location.search).get("node");
      if (want && byId[want]) setTimeout(() => select(want, true), 950);
    });

    // Selecting a node opens the panel, lights its neighbourhood, and eases the camera toward it.
    select = (id, fly) => {
      selected = id && byId[id] ? id : null;
      if (selected) {
        const n = byId[selected];
        renderPanel(n);
        controls.autoRotate = false;
        if (fly && Number.isFinite(n.x)) {
          const dist = 280;
          const len = Math.hypot(n.x, n.y, n.z) || 1;
          const k = 1 + dist / len;
          graph.cameraPosition({ x: n.x * k, y: n.y * k, z: n.z * k }, { x: n.x, y: n.y, z: n.z }, reduceMotion ? 0 : 900);
        }
        if (history.replaceState) history.replaceState(null, "", `${location.pathname}?node=${selected}${location.hash}`);
      } else {
        if (!reduceMotion) controls.autoRotate = true;
        if (history.replaceState) history.replaceState(null, "", location.pathname + location.hash);
      }
      applyHighlight();
    };

    // Legend buttons light one group at a time.
    for (const btn of hero.querySelectorAll(".hero__legend button")) {
      btn.addEventListener("click", () => {
        const g = btn.dataset.group;
        groupFilter = groupFilter === g ? null : g;
        for (const b of hero.querySelectorAll(".hero__legend button")) b.setAttribute("aria-pressed", String(b.dataset.group === groupFilter));
        if (selected) closePanel(); else applyHighlight();
      });
    }

    // Pause the orbit while the user drags; resume shortly after unless a node is open.
    let resumeTimer;
    el.addEventListener("pointerdown", () => { controls.autoRotate = false; clearTimeout(resumeTimer); });
    el.addEventListener("pointerup", () => { if (!reduceMotion && !selected) resumeTimer = setTimeout(() => { controls.autoRotate = true; }, 2500); });

    addEventListener("resize", () => graph.width(el.clientWidth).height(el.clientHeight));
    addEventListener("themechange", () => {
      p = palette();
      applyFog();
      objects.clear();
      graph.linkOpacity(p.edgeAlpha).nodeThreeObject(nodeObject);
      applyHighlight();
    });

    hero.dataset.graph = "ready";
  } catch (err) {
    console.warn("constellation unavailable", err);
    hero.dataset.graph = "failed";
    // Without WebGL, ?node= still opens the panel so deep links from the pillars and subpages work.
    const want = new URLSearchParams(location.search).get("node");
    if (want && byId[want]) { select = (id) => { if (id) renderPanel(byId[id]); }; select(want); }
  }
}
mountGraph();
