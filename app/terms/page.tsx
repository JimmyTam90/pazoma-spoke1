import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { pageUrl, SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: pageUrl('/terms') },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service">
      <p>By using this website you agree to these terms. This page is informational and is not legal advice.</p>
      <h2>Informational use</h2>
      <p>{SITE.brand} publishes guides and links for convenience. Product details, prices, availability, fitment and coupon eligibility are controlled by {SITE.merchantName} and can change without notice. Always confirm details on the merchant’s product page before buying.</p>
      <h2>No seller relationship</h2>
      <p>We do not sell, ship or service products. Orders, returns and warranties are handled by the merchant.</p>
      <h2>Limitation</h2>
      <p>This site is provided “as is” without warranties of any kind. Third-party trademarks belong to their owners.</p>
    </LegalPage>
  );
}
