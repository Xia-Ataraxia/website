// The XIA manifesto, rendered by scripts/build.mjs into /manifesto/ and /ko/manifesto/.
// Sources are notes in the Ataraxia vault; quotes are the founder's own sentences.
export const MANIFESTO = {
  en: {
    title: "Technology amplifies <em>intent</em>.",
    plainTitle: "Technology amplifies intent",
    tagline: "Why XIA exists, in five short parts.",
    meta: "Beomsu Koh · October 2026 · about 6 minutes",
    description: "The XIA manifesto: on intent, attention, knowledge that stays yours, agents with an owner, and why the lab is named after an untroubled mind.",
    intro: "Every tool amplifies someone's intent. The only honest questions to ask of a technology are whose intent it amplifies, and what it costs the person using it. This is what we build, and why.",
    parts: [
      {
        heading: "Intent",
        paragraphs: [
          "A tool is never neutral. A feed is built to be scrolled, a notification to be opened, a recommendation to be followed. None of that is an accident; each is an intent, made of code, pointed at a person. That is why there is no exit button on Instagram.",
          "The same is true in the other direction. A notebook amplifies the intent to remember. A script amplifies the intent to do a dull thing once and never again. The feature is never the point. The point is whose intent gets louder, and for whom.",
          "So before we build anything, we ask the first-principles question: is this really necessary, and who is it for? If the honest answer is that it serves the builder at the user's expense, we do not build it.",
        ],
        quote: { text: "Technology amplifies a person's intent. So what matters is not the feature itself, but which intent it amplifies and for whom.", source: "Me.md, first principles" },
      },
      {
        heading: "Attention",
        paragraphs: [
          "Attention and the capacity to think are finite, and they are being taken. Eleven hours a day of attention is not free; when the product is free, someone is paying with the user's mind. We are being robbed of a great deal, and the theft is designed to feel like entertainment.",
          "Feeds hijack the circuit that makes real focus feel good. They produce immersion without achievement: four in the morning, an algorithm, and nothing to show for it. Everyone knows the feeling. We built a lab around refusing it.",
          "A crude blocklist is not the answer. The internet is designed to manipulate us, so we need tools designed for us: tools that understand what a person is trying to do and quietly keep the rest at a distance. Simply detaching the nodes you never needed to be close to lets you think the thoughts you meant to think.",
        ],
        quote: { text: "Attention and the capacity to think must not be taken for someone else's purpose. Good technology helps a person choose where their own cognitive resources go.", source: "Me.md, first principles" },
      },
      {
        heading: "Knowledge that stays yours",
        paragraphs: [
          "A second brain is not an archive of everything you read. It collects the resonance in your own mind: the sentence that rang when you read it, the decision you made and why, the thing you learned the hard way. Kept in plain Markdown, on your own disk, in a Git repository that is the canonical copy.",
          "Structure is what makes it durable. Notes sorted by purpose rather than topic, so every note has one home. One self-contained idea per permanent note, linked to the next. Maps that hold the ideas in relation. A chain of daily, weekly, and yearly notes that turns ordinary days into context a future self can read.",
          "Knowledge management is what lets you keep doing the work you want to do. Notion touches the world; Obsidian stays attached to you. We build for the second kind.",
        ],
        quote: { text: "Knowledge management lets you keep doing what you want to do.", source: "Permanent note" },
      },
      {
        heading: "Agents with an owner",
        paragraphs: [
          "An agent is not a model. It is a model plus an identity, a code of conduct, a set of tools, and a person who can inspect what it did. We build the parts around the model, and we keep them vendor-neutral so that switching runtimes never means rewriting how you work.",
          "In the age of agents, the theft of cognitive resources returns with a new face. \"Just do it for me\" feels like relief and quietly costs a person their agency. To use a good tool well, the user needs energy left over, and nobody makes good decisions twenty-four hours a day. A tool that drains the person it serves has already failed.",
          "So every agent here has an owner, explicit boundaries, and reversible changes. It reads the same conventions a person reads and files notes where a person would. It returns evidence, not status: a task is complete when the result can be inspected, not when it is announced. Every session leaves a receipt.",
        ],
        quote: { text: "To use a good tool well, the user has to have energy left too.", source: "Startup application, 2026" },
      },
      {
        heading: "Why Ataraxia",
        paragraphs: [
          "Ataraxia is the old word for an untroubled mind, and the name of the vault this lab grew out of. The image behind it is an ivory tower borrowed from a story about mages: magic that cannot be misused by the world, that will not bend to a ruler's beliefs, pursued purely for its own height.",
          "Ivory is white and clean, and it stains easily. To be like ivory is to be delicate and vulnerable, and to remain unstained anyway. That is not retreat from the world. It is a refusal to let the world decide where your thinking goes.",
          "XIA is the operational side of that ideal: the vault conventions, the plugins, the agent skills, the small systems that make an untroubled mind workable day after day. We make them for ourselves first, and we share the ones that hold.",
        ],
        quote: { text: "I want to hold an ideal and move toward it quietly, unstained. My life's ideal is here.", source: "Why is my Obsidian vault named Ataraxia" },
      },
    ],
    signature: "Beomsu Koh, founder · Ataraxia, Korea",
    related: ["intent", "attention", "secondbrain", "agents", "ataraxia", "energy", "purity", "omsb", "vault"],
  },
  ko: {
    title: "기술은 <em>의도</em>를 증폭한다.",
    plainTitle: "기술은 의도를 증폭한다",
    tagline: "XIA가 존재하는 이유, 다섯 개의 짧은 장.",
    meta: "고범수 · 2026년 10월 · 약 6분",
    description: "XIA 선언. 의도, 주의, 내 것으로 남는 지식, 주인이 있는 에이전트, 그리고 왜 흔들리지 않는 마음의 이름을 연구소에 붙였는지.",
    intro: "모든 도구는 누군가의 의도를 증폭한다. 기술에 던질 수 있는 정직한 질문은 둘뿐이다. 누구의 의도를 증폭하는가, 그리고 쓰는 사람에게 무엇을 요구하는가. 우리가 무엇을, 왜 만드는지에 대한 글이다.",
    parts: [
      {
        heading: "의도",
        paragraphs: [
          "도구는 중립이 아니다. 피드는 넘기도록, 알림은 열도록, 추천은 따르도록 만들어졌다. 우연이 아니다. 하나하나가 코드로 지어져 사람을 향해 겨눠진 의도다. 인스타그램에 종료 버튼이 없는 이유가 그것이다.",
          "반대 방향으로도 같다. 노트는 기억하려는 의도를 증폭하고, 스크립트는 지루한 일을 한 번만 하고 다시는 하지 않겠다는 의도를 증폭한다. 기능은 한 번도 핵심이었던 적이 없다. 핵심은 누구의 의도가 더 커지는가, 그리고 그것이 누구를 위한 것인가다.",
          "그래서 무엇이든 만들기 전에 제 1 원칙으로 돌아가 묻는다. 이것이 정말 필요한가, 누구를 위한 것인가. 정직한 답이 사용자의 비용으로 만드는 사람을 섬긴다는 것이라면, 만들지 않는다.",
        ],
        quote: { text: "기술은 사람의 의도를 증폭시킨다. 그래서 기능 자체보다 어떤 의도를 누구를 위해 증폭하는지가 중요하다.", source: "Me.md, 제 1 원칙" },
      },
      {
        heading: "주의",
        paragraphs: [
          "주의와 생각할 여력은 유한하고, 지금도 탈취되고 있다. 하루 열한 시간의 주의는 공짜가 아니다. 제품이 무료라면 누군가는 사용자의 정신으로 값을 치르고 있다. 우리는 많은 것을 도둑맞고 있고, 그 도둑질은 즐거움처럼 느껴지도록 설계되어 있다.",
          "피드는 진짜 집중을 기분 좋게 만드는 회로를 가로챈다. 몰입은 있되 성취는 없는 가짜 몰입. 새벽 네 시, 알고리즘, 그리고 남는 것은 없다. 누구나 아는 감각이다. 우리는 그것을 거부하는 일을 중심으로 연구소를 세웠다.",
          "투박한 차단 목록은 답이 아니다. 인터넷이 우리를 조작하도록 설계되어 있다면, 우리도 우리를 위해 설계된 도구를 써야 한다. 사람이 무엇을 하려는지 이해하고 나머지를 조용히 멀리 두는 도구. 가까워질 필요가 없던 노드를 떼어내는 것만으로도, 생각하고 싶은 것을 생각하며 살 수 있다.",
        ],
        quote: { text: "주의와 생각할 여력은 타인의 목적을 위해 탈취되어서는 안 된다. 좋은 기술은 사람이 자신의 인지 자원을 어디에 쓸지 스스로 선택하게 돕는다.", source: "Me.md, 제 1 원칙" },
      },
      {
        heading: "내 것으로 남는 지식",
        paragraphs: [
          "세컨드 브레인은 읽은 모든 것의 보관소가 아니다. 내 마음속의 공명을 모으는 곳이다. 읽을 때 울렸던 문장, 내린 결정과 그 이유, 어렵게 배운 것. 평범한 Markdown으로, 내 디스크 위에, 정본인 Git 저장소 안에 둔다.",
          "구조가 그것을 오래가게 한다. 주제가 아니라 목적을 기준으로 노트를 분류해 모든 노트에 하나의 집을 준다. 영구 노트 하나에 독립된 생각 하나를 담고 다음 노트로 잇는다. 지도가 생각들을 관계 속에 붙들어 둔다. 하루, 한 주, 한 해로 이어지는 노트의 사슬이 평범한 날들을 미래의 내가 읽을 수 있는 맥락으로 바꾼다.",
          "지식 관리는 원하는 일을 지속하게 한다. Notion은 세상과 맞닿아 있지만 Obsidian은 나와 붙어 있다. 우리는 두 번째 종류를 위해 만든다.",
        ],
        quote: { text: "지식 관리는 원하는 일을 지속하게 한다.", source: "영구 노트" },
      },
      {
        heading: "주인이 있는 에이전트",
        paragraphs: [
          "에이전트는 모델 하나가 아니다. 모델에 정체성과 행동 규범, 도구, 그리고 결과를 검사할 수 있는 사람이 더해진 것이다. 우리는 모델 주변의 부품을 만들고, 특정 벤더에 묶이지 않게 두어 런타임을 바꿔도 일하는 방식을 다시 쓰지 않게 한다.",
          "AI 에이전트 시대, 인지 자원 탈취는 새로운 얼굴로 다시 찾아온다. \"AI야 그냥 해줘\"는 해방처럼 느껴지지만 조용히 사람의 주체성을 빼앗는다. 좋은 도구를 좋게 쓰려면 사용자에게도 에너지가 남아 있어야 하고, 24시간 좋은 결정을 내릴 수 있는 사람은 없다. 섬기는 사람을 소진시키는 도구는 이미 실패한 것이다.",
          "그래서 여기의 모든 에이전트에는 주인과 명시적인 경계, 되돌릴 수 있는 변경이 있다. 사람이 읽는 규약을 똑같이 읽고 사람이 둘 자리에 노트를 둔다. 상태가 아니라 증거를 돌려준다. 일은 결과를 검사할 수 있을 때 끝난 것이지, 끝났다고 말할 때 끝난 것이 아니다. 모든 세션은 영수증을 남긴다.",
        ],
        quote: { text: "좋은 도구를 좋게 쓰려면, 사용자에게도 에너지가 필요하다.", source: "모두의 창업 지원서, 2026" },
      },
      {
        heading: "왜 아타락시아인가",
        paragraphs: [
          "아타락시아는 흔들리지 않는 마음을 뜻하는 오래된 말이고, 이 연구소가 자라난 볼트의 이름이다. 그 뒤에 있는 그림은 마법사 이야기에서 빌려온 상아탑이다. 세상에 악용되지 않는 마법, 지배자의 신념에 휘둘리지 않는 마법, 오직 순수하게 극만을 추구하는 이상향.",
          "상아는 희고 깨끗하지만 물들기 쉬운 재질이다. 상아와 같다는 것은 변하고 섬세하고 취약하면서도, 그럼에도 물들지 않는 순수를 뜻한다. 세상에서 물러나는 것이 아니다. 생각이 갈 곳을 세상이 정하게 두지 않겠다는 거부다.",
          "XIA는 그 이상의 작동하는 쪽이다. 볼트 규약, 플러그인, 에이전트 스킬, 흔들리지 않는 마음을 매일 가능하게 만드는 작은 시스템들. 먼저 우리가 쓰려고 만들고, 버티는 것만 공유한다.",
        ],
        quote: { text: "이상을 품고 고요히 순수하게 나아가는 삶을 원한다. 내 인생의 이상은 여기에 있다.", source: "왜 나의 Obsidian vault 이름은 Ataraxia일까" },
      },
    ],
    signature: "고범수, 설립자 · 아타락시아, 대한민국",
    related: ["intent", "attention", "secondbrain", "agents", "ataraxia", "energy", "purity", "omsb", "vault"],
  },
};
