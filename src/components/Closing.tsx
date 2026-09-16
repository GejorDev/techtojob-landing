import DiscordCtaLink from "./DiscordCtaLink";
import { getTranslations } from "next-intl/server";

export default async function Closing() {
  const t = await getTranslations("closing");

  return (
    <section
      className="relative overflow-hidden bg-ink"
      aria-labelledby="closing-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>
      <div className="relative mx-auto max-w-6xl animate-view px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2
          id="closing-heading"
          className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
          {t("subtitle")}
        </p>
        <DiscordCtaLink shadow="glow" className="mt-9 h-13 px-9 text-lg">
          {t("cta")}
        </DiscordCtaLink>
      </div>
    </section>
  );
}