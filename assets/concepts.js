// Nodes of the constellation that are not repositories: hubs, ideas from the Ataraxia vault, and principles.
// Every node is real. `source` names the vault note the idea comes from; `related` draws the edges.
// Shared by assets/main.js (graph + panel) and scripts/build.mjs (chips on subpages).
export const CONCEPTS = [
  /* ---------- hubs ---------- */
  {
    id: "xia", group: "hub", anchor: "#top",
    label: { en: "XIA", ko: "XIA" },
    summary: {
      en: "A small lab that makes Ataraxia operational: knowledge infrastructure, agents with an owner, and the defense of cognitive resources.",
      ko: "아타락시아를 작동하게 만드는 작은 연구소. 지식 인프라, 주인이 있는 에이전트, 인지 자원의 방어를 다룹니다.",
    },
    related: ["knowledge", "agents", "attention", "ataraxia", "oss", "intent", "beomsu"],
  },
  {
    id: "knowledge", group: "hub", anchor: "#vision",
    label: { en: "Knowledge management", ko: "지식 관리" },
    summary: {
      en: "Knowledge management is what lets you keep doing the work you want to do. A second brain collects the resonance in your own mind, not the internet's.",
      ko: "지식 관리는 원하는 일을 지속하게 합니다. 세컨드 브레인은 인터넷의 공명이 아니라 내 마음속의 공명을 모읍니다.",
    },
    source: { en: "Knowledge management lets you keep doing what you want", ko: "지식 관리는 원하는 일을 지속하게 한다" },
    related: ["secondbrain", "obsidian", "para", "zettel", "localfirst", "moc", "daily", "quartz", "resonance"],
  },
  {
    id: "agents", group: "hub", anchor: "#vision",
    label: { en: "AI agents", ko: "AI 에이전트" },
    summary: {
      en: "An agent is not a model. It is a model plus an identity, rules of conduct, tools, and an owner who can inspect what it did. We build the parts around the model.",
      ko: "에이전트는 모델 하나가 아닙니다. 모델에 정체성과 행동 규범, 도구, 그리고 결과를 검사할 수 있는 주인이 더해진 것입니다. 우리는 모델 주변의 부품을 만듭니다.",
    },
    source: { en: "An agent is not a single model", ko: "Agent는 Model 하나가 아니다" },
    related: ["hermes", "claudecode", "codex", "skills", "receipts", "evidence", "boundaries", "records", "energy"],
  },
  {
    id: "attention", group: "hub", anchor: "#vision",
    label: { en: "Cognitive resources", ko: "인지 자원" },
    summary: {
      en: "Attention and the capacity to think are finite and are being taken. Giving them back to their owner is the purpose this whole lab exists for.",
      ko: "주의와 생각할 여력은 유한하고, 지금도 탈취되고 있습니다. 그것을 주인에게 돌려주는 일이 이 연구소가 존재하는 목적입니다.",
    },
    source: { en: "I want to protect the cognitive resources being taken", ko: "탈취당하는 인지 자원을 지켜주고 싶다" },
    related: ["intent", "focus", "calm", "deepwork", "economy", "choice", "noise", "gap", "energy"],
  },
  {
    id: "ataraxia", group: "hub", anchor: "#ataraxia",
    label: { en: "Ataraxia", ko: "아타락시아" },
    summary: {
      en: "The old word for an untroubled mind, and the name of the vault this lab grew out of. Not retreat from the world, but refusing to let the world decide where thinking goes.",
      ko: "흔들리지 않는 마음을 뜻하는 오래된 말이자, 이 연구소가 자라난 볼트의 이름. 세상에서 물러나는 것이 아니라, 생각이 갈 곳을 세상이 정하게 두지 않는 것입니다.",
    },
    source: { en: "Why is my Obsidian vault named Ataraxia", ko: "왜 나의 Obsidian vault 이름은 Ataraxia일까" },
    related: ["ivory", "purity", "stillness", "truth", "beomsu", "calm"],
  },
  {
    id: "oss", group: "hub", anchor: "#work",
    label: { en: "Open source", ko: "오픈소스" },
    summary: {
      en: "Twelve repositories under github.com/Xia-Ataraxia. Tools we build for ourselves first, then choose to share: vault conventions, Obsidian plugins, agent skills, and a publishing layer.",
      ko: "github.com/Xia-Ataraxia 아래 열두 개의 저장소. 먼저 우리가 쓰려고 만들고, 그다음 공유하기로 한 도구들입니다. 볼트 규약, Obsidian 플러그인, 에이전트 스킬, 발행 계층.",
    },
    related: ["omsb", "vault", "craft", "sbskills", "mac", "qmd", "oc", "eagle", "player", "bible", "ohermes", "qgl"],
  },

  /* ---------- ideas: intent and attention ---------- */
  {
    id: "intent", group: "concept", anchor: "#vision",
    label: { en: "Intent", ko: "의도" },
    summary: {
      en: "Technology amplifies intent. That is why Instagram has no exit button, and why a feature matters less than whose intent it amplifies, and for whom.",
      ko: "기술은 의도를 증폭시킵니다. 인스타그램에 종료 버튼이 없는 이유이고, 기능 자체보다 어떤 의도를 누구를 위해 증폭하는지가 중요한 이유입니다.",
    },
    source: { en: "All technology amplifies intent", ko: "All technology amplifies intent" },
    related: ["attention", "choice", "control", "beomsu", "economy"],
  },
  {
    id: "economy", group: "concept", anchor: "#vision",
    label: { en: "Attention economy", ko: "주의력 경제" },
    summary: {
      en: "Eleven hours and six minutes a day of attention is not free. When a product is free, someone is paying with the user's capacity to think.",
      ko: "하루 11시간 6분의 주의는 공짜가 아닙니다. 제품이 무료라면 누군가는 사용자의 생각할 여력으로 값을 치르고 있습니다.",
    },
    source: { en: "The Comfort Crisis (reading note)", ko: "편안함의 습격" },
    related: ["attention", "noise", "intent", "fakeflow"],
  },
  {
    id: "noise", group: "concept", anchor: "#vision",
    label: { en: "Noise", ko: "소음" },
    summary: {
      en: "Most of what competes for attention is not hostile, just loud. Simply detaching the nodes you never needed to be close to lets you think the thoughts you meant to think.",
      ko: "주의를 두고 다투는 것 대부분은 적대적이지 않고 그저 시끄러울 뿐입니다. 가까워질 필요가 없던 노드를 떼어내는 것만으로도 생각하고 싶은 것을 생각하며 살 수 있습니다.",
    },
    source: { en: "Daily note, 2025-06-15", ko: "2025-06-15 데일리 노트" },
    related: ["attention", "calm", "economy", "p1"],
  },
  {
    id: "fakeflow", group: "concept", anchor: "#vision",
    label: { en: "False flow", ko: "가짜 몰입" },
    summary: {
      en: "Feeds hijack the flow circuit: immersion without achievement. Four in the morning on an algorithm is not focus, it is focus stolen and spent elsewhere.",
      ko: "피드는 몰입 회로를 조작합니다. 몰입은 하되 성취가 없는 가짜 몰입. 알고리즘 속에서 맞은 새벽 4시는 집중이 아니라, 훔쳐서 다른 데 써버린 집중입니다.",
    },
    source: { en: "The gap in thinking", ko: "생각의 틈" },
    related: ["economy", "focus", "gap", "deepwork"],
  },
  {
    id: "gap", group: "concept", anchor: "#vision",
    label: { en: "Gaps for thinking", ko: "생각의 틈" },
    summary: {
      en: "A night walk, a look at the sky, and the floating thoughts settle. We absorb a great deal and rarely leave a gap to digest it. Good tools leave the gap open.",
      ko: "밤 산책, 하늘을 올려다보는 순간, 떠다니던 생각이 정리됩니다. 많이 삼키지만 소화할 틈은 거의 두지 않습니다. 좋은 도구는 그 틈을 비워 둡니다.",
    },
    source: { en: "The gap in thinking", ko: "생각의 틈" },
    related: ["attention", "fakeflow", "stillness", "calm"],
  },
  {
    id: "focus", group: "concept", anchor: "#vision",
    label: { en: "Focus", ko: "집중" },
    summary: {
      en: "Focus is keeping the flow of a thought alive. Pay attention is a rule for living, not a productivity tip.",
      ko: "집중은 생각의 플로우를 유지하는 행위입니다. 주의를 기울이라는 말은 생산성 팁이 아니라 삶의 규칙입니다.",
    },
    source: { en: "12 Rules for Life, rule 4", ko: "12가지 인생의 법칙, 법칙 4" },
    related: ["attention", "deepwork", "fakeflow", "control"],
  },
  {
    id: "deepwork", group: "concept", anchor: "#vision",
    label: { en: "Deep work", ko: "딥 워크" },
    summary: {
      en: "Jung built a stone tower by the lake to think. Busyness is not useful effort, and depth needs a place the world cannot interrupt.",
      ko: "융은 생각하기 위해 호숫가에 돌탑을 지었습니다. 바쁨은 유용한 노력이 아니고, 깊이에는 세상이 끼어들 수 없는 자리가 필요합니다.",
    },
    source: { en: "Deep Work · Slow Productivity (reading notes)", ko: "딥 워크 · 슬로우 워크" },
    related: ["focus", "ivory", "calm", "attention"],
  },
  {
    id: "calm", group: "concept", anchor: "#principles",
    label: { en: "Calm", ko: "고요" },
    summary: {
      en: "Fewer surfaces, clearer ownership, less background hum. Calm is a design target, not a mood.",
      ko: "더 적은 화면, 더 분명한 소유, 더 적은 배경 소음. 고요는 기분이 아니라 설계 목표입니다.",
    },
    related: ["p1", "noise", "stillness", "attention"],
  },
  {
    id: "choice", group: "concept", anchor: "#vision",
    label: { en: "Choice", ko: "선택" },
    summary: {
      en: "Good technology helps a person choose where their own cognitive resources go. A blocklist is crude; a tool that understands your intent is not.",
      ko: "좋은 기술은 사람이 자신의 인지 자원을 어디에 쓸지 스스로 선택하게 돕습니다. 차단 목록은 투박하지만, 의도를 이해하는 도구는 그렇지 않습니다.",
    },
    source: { en: "Idea: a cognitive-resource protection service", ko: "인지 자원 보호 서비스 아이디어" },
    related: ["intent", "attention", "control", "energy"],
  },
  {
    id: "control", group: "concept", anchor: "#vision",
    label: { en: "Cognitive control", ko: "인지적 통제" },
    summary: {
      en: "Using technology with good intent, to change yourself for the better, requires cognitive control. Like a Jarvis that says: enough YouTube, go run.",
      ko: "선한 의도로, 나를 더 낫게 바꾸려고 기술을 쓰려면 인지적 통제가 필요합니다. 유튜브는 그만 보고 뛰라고 말해 주는 자비스처럼요.",
    },
    source: { en: "All technology amplifies intent", ko: "All technology amplifies intent" },
    related: ["intent", "choice", "focus", "agents"],
  },
  {
    id: "energy", group: "concept", anchor: "#vision",
    label: { en: "Energy to use AI well", ko: "AI를 잘 쓸 에너지" },
    summary: {
      en: "To use a good tool well, the user needs energy left over. Designing is also energy. Nobody makes good decisions twenty-four hours a day, so the tool must not drain the person it serves.",
      ko: "좋은 도구를 좋게 쓰려면 사용자에게도 에너지가 남아 있어야 합니다. 설계를 하는 것도 에너지입니다. 24시간 좋은 결정을 내릴 수 있는 사람은 없으니, 도구가 섬기는 사람을 소진시켜서는 안 됩니다.",
    },
    source: { en: "To use good AI well, the user needs energy left to use it", ko: "좋은 AI를 잘 쓰려면 사용자에게 그 AI를 잘 쓸 에너지가 남아있어야 한다" },
    related: ["attention", "choice", "agents", "p4"],
  },

  /* ---------- ideas: knowledge ---------- */
  {
    id: "secondbrain", group: "concept", anchor: "#vision",
    label: { en: "Second brain", ko: "세컨드 브레인" },
    summary: {
      en: "A second brain collects the resonance in your own mind. Not everything you read, only what rang when you read it, kept where your future self can find it.",
      ko: "세컨드 브레인은 내 마음속의 공명을 수집하는 것입니다. 읽은 모든 것이 아니라 읽을 때 울린 것만, 미래의 내가 찾을 수 있는 곳에 둡니다.",
    },
    source: { en: "A second brain collects the resonance in my mind", ko: "세컨드 브레인은 ‘내 마음속의 공명’을 수집하는 것" },
    related: ["knowledge", "obsidian", "resonance", "localfirst", "omsb"],
  },
  {
    id: "resonance", group: "concept", anchor: "#vision",
    label: { en: "Resonance", ko: "공명" },
    summary: {
      en: "Writing produces resonance: a sentence from a video or a book rings against something already in you, and that ring is what is worth keeping.",
      ko: "글을 쓰다 보면 공명이 일어납니다. 영상이나 책의 한 문장이 이미 내 안에 있던 것과 울리고, 그 울림이 남겨 둘 가치가 있는 것입니다.",
    },
    source: { en: "Writing makes resonance happen", ko: "글을 쓰다보니까 공명이 일어난다" },
    related: ["secondbrain", "zettel", "knowledge"],
  },
  {
    id: "obsidian", group: "concept", anchor: "#work",
    label: { en: "Obsidian", ko: "Obsidian" },
    summary: {
      en: "Notion touches the world; Obsidian stays attached to you. Plain Markdown on your own disk is the command center every tool here reports to.",
      ko: "Notion은 세상과 맞닿아 있지만 Obsidian은 나와 붙어 있습니다. 내 디스크 위의 평범한 Markdown이, 여기 모든 도구가 보고하는 지휘소입니다.",
    },
    source: { en: "Notion touches the world, Obsidian stays with me", ko: "Notion은 세상과 맞닿아있지만 옵시디언은 나와 붙어 있다" },
    related: ["localfirst", "secondbrain", "knowledge", "quartz", "mac", "oc", "qmd", "eagle", "player", "bible", "ohermes"],
  },
  {
    id: "localfirst", group: "concept", anchor: "#vision",
    label: { en: "Local-first", ko: "로컬 우선" },
    summary: {
      en: "The canonical copy is always the Git repository on your machine. Embeddings and search run on the device, and notes never leave it unless you say so.",
      ko: "정본은 항상 내 기기의 Git 저장소입니다. 임베딩과 검색은 기기 안에서 돌고, 노트는 당신이 허락하기 전에는 밖으로 나가지 않습니다.",
    },
    source: { en: "Infrastructure guideline", ko: "인프라 가이드라인" },
    related: ["obsidian", "secondbrain", "p3", "qmd", "oc"],
  },
  {
    id: "para", group: "concept", anchor: "#vision",
    label: { en: "PARA", ko: "PARA" },
    summary: {
      en: "Projects, Areas, Resources, Archive: notes sorted by purpose rather than topic, so every note has exactly one home and a reason to be there.",
      ko: "Projects, Areas, Resources, Archive. 주제가 아니라 목적을 기준으로 노트를 분류해, 모든 노트에 정확히 하나의 집과 거기 있을 이유를 줍니다.",
    },
    source: { en: "What are PARA and Zettelkasten", ko: "PARA, 제텔카스텐은 무엇인가" },
    related: ["zettel", "moc", "knowledge", "vault"],
  },
  {
    id: "zettel", group: "concept", anchor: "#vision",
    label: { en: "Zettelkasten", ko: "제텔카스텐" },
    summary: {
      en: "Permanent notes: one self-contained idea each, linked to the next. Research needed it; a single thought becomes something you can build on years later.",
      ko: "영구 노트. 하나의 독립된 생각을 하나의 노트에 담고 다음 노트로 잇습니다. 연구에 필요했던 방식이고, 하나의 생각이 몇 년 뒤에도 쌓아 올릴 수 있는 토대가 됩니다.",
    },
    source: { en: "Zettelkasten", ko: "제텔카스텐의 영구 노트" },
    related: ["para", "moc", "resonance", "knowledge", "vault"],
  },
  {
    id: "moc", group: "concept", anchor: "#vision",
    label: { en: "Map of Content", ko: "MOC" },
    summary: {
      en: "A Map of Content is a note whose job is to hold other notes in relation. The connection is the point of knowledge management; the map makes connections visible.",
      ko: "MOC는 다른 노트들을 관계 속에 붙들어 두는 노트입니다. 지식 관리의 핵심은 노트의 연결이고, 지도는 그 연결을 보이게 만듭니다.",
    },
    source: { en: "The core of knowledge management is the links between notes", ko: "지식 관리의 핵심, 노트의 연결" },
    related: ["para", "zettel", "knowledge", "mac", "oc", "qgl"],
  },
  {
    id: "daily", group: "concept", anchor: "#vision",
    label: { en: "Daily notes", ko: "데일리 노트" },
    summary: {
      en: "Year, quarter, month, week, day: a chain of period notes that turns ordinary days into context your future self can read.",
      ko: "연·분기·월·주·일로 이어지는 기간 노트의 사슬. 평범한 하루를 미래의 내가 읽을 수 있는 맥락으로 바꿉니다.",
    },
    related: ["records", "knowledge", "vault"],
  },
  {
    id: "quartz", group: "concept", anchor: "#work",
    label: { en: "Quartz", ko: "Quartz" },
    summary: {
      en: "The static-site generator behind the digital garden. Part of the vault is published; the rest stays home.",
      ko: "디지털 가든을 만드는 정적 사이트 생성기. 볼트의 일부는 발행하고, 나머지는 집에 남습니다.",
    },
    related: ["garden", "obsidian", "qgl"],
  },
  {
    id: "garden", group: "concept", anchor: "#work",
    label: { en: "Digital garden", ko: "디지털 가든" },
    summary: {
      en: "beomsukoh.com: notes published while still growing. Thinking in public without performing for a feed.",
      ko: "beomsukoh.com. 아직 자라는 중인 노트를 그대로 발행합니다. 피드에 보여 주기 위해서가 아니라, 공개된 자리에서 생각하는 일입니다.",
    },
    source: { en: "Digital Garden / About", ko: "Digital Garden / About" },
    related: ["quartz", "qgl", "beomsu"],
  },

  /* ---------- ideas: agents ---------- */
  {
    id: "hermes", group: "concept", anchor: "#vision",
    label: { en: "Hermes", ko: "Hermes" },
    summary: {
      en: "A self-hosted agent runtime that ships with reins built in. The personal agents live on one machine, with their own memory, separate from company agents.",
      ko: "고삐가 처음부터 달린 자체 호스팅 에이전트 런타임. 개인 에이전트들은 한 기기에서 자기 기억을 갖고 살며, 회사 에이전트와 섞이지 않습니다.",
    },
    source: { en: "Hermes guide", ko: "Hermes 가이드" },
    related: ["agents", "boundaries", "skills", "ohermes", "craft"],
  },
  {
    id: "claudecode", group: "concept", anchor: "#work",
    label: { en: "Claude Code", ko: "Claude Code" },
    summary: {
      en: "One of the coding agents that operates the vault. It reads the same AGENTS.md a person reads, so it files notes where a person would.",
      ko: "볼트를 운영하는 코딩 에이전트 중 하나. 사람이 읽는 AGENTS.md를 똑같이 읽기 때문에, 사람이 둘 자리에 노트를 둡니다.",
    },
    related: ["agents", "skills", "craft", "omsb"],
  },
  {
    id: "codex", group: "concept", anchor: "#work",
    label: { en: "Codex", ko: "Codex" },
    summary: {
      en: "Another coding agent on the same vault. Skills and conventions are vendor-neutral so switching runtimes does not mean rewriting how you work.",
      ko: "같은 볼트에서 일하는 또 다른 코딩 에이전트. 스킬과 규약이 특정 벤더에 묶이지 않아, 런타임을 바꿔도 일하는 방식을 다시 쓰지 않습니다.",
    },
    related: ["agents", "skills", "craft"],
  },
  {
    id: "skills", group: "concept", anchor: "#work",
    label: { en: "Skills", ko: "스킬" },
    summary: {
      en: "A skill file is a code of conduct; an AGENTS.md or soul file is an identity. Together they turn a model into an agent you can predict.",
      ko: "Skill.md는 행동 규범이고, AGENTS.md나 soul.md는 정체성입니다. 둘이 합쳐져야 모델이 예측 가능한 에이전트가 됩니다.",
    },
    source: { en: "JNU × Upstage Skillthon notes", ko: "JNU × Upstage Skillthon 교육 노트" },
    related: ["agents", "claudecode", "codex", "hermes", "craft", "sbskills"],
  },
  {
    id: "boundaries", group: "concept", anchor: "#principles",
    label: { en: "Boundaries", ko: "경계" },
    summary: {
      en: "Zones say where an agent may write and where it must ask. Keep the tool surface minimal until a need is proven, then widen on purpose.",
      ko: "구역이 에이전트가 쓸 수 있는 곳과 물어야 하는 곳을 정합니다. 필요가 증명될 때까지 도구 표면은 최소로 두고, 넓힐 때는 의도적으로 넓힙니다.",
    },
    source: { en: "Agent Permissions and Workflows", ko: "Agent Permissions and Workflows" },
    related: ["agents", "p4", "hermes", "omsb", "sbskills"],
  },
  {
    id: "evidence", group: "concept", anchor: "#principles",
    label: { en: "Evidence", ko: "증거" },
    summary: {
      en: "Delegated agents return evidence to the one who delegated. A task is done when the result can be inspected, not when it is announced.",
      ko: "위임받은 에이전트는 위임한 쪽에 증거를 돌려줍니다. 일은 결과를 검사할 수 있을 때 끝난 것이지, 끝났다고 말할 때 끝난 것이 아닙니다.",
    },
    source: { en: "Agent Permissions and Workflows", ko: "Agent Permissions and Workflows" },
    related: ["p2", "receipts", "records", "agents", "craft", "sbskills"],
  },
  {
    id: "receipts", group: "concept", anchor: "#principles",
    label: { en: "Receipts", ko: "영수증" },
    summary: {
      en: "Every agent session leaves a receipt: what it read, what it changed, what it could not verify. The person-facing work record is written from it.",
      ko: "모든 에이전트 세션은 영수증을 남깁니다. 무엇을 읽었고, 무엇을 바꿨고, 무엇을 검증하지 못했는지. 사람이 읽는 작업 기록은 그 영수증에서 씁니다.",
    },
    source: { en: "Master Guideline", ko: "Master Guideline" },
    related: ["evidence", "records", "p2", "sbskills"],
  },
  {
    id: "records", group: "concept", anchor: "#principles",
    label: { en: "Work records", ko: "작업 기록" },
    summary: {
      en: "Decisions and context should outlive the session that produced them. A record a person can read a year later is the difference between durable and disposable.",
      ko: "결정과 맥락은 그것을 만든 세션보다 오래 살아야 합니다. 1년 뒤의 사람이 읽을 수 있는 기록이 지속과 일회성을 가릅니다.",
    },
    related: ["p3", "receipts", "evidence", "daily"],
  },

  /* ---------- ideas: Ataraxia ---------- */
  {
    id: "ivory", group: "concept", anchor: "#ataraxia",
    label: { en: "Ivory tower", ko: "상아탑" },
    summary: {
      en: "From a story about mages: magic that cannot be misused by the world and will not bend to a ruler's beliefs, pursued purely for its own height. The vault is that tower.",
      ko: "마법사 이야기에서 가져온 말. 세상에 악용되지 않고 지배자의 신념에 휘둘리지 않는 마법, 오직 순수하게 극을 추구하는 이상향. 볼트가 그 탑입니다.",
    },
    source: { en: "Why is my Obsidian vault named Ataraxia", ko: "왜 나의 Obsidian vault 이름은 Ataraxia일까" },
    related: ["ataraxia", "purity", "deepwork", "truth"],
  },
  {
    id: "purity", group: "concept", anchor: "#ataraxia",
    label: { en: "Unstained", ko: "물들지 않는 순수" },
    summary: {
      en: "Ivory is white and clean, and it stains easily. To be like ivory is to be delicate and vulnerable, and to remain unstained anyway.",
      ko: "상아는 희고 깨끗하지만 물들기 쉬운 재질입니다. 상아와 같다는 것은 변하고 섬세하고 취약하면서도, 그럼에도 물들지 않는 순수를 뜻합니다.",
    },
    source: { en: "Why is my Obsidian vault named Ataraxia", ko: "왜 나의 Obsidian vault 이름은 Ataraxia일까" },
    related: ["ivory", "ataraxia", "truth"],
  },
  {
    id: "stillness", group: "concept", anchor: "#ataraxia",
    label: { en: "Stillness", ko: "고요함" },
    summary: {
      en: "To hold an ideal and move toward it quietly. Stillness is not the absence of work; it is work without someone else's hand on the wheel.",
      ko: "이상을 품고 고요히 나아가는 것. 고요함은 일이 없는 상태가 아니라, 남의 손이 핸들에 올라와 있지 않은 상태입니다.",
    },
    source: { en: "Why is my Obsidian vault named Ataraxia", ko: "왜 나의 Obsidian vault 이름은 Ataraxia일까" },
    related: ["ataraxia", "calm", "gap"],
  },
  {
    id: "truth", group: "concept", anchor: "#ataraxia",
    label: { en: "Higher truth", ko: "더 높은 진리" },
    summary: {
      en: "A place free of worldly want and confusion, where one climbs toward something truer. The tools exist so that the climb is possible with your mind intact.",
      ko: "세속적 욕망과 혼란에서 자유로운, 더 높은 진리를 향해 올라가는 자리. 도구는 그 오름이 온전한 정신으로 가능하도록 존재합니다.",
    },
    source: { en: "Why is my Obsidian vault named Ataraxia", ko: "왜 나의 Obsidian vault 이름은 Ataraxia일까" },
    related: ["ataraxia", "ivory", "purity"],
  },
  {
    id: "beomsu", group: "concept", anchor: "#ataraxia", link: "https://beomsukoh.com/",
    label: { en: "Beomsu Koh", ko: "고범수" },
    summary: {
      en: "Founder. Software engineer, CTO of Senior AI Lab, keeper of the Ataraxia vault. The purpose of my life is to protect the cognitive resources being taken from people.",
      ko: "설립자. 소프트웨어 엔지니어, Senior AI Lab CTO, 아타락시아 볼트의 주인. 내 삶의 목적은 탈취당하는 인지 자원을 지켜주는 것입니다.",
    },
    source: { en: "What is the purpose of my life (2026-01-01)", ko: "2026-01-01 내 삶의 목적은 무엇인가" },
    related: ["xia", "ataraxia", "intent", "garden"],
  },

  /* ---------- principles ---------- */
  {
    id: "p1", group: "principle", anchor: "#principles",
    label: { en: "Calm over clutter", ko: "소음보다 고요" },
    summary: {
      en: "Fewer surfaces, clearer ownership, less background noise. If a feature adds hum, it has to earn its place.",
      ko: "더 적은 화면, 더 분명한 소유, 더 적은 배경 소음. 기능이 소음을 더한다면 자기 자리를 증명해야 합니다.",
    },
    related: ["xia", "calm", "noise"],
  },
  {
    id: "p2", group: "principle", anchor: "#principles",
    label: { en: "Evidence before status", ko: "상태보다 증거" },
    summary: {
      en: "A task is complete when the result can be inspected, not when it is announced. Receipts, not green checkmarks.",
      ko: "일은 결과를 검사할 수 있을 때 끝난 것이지, 끝났다고 말할 때 끝난 것이 아닙니다. 초록 체크가 아니라 영수증.",
    },
    related: ["xia", "evidence", "receipts"],
  },
  {
    id: "p3", group: "principle", anchor: "#principles",
    label: { en: "Durable over disposable", ko: "일회성보다 지속" },
    summary: {
      en: "Decisions, context, and tools should survive the current session. Plain files in a Git repository outlast any app.",
      ko: "결정과 맥락과 도구는 지금 세션보다 오래 살아야 합니다. Git 저장소의 평범한 파일은 어떤 앱보다 오래갑니다.",
    },
    related: ["xia", "records", "localfirst"],
  },
  {
    id: "p4", group: "principle", anchor: "#principles",
    label: { en: "Automation with an owner", ko: "주인이 있는 자동화" },
    summary: {
      en: "One operator, explicit boundaries, reversible changes. Automation that nobody owns amplifies nobody's intent.",
      ko: "한 명의 운영자, 명시적인 경계, 되돌릴 수 있는 변경. 주인 없는 자동화는 누구의 의도도 증폭하지 않습니다.",
    },
    related: ["xia", "boundaries", "energy"],
  },
];
