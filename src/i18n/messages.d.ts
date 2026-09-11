import type { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof import("../../messages/es.json");
  }
}