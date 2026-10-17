import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { pageUrl, SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: pageUrl('/contact') },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>For questions about this website, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p>For orders, shipping, returns or fitment on a specific part, please contact {SITE.merchantName} directly through their website.</p>
    </LegalPage>
  );
}
