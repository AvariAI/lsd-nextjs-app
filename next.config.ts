import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/lsd-nextjs-app',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
