import { getTranslations } from "next-intl/server";

type Noticia = {
  title: string;
  summary: string;
  category: string;
  date: string;
  dateTime: string;
  href: string;
};

export default async function News() {
  const t = await getTranslations("news");
  const noticias = t.raw("items") as Noticia[];

  return (
    <section
      id="noticias"
      className="scroll-mt-16"
      aria-labelledby="noticias-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            {t("eyebrow")}
          </p>
          <h2
            id="noticias-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((noticia) => (
            <article
              key={noticia.title}
              className="flex animate-view flex-col rounded-2xl border border-line bg-mist p-6 transition duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-teal/15 px-3 py-1 font-medium text-ink">
                  {noticia.category}
                </span>
                <time dateTime={noticia.dateTime} className="text-ink-muted">
                  {noticia.date}
                </time>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">
                {noticia.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                {noticia.summary}
              </p>
              <a
                href={noticia.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-teal-dark"
              >
                {t("readMore")}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}