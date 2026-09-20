"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }
    setStatus("sent");
  }

  return (
    <section
      id="newsletter"
      className="scroll-mt-16 bg-teal"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="newsletter-heading"
              className="text-3xl font-bold tracking-tight text-ink"
            >
              {t("title")}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              {t("subtitle")}
            </p>
          </div>

          {status === "sent" ? (
            <div
              className="rounded-2xl bg-ink px-6 py-6 text-white"
              role="status"
            >
              <p className="font-semibold">{t("successTitle")}</p>
              <p className="mt-1 text-zinc-300">{t("successText")}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="email" className="sr-only">
                {t("label")}
              </label>
              <div className="relative flex-1">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
                />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder={t("placeholder")}
                  className="h-12 w-full rounded-full border-2 border-ink/20 bg-paper pl-11 pr-6 text-lg text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
                  aria-describedby={
                    status === "error" ? "email-error" : undefined
                  }
                  aria-invalid={status === "error"}
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-ink px-7 font-semibold text-white transition-colors hover:bg-ink-soft sm:w-auto"
              >
                {t("cta")}
              </button>
            </form>
          )}
          {status === "error" && (
            <p
              id="email-error"
              className="text-sm font-semibold text-ink sm:col-span-2"
            >
              {t("error")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}