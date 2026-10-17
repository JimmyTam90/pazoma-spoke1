'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import AffiliateCTA from './AffiliateCTA';

const NAV = [
  { label: 'Categories', href: '/#categories' },
  { label: 'Top Parts', href: '/#products' },
  { label: 'Compare', href: '/#compare' },
  { label: 'Fitment', href: '/#fitment' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center px-4">
        <Logo width={92} />

        {/* Desktop: nav + CTA right-aligned */}
        <div className="ml-auto hidden items-center justify-end gap-6 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-5">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm font-medium text-gray-200 hover:text-white focus:outline-none focus-visible:underline">
                {n.label}
              </Link>
            ))}
          </nav>
          <AffiliateCTA slug="all-products" placement="header" className="!py-2">
            Shop Pazoma Parts
          </AffiliateCTA>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="rounded px-3 py-3 text-base font-medium text-white hover:bg-white/10">
              Home
            </Link>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded px-3 py-3 text-base font-medium text-white hover:bg-white/10">
                {n.label}
              </Link>
            ))}
            <AffiliateCTA slug="all-products" placement="mobile-menu" className="mt-2 w-full">
              Shop Pazoma Parts
            </AffiliateCTA>
          </nav>
        </div>
      )}
    </header>
  );
}
