'use client';

import { useState, type ReactNode } from 'react';
import { BASE_PATH } from '@/lib/config';
import { hasDestination } from '@/lib/catalog';

type Props = {
  slug: string;
  placement: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  className?: string;
  ariaLabel?: string;
};

const styles = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  outline: 'border border-white/30 text-white hover:bg-white/10',
  light: 'bg-white text-ink hover:bg-gray-200',
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Single affiliate anchor: native new-tab navigation via the internal 302 route. */
export default function AffiliateCTA({ slug, placement, children, variant = 'primary', className = '', ariaLabel }: Props) {
  const [busy, setBusy] = useState(false);
  if (!hasDestination(slug)) return null;

  const href = `${BASE_PATH}/api/out/${slug}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => {
        setBusy(true);
        window.setTimeout(() => setBusy(false), 2500);
        try {
          window.gtag?.('event', 'affiliate_click', { slug, placement });
          window.fbq?.('trackCustom', 'AffiliateClick', { slug, placement });
        } catch {
          /* analytics must never block navigation */
        }
      }}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${styles[variant]} ${className}`}
    >
      {busy ? 'Redirecting…' : children}
    </a>
  );
}
