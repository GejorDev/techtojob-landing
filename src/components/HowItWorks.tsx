import { MessagesSquare, UserRoundPlus, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";

const iconos = [MessagesSquare, UserRoundPlus, Sparkles];

type Paso = { number: string; title: string; text: string };

export default async function HowItWorks() {
  const t = await getTranslations("howItWorks");
  const pasos = t.raw("steps") as Paso[];

  return (
    <section
      id="como-funciona"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="como-funciona-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            {t("eyebrow")}
          </p>
          <h2
            id="como-funciona-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{t("subtitle")}</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pasos.map((paso, i) => {
            const Icono = iconos[i] ?? iconos[0];
            return (
              <li
                key={paso.number}
                className="group animate-view rounded-2xl border border-line bg-paper p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-teal" aria-hidden="true">
                    {paso.number}
                  </span>
                  <Icono className="h-6 w-6 text-teal-dark" aria-hidden="true" />
                </div>
                <h3 className="relative mt-4 w-fit pb-1 text-xl font-semibold text-ink transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-teal after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                  {paso.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{paso.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}