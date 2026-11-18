import Link from "next/link";
import Shot from "./Shot";

export default function WorkCard({ cs }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/40 transition hover:border-slate-700">
      <Shot shot={{ src: cs.cover, frame: "flat" }} />

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-amber-400/90">
          {cs.tag}
        </p>
        <h3 className="font-display mt-2.5 text-xl font-semibold text-slate-100">
          <Link
            href={`/work/${cs.slug}`}
            className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {cs.title}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm text-slate-500">{cs.surfaces}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {cs.outcome}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <ul className="flex flex-wrap gap-1.5">
            {cs.stack.slice(0, 3).map((t) => (
              <li
                key={t}
                className="rounded border border-slate-800 px-2 py-0.5 font-mono text-[11px] text-slate-500"
              >
                {t}
              </li>
            ))}
          </ul>
          <span className="font-mono text-xs text-amber-400 transition group-hover:translate-x-0.5">
            case study →
          </span>
        </div>
      </div>
    </article>
  );
}
