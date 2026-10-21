'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 rounded-2xl border border-amber-400/30 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all sm:w-96">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <span className="text-sm font-bold text-amber-400">Pazoma Quick Help</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-sm font-bold px-2 py-1"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="py-3 text-xs text-gray-300 leading-relaxed">
            <p>👋 Need assistance with Harley-Davidson parts fitment, order tracking, or extra discount codes?</p>
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg bg-amber-400 py-2.5 text-center text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-amber-300"
            >
              📩 Contact Support &amp; Help Desk
            </Link>
            <a
              href="#vip"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg border border-white/20 py-2.5 text-center text-xs font-semibold text-gray-200 transition hover:bg-white/10 text-center"
            >
              🎁 Claim Extra 5% Off Coupon Code
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222] border border-amber-400/40 text-amber-400 shadow-xl transition-all duration-200 hover:scale-105 hover:bg-black hover:border-amber-400 focus:outline-none"
        aria-label="Open support menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
}
