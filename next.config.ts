import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from "next";
import BundleAnalyzer from '@next/bundle-analyzer';

let nextConfig: NextConfig = {
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
  output: 'standalone',
};
const WithBundleAnalyzer = BundleAnalyzer({
  enabled: true,
  // openAnalyzer: false,
});
nextConfig = WithBundleAnalyzer(nextConfig);
export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "nokib-sarkar",
  project: "campwiz",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});