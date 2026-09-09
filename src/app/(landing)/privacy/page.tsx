import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo TechToJob trata los datos personales de los miembros de la comunidad, qué información se recoge y tus derechos.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const actualizacion = "7 de septiembre de 2026";

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Política de privacidad
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Última actualización: {actualizacion}
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-ink">Quién gestiona los datos</h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            TechToJob es una comunidad gestionada por sus impulsoras y
            colaboradores. En esta ficha explicamos de forma clara cómo se
            tratan los datos personales de quien participa en la comunidad y
            usa este sitio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">
            Qué datos recogemos y para qué
          </h2>
          <ul className="mt-3 space-y-3 text-ink-muted">
            <li className="flex gap-2.5">
              <span className="text-teal-dark" aria-hidden="true">✓</span>
              <span>
                <strong className="text-ink">Perfil en la comunidad:</strong>{" "}
                nombre, stack, nivel y disponibilidad que tú mismo publicas
                para que las empresas puedan encontrarte.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-teal-dark" aria-hidden="true">✓</span>
              <span>
                <strong className="text-ink">Correo en la newsletter:</strong>{" "}
                solo para enviarte las novedades semanales. Puedes darte de
                baja en cualquier momento.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-teal-dark" aria-hidden="true">✓</span>
              <span>
                <strong className="text-ink">Datos de uso del sitio:</strong>{" "}
                estadísticas anónimas (páginas vistas, dispositivo) tratadas de
                forma agregada.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Tus derechos</h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            Puedes acceder, rectificar, suprimir y oponerte al tratamiento de
            tus datos, así como revocar tu consentimiento en cualquier momento.
            Escríbenos desde el canal de la comunidad y lo gestionamos lo antes
            posible.
          </p>
        </section>
      </div>
    </div>
  );
}
