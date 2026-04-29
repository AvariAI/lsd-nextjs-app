import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetsPrefix: '/lsd-nextjs-app',
  basePath: '/lsd-nextjs-app',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
