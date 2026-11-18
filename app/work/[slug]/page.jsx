import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { CASE_STUDIES, SITE } from "@/data/content";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — ${SITE.name}`,
    description: cs.outcome,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const index = CASE_STUDIES.indexOf(cs);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className={`font-mono text-sm text-slate-400 transition hover:text-slate-100 ${focusRing}`}>
            ← all work
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className={`rounded border border-amber-400/60 px-3 py-1.5 text-sm text-amber-300 transition hover:bg-amber-400/10 ${focusRing}`}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* ── Header ── */}
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
          {cs.tag}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-50">
          {cs.title}
        </h1>

        <dl className="mt-8 grid gap-6 border-t border-slate-800 pt-6 sm:grid-cols-3">
          <Meta label="Role" value={cs.role} />
          <Meta label="Timeline" value={cs.year} />
          <Meta label="Surfaces" value={cs.surfaces} />
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {cs.stack.map((t) => (
            <li
              key={t}
              className="rounded border border-slate-700 px-2 py-1 font-mono text-xs text-slate-400"
            >
              {t}
            </li>
          ))}
        </ul>

        {cs.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-5">
            {cs.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`font-mono text-sm text-amber-300 underline-offset-4 transition hover:underline ${focusRing}`}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </section>

      {/* ── Narrative ── */}
      <section className="mx-auto max-w-5xl px-5 pb-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <Block label="The problem" body={cs.problem} />
          <Block label="What I built" body={cs.solution} />
        </div>
        <div className="mt-8 rounded-md border-l-2 border-amber-400/70 bg-slate-900/60 px-5 py-4">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-400/80">
            Outcome
          </p>
          <p className="mt-1.5 leading-relaxed text-amber-100/90">{cs.outcome}</p>
        </div>
      </section>

      {/* ── Screens ── */}
      <section className="border-y border-slate-800 bg-slate-900/30">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Screens
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Click any screen to enlarge.
          </p>
          <div className="mt-8">
            <Gallery shots={cs.gallery} />
          </div>
        </div>
      </section>

      {/* ── Design decisions ── */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="font-display text-2xl font-semibold text-slate-100">
          Design decisions
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {cs.design.map((d) => (
            <div
              key={d.title}
              className="rounded-lg border border-slate-800 bg-slate-900/40 p-5"
            >
              <h3 className="font-semibold text-slate-100">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Next ── */}
      <section className="border-t border-slate-800">
        <Link
          href={`/work/${next.slug}`}
          className={`mx-auto flex max-w-5xl items-center justify-between px-5 py-8 transition hover:bg-slate-900/40 ${focusRing}`}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
            Next case study
          </span>
          <span className="font-display text-lg font-semibold text-slate-200">
            {next.title} →
          </span>
        </Link>
      </section>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-widest text-slate-500">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-slate-300">{value}</dd>
    </div>
  );
}

function Block({ label, body }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        {label}
      </p>
      <p className="mt-2 leading-relaxed text-slate-300">{body}</p>
    </div>
  );
}
