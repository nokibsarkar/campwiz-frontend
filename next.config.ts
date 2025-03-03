import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    webpackMemoryOptimizations: true,
    webpackBuildWorker: true,
  },
};

export default nextConfig;
