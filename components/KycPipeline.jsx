"use client";

import { useState, useEffect } from "react";
import { KYC_STEPS } from "@/data/content";

export default function KycPipeline() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % (KYC_STEPS.length + 1)),
      1400
    );
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <div className="w-full rounded-lg border border-slate-800 bg-slate-900/60 p-5 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
          kyc-pipeline · cloudflare worker
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-teal-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
          </span>
          zero manual steps
        </span>
      </div>
      <ol className="space-y-3">
        {KYC_STEPS.map((s, i) => {
          const done = i < active;
          const current = i === active;
          return (
            <li key={s.id} className="flex items-center gap-4">
              <span
                className={
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-all duration-500 " +
                  (done
                    ? "border-teal-500 bg-teal-500/15 text-teal-400"
                    : current
                      ? "border-amber-400 bg-amber-400/10 text-amber-300"
                      : "border-slate-700 text-slate-600")
                }
              >
                {done ? "✓" : i + 1}
              </span>
              <div className="min-w-0">
                <p
                  className={
                    "text-sm font-medium transition-colors duration-500 " +
                    (done
                      ? "text-teal-300"
                      : current
                        ? "text-amber-200"
                        : "text-slate-500")
                  }
                >
                  {s.label}
                </p>
                <p className="truncate text-xs text-slate-500">{s.detail}</p>
              </div>
              {current && (
                <span className="ml-auto hidden font-mono text-xs text-amber-400/80 sm:block">
                  running…
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <div className="mt-4 h-1 overflow-hidden rounded bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-amber-400 to-teal-400 transition-all duration-700"
          style={{ width: `${(active / KYC_STEPS.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
