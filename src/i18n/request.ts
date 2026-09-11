import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure a valid locale is used, falling back to the default.
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as (typeof routing.locales)[number],
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});