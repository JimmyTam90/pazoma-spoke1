import Link from 'next/link';
import Logo from './Logo';
import { SITE } from '@/lib/config';

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-6 px-4 py-10 md:grid-cols-[auto_minmax(0,1fr)]">
        <div className="md:row-span-2">
          <Logo width={150} />
        </div>

        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-3 text-sm md:flex-nowrap md:justify-end md:whitespace-nowrap">
          {LEGAL.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white focus:outline-none focus-visible:underline">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="max-w-4xl space-y-3 text-left text-xs leading-relaxed text-gray-400">
          <p>
            <strong className="text-gray-300">Affiliate disclosure:</strong> This website may contain affiliate links. We may earn a commission when you
            purchase through eligible links, at no additional cost to you.
          </p>
          <p>
            {SITE.brand} is an independent publisher and is not the seller. Products are sold and shipped by {SITE.merchantName} at pazomaracing.com. Harley-Davidson and
            other brand names mentioned are trademarks of their respective owners and are used only to describe fitment; this site is not affiliated with them.
          </p>
          <p>
            Contact: <a href={`mailto:${SITE.email}`} className="underline hover:text-white">{SITE.email}</a> · © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
