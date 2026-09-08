import { Trophy, Users, Zap } from "lucide-react";

const premios = [
  { texto: "Recompensas y reconocimiento", icono: Zap },
  { texto: "Visibilidad ante la comunidad y empresas", icono: Users },
  { texto: "Algo real que enseñar en una entrevista", icono: Trophy },
];

export default function Tournaments() {
  return (
    <section
      id="torneos"
      className="scroll-mt-16"
      aria-labelledby="torneos-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
              Torneos
            </p>
            <h2
              id="torneos-titulo"
              className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Compite, aprende y dale cara a tu código
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Retos reales, entregas con plazo y jurado con criterios públicos.
              Sirven para aprender, para tener algo que contar en una entrevista
              y para que la comunidad sepa quién eres. Esta web salió de uno.
            </p>
          </div>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-fit items-center rounded-full border border-ink px-7 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Ver torneos abiertos
          </a>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-ink text-white">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-teal px-3 py-1 text-sm font-semibold text-ink">
                  En curso
                </span>
                <span className="text-sm text-zinc-400">
                  Torneo #2 · Landing de TechToJob
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                Construye una landing de verdad
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-300">
                Diseña, desarrolla y despliega la puerta de entrada de la comunidad.
                SEO, diseño y código real. Lo que construyas aquí se usa y se ve.
              </p>
              <a
                href="#noticias"
                className="mt-6 inline-flex h-11 items-center rounded-full bg-teal px-6 text-sm font-semibold text-ink transition-colors hover:bg-teal-dark"
              >
                Apuntarme al torneo
              </a>
            </div>
            <ul className="space-y-3">
              {premios.map((premio) => (
                <li
                  key={premio.texto}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-200"
                >
                  <premio.icono className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  {premio.texto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}