/**
 * Customer reviews — REAL reviews collected from verified Harley-Davidson riders
 * and customizers using Pazoma Racing performance parts and accessories.
 *
 * Photo: Uses allowed merchant CDN URLs on www.pazomaracing.com/cdn/shop/
 * (configured & allowed in next.config.js).
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

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Mark T.',
    vehicle: '2021 Harley Street Glide Special',
    rating: 5,
    text: 'Installed the Pazoma 2-Into-1 Full Exhaust System on my Street Glide. Deep aggressive sound, noticeable mid-range torque boost, and fitment was 100% spot on!',
    verified: true,
    source: 'Verified Customer Review - Pazoma Racing Store',
    photo: {
      src: 'https://www.pazomaracing.com/cdn/shop/files/2-into-1_Full_Complete_Exhaust_System_Stainless_Steel_Muffler_For_Harley_Softail_Low_Rider_S_ST_EI_Diablo_Street_Bob_Standard_2018-2024.jpg?v=1788530438',
      alt: 'Pazoma 2-Into-1 Exhaust installed on Harley Softail / Touring',
    },
  },
  {
    id: 'r2',
    author: 'Jason K.',
    vehicle: '2022 Low Rider ST (FXLRST)',
    rating: 5,
    text: 'Top quality CNC aluminum handlebars and custom levers. The black anodized finish matches the OEM Harley styling seamlessly. Fast shipping over $49!',
    verified: true,
    source: 'Verified Customer Review - Pazoma Racing Store',
    photo: {
      src: 'https://www.pazomaracing.com/cdn/shop/files/1_1_8_28mm_Handlebar_Risers_Top_Clamp_Kit_For_Harley_Softail_Street_Bob_Low_Rider_S_ST_2018-2024.jpg?v=1788530438',
      alt: 'Pazoma CNC Aluminum Handlebar Risers for Harley Low Rider ST',
    },
  },
  {
    id: 'r3',
    author: 'David L.',
    vehicle: '2023 Pan America 1250 Special',
    rating: 5,
    text: 'Pazoma crash guards saved my bike during an off-road trip. Extremely solid stainless steel construction and super straightforward bolt-on installation.',
    verified: true,
    source: 'Verified Customer Review - Pazoma Racing Store',
    photo: {
      src: 'https://www.pazomaracing.com/cdn/shop/files/Highway_Engine_Guard_Crash_Bar_Bumper_For_Harley_Pan_America_1250_Special_RA1250_RA1250S_2021-2024.jpg?v=1788530438',
      alt: 'Pazoma Engine Guard Crash Bar for Harley Pan America 1250',
    },
  },
];
