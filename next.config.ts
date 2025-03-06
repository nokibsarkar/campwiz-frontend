import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (
    config,
    { dev, }
  ) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      })
    }
    // Important: return the modified config
    return config
  },
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
