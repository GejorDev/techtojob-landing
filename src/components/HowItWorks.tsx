import { MessagesSquare, UserRoundPlus, Sparkles } from "lucide-react";

const pasos = [
  {
    numero: "01",
    titulo: "Entras a la comunidad",
    texto:
      "Te unes al Discord y eliges tus canales por stack, nivel e intereses. Nada de CVs genéricos ni portales interminables.",
    icono: MessagesSquare,
  },
  {
    numero: "02",
    titulo: "Publicas tu perfil",
    texto:
      "Compartes tu stack, tu nivel y tu disponibilidad. La comunidad te conoce por lo que haces y por cómo lo explicas.",
    icono: UserRoundPlus,
  },
  {
    numero: "03",
    titulo: "Llegan las oportunidades",
    texto:
      "Empresas que ya saben qué buscan te encuentran o te proponen algo. Tú decides si encaja o esperas a la siguiente.",
    icono: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-16 bg-mist"
      aria-labelledby="como-funciona-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Cómo funciona
          </p>
          <h2
            id="como-funciona-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Del primer mensaje a una oportunidad real
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Sin formularios eternos ni algoritmos opacos: participas, te haces
            visible y las oportunidades aparecen.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pasos.map((paso) => (
            <li
              key={paso.numero}
              className="rounded-2xl border border-line bg-paper p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-teal" aria-hidden="true">
                  {paso.numero}
                </span>
                <paso.icono className="h-6 w-6 text-teal-dark" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {paso.titulo}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {paso.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}