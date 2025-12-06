import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/agalar-wikipedia',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
