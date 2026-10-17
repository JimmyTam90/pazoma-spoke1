/** Hub–Spoke subpath deployment: Hub rewrites /pazoma-racing/* to this Spoke. */
const BASE_PATH = '/pazoma-racing';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.pazomaracing.com', pathname: '/cdn/shop/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com', pathname: '/s/files/**' },
    ],
  },
  async redirects() {
    // Direct Spoke access: send the bare root to the subpath.
    return [{ source: '/', destination: BASE_PATH, permanent: false, basePath: false }];
  },
};

module.exports = nextConfig;
