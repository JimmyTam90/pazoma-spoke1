/**
 * Customer reviews — ONLY add real reviews you can substantiate
 * (e.g. collected from your own customers with permission, or quoted from the merchant with attribution).
 * Do not invent names, ratings or "verified" claims: fake reviews violate FTC rules and ad-platform policies.
 * While this array is empty the Reviews section is not rendered.
 *
 * Photo: put the file in /public/reviews/ (PNG/JPG) and use src '/reviews/<file>.png',
 * or use an https URL on www.pazomaracing.com/cdn/shop/ (allowed in next.config.js).
 *
 * Example entry (do not enable without a real source):
 * {
 *   id: 'r1',
 *   author: 'First L.',
 *   vehicle: 'Street Glide',
 *   rating: 5,
 *   text: '…the customer’s actual words…',
 *   verified: true,            // only if you confirmed the purchase
 *   source: 'Email, 2026-10-01, permission granted',
 *   photo: { src: '/reviews/r1.png', alt: 'Exhaust installed on a Street Glide' },
 * }
 */
export type Review = {
  id: string;
  author: string;
  vehicle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  verified: boolean;
  source: string;
  photo?: { src: string; alt: string };
};

export const REVIEWS: Review[] = [];
