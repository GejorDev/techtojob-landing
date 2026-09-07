import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink"
      aria-labelledby="hero-titulo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
            Comunidad abierta · Torneos en curso
          </p>
          <h1
            id="hero-titulo"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            La comunidad de desarrolladores y empresas tech en español
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            TechToJob no es un portal de empleo más: es una comunidad donde
            compartes tu perfil, te conocen por lo que haces y llegan
            oportunidades reales. Entra, participa y decide hacia dónde vas.
          </p>
          <div className="mt-8">
            <a
              href="https://discord.gg/techtojob"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center rounded-full bg-teal px-9 text-lg font-semibold text-ink transition-colors hover:bg-teal-dark"
            >
              Entrar al Discord
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-400">
            Gratis para talento. Empresas publican sin coste para empezar.
          </p>
        </div>

        <div className="relative hidden justify-center lg:flex" aria-hidden="true">
          <Image
            src="/LogotiposTechToJob/SVG/SímboloNegativo.svg"
            alt=""
            width={400}
            height={400}
            className="opacity-90"
          />
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/5 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}