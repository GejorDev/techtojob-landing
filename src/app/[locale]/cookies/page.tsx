import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "legalMeta",
  });

  return {
    title: t("cookiesTitle"),
    description: t("cookiesDescription"),
    alternates: { canonical: locale === "es" ? "/cookies" : "/en/cookies" },
  };
}

type CookieSection = {
  title: string;
  text?: string;
  paragraphs?: { label: string; text: string }[];
  note?: string;
};

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const legal = await getTranslations("legal");
  const t = await getTranslations("legal.cookiesPage");
  const sections = t.raw("sections") as CookieSection[];

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
        {legal("eyebrow")}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {t("title")}
      </h1>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            {section.text ? (
              <p className="mt-3 leading-relaxed text-ink-muted">{section.text}</p>
            ) : (
              <div className="mt-3 space-y-3 leading-relaxed text-ink-muted">
                {section.paragraphs?.map((p) => (
                  <p key={p.label}>
                    <strong className="text-ink">{p.label}</strong>
                    {p.text}
                  </p>
                ))}
                {section.note && <p>{section.note}</p>}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}