import "tailwindcss/tailwind.css";
import "@/assets/css/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import * as Sentry from "@sentry/vue";

const app = createApp(App);
// const SENTRY_DSN = process.env.SENTRY_DSN
// const SENTRY_ENV = process.env.SENTRY_ENV

Sentry.init({
  app,
  environment: "local",
  dsn: "https://839d93976d44314f0a51e4d5f16c448c@o551416.ingest.sentry.io/4506323220889600",
  // environment: SENTRY_ENV,
  // dsn: SENTRY_DSN,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

app.use(store);
app.use(router);
app.mount("#app");
