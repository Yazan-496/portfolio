import KycPipeline from "@/components/KycPipeline";
import WorkCard from "@/components/WorkCard";
import Link from "next/link";
import { SITE, CASE_STUDIES, EXPERIENCE, SKILLS, WORKFLOW, ABOUT } from "@/data/content";

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
            <a href="#experience" className={`hidden text-slate-400 transition hover:text-slate-100 sm:inline ${focusRing}`}>
              Experience
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
              {SITE.github && (
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`font-mono text-sm text-slate-400 underline-offset-4 transition hover:text-slate-100 hover:underline ${focusRing}`}
                >
                  GitHub
                </a>
              )}
              {SITE.linkedin && (
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`font-mono text-sm text-slate-400 underline-offset-4 transition hover:text-slate-100 hover:underline ${focusRing}`}
                >
                  LinkedIn
                </a>
              )}
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
        <h2 className="font-display text-3xl font-semibold text-slate-100">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
          Three products I built and shipped — a multi-country bank, an
          operations workspace used daily by 50+ employees, and a business site
          delivered solo. Open any one for the screens and the decisions behind
          them.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <WorkCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold text-slate-100">
            Experience
          </h2>
          <ol className="mt-10 space-y-12">
            {EXPERIENCE.map((job) => (
              <li key={`${job.org}-${job.role}`} className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-amber-400/90">
                    {job.period}
                  </p>
                  <h3 className="font-display mt-2.5 text-xl font-semibold text-slate-100">
                    {job.org}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{job.role}</p>
                  {job.place && (
                    <p className="mt-1 font-mono text-xs text-slate-500">{job.place}</p>
                  )}
                </div>
                <div className="lg:col-span-8">
                  <p className="leading-relaxed text-slate-300">{job.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {job.items.map((it) => (
                      <li
                        key={it.title}
                        className="relative rounded-lg border border-slate-800 bg-slate-900/40 p-4 transition hover:border-slate-700"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <p className="font-semibold text-slate-100">
                            {it.href ? (
                              <Link
                                href={it.href}
                                className={`after:absolute after:inset-0 ${focusRing}`}
                              >
                                {it.title}
                              </Link>
                            ) : (
                              it.title
                            )}
                          </p>
                          {it.href && (
                            <span className="font-mono text-xs text-amber-400">
                              case study →
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-slate-400">{it.meta}</p>
                        {it.body && (
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            {it.body}
                          </p>
                        )}
                        <p className="mt-2 font-mono text-[11px] text-slate-500">
                          {it.stack}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="mx-auto max-w-5xl px-5 pb-16">
        <h2 className="font-display text-3xl font-semibold text-slate-100">
          Skills
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                {s.group}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-slate-800 px-2 py-0.5 font-mono text-xs text-slate-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Workflow ── */}
      <section id="workflow" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold text-slate-100">
            How I work
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
            I run a spec-driven, AI-assisted workflow built on Claude Code and
            SpecKit — with
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
            {SITE.whatsapp && (
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-2 font-mono text-sm text-slate-400 underline-offset-4 transition hover:text-amber-300 hover:underline ${focusRing}`}
              >
                WhatsApp · {SITE.whatsapp}
              </a>
            )}
            <p className="mt-3 text-sm text-slate-500">
              Open to remote full-stack and technical-lead roles.
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
