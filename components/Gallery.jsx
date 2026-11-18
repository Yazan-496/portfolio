"use client";

import { useCallback, useEffect, useState } from "react";
import Shot from "./Shot";

export default function Gallery({ shots }) {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir) =>
      setIndex((i) => (i === null ? null : (i + dir + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2">
        {shots.map((shot, i) => (
          <Shot
            key={shot.src}
            shot={shot}
            onOpen={() => setIndex(i)}
            className={shot.wide ? "sm:col-span-2" : undefined}
          />
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[index].caption ?? "Screenshot"}
          onClick={close}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm sm:p-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shots[index].src}
            alt={shots[index].caption ?? ""}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-lg border border-slate-800 object-contain"
          />
          <p className="mt-4 max-w-xl text-center text-sm text-slate-400">
            {shots[index].caption}
          </p>

          <div className="mt-4 flex items-center gap-6 font-mono text-xs text-slate-500">
            <button
              type="button"
              onClick={(e) => (e.stopPropagation(), step(-1))}
              className="transition hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              ← prev
            </button>
            <span>
              {index + 1} / {shots.length}
            </span>
            <button
              type="button"
              onClick={(e) => (e.stopPropagation(), step(1))}
              className="transition hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              next →
            </button>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 font-mono text-sm text-slate-500 transition hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            esc ✕
          </button>
        </div>
      )}
    </>
  );
}
