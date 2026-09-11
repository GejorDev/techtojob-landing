import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type FooterLink = { text: string; href: string };

export default async function Footer() {
  const t = await getTranslations("footer");

  const bloques = t.raw("blocks") as {
    title: string;
    links: FooterLink[];
  }[];
  const redes = t.raw("social") as { name: string; href: string }[];

  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#inicio"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label={t("backHome")}
            >
              <Image
                src="/logo-positive.svg"
                alt={t("logoAlt")}
                width={180}
                height={30}
                loading="lazy"
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {t("description")}
            </p>
          </div>

          {bloques.map((bloque) => (
            <nav key={bloque.title} aria-label={bloque.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
                {bloque.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {bloque.links.map((enlace) => (
                  <li key={enlace.text}>
                    {enlace.href.startsWith("#") ? (
                      <a
                        href={enlace.href}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {enlace.text}
                      </a>
                    ) : (
                      <Link
                        href={enlace.href}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {enlace.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
          <nav aria-label={t("socialAria")}>
            <ul className="flex gap-4">
              {redes.map((red) => (
                <li key={red.name}>
                  <a
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink transition-colors hover:text-teal-dark"
                  >
                    {red.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}