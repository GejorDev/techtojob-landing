import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información general y condiciones de uso del sitio web de TechToJob.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Aviso legal
      </h1>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-ink">Identificación</h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            Este sitio web pertenece a la comunidad TechToJob, un proyecto
            colaborativo orientado a conectar desarrolladores y empresas tech
            en español.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            Uso del contenido
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            El contenido de esta web (textos, diseño, logotipos e
            ilustraciones) es de TechToJob o de sus autores. Puede
            compartirse citando la fuente, pero no está permitido su
            aprovechamiento comercial sin autorización previa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            Enlaces a discord externos
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            Al entrar en el servidor de Discord desde este sitio pasas a un
            servicio de terceros, que tiene sus propias condiciones y política
            de privacidad. TechToJob no se hace responsable de esos espacios
            externos.
          </p>
        </section>
      </div>
    </div>
  );
}
