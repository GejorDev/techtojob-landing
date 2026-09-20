import { Trophy, Users, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import DiscordCtaLink from "./DiscordCtaLink";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";

const icons = [Zap, Users, Trophy];

type Prize = { text: string };

export default async function Tournaments() {
  const t = await getTranslations("tournaments");
  const prizes = t.raw("prizes") as Prize[];

  return (
    <section
      id="tournaments"
      className="scroll-mt-16"
      aria-labelledby="tournaments-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              id="tournaments-heading"
              className={SECTION_TITLE_CLASS}
            >
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{t("subtitle")}</p>
          </div>
          <DiscordCtaLink
            shadow="glow-sm"
            className="h-12 w-fit border border-transparent px-7 text-base"
          >
            {t("cta")}
          </DiscordCtaLink>
        </div>

        <div className="relative mt-12 animate-view overflow-hidden rounded-3xl bg-ink text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>
          <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal px-3 py-1 text-sm font-semibold text-ink">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink"
                    aria-hidden="true"
                  />
                  {t("card.badge")}
                </span>
                <span className="text-sm text-zinc-400">{t("card.label")}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                {t("card.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-300">
                {t("card.text")}
              </p>
              <Link
                href={{ pathname: "/", hash: "#news" }}
                className="mt-6 inline-flex h-11 items-center rounded-full bg-teal px-6 text-sm font-semibold text-ink transition hover:bg-teal-dark active:scale-[0.98]"
              >
                {t("card.button")}
              </Link>
            </div>
            <ul className="space-y-3">
              {prizes.map((prize, i) => {
                const Icon = icons[i] ?? icons[0];
                return (
                  <li
                    key={prize.text}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:bg-white/10"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    {prize.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}