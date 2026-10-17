/**
 * Central manifest + affiliate destination resolver.
 * Product facts below were observed on https://www.pazomaracing.com/ on 2026-10-17.
 * Prices are "from" prices and may change. Availability is NOT verified.
 */
const M = 'https://www.pazomaracing.com';
const AFFILIATE_QUERY = '?ref=BUITHANH';
const img = (p: string) => `${M}/cdn/shop/${p}`;

export type Availability = 'AVAILABLE_VERIFIED' | 'UNAVAILABLE_VERIFIED' | 'AVAILABILITY_NOT_VERIFIED';

export type Product = {
  id: string;
  slug: string; // also the /api/out/[slug] key
  categoryId: string;
  title: string;
  merchantTitle: string;
  fromPrice: number; // USD
  image: string;
  specs: string[];
  availability: Availability;
  sku: string | null; // not published on listing pages -> null
  handle: string;
};

export type Category = {
  id: string;
  slug: string; // collection destination key
  name: string;
  blurb: string;
  image: string;
  specs: string[];
  cta: string;
};

/* ---------- Collection destinations (exact supplied mapping) ---------- */
const COLLECTIONS: Record<string, string> = {
  'motorcycle-lights': `${M}/collections/lighting${AFFILIATE_QUERY}`,
  'exhaust-systems': `${M}/collections/muffler${AFFILIATE_QUERY}`,
  'mirrors-handlebars': `${M}/collections/mirrors${AFFILIATE_QUERY}`,
  'windshields-fairings': `${M}/collections/windshield${AFFILIATE_QUERY}`,
  'all-products': `${M}/collections/all${AFFILIATE_QUERY}`,
  // New Arrivals: user-verified fallback to the full catalog
  'new-arrivals': `${M}/collections/all${AFFILIATE_QUERY}`,
  // Protection / crash bars / engine guards (user-verified live URL)
  'engine-guards': `${M}/collections/engine-guard${AFFILIATE_QUERY}`,
};

/* ---------- Products ---------- */
export const PRODUCTS: Product[] = [
  {
    id: 'p-led-headlight',
    slug: 'harley-softail-slim-line-led-headlight',
    categoryId: 'lighting',
    title: '5¾" Slim Line LED Headlight Kit',
    merchantTitle: '5 3/4" Slim Line LED Headlight Kit for Harley Softail M8 Low Rider ST FXLRST w/ Adapter Bracket',
    fromPrice: 69.99,
    image: img('files/534SlimLineLEDHeadlightKitforHarleySoftailM8LowRiderSTFXLRSTwAdapterBracket_9.jpg?v=1749325027'),
    specs: ['Multi-LED projection headlight in black', 'Made for the Softail Low Rider ST 117 fairing', 'Adapter bracket included'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: '5-3-4-slim-line-led-headlight-kit-for-harley-softail-m8-low-rider-st-fxlrst-w-adapter-bracket',
  },
  {
    id: 'p-exhaust-softail',
    slug: 'harley-m8-softail-2-into-1-big-bore-exhaust',
    categoryId: 'exhausts',
    title: 'M8 Softail 2-into-1 Big Bore Exhaust',
    merchantTitle: "2 into 1 Big Bore Full Exhaust System Stainless Muffler For Harley M8 Softail Fat Street Bob Low Rider S ST Standard Slim FXFB '18-'26",
    fromPrice: 599.99,
    image: img('files/2into1BigBoreFullExhaustSystemStainlessMufflerForHarleyM8SoftailFatStreetBobLowRiderSSTStandardSlimFXFB_18-_25.jpg?v=1749134560'),
    specs: ['Stainless steel 2-into-1 full system', 'Stepped 1¾" to 2" head pipes', 'Softail M8 models, 2018–2026'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: '2-into-1-big-bore-full-exhaust-system-stainless-muffler-for-harley-m8-softail-fat-street-bob-low-rider-s-st-standard-slim-deluxe-fxfb-18-25',
  },
  {
    id: 'p-exhaust-touring',
    slug: 'harley-m8-touring-2-into-1-big-bore-exhaust',
    categoryId: 'exhausts',
    title: 'M8 Touring 2-into-1 Big Bore Exhaust',
    merchantTitle: '2 into 1 Big Bore Exhaust System Stainless Steel Muffler For Harley Touring FLH M8 Bagger Electra Street Road Glide Road King 2017up',
    fromPrice: 659.99,
    image: img('files/2into1BigBoreExhaustFitsTouring2017up.jpg?v=1745898933'),
    specs: ['Stainless steel 2-into-1 full system', 'Stepped 1¾" to 1⅞" head pipes', 'FLHT / FLHR / FLHX / FLTRX / FLTRU, 2017–2026'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: '2-into-1-big-bore-exhaust-system-stainless-steel-muffler-for-harley-touring-flh-m8-bagger-electra-glide-road-king-street-glide-road-glide',
  },
  {
    id: 'p-exhaust-dyna',
    slug: 'harley-dyna-2-into-1-full-exhaust',
    categoryId: 'exhausts',
    title: 'Dyna 2-into-1 Full Exhaust System',
    merchantTitle: '2006-2017 Harley Dyna 2-into-1 Full Complete Exhaust System Stainless Steel Muffler Fat Bob FXDF Low Rider FXDL S Street Bob FXDB FXD',
    fromPrice: 579.99,
    image: img('files/2006-2017HarleyDyna2-into-1FullCompleteExhaustSystemStainlessSteelMufflerFatBobFXDFLowRiderFXDLSStreetBobFXDBFXD_1_830e5de3-836c-4d47-a4e5-8f135c532cf0.jpg?v=1747065954'),
    specs: ['Stainless steel 2-into-1 full system', 'Stepped 1¾" to 2" head pipes', 'Dyna 2006–2017, forward and mid-controls'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: '2006-2017-harley-dyna-2-into-1-full-complete-exhaust-system-stainless-steel-muffler-fat-bob-fxdf-low-rider-fxdl-s-street-bob-fxdb-fxd',
  },
  {
    id: 'p-club-bars',
    slug: 'harley-road-glide-club-style-moto-handlebars',
    categoryId: 'handlebars',
    title: 'Club Style 1" Moto Handlebars',
    merchantTitle: 'Club Style Moto Bars Stainless Performance Mid-Rise 1" Dia Handlebar For Harley Road Glide Street Glide Ultra ST CVO 2023.5-2026',
    fromPrice: 109.99,
    image: img('files/ClubStyleMotoBarsStainlessPerformanceMid-Rise1DiaHandlebarForHarleyRoadGlideStreetGlideUltraSTCVOFLTRX2023.5-2025_5.jpg?v=1751303835'),
    specs: ['1" diameter mid-rise stainless bars', 'For 2024+ Road Glide / Street Glide and 2025+ Softail hand controls', 'Black, Brush Silver or Brush Gold'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: 'club-style-moto-bars-stainless-performance-mid-rise-1-dia-handlebar-for-harley-road-glide-street-glide-ultra-st-cvo-fltrx-2023-5-2025',
  },
  {
    id: 'p-cnc-levers',
    slug: 'harley-softail-cnc-shorty-clutch-brake-levers',
    categoryId: 'handlebars',
    title: 'CNC Shorty Clutch & Brake Lever Combo',
    merchantTitle: 'Harley Softail Heritage Classic FLHCS Low Rider S ST FXLR FXLRS FXLRST CNC Shorty Easy Pull Clutch & Brake Lever Combo 2015up',
    fromPrice: 125.99,
    image: img('files/BCL-15013HarleySoftailHeritageClassicFLHCSLowRiderSSTFXLRFXLRSFXLRSTCNCShortyEasyPullClutch_BrakeLeverCombo2015up_5.jpg?v=1723215514'),
    specs: ['CNC shorty easy-pull lever combo', 'Softail Heritage Classic, Low Rider S / ST and more', 'Fits Softail 2015–2024'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: 'harley-softail-heritage-classic-flhcs-low-rider-s-st-fxlr-fxlrs-fxlrst-cnc-shorty-easy-pull-clutch-brake-lever-combo-2015up',
  },
  {
    id: 'p-tip-over',
    slug: 'harley-touring-saddlebag-tip-over-bar-set',
    categoryId: 'protection',
    title: 'Saddlebag Tip-Over Bar Set',
    merchantTitle: 'Saddlebag Tip-Over Bar Set Saddle Bag Guards Crash Bars For Harley Touring Street Glide Road Glide Road King Electra/Ultra FLHT FLHX 09-2024',
    fromPrice: 269.99,
    image: img('files/SaddlebagTip-OverBarSetSaddleBagGuardsCrashBarsForHarleyTouringStreetGlideRoadGlideRoadKingElectraUltraFLHTFLHX09-2024_1.jpg?v=1768301592'),
    specs: ['Low-profile West Coast performance style', 'Touring models, 2009–2024', 'Limited cosmetic protection (per merchant)'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: 'saddlebag-tip-over-bar-set-saddle-bag-guards-crash-bars-for-harley-touring-street-glide-road-glide-road-king-electraultra-flht-flhx-09-2024',
  },
  {
    id: 'p-engine-guard',
    slug: 'harley-softail-low-rider-highway-engine-guard',
    categoryId: 'protection',
    title: 'Highway Engine Guard + Saddlebag Guards',
    merchantTitle: 'Front Highway Engine Guard Crash Bar Rear Saddlebag Guards Frame Slider For Harley Softail Low Rider ST 117 FXLRST 2022-2026',
    fromPrice: 189.99,
    image: img('files/FrontHighwayEngineGuardCrashBarRearSaddlebagGuardsFrameSliderForHarleySoftailLowRiderSST117FXLRST2022-2024_25.jpg?v=1732299870'),
    specs: ['Front crash bar with rear saddlebag guards / frame slider', 'Softail Low Rider S / ST 117, 2022–2026', 'Multiple colors offered'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: 'front-rear-highway-engine-guard-crash-bar-saddlebag-guards-frame-slider-for-harley-softail-low-rider-s-st-117-fxlrst-2022-2024',
  },
  {
    id: 'p-shark-fairing',
    slug: 'harley-softail-fat-bob-shark-club-fairing',
    categoryId: 'fairings',
    title: 'Shark Club Style Headlight Fairing',
    merchantTitle: 'Club Style Headlight Shark Fairing Front Mask w/Daytime Running Lights & Turn Signals For Harley Softail M8 Fat Bob FXFB 114 FXFBS',
    fromPrice: 849.99,
    image: img('files/HarleySoftailM8FatBobFXFB114FXFBSSharkClubStyleHeadlightFairingFrontMaskw8-PackDRLEagleEyeLEDDaytimeRunningTurnSignalLight2018-2024_2.jpg?v=1765438943'),
    specs: ['Shark club style front mask', 'Daytime running lights and turn signals option', 'Softail M8 Fat Bob 114, 2018–2024'],
    availability: 'AVAILABILITY_NOT_VERIFIED',
    sku: null,
    handle: 'club-style-headlight-shark-fairing-front-mask-w-daytime-running-lights-turn-signals-for-harley-softail-m8-fat-bob-fxfb-114-fxfbs',
  },
];

/* ---------- Categories ---------- */
export const CATEGORIES: Category[] = [
  {
    id: 'lighting',
    slug: 'motorcycle-lights',
    name: 'Motorcycle LED Lighting',
    blurb: 'Headlights, auxiliary lights and lighting brackets.',
    image: PRODUCTS[0].image,
    specs: ['LED headlight kits', 'Auxiliary light brackets', 'Fit by model and year'],
    cta: 'Shop Lighting',
  },
  {
    id: 'exhausts',
    slug: 'exhaust-systems',
    name: 'Exhaust Systems & Mufflers',
    blurb: 'Full systems and slip-ons for Harley models.',
    image: PRODUCTS[1].image,
    specs: ['2-into-1 full systems', 'Slip-on mufflers', 'Softail, Touring and Dyna'],
    cta: 'Shop Exhausts',
  },
  {
    id: 'handlebars',
    slug: 'mirrors-handlebars',
    name: 'Mirrors & Handlebar Parts',
    blurb: 'Mirrors and cockpit upgrades for a custom feel.',
    image: PRODUCTS[4].image,
    specs: ['Mirrors collection', 'Handlebar upgrades', 'Check controls compatibility'],
    cta: 'Shop Mirrors',
  },
  {
    id: 'protection',
    slug: 'engine-guards',
    name: 'Protection & Guards',
    blurb: 'Crash bars, engine guards and saddlebag guards.',
    image: PRODUCTS[7].image,
    specs: ['Highway engine guards', 'Tip-over bar sets', 'Crash bars and frame sliders'],
    cta: 'Shop Engine Guards',
  },
  {
    id: 'fairings',
    slug: 'windshields-fairings',
    name: 'Windshields & Fairings',
    blurb: 'Windshields and front fairing upgrades.',
    image: PRODUCTS[8].image,
    specs: ['Windshield collection', 'Club style fairings', 'Model-specific fitment'],
    cta: 'Shop Windshields',
  },
];

/* ---------- Central destination resolver ---------- */
export const DESTINATIONS: Record<string, string> = {
  ...COLLECTIONS,
  ...Object.fromEntries(PRODUCTS.map((p) => [p.slug, `${M}/products/${p.handle}${AFFILIATE_QUERY}`])),
};

function isValidDestination(raw: string): boolean {
  try {
    const u = new URL(raw);
    return u.protocol === 'https:' && u.hostname === 'www.pazomaracing.com' && u.searchParams.get('ref') === 'BUITHANH';
  } catch {
    return false;
  }
}

/** Returns the validated affiliate URL for a slug, or null (clean 404 upstream). */
export function getDestination(slug: string): string | null {
  if (!/^[a-z0-9-]{1,200}$/.test(slug)) return null;
  if (!Object.prototype.hasOwnProperty.call(DESTINATIONS, slug)) return null;
  const url = DESTINATIONS[slug];
  return isValidDestination(url) ? url : null;
}

export const hasDestination = (slug: string) => getDestination(slug) !== null;

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
