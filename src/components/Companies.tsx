import { FileText, Users, Search } from "lucide-react";

const beneficios = [
  {
    titulo: "Publica lo que buscas",
    texto:
      "Un requerimiento claro llega a personas que ya se saben mover en la comunidad, no a bandejas de entrada saturadas.",
    icono: FileText,
  },
  {
    titulo: "Accede a perfiles reales",
    texto:
      "Cada perfil muestra stack, nivel y disponibilidad con el respaldo de su participación en la comunidad.",
    icono: Users,
  },
  {
    titulo: "Conócelos por lo que hacen",
    texto:
      "Torneos, aportes y conversaciones te dicen más que un CV. Sabes con quién hablas antes de la primera entrevista.",
    icono: Search,
  },
];

export default function Companies() {
  return (
    <section
      id="empresas"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="empresas-titulo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl border border-line bg-paper p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink">Vacante · Backend Node</p>
              <span className="rounded-full bg-teal/15 px-3 py-1 text-sm font-medium text-ink">
                Abierta
              </span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li className="flex gap-2.5">
                <span className="text-teal-dark" aria-hidden="true">✓</span>
                Node.js y TypeScript
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-dark" aria-hidden="true">✓</span>
                Entre 3 y 5 años de experiencia
              </li>
              <li className="flex gap-2.5">
                <span className="text-teal-dark" aria-hidden="true">✓</span>
                Remoto o híbrido en España
              </li>
            </ul>
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-sm font-medium text-ink">Candidatos que llegaron</p>
              <div className="mt-3 flex -space-x-2" aria-hidden="true">
                {["D", "J", "A", "S"].map((inicial, i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper text-sm font-semibold ${
                      i % 2 === 0 ? "bg-teal text-ink" : "bg-ink text-white"
                    }`}
                  >
                    {inicial}
                  </div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper bg-mist text-xs font-semibold text-ink-muted">
                  +34
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Para empresas
          </p>
          <h2
            id="empresas-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Publica como empresa y llega a talento que ya demuestra
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Olvídate de preseleccionar currículums sin contexto. Publica lo que
            necesitas y accede a perfiles de personas que ya se han hecho
            visibles participando.
          </p>
          <ul className="mt-7 space-y-5">
            {beneficios.map((item) => (
              <li key={item.titulo} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/15">
                  <item.icono className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{item.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">
                    {item.texto}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://discord.gg/techtojob"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-base font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Publicar una vacante
          </a>
        </div>
      </div>
    </section>
  );
}