import {
  MonitorSmartphone,
  Server,
  Database,
  TrendingUp,
  MessageCircle,
  Hash,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Eyebrow, { SECTION_TITLE_CLASS } from "./Eyebrow";
import { DISCORD_URL } from "./DiscordCtaLink";

const icons = [MonitorSmartphone, Server, Database, TrendingUp];

type Channel = { name: string; detail: string };
type Message = { author: string; role: string; text: string };

export default async function Networking() {
  const t = await getTranslations("networking");
  const channels = t.raw("channels") as Channel[];
  const messages = t.raw("card.messages") as Message[];

  return (
    <section
      id="networking"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="networking-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2
            id="networking-heading"
            className={SECTION_TITLE_CLASS}
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {t("subtitle")}
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {channels.map((channel, i) => {
              const Icon = icons[i] ?? icons[0];
              return (
                <li
                  key={channel.name}
                  className="rounded-2xl border border-line bg-paper p-5 transition duration-200 hover:border-teal/50 hover:shadow-lg hover:shadow-ink/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/15">
                      <Icon
                        className="h-4.5 w-4.5 text-teal-dark"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="font-semibold text-ink">{channel.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {channel.detail}
                  </p>
                </li>
              );
            })}
          </ul>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-base font-semibold text-white transition hover:bg-ink-soft active:scale-[0.98]"
          >
            {t("cta")}
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-line pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal">
              <Hash className="h-5 w-5 text-ink" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-ink">{t("card.channel")}</p>
              <p className="text-sm text-ink-muted">{t("card.subtitle")}</p>
            </div>
          </div>
          <div className="space-y-4 pt-5">
            {messages.map((message, i) => (
              <article key={i} className="rounded-2xl bg-mist p-4">
                <div className="flex items-center gap-2">
                  <MessageCircle
                    className="h-4 w-4 text-teal-dark"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-ink">
                    {message.author}{" "}
                    <span className="font-normal text-ink-muted">
                      · {message.role}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {message.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}