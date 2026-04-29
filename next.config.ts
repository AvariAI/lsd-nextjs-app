import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/lsd-nextjs-app',
  basePath: '/lsd-nextjs-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
