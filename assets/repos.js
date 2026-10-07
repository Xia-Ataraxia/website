// Open-source projects under github.com/Xia-Ataraxia.
// Stats were read from the GitHub API and the Obsidian community plugin registry on 2026-10-07.
// Shared by the home page graph, the work cards, and scripts/build.mjs (which writes /work/<slug>/).
export const REPOS = [
  {
    id: "omsb", slug: "oh-my-second-brain", kind: "foundation",
    name: "Oh My Second Brain",
    tagline: { en: "A constellation of knowledge, still yours.", ko: "지식의 별자리, 여전히 당신의 것." },
    summary: {
      en: "A user-owned knowledge and convention layer for Obsidian, Markdown, and AI agents. Your agents find what your vault already knows and write within the conventions you defined.",
      ko: "Obsidian, Markdown, AI 에이전트를 위한 사용자 소유의 지식·규약 계층. 에이전트가 볼트에 이미 있는 지식을 찾고, 당신이 정한 규약 안에서 씁니다.",
    },
    body: {
      en: [
        "Your vault already holds ideas, decisions, and things you learned. OMS helps your agents find that knowledge and write within the conventions you defined. Obsidian stays the command center, and your notes stay plain Markdown.",
        "Recall starts with lexical retrieval and adds vector search, HyDE, query expansion, or reranking only when you ask for them. Writing goes through a contract: you define what your folders and properties mean, and supported write paths check that contract and report what they did.",
        "Search and status commands stay read-only. Index maintenance is explicit. Nothing moves your notes for you.",
      ],
      ko: [
        "볼트에는 이미 아이디어와 결정, 배운 것이 들어 있습니다. OMS는 에이전트가 그 지식을 찾고, 당신이 정의한 규약 안에서 쓰도록 돕습니다. Obsidian이 지휘소로 남고, 노트는 평범한 Markdown으로 남습니다.",
        "검색은 어휘 기반 검색에서 시작하고, 벡터 검색·HyDE·쿼리 확장·리랭킹은 필요할 때만 켭니다. 쓰기는 계약을 거칩니다. 폴더와 속성이 무엇을 뜻하는지 당신이 정하면, 지원되는 쓰기 경로가 그 계약을 확인하고 결과를 보고합니다.",
        "검색과 상태 명령은 읽기 전용입니다. 인덱스 관리는 명시적으로만 합니다. 노트를 대신 옮기는 일은 없습니다.",
      ],
    },
    install: { label: "npm", code: "npm install -g oh-my-second-brain\noms setup --vault /path/to/vault\noms setup host install --runtime claude --vault /path/to/vault --yes" },
    facts: { en: ["Node.js ≥ 20", "4 MCP tools", "6 shared skills", "Claude Code · Codex · Hermes"], ko: ["Node.js 20 이상", "MCP 도구 4개", "공유 스킬 6개", "Claude Code · Codex · Hermes"] },
    image: { src: "https://raw.githubusercontent.com/Xia-Ataraxia/oh-my-second-brain/main/assets/readme-hero.webp", alt: "A towering library with floating pages and connected stars" },
    stats: { stars: 5, pushed: "2026-10-05" }, language: "TypeScript", license: "MIT",
    related: ["secondbrain", "obsidian", "localfirst", "agents", "boundaries", "vault", "sbskills"],
  },
  {
    id: "vault", slug: "obsidian-vault-template", kind: "foundation",
    name: "Obsidian Vault Template",
    tagline: { en: "A home for your notes. A system for your thinking.", ko: "노트의 집, 생각의 체계." },
    summary: {
      en: "PARA organization, Zettelkasten thinking, and periodic planning, with shared rules for humans and AI agents. Download, open as a new vault, write Markdown.",
      ko: "PARA 구조, 제텔카스텐식 사고, 주기적 계획, 그리고 사람과 AI 에이전트가 공유하는 규칙. 내려받아 새 볼트로 열고 Markdown을 쓰면 됩니다.",
    },
    body: {
      en: [
        "Start with a working structure instead of someone else's personal notes. Twelve numbered roots give every note exactly one home: capture goes to Inbox, originals to Raw, interpretations to Literature Notes, self-contained ideas to Permanent Notes, and owned work to Projects and Areas.",
        "Templater builds year, quarter, month, week, and day notes on demand, and Bases tables inside the period templates show what is due. Nested AGENTS.md files describe the same rules to AI agents that the guidelines describe to you, so an agent filing a note follows the same placement a person would.",
        "It is a filing model, not an automatic pipeline. Nothing moves notes for you, and personal notes, credentials, and machine state are not included.",
      ],
      ko: [
        "남의 개인 노트가 아니라 작동하는 구조에서 시작합니다. 번호가 붙은 열두 개의 루트가 모든 노트에 정확히 하나의 집을 줍니다. 수집은 Inbox, 원본은 Raw, 해석은 Literature Notes, 독립된 아이디어는 Permanent Notes, 주인이 있는 일은 Projects와 Areas로 갑니다.",
        "Templater가 연·분기·월·주·일 노트를 필요할 때 만들고, 기간 템플릿 안의 Bases 표가 마감을 보여줍니다. 중첩된 AGENTS.md가 가이드라인과 같은 규칙을 AI 에이전트에게 설명하므로, 에이전트가 노트를 정리할 때도 사람과 같은 자리에 둡니다.",
        "자동 파이프라인이 아니라 정리 모델입니다. 노트를 대신 옮기지 않고, 개인 노트·자격 증명·기기 상태는 포함하지 않습니다.",
      ],
    },
    install: { label: "zip", code: "# Download the ZIP from the latest release, unzip, then in Obsidian:\n# Open folder as vault → the unzipped folder" },
    facts: { en: ["12 numbered roots", "PARA + Zettelkasten", "Templater period chain", "EN / KO"], ko: ["번호 루트 12개", "PARA + 제텔카스텐", "Templater 기간 체인", "영어 / 한국어"] },
    stats: { stars: 1, pushed: "2026-10-06" }, language: "Markdown", license: null,
    related: ["para", "zettel", "obsidian", "secondbrain", "daily", "omsb"],
  },
  {
    id: "craft", slug: "craft-skills", kind: "foundation",
    name: "craft-skills",
    tagline: { en: "Own your craft, vendor-neutral.", ko: "당신의 기술은 당신 것, 특정 벤더에 묶이지 않게." },
    summary: {
      en: "Forty-eight Agent Skills for software and research work in the plain SKILL.md layout. The portable core has no runtime-specific behavior; Claude Code, Codex, Hermes, Cursor, and Grok integration lives in thin adapters.",
      ko: "소프트웨어와 연구 작업을 위한 Agent Skill 48개, 평범한 SKILL.md 구조. 이식 가능한 코어에는 런타임 종속 동작이 없고, Claude Code·Codex·Hermes·Cursor·Grok 연동은 얇은 어댑터에만 있습니다.",
    },
    body: {
      en: [
        "A task-oriented library: debug, refactor, research, security, tdd, git, write-prd, blast-radius, and forty more. Each is a self-contained SKILL.md an agent loads when the task calls for it.",
        "The library is deliberately separate from personal and second-brain automation so the two domains never bleed into each other. Principles for architecture, backend, frontend, programming, and testing sit next to the playbooks that use them.",
        "Skills like unslop, reflect, and correct exist because an agent that writes should also be able to remove its own tells, learn from a session, and make a correction stick in the repository.",
      ],
      ko: [
        "작업 중심 라이브러리입니다. debug, refactor, research, security, tdd, git, write-prd, blast-radius 등 48개. 각각은 독립된 SKILL.md이고, 에이전트는 그 작업에 필요한 것만 불러옵니다.",
        "개인·세컨드 브레인 자동화와는 일부러 분리해 두 영역이 서로 섞이지 않게 했습니다. 아키텍처·백엔드·프론트엔드·프로그래밍·테스트 원칙이 그것을 쓰는 플레이북 옆에 있습니다.",
        "unslop, reflect, correct 같은 스킬이 있는 이유는, 글을 쓰는 에이전트라면 자기 티를 지우고, 세션에서 배우고, 수정이 저장소에 남게 할 수 있어야 하기 때문입니다.",
      ],
    },
    install: { label: "shell", code: "git clone https://github.com/Xia-Ataraxia/craft-skills\ncd craft-skills && ./install.sh" },
    facts: { en: ["48 skills", "Plain SKILL.md", "5 runtime lenses", "MIT"], ko: ["스킬 48개", "평범한 SKILL.md", "런타임 렌즈 5개", "MIT"] },
    stats: { stars: 0, pushed: "2026-10-07" }, language: "Python", license: "MIT",
    related: ["skills", "agents", "claudecode", "codex", "hermes", "evidence"],
  },
  {
    id: "sbskills", slug: "secondbrain-skills", kind: "foundation",
    name: "secondbrain-skills",
    tagline: { en: "One owner per format. Capability is not permission.", ko: "형식마다 주인 하나. 할 수 있다고 해도 되는 건 아니다." },
    summary: {
      en: "Twenty independent Agent Skills for Obsidian vaults: nine that own a format (Markdown, Bases, Canvas, Mermaid, CLI, Clipper, Sync) and eleven that run a capture → ingest → query → verify knowledge pipeline.",
      ko: "Obsidian 볼트를 위한 독립 Agent Skill 20개. 형식을 담당하는 9개(Markdown, Bases, Canvas, Mermaid, CLI, Clipper, Sync)와 수집 → 적재 → 질의 → 검증 파이프라인을 담당하는 11개.",
    },
    body: {
      en: [
        "A wikilink question goes to obsidian-markdown; a .canvas graph goes to obsidian-canvas. No package silently answers for another, so every answer is auditable. There is no root skill, no dispatcher, and no shared runtime.",
        "Knowing a format never authorizes a write. Each package requires an exact destination, an authorized effect, and a readback from the path that was actually changed. A parse is not a render, a file on disk is not proof the app indexed it, and an exit code is not proof of a write.",
        "Partial edits preserve non-target notes, frontmatter, IDs, and attachments, and say so with hashes rather than assurance.",
      ],
      ko: [
        "위키링크 질문은 obsidian-markdown으로, .canvas 그래프는 obsidian-canvas로 갑니다. 어떤 패키지도 다른 패키지를 대신해 몰래 답하지 않으므로 모든 답을 검증할 수 있습니다. 루트 스킬도, 디스패처도, 공유 런타임도 없습니다.",
        "형식을 안다고 쓰기가 허가되지는 않습니다. 각 패키지는 정확한 목적지, 허가된 효과, 그리고 실제로 바뀐 경로에서의 읽기 확인을 요구합니다. 파싱은 렌더링이 아니고, 디스크의 파일은 앱이 색인했다는 증거가 아니며, 종료 코드는 썼다는 증거가 아닙니다.",
        "부분 수정은 대상이 아닌 노트, frontmatter, ID, 첨부를 보존하고, 그 사실을 장담이 아니라 해시로 말합니다.",
      ],
    },
    install: { label: "shell", code: "git clone https://github.com/Xia-Ataraxia/secondbrain-skills\ncd secondbrain-skills && ./install.sh skills" },
    facts: { en: ["20 packages", "9 format owners", "11 pipeline stages", "MIT"], ko: ["패키지 20개", "형식 담당 9개", "파이프라인 단계 11개", "MIT"] },
    image: { src: "https://raw.githubusercontent.com/Xia-Ataraxia/secondbrain-skills/main/assets/brand/hero.svg", alt: "Obsidian Skills: twenty independent Agent Skills for Obsidian vaults" },
    stats: { stars: 0, pushed: "2026-10-07" }, language: "Python", license: "MIT",
    related: ["obsidian", "skills", "agents", "evidence", "boundaries", "receipts"],
  },

  {
    id: "mac", slug: "obsidian-metadata-auto-classifier", kind: "plugin",
    name: "Metadata Auto Classifier",
    tagline: { en: "Tags and frontmatter, written by the model you choose.", ko: "태그와 frontmatter를, 당신이 고른 모델이 씁니다." },
    summary: {
      en: "An Obsidian plugin that analyzes a note and generates tags and frontmatter values with a configurable AI provider. Define any field, add rules and per-field context, preview before applying.",
      ko: "노트를 분석해 설정한 AI 제공자로 태그와 frontmatter 값을 만드는 Obsidian 플러그인. 어떤 필드든 정의하고, 규칙과 필드별 맥락을 더하고, 적용 전에 미리 봅니다.",
    },
    body: {
      en: [
        "Open a note, run one command, and the plugin proposes tags and fills the frontmatter fields you defined. Classification rules, tag categories, and per-field context prompts steer the model; the more context you give, the more accurate the result.",
        "Built-in presets cover OpenAI, Anthropic, Gemini, OpenRouter, Ollama, DeepSeek, LM Studio, and Codex, plus any custom provider. A preview mode shows the proposed changes before anything is written to the note.",
        "Listed in the Obsidian community plugin directory.",
      ],
      ko: [
        "노트를 열고 명령 하나를 실행하면 플러그인이 태그를 제안하고 당신이 정의한 frontmatter 필드를 채웁니다. 분류 규칙, 태그 범주, 필드별 맥락 프롬프트가 모델을 이끕니다. 맥락을 많이 줄수록 결과가 정확해집니다.",
        "OpenAI, Anthropic, Gemini, OpenRouter, Ollama, DeepSeek, LM Studio, Codex 프리셋이 내장돼 있고 사용자 정의 제공자도 추가할 수 있습니다. 미리보기 모드가 노트에 쓰기 전에 변경 내용을 보여줍니다.",
        "Obsidian 커뮤니티 플러그인 디렉터리에 등록돼 있습니다.",
      ],
    },
    install: { label: "Obsidian", code: "Settings → Community plugins → Browse → \"Metadata Auto Classifier\" → Install → Enable" },
    facts: { en: ["Community plugin", "8 provider presets", "Preview before apply", "MIT"], ko: ["커뮤니티 플러그인", "제공자 프리셋 8개", "적용 전 미리보기", "MIT"] },
    image: { src: "https://raw.githubusercontent.com/Xia-Ataraxia/obsidian-metadata-auto-classifier/main/assets/usecase.gif", alt: "Metadata Auto Classifier generating tags for a note" },
    stats: { stars: 57, downloads: 8047, pushed: "2026-10-01" }, language: "TypeScript", license: "MIT",
    community: "metadata-auto-classifier",
    related: ["obsidian", "secondbrain", "moc"],
  },
  {
    id: "oc", slug: "obsidian-open-connections", kind: "plugin",
    name: "Open Connections",
    tagline: { en: "Your notes, semantically connected.", ko: "의미로 이어지는 노트." },
    summary: {
      en: "Discovers related notes and enables semantic search across the vault, powered by local embeddings in the browser or the AI provider you choose. Notes never leave the device when running locally. Ships an MCP server.",
      ko: "로컬 임베딩 또는 선택한 AI 제공자로 관련 노트를 찾아내고 볼트 전체를 의미 검색합니다. 로컬로 돌리면 노트가 기기를 떠나지 않습니다. MCP 서버를 포함합니다.",
    },
    body: {
      en: [
        "As you write, the Connections view surfaces notes that are semantically related to the one you are in and updates when you move. Semantic Lookup searches the vault by meaning rather than keywords.",
        "Local embeddings are the default: Transformers.js runs in-browser with WebGPU acceleration and a WASM fallback, with multilingual models for non-English vaults. OpenAI, Gemini, Ollama, LM Studio, Upstage, and OpenRouter are available when you want them.",
        "Embeddings are cached in SQLite and re-built automatically when the model changes. Works on desktop and mobile, and listed in the community plugin directory.",
      ],
      ko: [
        "글을 쓰는 동안 Connections 뷰가 지금 노트와 의미가 닿는 노트를 보여주고, 다른 노트로 옮기면 따라 바뀝니다. Semantic Lookup은 키워드가 아니라 의미로 볼트를 검색합니다.",
        "기본은 로컬 임베딩입니다. Transformers.js가 브라우저 안에서 WebGPU 가속(WASM 대체)으로 돌아가고, 한국어 같은 비영어 볼트를 위한 다국어 모델이 있습니다. OpenAI, Gemini, Ollama, LM Studio, Upstage, OpenRouter도 원하면 쓸 수 있습니다.",
        "임베딩은 SQLite에 캐시되고 모델이 바뀌면 자동으로 다시 만듭니다. 데스크톱과 모바일에서 동작하며 커뮤니티 플러그인 디렉터리에 등록돼 있습니다.",
      ],
    },
    install: { label: "Obsidian", code: "Settings → Community plugins → Browse → \"Open Connections\" → Install → Enable" },
    facts: { en: ["Community plugin", "Local by default", "MCP server", "GPL-3.0"], ko: ["커뮤니티 플러그인", "기본은 로컬", "MCP 서버", "GPL-3.0"] },
    stats: { stars: 20, downloads: 3072, pushed: "2026-09-23" }, language: "TypeScript", license: "GPL-3.0",
    community: "open-connections",
    related: ["obsidian", "localfirst", "moc", "agents"],
  },
  {
    id: "qmd", slug: "obsidian-qmd", kind: "plugin",
    name: "Obsidian QMD",
    tagline: { en: "Local semantic search for Obsidian.", ko: "Obsidian을 위한 로컬 의미 검색." },
    summary: {
      en: "Bridges Obsidian with a local QMD daemon for fast, private semantic search: keyword, vector, hybrid, and advanced modes, a related-notes sidebar, and automatic re-indexing when notes change.",
      ko: "Obsidian과 로컬 QMD 데몬을 이어 빠르고 사적인 의미 검색을 제공합니다. 키워드·벡터·하이브리드·고급 모드, 관련 노트 사이드바, 노트가 바뀌면 자동 재색인.",
    },
    body: {
      en: [
        "All processing runs on your machine. The plugin auto-detects the QMD binary on PATH, keeps a collection in sync with the vault, and answers from a daemon that is already warm.",
        "The related-notes view stays open in the sidebar; the search modal finds notes by meaning and shows context snippets; results can be inserted into the active note as wikilinks.",
        "This is the search layer behind the author's own vault and the one that answers agents' questions about it.",
      ],
      ko: [
        "모든 처리가 내 기기에서 일어납니다. 플러그인이 PATH의 QMD 바이너리를 자동으로 찾고, 컬렉션을 볼트와 맞추고, 이미 떠 있는 데몬에서 답합니다.",
        "관련 노트 뷰는 사이드바에 늘 열려 있고, 검색 모달은 의미로 노트를 찾아 맥락 스니펫을 보여주며, 결과를 현재 노트에 위키링크로 넣을 수 있습니다.",
        "저자의 볼트 뒤에서 실제로 돌아가는 검색 계층이자, 에이전트가 볼트에 대해 묻는 질문에 답하는 계층입니다.",
      ],
    },
    install: { label: "release", code: "# Requires the qmd daemon: https://github.com/tobi/qmd\n# Download main.js, manifest.json, styles.css from the latest release into\n.obsidian/plugins/qmd/" },
    facts: { en: ["Desktop only", "4 search modes", "Auto-sync", "MIT"], ko: ["데스크톱 전용", "검색 모드 4개", "자동 동기화", "MIT"] },
    stats: { stars: 3, pushed: "2026-09-23" }, language: "TypeScript", license: "MIT",
    related: ["obsidian", "localfirst", "secondbrain", "agents"],
  },
  {
    id: "eagle", slug: "obsidian-eagle", kind: "plugin",
    name: "Eagle Integration",
    tagline: { en: "Your vault is for text. Eagle is for images.", ko: "볼트는 글을 위해, Eagle은 이미지를 위해." },
    summary: {
      en: "Paste an image into a note and it is uploaded to Eagle, your media manager, and rendered from a local cache. The vault stays small, the library stays searchable, and images keep working offline.",
      ko: "노트에 이미지를 붙여넣으면 미디어 관리자 Eagle에 올라가고 로컬 캐시에서 렌더링됩니다. 볼트는 작게, 라이브러리는 검색 가능하게, 이미지는 오프라인에서도 보이게.",
    },
    body: {
      en: [
        "Paste or drag screenshots, clips, and photos into a note or a Canvas; they upload to Eagle and render from a cached thumbnail. The same image pasted twice is reused rather than uploaded again.",
        "Folder mapping routes uploads to different Eagle folders by note location, naming templates control how files are named, and a visual search browses the whole library from inside Obsidian.",
        "Cache files restore themselves on startup, and deleting an image in Eagle evicts its cached copy. Listed in the community plugin directory.",
      ],
      ko: [
        "스크린샷, 클립, 사진을 노트나 Canvas에 붙여넣거나 끌어다 놓으면 Eagle에 올라가고 캐시된 썸네일로 렌더링됩니다. 같은 이미지를 두 번 붙여넣으면 다시 올리지 않고 재사용합니다.",
        "폴더 매핑이 노트 위치에 따라 Eagle 폴더를 나누고, 이름 템플릿이 파일 이름을 정하며, 시각 검색으로 Obsidian 안에서 라이브러리 전체를 둘러볼 수 있습니다.",
        "캐시 파일은 시작할 때 스스로 복구되고, Eagle에서 이미지를 지우면 캐시 사본도 지워집니다. 커뮤니티 플러그인 디렉터리에 등록돼 있습니다.",
      ],
    },
    install: { label: "Obsidian", code: "Settings → Community plugins → Browse → \"Eagle Integration\" → Install → Enable\n# Requires Eagle 3.0+ with its local API enabled" },
    facts: { en: ["Community plugin", "Desktop only", "Canvas support", "MIT"], ko: ["커뮤니티 플러그인", "데스크톱 전용", "Canvas 지원", "MIT"] },
    stats: { stars: 10, downloads: 2986, pushed: "2026-09-23" }, language: "TypeScript", license: "MIT",
    community: "eagle",
    related: ["obsidian", "localfirst"],
  },
  {
    id: "player", slug: "obsidian-note-player", kind: "plugin",
    name: "Note Player",
    tagline: { en: "Your notes are your playlist.", ko: "노트가 곧 플레이리스트." },
    summary: {
      en: "Turn any note into a music playlist. Add YouTube links or local files with Obsidian's embed syntax, play them as audio inside the vault, and keep the music library where the knowledge lives.",
      ko: "어떤 노트든 음악 플레이리스트로. Obsidian 임베드 문법으로 YouTube 링크나 로컬 파일을 넣고, 볼트 안에서 오디오로 재생하며, 음악 라이브러리를 지식 옆에 둡니다.",
    },
    body: {
      en: [
        "Playlists are just Markdown notes. Add URLs, organize them with your own metadata, and play them without leaving Obsidian. The player is audio-only on purpose.",
        "Audio is downloaded and cached locally with yt-dlp, so playback is instant and works offline. The current queue survives between sessions, and companion Bases views organize the library.",
      ],
      ko: [
        "플레이리스트는 그냥 Markdown 노트입니다. URL을 넣고, 당신의 메타데이터로 정리하고, Obsidian을 떠나지 않고 재생합니다. 플레이어는 일부러 오디오 전용입니다.",
        "오디오는 yt-dlp로 내려받아 로컬에 캐시하므로 재생이 즉시 되고 오프라인에서도 됩니다. 재생 대기열은 세션이 바뀌어도 남고, 동반 Bases 뷰가 라이브러리를 정리합니다.",
      ],
    },
    install: { label: "release", code: "brew install yt-dlp\n# Download main.js, manifest.json, styles.css from the latest release into\n.obsidian/plugins/obsidian-note-player/" },
    facts: { en: ["Desktop only", "yt-dlp", "Local cache", "MIT"], ko: ["데스크톱 전용", "yt-dlp", "로컬 캐시", "MIT"] },
    stats: { stars: 2, pushed: "2026-09-23" }, language: "TypeScript", license: "MIT",
    related: ["obsidian", "localfirst"],
  },
  {
    id: "bible", slug: "obsidian-bible-search", kind: "plugin",
    name: "Bible Search",
    tagline: { en: "Korean and English verses, side by side.", ko: "한국어와 영어 성경 구절을 나란히." },
    summary: {
      en: "Search Bible verses by book, chapter, and range in Korean or English and insert them into a note with a configurable template. Dual-language output, multiple versions, verse caching.",
      ko: "책·장·절 범위로 한국어 또는 영어 성경 구절을 찾아 설정 가능한 템플릿으로 노트에 넣습니다. 두 언어 동시 출력, 여러 역본, 구절 캐시.",
    },
    body: {
      en: [
        "A verse search modal takes a book, chapter, and verse range and inserts the result where the cursor is. Template variables control the layout, so a verse can land as a callout, a quote, or a table row.",
        "Not published to the community directory because of licensing on Bible text. Build locally and copy the plugin into the vault.",
      ],
      ko: [
        "구절 검색 모달에 책, 장, 절 범위를 넣으면 커서 위치에 결과가 들어갑니다. 템플릿 변수로 배치를 정하므로 콜아웃, 인용, 표 행 어디로든 넣을 수 있습니다.",
        "성경 본문 저작권 때문에 커뮤니티 디렉터리에는 올리지 않았습니다. 로컬에서 빌드해 볼트에 복사합니다.",
      ],
    },
    install: { label: "shell", code: "pnpm build\ncp main.js manifest.json \"$OBSIDIAN_VAULT_PATH/.obsidian/plugins/obsidian-bible-search/\"" },
    facts: { en: ["KO / EN", "Template output", "Not in directory", "MIT"], ko: ["한국어 / 영어", "템플릿 출력", "디렉터리 미등록", "MIT"] },
    stats: { stars: 0, pushed: "2026-09-23" }, language: "TypeScript", license: "MIT",
    related: ["obsidian"],
  },
  {
    id: "ohermes", slug: "obsidian-hermes", kind: "plugin",
    name: "Obsidian Hermes",
    tagline: { en: "See what your agents are scheduled to do.", ko: "에이전트가 무엇을 하기로 돼 있는지 보기." },
    summary: {
      en: "View the cron schedules of remote Hermes agents and edit their profile documents over SSH, from inside Obsidian.",
      ko: "원격 Hermes 에이전트의 cron 일정을 보고 프로필 문서를 SSH로 편집합니다. Obsidian 안에서.",
    },
    body: {
      en: [
        "Hermes agents run on their own hosts with schedules and profile documents that define what they do. This plugin reads those schedules over SSH and shows them in a vault view, and lets the operator edit the profile documents from the same editor they write notes in.",
        "It exists because an agent with an owner needs an owner who can see the agent. Early and personal; the README is still being written.",
      ],
      ko: [
        "Hermes 에이전트는 각자의 호스트에서 일정과 프로필 문서에 따라 돌아갑니다. 이 플러그인은 그 일정을 SSH로 읽어 볼트 뷰에 보여주고, 운영자가 노트를 쓰는 편집기에서 프로필 문서를 고치게 합니다.",
        "주인이 있는 에이전트에는 에이전트를 볼 수 있는 주인이 필요해서 만들었습니다. 초기 단계의 개인 도구이고, README는 아직 쓰는 중입니다.",
      ],
    },
    install: { label: "shell", code: "git clone https://github.com/Xia-Ataraxia/obsidian-hermes\ncd obsidian-hermes && npm install && npm run build" },
    facts: { en: ["SSH", "Cron view", "Profile editor", "Early"], ko: ["SSH", "Cron 보기", "프로필 편집", "초기 단계"] },
    stats: { stars: 0, pushed: "2026-09-23" }, language: "TypeScript", license: null,
    related: ["hermes", "agents", "obsidian", "boundaries"],
  },

  {
    id: "qgl", slug: "quartz-graph-landing", kind: "publishing",
    name: "Quartz Graph Landing",
    tagline: { en: "The constellation you are looking at.", ko: "지금 보고 있는 그 별자리." },
    summary: {
      en: "A Quartz v5 plugin that turns a digital garden's front page into a full-viewport 2D/3D knowledge-graph constellation. Reads the stock content index; no other plugin required.",
      ko: "디지털 가든의 첫 페이지를 전체 화면 2D/3D 지식 그래프 별자리로 바꾸는 Quartz v5 플러그인. 기본 콘텐츠 인덱스를 읽으므로 다른 플러그인이 필요 없습니다.",
    },
    body: {
      en: [
        "Every published note becomes a node and every wikilink an edge. The visitor orbits the whole garden before reading a single page, and clicking a node opens the note.",
        "Options cover 2D or 3D rendering, label density, colors, and an optional multilingual graph index for gardens published in more than one language. Defaults reproduce the plugin's original behavior exactly.",
        "The hero of this website is a lean rebuild of the same idea with the same three.js and 3d-force-graph versions.",
      ],
      ko: [
        "공개된 모든 노트가 노드가 되고 모든 위키링크가 선이 됩니다. 방문자는 한 페이지를 읽기 전에 정원 전체를 돌려보고, 노드를 누르면 그 노트가 열립니다.",
        "옵션으로 2D/3D 렌더링, 라벨 밀도, 색, 다국어 정원을 위한 그래프 인덱스를 정할 수 있습니다. 기본값은 플러그인의 원래 동작을 그대로 재현합니다.",
        "이 웹사이트의 히어로는 같은 three.js와 3d-force-graph 버전으로 같은 아이디어를 가볍게 다시 만든 것입니다.",
      ],
    },
    install: { label: "quartz.config.ts", code: "- source: github:Xia-Ataraxia/quartz-graph-landing\n  enabled: true\n  options:\n    indexSource: contentIndex" },
    facts: { en: ["Quartz v5", "2D / 3D", "Stock content index", "MIT"], ko: ["Quartz v5", "2D / 3D", "기본 콘텐츠 인덱스", "MIT"] },
    stats: { stars: 1, pushed: "2026-09-23" }, language: "TypeScript", license: "MIT",
    related: ["quartz", "obsidian", "moc", "garden"],
  },
];

export const KIND_LABEL = {
  foundation: { en: "Foundations", ko: "기반" },
  plugin: { en: "Obsidian plugins", ko: "Obsidian 플러그인" },
  publishing: { en: "Publishing", ko: "퍼블리싱" },
};
