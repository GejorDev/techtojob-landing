import { MonitorSmartphone, Server, Database, TrendingUp, MessageCircle, Hash } from "lucide-react";

const canales = [
  { nombre: "Frontend", detalle: "React, Vue, CSS, accesibilidad", icono: MonitorSmartphone },
  { nombre: "Backend", detalle: "Node, Go, Python, arquitectura", icono: Server },
  { nombre: "Data y ML", detalle: "Databases, analytics, modelos", icono: Database },
  { nombre: "Carrera y salario", detalle: "Entrevistas, ofertas, negociación", icono: TrendingUp },
];

export default function Networking() {
  return (
    <section
      id="networking"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="networking-titulo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Networking
          </p>
          <h2
            id="networking-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Enterarse a tiempo vale más que un CV perfecto
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Canales por área con gente del sector que resuelve dudas en minutos
            y comparte ofertas que no están en ningún portal. Los buenos trabajos
            no se encuentran: se enteran.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {canales.map((canal) => (
              <li key={canal.nombre} className="rounded-2xl border border-line bg-paper p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/15">
                    <canal.icono className="h-4.5 w-4.5 text-teal-dark" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-ink">{canal.nombre}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {canal.detalle}
                </p>
              </li>
            ))}
          </ul>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-base font-semibold text-white transition hover:bg-ink-soft active:scale-[0.98]"
          >
            Explorar los canales
          </a>
        </div>

        <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-line pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal">
              <Hash className="h-5 w-5 text-ink" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-ink">#carrera-y-salario</p>
              <p className="text-sm text-ink-muted">Gente del sector conectada</p>
            </div>
          </div>
          <div className="space-y-4 pt-5">
            {[
              {
                autor: "Lucía",
                rol: "Junior React",
                texto:
                  "Alguien del canal me avisó de una vacante que nunca se publicó en LinkedIn. Me la llevé.",
              },
              {
                autor: "Diego",
                rol: "Ing. de software",
                texto:
                  "El otro día alguien preguntó por su stack y terminé recomendándolo para un proyecto. Conocer a la gente aquí abre puertas que un CV no.",
              },
            ].map((mensaje, i) => (
              <article key={i} className="rounded-2xl bg-mist p-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-teal-dark" aria-hidden="true" />
                  <p className="text-sm font-semibold text-ink">
                    {mensaje.autor}{" "}
                    <span className="font-normal text-ink-muted">
                      · {mensaje.rol}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {mensaje.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}