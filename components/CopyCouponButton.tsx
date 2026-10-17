'use client';

import { useState } from 'react';
import { SITE } from '@/lib/config';

export default function CopyCouponButton({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const code = SITE.coupon.code.toUpperCase();

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
        copied ? 'bg-green-600 text-white' : 'bg-white text-ink hover:bg-gray-200'
      } ${className}`}
    >
      {copied ? (
        'Copied! ✓'
      ) : (
        <>
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy Code
        </>
      )}
    </button>
  );
}
