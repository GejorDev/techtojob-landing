import { Code2, Gauge, CalendarClock } from "lucide-react";
import { getTranslations } from "next-intl/server";

const iconos = [Code2, Gauge, CalendarClock];

type Skill = { label: string; detail: string };

export default async function Talent() {
  const t = await getTranslations("talent");
  const skills = t.raw("skills") as Skill[];

  return (
    <section
      id="talento"
      className="scroll-mt-16"
      aria-labelledby="talento-titulo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            {t("eyebrow")}
          </p>
          <h2
            id="talento-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {t("subtitle")}
          </p>
          <ul className="mt-7 divide-y divide-line">
            {skills.map((item, i) => {
              const Icono = iconos[i] ?? iconos[0];
              return (
                <li
                  key={item.label}
                  className="flex items-start gap-4 py-3 sm:items-center"
                >
                  <Icono
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
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-base font-semibold text-white transition hover:bg-ink-soft active:scale-[0.98]"
          >
            {t("cta")}
          </a>
        </div>

        <div
          className="animate-view rounded-3xl bg-ink p-8 text-white transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 sm:p-10"
          aria-hidden="true"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-lg font-bold text-ink">
                M
              </div>
              <div>
                <p className="font-semibold">{t("card.name")}</p>
                <p className="text-sm text-zinc-400">{t("card.stack")}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-teal/15 px-3 py-1 text-teal">
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