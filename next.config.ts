import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/agalar-wikipedia',
  assetPrefix: '/agalar-wikipedia',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
