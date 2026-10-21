'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import AffiliateCTA from './AffiliateCTA';
import CopyCouponButton from './CopyCouponButton';
import { POPUP } from '@/lib/config';

function wasDismissed() {
  try {
    return window.sessionStorage.getItem(POPUP.sessionKey) === '1';
  } catch {
    return false;
  }
}

/** Opens once per session after ~28s OR when the visitor has scrolled 50% of the page. */
export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(POPUP.sessionKey, '1');
    } catch {
      /* storage unavailable: popup simply will not persist its state */
    }
  }, []);

  // triggers
  useEffect(() => {
    if (wasDismissed()) return;
    const fire = () => {
      if (triggered.current) return;
      triggered.current = true;
      setOpen(true);
    };
    const timer = window.setTimeout(fire, POPUP.delayMs);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= POPUP.scrollRatio) fire();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // modal behaviour: scroll lock, Esc, focus trap
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const f = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-amber-400/40 bg-gradient-to-b from-ink to-black p-6 text-center shadow-2xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close offer"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-gray-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-black">Limited time VIP offer</span>
        <h2 id="promo-title" className="mt-4 text-2xl font-extrabold uppercase leading-tight text-white">
          Claim 5% off your Harley custom parts!
        </h2>

        <div className="mt-5 rounded-lg border-2 border-dashed border-amber-400 bg-amber-400/10 p-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-mono text-2xl font-extrabold tracking-widest text-amber-300">{POPUP.code}</span>
            <CopyCouponButton code={POPUP.code} label="COPY CODE" copiedLabel="COPIED!" tone="gold" />
          </div>
        </div>

        <AffiliateCTA slug="pazoma-home" placement="popup" variant="gold" className="mt-5 w-full !py-3.5 uppercase">
          Shop Pazoma parts now →
        </AffiliateCTA>
        <button type="button" onClick={close} className="mt-3 text-xs text-gray-400 underline hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
          No thanks
        </button>
      </div>
    </div>
  );
}
