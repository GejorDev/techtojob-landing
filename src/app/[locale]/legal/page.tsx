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
    title: t("legalTitle"),
    description: t("legalDescription"),
    alternates: { canonical: locale === "es" ? "/legal" : "/en/legal" },
  };
}

type LegalSection = {
  title: string;
  text: string;
};

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const legal = await getTranslations("legal");
  const t = await getTranslations("legal.legalPage");
  const sections = t.raw("sections") as LegalSection[];

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
            <p className="mt-3 leading-relaxed text-ink-muted">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}