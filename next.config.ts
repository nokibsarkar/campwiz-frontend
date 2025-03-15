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
        // '*.svg': ['@svgr/webpack']
      }
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
