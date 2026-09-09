import { Code2, Gauge, CalendarClock } from "lucide-react";

const skills = [
  { etiqueta: "Stack", detalle: "Frontend, backend, mobile, data, DevOps…", icono: Code2 },
  { etiqueta: "Nivel", detalle: "Junior, mid, senior o en transición", icono: Gauge },
  { etiqueta: "Disponibilidad", detalle: "Full-time, part-time o proyectos", icono: CalendarClock },
];

export default function Talent() {
  return (
    <section
      id="talento"
      className="scroll-mt-16"
      aria-labelledby="talento-titulo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Para desarrolladores
          </p>
          <h2
            id="talento-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Crea tu perfil y deja que te encuentren
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Tu perfil lo lee una persona real, no un algoritmo que te descarta
            antes de que te conozca. No necesitas ser senior: junior, mid o en
            transición, aquí tienes sitio. Y no cuesta nada.
          </p>
          <ul className="mt-7 divide-y divide-line">
            {skills.map((item) => (
              <li key={item.etiqueta} className="flex items-start gap-4 py-3 sm:items-center">
                <item.icono className="mt-0.5 h-5 w-5 shrink-0 text-teal-dark sm:mt-0" aria-hidden="true" />
                <div className="min-w-0 sm:flex sm:items-center sm:gap-4">
                  <span className="block font-semibold text-ink sm:w-32 sm:shrink-0">
                    {item.etiqueta}
                  </span>
                  <span className="block text-ink-muted">{item.detalle}</span>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-base font-semibold text-white transition hover:bg-ink-soft active:scale-[0.98]"
          >
            Publicar mi perfil
          </a>
        </div>

        <div
          className="animate-view rounded-3xl bg-ink p-8 text-white transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 sm:p-10"
          aria-hidden="true"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-lg font-bold text-ink">
                M
              </div>
              <div>
                <p className="font-semibold">Marta · Frontend</p>
                <p className="text-sm text-zinc-400">React · TypeScript</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-teal/15 px-3 py-1 text-teal">
                Senior
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">
                Full-time
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-300">
                Remoto
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              "Mi perfil hablaba por mí antes de la entrevista. Ya sabían qué
              sabía hacer, y la conversación fue directa."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}