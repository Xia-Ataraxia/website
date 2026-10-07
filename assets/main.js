// XIA site: theme, language, reveal, and the 3D constellation hero.
// Same CDN pins as quartz-graph-landing so three/3d-force-graph/SpriteText share one three instance.
const THREE_VERSION = "0.179.1";
const CDN = {
  three: `https://esm.sh/three@${THREE_VERSION}`,
  graph: `https://esm.sh/3d-force-graph@1.80.0?deps=three@${THREE_VERSION}`,
  text: `https://esm.sh/three-spritetext@1.9.2?deps=three@${THREE_VERSION}`,
};

const root = document.documentElement;
const lang = root.lang.startsWith("ko") ? "ko" : "en";
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    location.replace("/ko/");
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

/* ---------- constellation data ---------- */
// group: hub | concept | product | principle | note. anchor: section to scroll to on click.
const L = (en, ko) => (lang === "ko" ? ko : en);
const labeled = [
  { id: "xia", name: "XIA", group: "hub", anchor: "#top" },
  { id: "knowledge", name: L("Knowledge", "지식 관리"), group: "hub", anchor: "#vision" },
  { id: "agents", name: L("AI Agents", "AI 에이전트"), group: "hub", anchor: "#vision" },
  { id: "attention", name: L("Cognitive resources", "인지 자원"), group: "hub", anchor: "#vision" },
  { id: "ataraxia", name: "Ataraxia", group: "hub", anchor: "#ataraxia" },
  { id: "oss", name: L("Open source", "오픈 소스"), group: "hub", anchor: "#work" },

  { id: "intent", name: L("Intent", "의도"), group: "concept", anchor: "#vision" },
  { id: "secondbrain", name: L("Second brain", "세컨드 브레인"), group: "concept", anchor: "#vision" },
  { id: "obsidian", name: "Obsidian", group: "concept", anchor: "#work" },
  { id: "para", name: "PARA", group: "concept", anchor: "#vision" },
  { id: "zettel", name: "Zettelkasten", group: "concept", anchor: "#vision" },
  { id: "localfirst", name: L("Local-first", "로컬 우선"), group: "concept", anchor: "#vision" },
  { id: "moc", name: L("Map of Content", "MOC"), group: "concept", anchor: "#vision" },
  { id: "daily", name: L("Daily notes", "데일리 노트"), group: "concept", anchor: "#vision" },
  { id: "quartz", name: "Quartz", group: "concept", anchor: "#work" },
  { id: "hermes", name: "Hermes", group: "concept", anchor: "#vision" },
  { id: "claudecode", name: "Claude Code", group: "concept", anchor: "#work" },
  { id: "codex", name: "Codex", group: "concept", anchor: "#work" },
  { id: "skills", name: L("Skills", "스킬"), group: "concept", anchor: "#work" },
  { id: "receipts", name: L("Receipts", "영수증"), group: "concept", anchor: "#principles" },
  { id: "evidence", name: L("Evidence", "증거"), group: "concept", anchor: "#principles" },
  { id: "boundaries", name: L("Boundaries", "경계"), group: "concept", anchor: "#principles" },
  { id: "records", name: L("Work records", "작업 기록"), group: "concept", anchor: "#principles" },
  { id: "focus", name: L("Focus", "집중"), group: "concept", anchor: "#vision" },
  { id: "calm", name: L("Calm", "고요"), group: "concept", anchor: "#principles" },
  { id: "deepwork", name: L("Deep work", "딥 워크"), group: "concept", anchor: "#vision" },
  { id: "economy", name: L("Attention economy", "주의력 경제"), group: "concept", anchor: "#vision" },
  { id: "choice", name: L("Choice", "선택"), group: "concept", anchor: "#vision" },
  { id: "noise", name: L("Noise", "소음"), group: "concept", anchor: "#vision" },
  { id: "ivory", name: L("Ivory tower", "상아탑"), group: "concept", anchor: "#ataraxia" },
  { id: "purity", name: L("Unstained", "물들지 않는 순수"), group: "concept", anchor: "#ataraxia" },
  { id: "stillness", name: L("Stillness", "고요함"), group: "concept", anchor: "#ataraxia" },
  { id: "truth", name: L("Higher truth", "더 높은 진리"), group: "concept", anchor: "#ataraxia" },
  { id: "beomsu", name: L("Beomsu Koh", "고범수"), group: "concept", anchor: "#ataraxia" },

  { id: "p1", name: L("Calm over clutter", "소음보다 고요"), group: "principle", anchor: "#principles" },
  { id: "p2", name: L("Evidence before status", "상태보다 증거"), group: "principle", anchor: "#principles" },
  { id: "p3", name: L("Durable over disposable", "일회성보다 지속"), group: "principle", anchor: "#principles" },
  { id: "p4", name: L("Automation with an owner", "주인이 있는 자동화"), group: "principle", anchor: "#principles" },

  { id: "omsb", name: "Oh My Second Brain", group: "product", anchor: "#work" },
  { id: "vault", name: "Vault Template", group: "product", anchor: "#work" },
  { id: "craft", name: "craft-skills", group: "product", anchor: "#work" },
  { id: "sbskills", name: "secondbrain-skills", group: "product", anchor: "#work" },
  { id: "mac", name: "Metadata Auto Classifier", group: "product", anchor: "#work" },
  { id: "qmd", name: "Obsidian QMD", group: "product", anchor: "#work" },
  { id: "oc", name: "Open Connections", group: "product", anchor: "#work" },
  { id: "eagle", name: "Eagle", group: "product", anchor: "#work" },
  { id: "player", name: "Note Player", group: "product", anchor: "#work" },
  { id: "bible", name: "Bible Search", group: "product", anchor: "#work" },
  { id: "ohermes", name: "Obsidian Hermes", group: "product", anchor: "#work" },
  { id: "qgl", name: "Graph Landing", group: "product", anchor: "#work" },
];
const edges = [
  ["xia", "knowledge"], ["xia", "agents"], ["xia", "attention"], ["xia", "ataraxia"], ["xia", "oss"], ["xia", "intent"],
  ["knowledge", "secondbrain"], ["knowledge", "obsidian"], ["knowledge", "para"], ["knowledge", "zettel"], ["knowledge", "localfirst"], ["knowledge", "moc"], ["knowledge", "daily"], ["knowledge", "quartz"],
  ["secondbrain", "obsidian"], ["obsidian", "quartz"], ["para", "moc"], ["zettel", "moc"], ["daily", "records"],
  ["agents", "hermes"], ["agents", "claudecode"], ["agents", "codex"], ["agents", "skills"], ["agents", "receipts"], ["agents", "evidence"], ["agents", "boundaries"], ["agents", "records"],
  ["skills", "claudecode"], ["skills", "codex"], ["skills", "hermes"], ["receipts", "evidence"], ["hermes", "boundaries"], ["records", "evidence"],
  ["attention", "intent"], ["attention", "focus"], ["attention", "calm"], ["attention", "deepwork"], ["attention", "economy"], ["attention", "choice"], ["attention", "noise"],
  ["intent", "choice"], ["economy", "noise"], ["focus", "deepwork"], ["calm", "noise"],
  ["ataraxia", "ivory"], ["ataraxia", "purity"], ["ataraxia", "stillness"], ["ataraxia", "truth"], ["ataraxia", "beomsu"], ["ivory", "purity"], ["stillness", "calm"], ["beomsu", "intent"],
  ["p1", "xia"], ["p1", "calm"], ["p2", "xia"], ["p2", "evidence"], ["p3", "xia"], ["p3", "records"], ["p4", "xia"], ["p4", "boundaries"],
  ["oss", "omsb"], ["oss", "vault"], ["oss", "craft"], ["oss", "sbskills"], ["oss", "mac"], ["oss", "qmd"], ["oss", "oc"], ["oss", "eagle"], ["oss", "player"], ["oss", "bible"], ["oss", "ohermes"], ["oss", "qgl"],
  ["omsb", "secondbrain"], ["omsb", "vault"], ["vault", "para"], ["craft", "skills"], ["sbskills", "obsidian"], ["sbskills", "skills"], ["mac", "obsidian"], ["qmd", "obsidian"], ["qmd", "localfirst"], ["oc", "obsidian"], ["eagle", "obsidian"], ["player", "obsidian"], ["bible", "obsidian"], ["ohermes", "hermes"], ["qgl", "quartz"],
];

// Unlabeled "note" nodes give the constellation its density. Seeded so the layout is stable between loads.
function mulberry32(a) {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function buildData(noteCount) {
  const rnd = mulberry32(20260920);
  const nodes = labeled.map((n) => ({ ...n }));
  const links = edges.map(([source, target]) => ({ source, target }));
  const anchors = labeled.filter((n) => n.group !== "principle");
  for (let i = 0; i < noteCount; i++) {
    const id = `n${i}`;
    nodes.push({ id, group: "note" });
    const a = anchors[Math.floor(rnd() * anchors.length)];
    links.push({ source: id, target: a.id });
    if (rnd() < 0.3) {
      const b = anchors[Math.floor(rnd() * anchors.length)];
      if (b.id !== a.id) links.push({ source: id, target: b.id });
    }
    if (rnd() < 0.12 && i > 0) links.push({ source: id, target: `n${Math.floor(rnd() * i)}` });
  }
  return { nodes, links };
}

/* ---------- constellation renderer ---------- */
const palette = () => isDark()
  ? { bg: "#090b12", ink: "#d1d1d1", accent: "#c75b75", note: "#8c8c8c", edge: "#a8b0c2", label: "#9a9a9a", edgeAlpha: 0.3 }
  : { bg: "#ffffff", ink: "#0f0f0f", accent: "#a52142", note: "#737373", edge: "#2a3348", label: "#5f5f5f", edgeAlpha: 0.34 };

const RADIUS = { hub: 3.6, concept: 2.2, product: 2.2, principle: 2.4, note: 1.2 };

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
    const data = buildData(innerWidth < 700 ? 70 : 130);
    const sphereGeo = {};
    const geo = (r) => (sphereGeo[r] ??= new THREE.SphereGeometry(r, r > 1.5 ? 12 : 6, r > 1.5 ? 12 : 6));

    const nodeColor = (n) => n.group === "hub" ? p.accent : n.group === "note" ? p.note : n.group === "principle" ? p.accent : p.ink;
    const nodeObject = (n) => {
      const r = RADIUS[n.group];
      const mesh = new THREE.Mesh(geo(r), new THREE.MeshBasicMaterial({ color: nodeColor(n) }));
      if (n.group === "note") return mesh;
      const group = new THREE.Group();
      group.add(mesh);
      const label = new SpriteText(n.name);
      label.fontFace = "Inter, system-ui, sans-serif";
      label.fontWeight = n.group === "hub" ? "600" : "400";
      label.color = n.group === "hub" ? p.ink : p.label;
      label.textHeight = n.group === "hub" ? 6 : 3.9;
      label.backgroundColor = false;
      label.material.depthWrite = false;
      label.center.set(0, 0.5);
      label.position.x = r + 1.6;
      group.add(label);
      return group;
    };

    const graph = ForceGraph3D({ controlType: "orbit" })(el)
      .width(el.clientWidth).height(el.clientHeight)
      .backgroundColor("rgba(0,0,0,0)")
      .showNavInfo(false)
      .enableNodeDrag(false)
      .graphData(data)
      .nodeThreeObject(nodeObject)
      .nodeThreeObjectExtend(false)
      .linkColor(() => p.edge)
      .linkOpacity(p.edgeAlpha)
      .linkWidth(0)
      .warmupTicks(90)
      .cooldownTicks(220)
      .onNodeHover((n) => { el.style.cursor = n?.anchor ? "pointer" : ""; })
      .onNodeClick((n) => {
        if (!n?.anchor) return;
        if (n.anchor === "#top") { scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); return; }
        document.querySelector(n.anchor)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      });

    graph.d3Force("charge").strength((n) => (n.group === "note" ? -40 : -140));
    graph.d3Force("link").distance((l) => {
      const s = l.source.group, t = l.target.group;
      if (s === "note" || t === "note") return 26;
      if (s === "hub" && t === "hub") return 120;
      if (s === "hub" || t === "hub") return 62;
      return 48;
    });

    const scene = graph.scene();
    const applyFog = () => { scene.fog = new THREE.Fog(p.bg, 420, 1500); };
    applyFog();

    const controls = graph.controls();
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 0.22;
    controls.enablePan = false;
    controls.minDistance = 120;
    controls.maxDistance = 900;
    graph.cameraPosition({ x: 120, y: 60, z: 420 }, { x: 0, y: 0, z: 0 }, 0);
    let fitted = false;
    graph.onEngineStop(() => { if (!fitted) { fitted = true; graph.zoomToFit(900, 40, (n) => n.group !== "note"); } });

    // Pause the orbit while the user drags; resume shortly after.
    let resumeTimer;
    el.addEventListener("pointerdown", () => { controls.autoRotate = false; clearTimeout(resumeTimer); });
    el.addEventListener("pointerup", () => { if (!reduceMotion) resumeTimer = setTimeout(() => { controls.autoRotate = true; }, 2500); });

    addEventListener("resize", () => graph.width(el.clientWidth).height(el.clientHeight));
    addEventListener("themechange", () => {
      p = palette();
      applyFog();
      graph.linkColor(() => p.edge).linkOpacity(p.edgeAlpha).nodeThreeObject(nodeObject);
    });

    hero.dataset.graph = "ready";
  } catch (err) {
    console.warn("constellation unavailable", err);
    hero.dataset.graph = "failed";
  }
}
mountGraph();
