import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { pageUrl, SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: pageUrl('/privacy') },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This page describes how this website handles information. It is not legal advice.</p>
      <h2>What we collect</h2>
      <p>This site does not ask you to create an account or submit personal data. Analytics and advertising tags (Google Analytics 4, Google Ads, Meta Pixel) are only loaded if they are configured by the site operator; when enabled they may collect usage data such as pages viewed and button clicks.</p>
      <h2>Newsletter</h2>
      <p>If you subscribe with your email address, it is sent to our email provider (Brevo) so we can send the offers and alerts described on the form. You can unsubscribe at any time using the link in any email.</p>
      <h2>Outbound links</h2>
      <p>Buttons on this site open the {SITE.merchantName} store (pazomaracing.com) in a new tab through a short redirect on this domain. The merchant has its own privacy practices, and purchases are governed by the merchant’s policies.</p>
      <h2>Contact</h2>
      <p>Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
