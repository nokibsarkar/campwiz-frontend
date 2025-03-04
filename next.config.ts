import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    webpackMemoryOptimizations: true,
    webpackBuildWorker: true,
    turbo: {
      rules: {
        '*.lottie': ['@noxfed/lottie-webpack-loader'],
      }
    }
  },
};

export default nextConfig;
