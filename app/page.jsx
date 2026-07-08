import KycPipeline from "@/components/KycPipeline";
import CaseStudy from "@/components/CaseStudy";
import { SITE, CASE_STUDIES, WORKFLOW, ABOUT } from "@/data/content";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className={`font-mono text-sm font-medium text-slate-100 ${focusRing}`}>
            {SITE.handle.split(".")[0]}
            <span className="text-amber-400">.</span>
            {SITE.handle.split(".")[1]}
          </a>
          <div className="flex items-center gap-5 text-sm">
            <a href="#work" className={`text-slate-400 transition hover:text-slate-100 ${focusRing}`}>
              Work
            </a>
            <a href="#workflow" className={`text-slate-400 transition hover:text-slate-100 ${focusRing}`}>
              How I work
            </a>
            <a
              href="#contact"
              className={`rounded border border-amber-400/60 px-3 py-1.5 text-amber-300 transition hover:bg-amber-400/10 ${focusRing}`}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-transparent"></div>
        <div className="mx-auto grid max-w-5xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
              {SITE.role}
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
              {SITE.headline}
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-slate-400">
              {SITE.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className={`rounded bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 ${focusRing}`}
              >
                See the work
              </a>
              <a
                href={SITE.github}
                className={`font-mono text-sm text-slate-400 underline-offset-4 transition hover:text-slate-100 hover:underline ${focusRing}`}
              >
                GitHub
              </a>
              <a
                href={SITE.linkedin}
                className={`font-mono text-sm text-slate-400 underline-offset-4 transition hover:text-slate-100 hover:underline ${focusRing}`}
              >
                LinkedIn
              </a>
              <a
                href={SITE.cvUrl}
                className={`font-mono text-sm text-slate-400 underline-offset-4 transition hover:text-slate-100 hover:underline ${focusRing}`}
              >
                CV ↓
              </a>
            </div>
          </div>
          <KycPipeline />
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="mx-auto max-w-5xl px-5 py-16">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-semibold text-slate-100">
            Selected work
          </h2>
          <p className="font-mono text-xs text-slate-500">
            internal systems · details under NDA
          </p>
        </div>
        {CASE_STUDIES.map((cs) => (
          <CaseStudy key={cs.title} cs={cs} />
        ))}
      </section>

      {/* ── Workflow ── */}
      <section id="workflow" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold text-slate-100">
            How I work
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
            I run a spec-driven, AI-assisted workflow built on Claude Code — with
            review and approval gates before any sensitive change ships. Custom
            agent skills and MCP integrations keep code and ClickUp tickets in
            sync automatically.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW.map((w, i) => (
              <li
                key={w.step}
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="font-mono text-xs text-amber-400">0{i + 1}</p>
                <p className="mt-1 font-semibold text-slate-100">{w.step}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {w.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── About + Contact ── */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-100">
              About
            </h2>
            {ABOUT.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-slate-400">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-center rounded-lg border border-slate-800 bg-slate-900/50 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
              Contact
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className={`mt-3 break-all text-xl font-medium text-slate-100 underline-offset-4 transition hover:text-amber-300 hover:underline ${focusRing}`}
            >
              {SITE.email}
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Open to remote senior frontend and technical-lead roles.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6">
          <p className="font-mono text-xs text-slate-600">© 2026 {SITE.name}</p>
          <p className="font-mono text-xs text-slate-600">
            Next.js · Cloudflare Workers
          </p>
        </div>
      </footer>
    </div>
  );
}
