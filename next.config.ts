import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/agalar-wikipedia' : '',
  assetPrefix: isProd ? '/agalar-wikipedia' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
