import Link from 'next/link';
import { asset } from '@/lib/config';

/**
 * Logo-only branding (the logo image already contains the brand name).
 * The source PNG has transparent padding; the wrapper crops to the visible
 * artwork (x 68–1197, y 207–1058 of 1254×1254) without altering the file.
 */
export default function Logo({ width = 96 }: { width?: number }) {
  const visibleW = 1197 - 68;
  const visibleH = 1058 - 207;
  return (
    <Link href="/" aria-label="PrimeGearLab home" className="block shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
      <span
        className="relative block overflow-hidden"
        style={{ width, height: Math.round((width * visibleH) / visibleW) }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/logo.png')}
          alt="PrimeGearLab Independent Lab logo"
          width={1254}
          height={1254}
          style={{
            position: 'absolute',
            maxWidth: 'none',
            width: `${(1254 / visibleW) * 100}%`,
            left: `${-(68 / visibleW) * 100}%`,
            top: `${-(207 / visibleH) * 100}%`,
          }}
        />
      </span>
    </Link>
  );
}
