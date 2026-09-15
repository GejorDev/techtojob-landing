"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const [correo, setCorreo] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviado" | "error">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!correo.includes("@") || !correo.includes(".")) {
      setEstado("error");
      return;
    }
    setEstado("enviado");
  }

  return (
    <section
      id="newsletter"
      className="scroll-mt-16 bg-teal"
      aria-labelledby="newsletter-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2
              id="newsletter-titulo"
              className="text-3xl font-bold tracking-tight text-ink"
            >
              {t("title")}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">
              {t("subtitle")}
            </p>
          </div>

          {estado === "enviado" ? (
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
              <label htmlFor="correo" className="sr-only">
                {t("label")}
              </label>
              <input
                id="correo"
                type="email"
                required
                value={correo}
                onChange={(event) => {
                  setCorreo(event.target.value);
                  if (estado === "error") setEstado("idle");
                }}
                placeholder={t("placeholder")}
                className="h-13 max-sm:h-22 flex-1 rounded-full border-2 border-ink/20 bg-paper px-5 text-base text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none"
                aria-describedby={estado === "error" ? "correo-error" : undefined}
                aria-invalid={estado === "error"}
              />
              <button
                type="submit"
                className="inline-flex h-13 items-center justify-center rounded-full bg-ink px-7 font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                {t("cta")}
              </button>
            </form>
          )}
          {estado === "error" && (
            <p
              id="correo-error"
              className="text-sm font-medium text-ink sm:col-span-2"
            >
              {t("error")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}