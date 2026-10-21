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

/**
 * Review rating. Leave null until you have a real, verifiable rating
 * (e.g. from the merchant or a review platform) — the block is then hidden.
 * Example: { value: 4.8, count: 120, source: 'Pazoma Racing store reviews' }
 */
export const RATING: { value: number; count: number; source: string } | null = null;

export const VIDEO = { id: 'w9_JWPn-M_8', title: 'Pazoma Racing video' } as const;

export const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/primegearlab/' },
  { name: 'X (Twitter)', href: 'https://x.com/primegearlab' },
  { name: 'Instagram', href: 'https://www.instagram.com/primegearlab/' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/primegearlab/' },
] as const;

/** Brevo (Sendinblue) hosted-form endpoint used by the native newsletter form. */
export const BREVO_FORM_ACTION =
  'https://f5f5fd24.sibforms.com/serve/MUIFAEJG311xKReAzB2yNYNHpLw39h0E8gj-fAFCy31IT_dGppHT2232gaThshA_2PrN-n1Cpxtmpocrhfavsc7hi_1oDbuCUlQS09PpRCYae_xJo2-yrDkVVc-vS1OOKZh7FIR5ZpsUG32ib0-CH6yU22Taqf5jKzWDxxWv989Vs2bwMCb51LuR_DatJPgHHDut7FMh0YTFIrcX6A==';

/** Popup coupon (supplied by the site owner — confirm it is active at the merchant checkout). */
export const POPUP = { code: 'PAZOMA5', sessionKey: 'pazoma_popup_dismissed', delayMs: 28000, scrollRatio: 0.5 } as const;

export const FREE_SHIPPING_TEXT = 'FREE SHIPPING ON ORDERS OVER $49';

/** Prefix a public-folder asset path with the configured basePath. */
export const asset = (path: string) => `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;

/** Absolute public URL for a page path (no trailing slash). */
export const pageUrl = (path = '') => `${SITE.canonicalBase}${path}`;
