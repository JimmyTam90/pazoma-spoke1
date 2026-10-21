import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { pageUrl, SITE, withBase } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: pageUrl('/contact') },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Contact">
      {/* Nút quay lại trang Hướng dẫn / Landing Page chính */}
      <div className="mb-6 -mt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline transition-colors"
        >
          ← Back to the {SITE.merchantName || 'brand'} guide
        </Link>
      </div>

      <p>
        For questions about this website, email{' '}
        <a href={`mailto:${SITE.email}`} className="text-amber-400 hover:underline">
          {SITE.email}
        </a>.
      </p>
      <p>
        For orders, shipping, returns or fitment on a specific part, please contact{' '}
        {SITE.merchantName} directly through their website.
      </p>
    </LegalPage>
  );
}
