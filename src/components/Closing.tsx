export default function Closing() {
  return (
    <section
      className="bg-ink"
      aria-labelledby="cierre-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2
          id="cierre-titulo"
          className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ya sabes qué es. La diferencia es entrar
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
          Junior, senior o en transición: aquí se entra, se participa y de
          ahí salen las oportunidades. No hay formulario que rellenar,
          solo gente que te está esperando.
        </p>
        <a
          href="https://discord.gg/h9FFgKdkRd"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex h-13 items-center justify-center rounded-full bg-teal px-9 text-lg font-semibold text-ink transition-colors hover:bg-teal-dark"
        >
          Entrar al Discord gratis
        </a>
      </div>
    </section>
  );
}