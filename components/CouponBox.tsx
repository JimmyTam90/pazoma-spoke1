import { SITE } from '@/lib/config';
import CopyCouponButton from './CopyCouponButton';

/** Renders nothing (no empty wrapper) when no coupon code is configured. */
export default function CouponBox({ className = '' }: { className?: string }) {
  const { code, discount, terms } = SITE.coupon;
  if (!code) return null;
  return (
    <div className={`rounded-lg border-2 border-dashed border-accent bg-accent/10 p-4 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded bg-accent px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">{discount} OFF</span>
        <span className="font-mono text-xl font-extrabold uppercase tracking-widest text-white">{code.toUpperCase()}</span>
        <CopyCouponButton className="ml-auto" />
      </div>
      <p className="mt-2 text-xs text-gray-300">{terms}</p>
    </div>
  );
}
