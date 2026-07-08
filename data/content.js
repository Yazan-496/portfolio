// ─────────────────────────────────────────────
// كل نصوص الموقع هون — عدّل بحرية بدون ما تلمس الكومبوننتس
// ─────────────────────────────────────────────

export const SITE = {
  name: "Yazan Adanouf",
  handle: "yazan.adanouf",
  role: "Senior Frontend Developer · Fintech",
  headline:
    "I build banking platforms and real-time dashboards people rely on daily.",
  intro:
    "Five years shipping production web platforms — currently technical lead on a multi-country digital bank, from the customer app down to a serverless identity-verification pipeline I built alone.",
  email: "yazan.adanouf.26@gmail.com",
  github: "https://github.com/USERNAME", // ← حط رابطك
  linkedin: "https://linkedin.com/in/USERNAME", // ← حط رابطك
  cvUrl: "/Yazan_Adanouf_CV.pdf", // حط ملف السي في بمجلد public
};

export const KYC_STEPS = [
  { id: "capture", label: "ID Capture", detail: "Document photographed" },
  { id: "extract", label: "Data Extraction", detail: "AWS Rekognition reads fields" },
  { id: "liveness", label: "Liveness Check", detail: "Real face, not a photo" },
  { id: "match", label: "Face Match", detail: "Selfie vs. document portrait" },
  { id: "decision", label: "Decision", detail: "Relayed to core backend" },
];

export const CASE_STUDIES = [
  {
    tag: "Fintech · Pre-launch",
    title: "Multi-Country Digital Banking Platform",
    role: "Technical Lead — 3-person team",
    stack: ["Next.js", "Cloudflare Workers", "AWS Rekognition", "NestJS core"],
    problem:
      "A digital bank serving Syria, Lebanon, Iraq, Turkey and Jordan — each with its local currency plus USD, gold and silver accounts. Onboarding had to verify identity documents from five countries with zero manual review.",
    solution:
      "I lead the platform's web layer end-to-end: management dashboard, business dashboard and the customer-facing app with send/receive, payment requests and QR scanning. Independently, I designed and built the fully automated KYC pipeline as a Next.js service on Cloudflare Workers — ID data extraction, liveness detection and face-matching, with decisions relayed to the NestJS backend. Face-based passcode recovery for verified accounts included.",
    outcome:
      "A verification flow with zero manual steps: photograph an ID, take a face scan, get a decision.",
  },
  {
    tag: "Internal Ops · Live since 2024",
    title: "Employee Operations Dashboard",
    role: "Frontend Lead — 2-person team",
    stack: ["React", "Redux-Saga", "Pusher", "Meta WhatsApp Business API"],
    problem:
      "50+ agents handling hundreds of daily customer tickets for crypto deposits and top-ups — all arriving over WhatsApp, where a banned number means the business goes silent.",
    solution:
      "I built the frontend around a real-time ticketing model: customer WhatsApp messages reach agents instantly via Pusher. Later, I led the migration from a third-party gateway to the official Meta WhatsApp Business API with message templates.",
    outcome:
      "Number-ban risk eliminated, compliance improved, and a 2020-era codebase still evolving under my ownership today.",
  },
  {
    tag: "Freelance · Riyadh, KSA",
    title: "Bag-Printing Business Website",
    role: "Full-Stack — solo, remote",
    stack: ["Design", "Frontend", "Deployment"],
    problem:
      "A Riyadh print shop needed an online presence — with no in-house tech team and a client nine hundred kilometres away.",
    solution:
      "Handled the entire project remotely, end-to-end: design, build and deployment.",
    outcome: "Shipped solo, async, across borders — the way I work.",
  },
];

export const WORKFLOW = [
  { step: "Specify", note: "Requirements become a written spec before any code" },
  { step: "Plan", note: "Architecture and approach, reviewed against the spec" },
  { step: "Tasks", note: "Broken down and synced to ClickUp via MCP" },
  { step: "Implement", note: "Claude Code executes; approval gates guard sensitive changes" },
];

export const ABOUT = [
  "B.Sc. in Software Engineering, University of Aleppo. I started professionally in 2021 — a year before graduating — and grew from frontend developer to technical lead: analysing requirements, breaking down tasks, and coordinating mobile and backend delivery while owning the web layer myself.",
  "Arabic native · English professional working proficiency · Remote, async-first.",
];
