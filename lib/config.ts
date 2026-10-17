export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/pazoma-racing';

export const SITE = {
  projectName: 'Pazoma Racing Performance & Accessories Hub',
  brand: 'PrimeGearLab',
  email: 'contact@primegearlab.com',
  origin: 'https://primegearlab.com',
  canonicalBase: 'https://primegearlab.com/pazoma-racing',
  merchantName: 'Pazoma Racing',
  merchantUrl: 'https://www.pazomaracing.com/',
  priceObservedOn: 'October 17, 2026',
  coupon: {
    code: 'PF10',
    discount: '10%',
    terms: 'Valid on storewide motorcycle accessories and replacement parts at checkout.',
  },
  // Primary featured product image (verified on merchant homepage). Never the logo.
  ogImage:
    'https://www.pazomaracing.com/cdn/shop/files/2-into-1_Full_Complete_Exhaust_System_Stainless_Steel_Muffler_For_Harley_Softail_Low_Rider_S_ST_EI_Diablo_Street_Bob_Standard_2018-2024.jpg?v=1788530438',
  ogImageAlt: 'Pazoma Racing 2-into-1 full complete stainless steel exhaust system for Harley Softail',
} as const;

/** Prefix a public-folder asset path with the configured basePath. */
export const asset = (path: string) => `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;

/** Absolute public URL for a page path (no trailing slash). */
export const pageUrl = (path = '') => `${SITE.canonicalBase}${path}`;
