// Open-source projects under github.com/Xia-Ataraxia.
// Stats were read from the GitHub API and the Obsidian community plugin registry on 2026-10-07.
// Shared by the home page graph, the work cards, and scripts/build.mjs (which writes /work/<slug>/).
export const REPOS = [
  {
    id: "omsb", slug: "oh-my-second-brain", kind: "foundation",
    name: "Oh My Second Brain",
    tagline: { en: "A constellation of knowledge, still yours.", ko: "지식의 별자리, 여전히 내 것." },
    summary: {
      en: "A user-owned knowledge and convention layer for Obsidian, Markdown, and AI agents. Your agents find what your vault already knows and write within the conventions you defined.",
      ko: "Obsidian과 Markdown, AI 에이전트를 위한 사용자 소유의 지식·규약 계층. 에이전트가 볼트에 이미 있는 지식을 찾고, 내가 정한 규약 안에서 쓴다.",
    },
    body: {
      en: [
        "Your vault already holds ideas, decisions, and things you learned. OMS helps your agents find that knowledge and write within the conventions you defined. Obsidian stays the command center, and your notes stay plain Markdown.",
        "Recall starts with lexical retrieval and adds vector search, HyDE, query expansion, or reranking only when you ask for them. Writing goes through a contract: you define what your folders and properties mean, and supported write paths check that contract and report what they did.",
        "Search and status commands stay read-only. Index maintenance is explicit. Nothing moves your notes for you.",
      ],
      ko: [
        "볼트에는 이미 아이디어와 결정, 배운 것이 들어 있다. OMS는 에이전트가 그 지식을 찾고, 내가 정한 규약 안에서 쓰도록 돕는다. Obsidian은 지휘소로, 노트는 평범한 Markdown으로 남는다.",
        "검색은 키워드 검색에서 시작하고, 벡터 검색·HyDE·쿼리 확장·리랭킹은 필요할 때만 켠다. 쓰기는 계약을 거친다. 폴더와 속성이 무엇을 뜻하는지 내가 정해 두면, 쓰기 경로가 그 계약을 확인하고 결과를 보고한다.",
        "검색과 상태 명령은 읽기 전용이다. 인덱스는 명시적으로 요청할 때만 손댄다. 노트를 대신 옮기는 일은 없다.",
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
      ko: "PARA 구조, 제텔카스텐식 사고, 기간별 계획, 그리고 사람과 AI 에이전트가 함께 쓰는 규칙. 내려받아 새 볼트로 열고 Markdown을 쓰면 된다.",
    },
    body: {
      en: [
        "Start with a working structure instead of someone else's personal notes. Twelve numbered roots give every note exactly one home: capture goes to Inbox, originals to Raw, interpretations to Literature Notes, self-contained ideas to Permanent Notes, and owned work to Projects and Areas.",
        "Templater builds year, quarter, month, week, and day notes on demand, and Bases tables inside the period templates show what is due. Nested AGENTS.md files describe the same rules to AI agents that the guidelines describe to you, so an agent filing a note follows the same placement a person would.",
        "It is a filing model, not an automatic pipeline. Nothing moves notes for you, and personal notes, credentials, and machine state are not included.",
      ],
      ko: [
        "남의 개인 노트가 아니라, 실제로 돌아가는 구조에서 시작한다. 번호가 붙은 열두 개의 루트 폴더가 모든 노트에 집을 딱 하나씩 준다. 수집한 것은 Inbox, 원본은 Raw, 해석은 Literature Notes, 독립된 생각은 Permanent Notes, 책임이 있는 일은 Projects와 Areas로 간다.",
        "Templater가 연·분기·월·주·일 노트를 필요한 순간에 만들고, 기간 템플릿 안의 Bases 표가 마감을 보여 준다. 폴더마다 둔 AGENTS.md가 가이드라인과 같은 규칙을 AI 에이전트에게 설명하므로, 에이전트도 사람이 둘 자리에 노트를 둔다.",
        "자동 파이프라인이 아니라 정리 방식이다. 노트를 대신 옮기지 않고, 개인 노트와 자격 증명, 기기 상태는 들어 있지 않다.",
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
    tagline: { en: "Own your craft, vendor-neutral.", ko: "내 기술은 내 것. 어느 벤더에도 묶이지 않게." },
    summary: {
      en: "Forty-eight Agent Skills for software and research work in the plain SKILL.md layout. The portable core has no runtime-specific behavior; Claude Code, Codex, Hermes, Cursor, and Grok integration lives in thin adapters.",
      ko: "소프트웨어 개발과 연구를 위한 Agent Skill 48개. 평범한 SKILL.md 구조다. 어디로든 옮길 수 있는 코어에는 런타임에 묶인 동작이 없고, Claude Code·Codex·Hermes·Cursor·Grok 연동은 얇은 어댑터에만 둔다.",
    },
    body: {
      en: [
        "A task-oriented library: debug, refactor, research, security, tdd, git, write-prd, blast-radius, and forty more. Each is a self-contained SKILL.md an agent loads when the task calls for it.",
        "The library is deliberately separate from personal and second-brain automation so the two domains never bleed into each other. Principles for architecture, backend, frontend, programming, and testing sit next to the playbooks that use them.",
        "Skills like unslop, reflect, and correct exist because an agent that writes should also be able to remove its own tells, learn from a session, and make a correction stick in the repository.",
      ],
      ko: [
        "작업 단위로 묶은 라이브러리다. debug, refactor, research, security, tdd, git, write-prd, blast-radius 등 48개. 하나하나가 독립된 SKILL.md라서, 에이전트는 그 작업에 필요한 것만 불러온다.",
        "개인 세컨드 브레인 자동화와는 일부러 떼어 놓아 두 영역이 섞이지 않게 했다. 아키텍처·백엔드·프론트엔드·프로그래밍·테스트 원칙이 그것을 쓰는 플레이북 바로 옆에 있다.",
        "unslop, reflect, correct 같은 스킬을 둔 이유는 간단하다. 글을 쓰는 에이전트라면 자기 티를 지우고, 세션에서 배우고, 고친 것을 저장소에 남길 수 있어야 하기 때문이다.",
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
      ko: "Obsidian 볼트를 위한 독립 Agent Skill 20개. 형식을 맡는 9개(Markdown, Bases, Canvas, Mermaid, CLI, Clipper, Sync)와 수집·적재·질의·검증 파이프라인을 맡는 11개다.",
    },
    body: {
      en: [
        "A wikilink question goes to obsidian-markdown; a .canvas graph goes to obsidian-canvas. No package silently answers for another, so every answer is auditable. There is no root skill, no dispatcher, and no shared runtime.",
        "Knowing a format never authorizes a write. Each package requires an exact destination, an authorized effect, and a readback from the path that was actually changed. A parse is not a render, a file on disk is not proof the app indexed it, and an exit code is not proof of a write.",
        "Partial edits preserve non-target notes, frontmatter, IDs, and attachments, and say so with hashes rather than assurance.",
      ],
      ko: [
        "위키링크에 관한 질문은 obsidian-markdown이, .canvas 그래프는 obsidian-canvas가 맡는다. 어떤 패키지도 남의 영역을 몰래 대신 답하지 않으니 모든 답을 검증할 수 있다. 루트 스킬도, 디스패처도, 공유 런타임도 없다.",
        "형식을 안다고 쓰기 권한이 생기지는 않는다. 각 패키지는 정확한 목적지, 허가된 효과, 그리고 실제로 바뀐 경로를 다시 읽어 확인하는 절차를 요구한다. 파싱은 렌더링이 아니고, 디스크에 있는 파일이 앱이 색인했다는 증거는 아니며, 종료 코드가 썼다는 증거도 아니다.",
        "부분 수정은 대상이 아닌 노트와 frontmatter, ID, 첨부를 그대로 두고, 그 사실을 말이 아니라 해시로 증명한다.",
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
    tagline: { en: "Tags and frontmatter, written by the model you choose.", ko: "태그와 frontmatter를, 내가 고른 모델이 쓴다." },
    summary: {
      en: "An Obsidian plugin that analyzes a note and generates tags and frontmatter values with a configurable AI provider. Define any field, add rules and per-field context, preview before applying.",
      ko: "노트를 읽고, 설정한 AI 제공자로 태그와 frontmatter 값을 만들어 주는 Obsidian 플러그인. 어떤 필드든 정의하고, 규칙과 필드별 맥락을 더하고, 적용하기 전에 미리 본다.",
    },
    body: {
      en: [
        "Open a note, run one command, and the plugin proposes tags and fills the frontmatter fields you defined. Classification rules, tag categories, and per-field context prompts steer the model; the more context you give, the more accurate the result.",
        "Built-in presets cover OpenAI, Anthropic, Gemini, OpenRouter, Ollama, DeepSeek, LM Studio, and Codex, plus any custom provider. A preview mode shows the proposed changes before anything is written to the note.",
        "Listed in the Obsidian community plugin directory.",
      ],
      ko: [
        "노트를 열고 명령 하나를 실행하면 플러그인이 태그를 제안하고, 내가 정의한 frontmatter 필드를 채운다. 분류 규칙과 태그 범주, 필드별 맥락 프롬프트가 모델을 이끈다. 맥락을 많이 줄수록 결과가 정확해진다.",
        "OpenAI, Anthropic, Gemini, OpenRouter, Ollama, DeepSeek, LM Studio, Codex 프리셋이 들어 있고, 직접 제공자를 추가할 수도 있다. 미리보기 모드는 노트에 쓰기 전에 바뀔 내용을 보여 준다.",
        "Obsidian 커뮤니티 플러그인 디렉터리에 등록돼 있다.",
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
      ko: "로컬 임베딩이나 선택한 AI 제공자로 관련 노트를 찾고 볼트 전체를 의미로 검색한다. 로컬로 돌리면 노트가 기기 밖으로 나가지 않는다. MCP 서버도 들어 있다.",
    },
    body: {
      en: [
        "As you write, the Connections view surfaces notes that are semantically related to the one you are in and updates when you move. Semantic Lookup searches the vault by meaning rather than keywords.",
        "Local embeddings are the default: Transformers.js runs in-browser with WebGPU acceleration and a WASM fallback, with multilingual models for non-English vaults. OpenAI, Gemini, Ollama, LM Studio, Upstage, and OpenRouter are available when you want them.",
        "Embeddings are cached in SQLite and re-built automatically when the model changes. Works on desktop and mobile, and listed in the community plugin directory.",
      ],
      ko: [
        "글을 쓰는 동안 Connections 뷰가 지금 노트와 뜻이 닿는 노트를 보여 주고, 다른 노트로 옮겨 가면 따라서 바뀐다. Semantic Lookup은 키워드가 아니라 의미로 볼트를 검색한다.",
        "기본은 로컬 임베딩이다. Transformers.js가 WebGPU 가속(없으면 WASM)으로 돌아가고, 한국어처럼 영어가 아닌 볼트를 위한 다국어 모델도 있다. 원하면 OpenAI, Gemini, Ollama, LM Studio, Upstage, OpenRouter를 쓸 수 있다.",
        "임베딩은 SQLite에 캐시하고, 모델이 바뀌면 자동으로 다시 만든다. 데스크톱과 모바일에서 모두 돌아가며 커뮤니티 플러그인 디렉터리에 등록돼 있다.",
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
      ko: "Obsidian을 로컬 QMD 데몬에 이어 빠르고 사적인 의미 검색을 제공한다. 키워드·벡터·하이브리드·고급 모드, 관련 노트 사이드바, 노트가 바뀌면 자동 재색인.",
    },
    body: {
      en: [
        "All processing runs on your machine. The plugin auto-detects the QMD binary on PATH, keeps a collection in sync with the vault, and answers from a daemon that is already warm.",
        "The related-notes view stays open in the sidebar; the search modal finds notes by meaning and shows context snippets; results can be inserted into the active note as wikilinks.",
        "This is the search layer behind the author's own vault and the one that answers agents' questions about it.",
      ],
      ko: [
        "모든 처리는 내 기기 안에서 끝난다. 플러그인이 PATH에서 QMD 바이너리를 찾고, 컬렉션을 볼트에 맞추고, 이미 떠 있는 데몬에서 답을 받는다.",
        "관련 노트 뷰는 사이드바에 늘 열려 있고, 검색 모달은 의미로 노트를 찾아 앞뒤 맥락을 보여 주며, 결과를 지금 노트에 위키링크로 넣을 수 있다.",
        "만든 사람의 볼트 뒤에서 실제로 돌아가는 검색 계층이자, 에이전트가 볼트에 대해 물을 때 답하는 계층이다.",
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
      ko: "노트에 이미지를 붙여 넣으면 미디어 관리자 Eagle로 올라가고, 로컬 캐시에서 그려진다. 볼트는 가볍게, 라이브러리는 검색되게, 이미지는 오프라인에서도 보이게.",
    },
    body: {
      en: [
        "Paste or drag screenshots, clips, and photos into a note or a Canvas; they upload to Eagle and render from a cached thumbnail. The same image pasted twice is reused rather than uploaded again.",
        "Folder mapping routes uploads to different Eagle folders by note location, naming templates control how files are named, and a visual search browses the whole library from inside Obsidian.",
        "Cache files restore themselves on startup, and deleting an image in Eagle evicts its cached copy. Listed in the community plugin directory.",
      ],
      ko: [
        "스크린샷이나 클립, 사진을 노트나 Canvas에 붙여 넣거나 끌어다 놓으면 Eagle에 올라가고, 캐시한 썸네일로 보인다. 같은 이미지를 또 붙여 넣으면 다시 올리지 않고 그대로 쓴다.",
        "폴더 매핑이 노트 위치에 따라 Eagle 폴더를 나누고, 이름 템플릿이 파일 이름을 정하며, 이미지 검색으로 Obsidian 안에서 라이브러리 전체를 둘러볼 수 있다.",
        "캐시 파일은 시작할 때 스스로 복구되고, Eagle에서 이미지를 지우면 캐시 사본도 함께 지워진다. 커뮤니티 플러그인 디렉터리에 등록돼 있다.",
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
      ko: "어떤 노트든 플레이리스트가 된다. Obsidian 임베드 문법으로 YouTube 링크나 로컬 파일을 넣고, 볼트 안에서 소리만 재생하며, 음악 라이브러리를 지식 곁에 둔다.",
    },
    body: {
      en: [
        "Playlists are just Markdown notes. Add URLs, organize them with your own metadata, and play them without leaving Obsidian. The player is audio-only on purpose.",
        "Audio is downloaded and cached locally with yt-dlp, so playback is instant and works offline. The current queue survives between sessions, and companion Bases views organize the library.",
      ],
      ko: [
        "플레이리스트는 그냥 Markdown 노트다. URL을 넣고, 내 방식대로 메타데이터를 달고, Obsidian을 떠나지 않은 채 재생한다. 플레이어는 일부러 소리만 낸다.",
        "오디오는 yt-dlp로 내려받아 로컬에 캐시하므로 바로 재생되고 오프라인에서도 들린다. 재생 대기열은 세션이 바뀌어도 남고, 함께 딸린 Bases 뷰가 라이브러리를 정리한다.",
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
      ko: "책·장·절 범위로 한국어나 영어 성경 구절을 찾아, 원하는 템플릿으로 노트에 넣는다. 두 언어 동시 출력, 여러 역본, 구절 캐시.",
    },
    body: {
      en: [
        "A verse search modal takes a book, chapter, and verse range and inserts the result where the cursor is. Template variables control the layout, so a verse can land as a callout, a quote, or a table row.",
        "Not published to the community directory because of licensing on Bible text. Build locally and copy the plugin into the vault.",
      ],
      ko: [
        "검색 모달에 책, 장, 절 범위를 넣으면 커서 자리에 결과가 들어간다. 템플릿 변수로 모양을 정하니 콜아웃, 인용, 표 행 어디로든 넣을 수 있다.",
        "성경 본문의 저작권 때문에 커뮤니티 디렉터리에는 올리지 않았다. 직접 빌드해 볼트에 복사하면 된다.",
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
    tagline: { en: "See what your agents are scheduled to do.", ko: "에이전트가 언제 무엇을 하는지 한눈에." },
    summary: {
      en: "View the cron schedules of remote Hermes agents and edit their profile documents over SSH, from inside Obsidian.",
      ko: "원격 Hermes 에이전트의 cron 일정을 보고, 프로필 문서를 SSH로 고친다. 전부 Obsidian 안에서.",
    },
    body: {
      en: [
        "Hermes agents run on their own hosts with schedules and profile documents that define what they do. This plugin reads those schedules over SSH and shows them in a vault view, and lets the operator edit the profile documents from the same editor they write notes in.",
        "It exists because an agent with an owner needs an owner who can see the agent. Early and personal; the README is still being written.",
      ],
      ko: [
        "Hermes 에이전트는 각자의 호스트에서 일정과 프로필 문서에 따라 돌아간다. 이 플러그인은 그 일정을 SSH로 읽어 볼트 뷰에 보여 주고, 운영자가 노트를 쓰던 편집기 그대로 프로필 문서를 고치게 한다.",
        "주인이 있는 에이전트에는 에이전트를 들여다볼 수 있는 주인이 있어야 해서 만들었다. 아직 초기 단계의 개인 도구이고, README는 쓰는 중이다.",
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
      ko: "디지털 가든의 첫 화면을 전체 화면 2D/3D 지식 그래프 별자리로 바꾸는 Quartz v5 플러그인. 기본 콘텐츠 인덱스를 그대로 읽으니 다른 플러그인은 필요 없다.",
    },
    body: {
      en: [
        "Every published note becomes a node and every wikilink an edge. The visitor orbits the whole garden before reading a single page, and clicking a node opens the note.",
        "Options cover 2D or 3D rendering, label density, colors, and an optional multilingual graph index for gardens published in more than one language. Defaults reproduce the plugin's original behavior exactly.",
        "The hero of this website is a lean rebuild of the same idea with the same three.js and 3d-force-graph versions.",
      ],
      ko: [
        "공개한 노트는 모두 점이 되고 위키링크는 모두 선이 된다. 방문자는 글 한 편을 읽기 전에 정원 전체를 돌려 보고, 점을 누르면 그 노트가 열린다.",
        "옵션으로 2D/3D 렌더링, 라벨 밀도, 색, 다국어 정원용 그래프 인덱스를 정할 수 있다. 기본값은 플러그인의 원래 동작을 그대로 따른다.",
        "이 웹사이트의 첫 화면은 같은 three.js와 3d-force-graph 버전으로 같은 아이디어를 가볍게 다시 만든 것이다.",
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
