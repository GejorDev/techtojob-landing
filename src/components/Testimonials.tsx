import { ArrowUpRight, Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  href: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function Testimonials() {
  const t = await getTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section
      id="testimonials"
      className="scroll-mt-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="testimonials-heading"
            className={SECTION_TITLE_CLASS}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-line bg-mist p-6 transition duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-ink/5"
            >
              <Quote className="h-5 w-5 text-teal-dark" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-semibold text-teal-deep"
                >
                  {initials(item.name)}
                </span>
                <span className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {item.name}
                  </p>
                  <p className="truncate text-sm text-ink-muted">
                    {item.role}
                  </p>
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("profileLinkAria", { name: item.name })}
                  className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-teal/50 hover:text-teal-dark"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}