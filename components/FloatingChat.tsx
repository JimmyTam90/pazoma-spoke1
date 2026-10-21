'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Xử lý cuộn mượt xuống phần #vip
  const handleVipClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    
    const target = document.getElementById("vip");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "vip";
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div 
      id="pazoma-support-card"
      style={{
        position: 'fixed',
        right: '24px',
        left: 'auto',
        zIndex: 2147483647,
      }}
      className="bottom-[88px] md:bottom-6"
    >
      {/* Popup support hub */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[380px] rounded-2xl border border-amber-400/30 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all">
          {/* Header popup - Đã khóa cứng chống xuống dòng */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-bold text-amber-400 whitespace-nowrap truncate">
                Pazoma Support Hub
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-sm font-bold px-2 py-1 shrink-0 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Nội dung lời chào */}
          <div className="py-3 text-xs text-gray-300 leading-relaxed">
            <p>👋 Need assistance with Harley-Davidson parts fitment, order tracking, or extra discount codes?</p>
          </div>

          {/* Các nút bấm Chuyển hướng & Ưu đãi */}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg bg-amber-400 py-2.5 px-3 text-center text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-amber-300 active:scale-[0.98]"
            >
              📩 Contact Support &amp; Help Desk
            </Link>
            <a
              href="#vip"
              onClick={handleVipClick}
              className="w-full rounded-lg border border-amber-500/30 bg-slate-900/80 py-2.5 px-3 text-center text-xs font-semibold text-amber-400 transition hover:bg-slate-800 hover:border-amber-400 active:scale-[0.98]"
            >
              🎁 Claim Extra 5% Off Coupon Code
            </a>
          </div>
        </div>
      )}

      {/* Nút Chat Icon nổi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-black hover:border-amber-400 focus:outline-none"
        aria-label="Open support menu"
      >
        {isOpen ? (
          <span className="text-base font-bold text-amber-400">✕</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        )}
      </button>
    </div>,
    document.body
  );
}
