import Link from 'next/link';
import Logo from './Logo';
import { SITE, SOCIALS } from '@/lib/config';

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Contact', href: '/contact' },
];

const ICONS: Record<string, JSX.Element> = {
  Facebook: <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />,
  'X (Twitter)': <path d="M18.2 2.5h3.3l-7.2 8.3 8.5 11.2h-6.7l-5.2-6.8-6 6.8H1.6l7.7-8.8L1.2 2.5H8l4.7 6.2 5.5-6.2zm-1.2 17.5h1.8L7 4.4H5.1L17 20z" />,
  Instagram: <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
};

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

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
          <ul className="flex shrink-0 items-center gap-4 md:justify-end" aria-label="Social media">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.brand} on ${s.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">{ICONS[s.name]}</svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
