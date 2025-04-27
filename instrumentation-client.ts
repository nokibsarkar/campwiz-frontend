// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
const sentryIntegrations = [
  Sentry.replayIntegration(),
];
Sentry.init({
  enabled: process.env.NEXT_PUBLIC_SENTRY_DSN !== undefined && !process.env.NODE_ENV.startsWith("dev"),
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: sentryIntegrations,
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.8,
  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV !== "production",
  sendDefaultPii: false,
  environment: process.env.NODE_ENV,
});
