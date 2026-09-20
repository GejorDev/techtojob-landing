import DiscordCtaLink from "./DiscordCtaLink";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      {/* Atmospheric glow blobs + grid overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
            {t("badge")}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 animate-fade-up text-4xl font-bold leading-tight tracking-tight text-white [animation-delay:80ms] sm:text-5xl lg:text-6xl"
          >
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-zinc-300 [animation-delay:160ms]">
            {t("subtitle")}
          </p>
          <div className="mt-8 animate-fade-up [animation-delay:240ms]">
            <DiscordCtaLink shadow="glow" className="h-13 px-9 text-lg">
              {t("cta")}
            </DiscordCtaLink>
          </div>
        </div>

        <div
          className="relative hidden justify-center lg:flex"
          aria-hidden="true"
        >
          <div className="w-full max-w-md animate-float rounded-2xl border border-white/10 bg-ink-soft/80 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-xs text-zinc-500">
                {t("terminalPrompt")}
              </span>
            </div>
            <div className="mt-4 space-y-1.5 font-mono text-sm">
              <p className="leading-relaxed">
                <span className="text-teal">$</span>{" "}
                <span className="text-white">whoami</span>
              </p>
              <p className="leading-relaxed text-zinc-500">
                {t("terminalStatus")}
              </p>
              <p className="leading-relaxed">
                <span className="text-teal">$</span>{" "}
                <span className="text-white">ls ./stack</span>{" "}
                <span className="text-zinc-200">
                  react&nbsp;&nbsp;node&nbsp;&nbsp;typescript
                </span>
              </p>
              <p className="leading-relaxed">
                <span className="text-teal">$</span>{" "}
                <span className="text-white">{t("terminalAction")}</span>
              </p>
              <p className="leading-relaxed">
                <span className="text-teal animate-blink">▍</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/5 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}