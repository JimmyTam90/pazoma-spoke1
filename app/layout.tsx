import type { Metadata, Viewport } from 'next';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import Analytics from '@/components/Analytics';
import { BASE_PATH, SITE } from '@/lib/config';

const TITLE = 'Pazoma Racing Parts for Harley-Davidson | Exhausts, Lighting, Guards — PrimeGearLab';
const DESCRIPTION =
  'Browse Pazoma Racing aftermarket Harley-Davidson parts: exhaust systems, LED lighting, handlebars, levers, crash guards and fairings. Use code PF10 for 10% off at checkout.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: { default: TITLE, template: '%s | PrimeGearLab' },
  description: DESCRIPTION,
  applicationName: SITE.brand,
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico` },
      { url: `${BASE_PATH}/favicon.png`, type: 'image/png', sizes: '512x512' },
    ],
    shortcut: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/apple-touch-icon.png`,
  },
  openGraph: {
    type: 'website',
    siteName: SITE.brand,
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SITE.ogImage, alt: SITE.ogImageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [SITE.ogImage],
  },
};

export const viewport: Viewport = { themeColor: '#111827', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Header />
        <div className="pb-20 md:pb-0">
          {children}
          <Footer />
        </div>
        <MobileStickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
