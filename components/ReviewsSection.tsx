'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { REVIEWS } from '@/lib/reviews';
import { asset } from '@/lib/config';

const STAR = 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z';
const src = (s: string) => (s.startsWith('/') ? asset(s) : s);

function Stars({ n }: { n: number }) {
  return (
    <span className="flex text-[#F59E0B]" role="img" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={i <= n ? '' : 'opacity-20'} aria-hidden="true"><path d={STAR} /></svg>
      ))}
    </span>
  );
}

export default function ReviewsSection() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  if (REVIEWS.length === 0) return null;

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-center text-2xl font-extrabold uppercase text-white sm:text-3xl">What Harley riders say about Pazoma Racing</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-gray-400">
        Real feedback, installation photos, and verified performance reviews from custom bike builders worldwide.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <article key={r.id} className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5">
            {r.photo ? (
              <button
                type="button"
                onClick={() => setZoom(r.photo!)}
                aria-label={`Enlarge photo: ${r.photo.alt}`}
                className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Image src={src(r.photo.src)} alt={r.photo.alt} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
              </button>
            ) : null}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-center justify-between gap-2">
                <Stars n={r.rating} />
                {r.verified ? (
                  <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-green-400">✓ Verified Purchase</span>
                ) : null}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-200">“{r.text}”</blockquote>
              <p className="text-sm font-semibold text-white">
                {r.author} <span className="font-normal text-gray-400">· {r.vehicle}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      {zoom ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && setZoom(null)}
        >
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image src={src(zoom.src)} alt={zoom.alt} fill sizes="90vw" className="object-contain" />
          </div>
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Close photo"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✕
          </button>
        </div>
      ) : null}
    </section>
  );
}
