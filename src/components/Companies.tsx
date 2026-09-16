import { FileText, Users, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";

const icons = [FileText, Users, Search];

type Benefit = { title: string; text: string };

export default async function Companies() {
  const t = await getTranslations("companies");
  const benefits = t.raw("benefits") as Benefit[];
  const requirements = t.raw("card.requirements") as string[];

  return (
    <section
      id="companies"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="companies-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="order-2 animate-view lg:order-1">
          <div className="rounded-3xl border border-line bg-paper p-8 transition duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-ink/5 sm:p-10">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink">{t("card.job")}</p>
              <span className="rounded-full bg-teal/20 px-3 py-1 text-sm font-medium text-ink">
                {t("card.status")}
              </span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              {requirements.map((requirement) => (
                <li key={requirement} className="flex gap-2.5">
                  <span
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-xs font-bold text-teal-dark"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {requirement}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-sm font-medium text-ink">{t("card.candidates")}</p>
              <div className="mt-3 flex -space-x-2" aria-hidden="true">
                {["D", "J", "A", "S"].map((inicial, i) => (
                  <div
                    key={inicial}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper text-sm font-semibold ${
                      i % 2 === 0 ? "bg-teal text-ink" : "bg-ink text-white"
                    }`}
                  >
                    {inicial}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="companies-heading"
            className={SECTION_TITLE_CLASS}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {t("subtitle")}
          </p>
          <ul className="mt-7 animate-view space-y-5">
            {benefits.map((item, i) => {
              const Icon = icons[i] ?? icons[0];
              return (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/15">
                    <Icon className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-muted">
                      {item.text}
                    </p>
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
      </div>
    </section>
  );
}