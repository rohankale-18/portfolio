import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true, // important for static export, disables next/image optimization
  },
};

export default nextConfig;
