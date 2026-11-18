"use client";

import { useState } from "react";

// إطارات الأجهزة — بتخلي الـ screenshot تبين كمنتج مش كصورة مقصوصة
const FRAMES = {
  browser: "rounded-lg",
  phone: "mx-auto max-w-[280px] rounded-[2rem]",
  flat: "rounded-lg",
};

export default function Shot({ shot, onOpen, className = "" }) {
  const [failed, setFailed] = useState(false);
  const frame = shot.frame ?? "browser";

  return (
    <figure className={className}>
      <div
        className={`overflow-hidden border border-slate-800 bg-slate-900/60 ${FRAMES[frame]}`}
      >
        {frame === "browser" && (
          <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-slate-700"></span>
            <span className="h-2 w-2 rounded-full bg-slate-700"></span>
            <span className="h-2 w-2 rounded-full bg-slate-700"></span>
            {shot.url && (
              <span className="ml-2 truncate font-mono text-[10px] text-slate-600">
                {shot.url}
              </span>
            )}
          </div>
        )}

        {failed ? (
          <Placeholder shot={shot} />
        ) : (
          <button
            type="button"
            onClick={onOpen ? () => onOpen(shot) : undefined}
            disabled={!onOpen}
            className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:cursor-default"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.caption ?? ""}
              loading="lazy"
              onError={() => setFailed(true)}
              className="block w-full"
            />
          </button>
        )}
      </div>

      {shot.caption && (
        <figcaption className="mt-2.5 text-sm leading-relaxed text-slate-500">
          {shot.caption}
        </figcaption>
      )}
    </figure>
  );
}

// بيظهر بدل الصورة لو الملف لسا مش موجود — بيقلك بالضبط وين تحطه
function Placeholder({ shot }) {
  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-slate-900/40 p-6 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
        screenshot pending
      </span>
      <span className="max-w-full break-all font-mono text-[11px] text-slate-700">
        {shot.src}
      </span>
    </div>
  );
}
