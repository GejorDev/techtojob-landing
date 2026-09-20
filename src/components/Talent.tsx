import { Code2, Gauge, CalendarClock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";
import { DISCORD_URL } from "./DiscordCtaLink";

const icons = [Code2, Gauge, CalendarClock];

type Skill = { label: string; detail: string };

export default async function Talent() {
  const t = await getTranslations("talent");
  const skills = t.raw("skills") as Skill[];

  return (
    <section
      id="talent"
      className="scroll-mt-16"
      aria-labelledby="talent-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="talent-heading"
            className={SECTION_TITLE_CLASS}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {t("subtitle")}
          </p>
          <ul className="mt-7 divide-y divide-line">
            {skills.map((item, i) => {
              const Icon = icons[i] ?? icons[0];
              return (
                <li
                  key={item.label}
                  className="flex items-start gap-4 py-3 sm:items-center"
                >
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-dark sm:mt-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 sm:flex sm:items-center sm:gap-4">
                    <span className="block font-semibold text-ink sm:w-32 sm:shrink-0">
                      {item.label}
                    </span>
                    <span className="block text-ink-muted">{item.detail}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-base font-semibold text-white shadow-lg shadow-ink/10 transition hover:bg-ink-soft active:scale-[0.98]"
          >
            {t("cta")}
          </a>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 sm:p-10"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-lg font-bold text-ink">
                M
              </div>
              <div>
                <p className="font-semibold">{t("card.name")}</p>
                <p className="text-sm text-zinc-300">{t("card.stack")}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-teal/20 px-3 py-1 text-white">
                {t("card.level")}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">
                {t("card.commitment")}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">
                {t("card.remote")}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              {t("card.quote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}