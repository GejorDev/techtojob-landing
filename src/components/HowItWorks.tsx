import { MessagesSquare, UserRoundPlus, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";

const icons = [MessagesSquare, UserRoundPlus, Sparkles];

type Step = { number: string; title: string; text: string };

export default async function HowItWorks() {
  const t = await getTranslations("howItWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="how-it-works-heading"
            className={SECTION_TITLE_CLASS}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{t("subtitle")}</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[i] ?? icons[0];
            return (
              <li
                key={step.number}
                className="group rounded-2xl border border-line bg-paper p-7 transition duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/20 text-xl font-bold text-ink"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <Icon className="h-6 w-6 text-teal-dark" aria-hidden="true" />
                </div>
                <h3 className="relative mt-4 w-fit pb-1 text-xl font-semibold text-ink transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-teal after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}