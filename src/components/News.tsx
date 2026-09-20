import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";

type NewsItem = {
  title: string;
  summary: string;
  category: string;
  date: string;
  dateTime: string;
  href: string;
};

export default async function News() {
  const t = await getTranslations("news");
  const newsItems = t.raw("items") as NewsItem[];

  return (
    <section
      id="news"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl animate-view">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="news-heading"
            className={SECTION_TITLE_CLASS}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="flex animate-view flex-col rounded-2xl border border-line bg-paper p-6 transition duration-200 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-teal/20 px-3 py-1 font-medium text-ink">
                  {item.category}
                </span>
                <time dateTime={item.dateTime} className="text-ink-muted">
                  {item.date}
                </time>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                {item.summary}
              </p>
              <Link
                href={{ pathname: "/", hash: item.href }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-teal-dark"
              >
                {t("readMore")}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}