# Pazoma Racing landing (PrimeGearLab Spoke)

Next.js 14.2 · App Router · TypeScript · Tailwind 3 · NPM

    npm install && npm run build && npm start

Served under `/pazoma-racing` (basePath + assetPrefix). Direct spoke URL: `https://pazoma-spoke1.vercel.app/pazoma-racing`.

## Hub rewrites (primegearlab-main next.config)

    async rewrites() {
      return [
        { source: '/pazoma-racing', destination: 'https://pazoma-spoke1.vercel.app/pazoma-racing' },
        { source: '/pazoma-racing/:path*', destination: 'https://pazoma-spoke1.vercel.app/pazoma-racing/:path*' },
      ];
    }

## Notes
- All affiliate links go through `/pazoma-racing/api/out/[slug]` (Edge, 302, noindex). Destinations live in `lib/catalog.ts`.
- Analytics is off until `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GOOGLE_ADS_ID` / `NEXT_PUBLIC_META_PIXEL_ID` are set (see `.env.example`).
- `app/robots.txt` is served at `/pazoma-racing/robots.txt`; crawlers read `/robots.txt` at the domain root, so mirror it in the Hub.
