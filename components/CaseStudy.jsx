export default function CaseStudy({ cs }) {
  return (
    <article className="border-t border-slate-800 py-12 first:border-t-0">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-400/90">
            {cs.tag}
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold text-slate-100">
            {cs.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400">{cs.role}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cs.stack.map((t) => (
              <li
                key={t}
                className="rounded border border-slate-700 px-2 py-1 font-mono text-xs text-slate-400"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5 lg:col-span-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Problem
            </p>
            <p className="mt-1.5 leading-relaxed text-slate-300">{cs.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
              What I built
            </p>
            <p className="mt-1.5 leading-relaxed text-slate-300">{cs.solution}</p>
          </div>
          <div className="rounded-md border-l-2 border-amber-400/70 bg-slate-900/60 px-4 py-3">
            <p className="text-sm leading-relaxed text-amber-100/90">
              {cs.outcome}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
