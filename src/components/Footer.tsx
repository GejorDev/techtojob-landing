import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type FooterLink = { text: string; href: string };

export default async function Footer() {
  const t = await getTranslations("footer");

  const blocks = t.raw("blocks") as {
    title: string;
    links: FooterLink[];
  }[];
  const social = t.raw("social") as { name: string; href: string }[];

  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#home"
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

          {blocks.map((block) => (
            <nav key={block.title} aria-label={block.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
                {block.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {block.links.map((link) => (
                  <li key={link.text}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.text}
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
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink transition-colors hover:text-teal-dark"
                  >
                    {item.name}
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