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
    vehicle: 'Harley Street Glide Special',
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
    author: 'Adam Phillips',
    vehicle: 'Harley Pan America 1250',
    rating: 5,
    text: 'Makes for a much more comfortable riding position over the standard risers.',
    verified: true,
    source: 'Verified Customer Review - Pazoma Racing Store',
    photo: {
      src: '/reviews/r2.PNG', // Đã đổi sang chữ HOA .PNG
      alt: 'Adam Phillips installing Handlebar Tall Pullback Risers on Pan America 1250',
    },
  },
  {
    id: 'r3',
    author: 'Monica Stein',
    vehicle: 'Harley Softail Low Rider S',
    rating: 5,
    text: 'I love it ! Fit perfectly and Im glad I found y’all !',
    verified: true,
    source: 'Verified Customer Review - Pazoma Racing Store',
    photo: {
      src: '/reviews/r3.PNG', // Đã đổi sang chữ HOA .PNG
      alt: 'Pazoma Front Highway Engine Guard Crash Bar installed on Softail',
    },
  },
];
