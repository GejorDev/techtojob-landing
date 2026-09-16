"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const navLinks = [
  { href: "#how-it-works", key: "links.how" },
  { href: "#talent", key: "links.talent" },
  { href: "#companies", key: "links.companies" },
  { href: "#tournaments", key: "links.tournaments" },
  { href: "#networking", key: "links.networking" },
  { href: "#news", key: "links.news" },
] as const;

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function switchLocale(nextLocale: (typeof routing.locales)[number]) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="flex h-9 w-auto items-center"
          aria-label={t("backHome")}
        >
          <Image
            src="/logo-positive.svg"
            alt={t("logoAlt")}
            width={180}
            height={30}
            priority
            className="h-7 w-auto"
          />
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={t("navAria")}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1 text-sm font-semibold"
            role="group"
            aria-label={t("localeLabel")}
          >
            {routing.locales.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLocale(l)}
                aria-pressed={locale === l}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === l
                    ? "bg-ink text-white"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {l === "es" ? "ES" : "EN"}
              </button>
            ))}
          </div>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-teal px-5 text-sm font-semibold text-ink transition hover:bg-teal-dark active:scale-[0.98] max-lg:hidden"
          >
            {t("discord")}
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-paper px-5 pb-6 pt-3 lg:hidden"
          aria-label={t("mobileNavAria")}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-line py-3 font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-teal font-semibold text-ink transition hover:bg-teal-dark active:scale-[0.98]"
          >
            {t("discord")}
          </a>
        </nav>
      )}
    </header>
  );
}