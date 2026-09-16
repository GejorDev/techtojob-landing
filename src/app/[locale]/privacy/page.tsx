import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Eyebrow, { SECTION_TITLE_CLASS } from "@/components/Eyebrow";

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
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: { canonical: locale === "es" ? "/privacy" : "/en/privacy" },
  };
}

type PrivacySection = {
  title: string;
  text?: string;
  items?: { label: string; text: string }[];
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const legal = await getTranslations("legal");
  const t = await getTranslations("legal.privacy");
  const sections = t.raw("sections") as PrivacySection[];

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <Eyebrow>{legal("eyebrow")}</Eyebrow>
      <h1 className={SECTION_TITLE_CLASS}>
        {t("title")}
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        {t("updated", { date: t("updatedDate") })}
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            {section.text ? (
              <p className="mt-3 leading-relaxed text-ink-muted">{section.text}</p>
            ) : (
              <ul className="mt-3 space-y-3 text-ink-muted">
                {section.items?.map((item) => (
                  <li key={item.label} className="flex gap-2.5">
                    <span className="text-teal-dark" aria-hidden="true">
                      ✓
                    </span>
                    <span>
                      <strong className="text-ink">{item.label}</strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}