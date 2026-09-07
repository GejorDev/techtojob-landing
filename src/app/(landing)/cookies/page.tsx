import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies usa TechToJob, para qué sirven y cómo gestionar tu consentimiento.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Política de cookies
      </h1>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-ink">Qué son las cookies</h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            Las cookies son pequeños archivos que se guardan en tu dispositivo
            al visitar una web. Ayudan a que el sitio funcione y a entender
            cómo se usa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Cookies que usamos</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-ink-muted">
            <p>
              <strong className="text-ink">Técnicas:</strong> imprescindibles
              para que la web funcione correctamente.
            </p>
            <p>
              <strong className="text-ink">De análisis:</strong> información
              agregada y anónima sobre el uso del sitio, siempre que las
              actives con tu consentimiento.
            </p>
            <p>Este sitio no emplea cookies publicitarias.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            Cómo gestionarlas
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            Puedes aceptar, rechazar o configurar las cookies no imprescindibles
            desde el aviso que aparece al entrar, o bien desde la configuración
            de tu navegador, donde también puedes borrarlas en cualquier momento.
          </p>
        </section>
      </div>
    </div>
  );
}
