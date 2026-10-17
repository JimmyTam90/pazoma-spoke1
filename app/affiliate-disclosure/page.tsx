import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { pageUrl, SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  alternates: { canonical: pageUrl('/affiliate-disclosure') },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>This website may contain affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.</p>
      <p>{SITE.brand} participates in {SITE.merchantName}’s referral program. A click does not guarantee a commission, and not every product or order may qualify under the merchant’s program rules.</p>
      <p>Coupon code {SITE.coupon.code} is shown as a convenience; eligibility is determined by the merchant at checkout.</p>
    </LegalPage>
  );
}
