// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
console.log('Environment:', process.env.NODE_ENV);
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.8,
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  sendDefaultPii: false,
  environment: process.env.NODE_ENV,
  integrations: [
    Sentry.captureConsoleIntegration({
      levels: ["error"],
    }),
  ]
});
