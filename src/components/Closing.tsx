import { getTranslations } from "next-intl/server";

export default async function Closing() {
  const t = await getTranslations("closing");

  return (
    <section className="bg-ink" aria-labelledby="cierre-titulo">
      <div className="mx-auto max-w-6xl animate-view px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2
          id="cierre-titulo"
          className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
          {t("subtitle")}
        </p>
        <a
          href="https://discord.gg/h9FFgKdkRd"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex h-13 items-center justify-center rounded-full bg-teal px-9 text-lg font-semibold text-ink transition hover:bg-teal-dark active:scale-[0.98]"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}