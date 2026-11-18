// ─────────────────────────────────────────────
// كل نصوص الموقع هون — عدّل بحرية بدون ما تلمس الكومبوننتس
// ─────────────────────────────────────────────

export const SITE = {
  name: "Yazan Adanof",
  handle: "yazan.adanof",
  role: "Full-Stack Developer · Fintech",
  headline:
    "I build banking platforms end-to-end — from the interface to the serverless services behind it.",
  intro:
    "5+ years building and leading production platforms in fintech and internal operations. Currently technical lead on a multi-country digital bank: I own the web layer end-to-end and designed the serverless identity-verification service behind onboarding.",
  email: "yazan.adanof@gmail.com",
  whatsapp: "+963980033496", // ← خليه فاضي وما رح يظهر
  github: "https://github.com/Yazan-496", // ← خليه فاضي وما رح يظهر
  linkedin: "https://www.linkedin.com/in/yazan-adanouf", // ← خليه فاضي وما رح يظهر
  cvUrl: "/Yazan_Adanof_CV.pdf",
};

export const KYC_STEPS = [
  { id: "capture", label: "ID Capture", detail: "Document photographed" },
  { id: "extract", label: "Data Extraction", detail: "AWS Rekognition reads fields" },
  { id: "liveness", label: "Liveness Check", detail: "Real face, not a photo" },
  { id: "match", label: "Face Match", detail: "Selfie vs. document portrait" },
  { id: "decision", label: "Decision", detail: "Relayed to core backend" },
];

// ─────────────────────────────────────────────
// ⚠️ قسم `design` بكل مشروع: مسوّدة مكتوبة انطلاقاً من معطياتك الموجودة.
//    راجعها وعدّلها بلغتك قبل ما تنشر — هاي أهم فقرات بالموقع للـ UI/UX.
// ─────────────────────────────────────────────

export const CASE_STUDIES = [
  {
    slug: "digital-banking-platform",
    tag: "Fintech · Pre-launch",
    title: "Multi-Country Digital Banking Platform",
    role: "Technical Lead — 3-person team",
    year: "2024 — present",
    surfaces: "Customer web app · Management dashboard · Business dashboard",
    stack: ["Next.js", "Cloudflare Workers", "AWS Rekognition", "NestJS integration"],
    problem:
      "A digital bank serving Syria, Lebanon, Iraq, Turkey and Jordan — each with its local currency plus USD, gold and silver accounts. Onboarding had to verify identity documents from five countries with zero manual review.",
    solution:
      "I own the platform's web layer end-to-end: internal management dashboard, business dashboard and the customer web app with send/receive payments, payment requests and QR scanning. On the backend, I designed and built a fully automated KYC service on Cloudflare Workers (serverless), integrating AWS Rekognition for ID data extraction, liveness detection and face-matching across 5 national document formats — and defined its service-to-service REST contract with the core NestJS backend, which receives verification decisions and account state. I also built the authentication layer across web: Face ID, passcode, face-based passcode recovery for verified accounts and security-question flows for unverified ones. As lead, I break product designs and scenarios into tasks and coordinate delivery across mobile and backend developers.",
    outcome:
      "Identity verification across 5 national document formats with zero manual steps: photograph an ID, take a face scan, get a decision.",
    design: [
      {
        title: "Eight asset types, one balance view",
        body: "A customer can hold their local currency, USD, gold and silver at once. Showing four separate account lists would have made the home screen unreadable, so balances collapse into a single prioritised list with the primary currency pinned and metals grouped underneath.",
      },
      {
        title: "Verification as a guided flow, not a form",
        body: "Identity verification is where onboarding dies. I broke it into one action per screen — photograph the front, photograph the back, hold still for the liveness check — with the camera framing guides doing the instruction instead of paragraphs of text.",
      },
      {
        title: "Five countries, one interface",
        body: "Arabic and Turkish speakers use the same build, so every layout was designed bidirectionally from the start rather than mirrored afterwards — icons, progress indicators and transaction rows all read correctly in both directions.",
      },
      {
        title: "Three products, one design language",
        body: "The customer app, the management dashboard and the business dashboard share a single component layer. Density and tone change between them; the primitives don't.",
      },
    ],
    links: [],
  },
  {
    slug: "operations-dashboard",
    tag: "Internal Ops · Live since 2024",
    title: "Employee Operations Dashboard",
    role: "Frontend Lead — 2-person team",
    year: "2024 — present",
    surfaces: "Agent workspace · Admin tooling",
    stack: ["React", "Redux-Saga", "Pusher", "Meta WhatsApp Business API"],
    problem:
      "50+ employees handling hundreds of daily customer tickets for crypto deposits and top-ups — all arriving over WhatsApp, where a banned number means the business goes silent.",
    solution:
      "I built the frontend around a real-time ticketing model: ticket and messaging flows over Pusher (WebSockets) deliver customer WhatsApp messages to agents instantly. Later, I led the migration from a third-party WhatsApp gateway to the official Meta WhatsApp Business API with message templates.",
    outcome:
      "Number-ban risk eliminated and reliability and compliance improved — sole frontend owner since the 2024 launch.",
    design: [
      {
        title: "Designed for the agent's eighth hour",
        body: "This is a screen someone stares at all day. I optimised for scan speed over first impression: high information density, ticket state readable from colour and position alone, and the actions an agent repeats hundreds of times reachable without leaving the keyboard.",
      },
      {
        title: "Real-time that never steals your place",
        body: "Messages arrive continuously over Pusher. Nothing reorders or steals focus while an agent is mid-reply — new activity announces itself at the edge of the list and waits to be acknowledged.",
      },
      {
        title: "Making Meta's rules visible in the UI",
        body: "The official WhatsApp Business API only permits approved templates outside the customer service window. Rather than let agents discover that through failed sends, the composer surfaces the constraint directly and offers the right template for the ticket's state.",
      },
    ],
    links: [],
  },
  {
    slug: "bag-printing-website",
    tag: "Freelance · Riyadh, KSA",
    title: "Bag-Printing Business Website",
    role: "Freelance — design to deployment, solo, remote",
    year: "2023",
    surfaces: "Marketing site",
    stack: ["Design", "Frontend", "Deployment"],
    problem:
      "A Riyadh print shop needed an online presence — with no in-house tech team and a client nine hundred kilometres away.",
    solution:
      "Handled the entire project remotely, end-to-end: design, build and deployment.",
    outcome: "Shipped solo, async, across borders — the way I work.",
    design: [
      {
        title: "The product is the photograph",
        body: "Printed bags sell on how they look. The layout gets out of the way of the product photography and keeps the shop's contact details reachable from every scroll position.",
      },
      {
        title: "Designed against the client's vocabulary",
        body: "With no shared timezone and no design team on the other side, I worked from the client's own words and sample products, and reviewed in short async rounds instead of long meetings.",
      },
    ],
    links: [
      // { label: "Live site", href: "https://…" },
    ],
  },
];

// ─────────────────────────────────────────────
// الخبرة والمهارات — منقولة من الـ CV
// ─────────────────────────────────────────────

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer & Technical Lead",
    org: "Ramaaz",
    place: "Remote / On-site",
    period: "2021 — present",
    summary:
      "Progressed from frontend developer to technical lead across two flagship products.",
    items: [
      {
        title: "Multi-Country Digital Banking Platform",
        meta: "Technical Lead · 3-person team",
        stack: "Next.js · Cloudflare Workers · AWS Rekognition · NestJS integration",
        href: "/work/digital-banking-platform",
      },
      {
        title: "Employee Operations Dashboard",
        meta: "Frontend Lead · 2-person team",
        stack: "React · Redux-Saga · Pusher · Meta WhatsApp Business API",
        href: "/work/operations-dashboard",
      },
      {
        title: "E-Commerce Platform",
        meta: "Full-Stack Developer",
        stack: "Next.js · React · Node.js · REST APIs",
        body: "Large storefront and admin dashboard with responsive RTL interfaces for Arabic users, secure payment and transaction flows, and frontend integration with order, product and customer APIs.",
      },
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Store Thaki",
    place: "",
    period: "2026",
    summary:
      "Co-delivered a multi-platform commerce ecosystem: customer mobile app, Next.js admin dashboard and a shared Node.js/Prisma REST API.",
    items: [
      {
        title: "Admin dashboard & shared API",
        meta: "Full-Stack Developer",
        stack: "Next.js · Node.js · Prisma · REST APIs",
        body: "Built admin dashboard features and backend endpoints, designed database schemas from business logic, and kept web and mobile clients integrated on the shared backend under tight timelines.",
      },
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Freelance",
    place: "Remote",
    period: "2021 — present",
    summary:
      "5+ full-stack web projects for private clients, owning frontend, backend APIs and deployment.",
    items: [
      {
        title: "Bag-Printing Business Website · Riyadh, KSA",
        meta: "Design to deployment, solo",
        stack: "Design · Frontend · Deployment",
        href: "/work/bag-printing-website",
      },
      {
        title: "This portfolio",
        meta: "Built and deployed solo",
        stack: "Next.js App Router · Tailwind CSS · Cloudflare Workers",
        body: "Featuring the animated KYC pipeline visualization at the top of the page.",
      },
    ],
  },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "TypeScript", "JavaScript", "Redux / Redux-Saga", "Tailwind CSS", "Responsive, RTL & real-time UIs"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Prisma", "REST API design", "NestJS integration", "Serverless services", "Authentication flows", "AWS Rekognition", "Meta WhatsApp Business API"],
  },
  { group: "Real-time", items: ["Pusher", "WebSockets"] },
  { group: "Cloud & DevOps", items: ["Cloudflare Workers", "AWS Rekognition", "Docker", "Git / GitHub"] },
  {
    group: "AI-assisted development",
    items: ["Claude Code", "SpecKit (spec-driven)", "Custom agent skills", "MCP integrations (ClickUp)", "GitHub Copilot"],
  },
  {
    group: "Practices",
    items: ["Requirements analysis", "Task breakdown & delegation", "Design-to-code from Adobe XD"],
  },
];

export const WORKFLOW = [
  { step: "Specify", note: "Requirements become a written spec before any code" },
  { step: "Plan", note: "Architecture and approach, reviewed against the spec" },
  { step: "Tasks", note: "Broken down and synced to ClickUp via MCP" },
  { step: "Implement", note: "Claude Code executes; approval gates guard sensitive changes" },
];

export const ABOUT = [
  "B.Sc. in Software Engineering, University of Aleppo (2017 — 2022). I started professionally in 2021 — a year before graduating — and grew from frontend developer to full-stack technical lead: analysing requirements, breaking product designs into tasks, and coordinating mobile and backend delivery while owning the web layer and the services behind it.",
  "Arabic native · English professional working proficiency · Remote, async-first.",
];
