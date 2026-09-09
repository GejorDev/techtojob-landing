const noticias = [
  {
    titulo: "Torneo #2: construye la landing de TechToJob",
    resumen:
      "Retos reales, un jurado con criterios públicos y el código que se usa. Así fue el torneo que creó esta web.",
    categoria: "Torneos",
    fecha: "7 de septiembre de 2026",
    href: "#torneos",
  },
  {
    titulo: "Nuevos canales de networking por stack",
    resumen:
      "Canales por área para que encuentres a tu gente, resuelvas dudas rápido y te enteres de oportunidades que no llegan a ningún portal.",
    categoria: "Comunidad",
    fecha: "2 de septiembre de 2026",
    href: "#networking",
  },
  {
    titulo: "Cómo preparar una entrevista técnica de frontend",
    resumen:
      "Lógica, proyecto propio y cómo contar lo que sabes sin quedarte corto. Una guía que sale de la experiencia de la comunidad.",
    categoria: "Carrera",
    fecha: "25 de agosto de 2026",
    href: "#networking",
  },
];

export default function News() {
  return (
    <section
      id="noticias"
      className="scroll-mt-16"
      aria-labelledby="noticias-titulo"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
            Noticias
          </p>
          <h2
            id="noticias-titulo"
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Novedades de la comunidad
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Torneos, cambios en el servidor y contenido para crecer en tu
            carrera.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((noticia) => (
            <article
              key={noticia.titulo}
              className="flex animate-view flex-col rounded-2xl border border-line bg-mist p-6 transition duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-teal/15 px-3 py-1 font-medium text-ink">
                  {noticia.categoria}
                </span>
                <time dateTime={noticia.fecha} className="text-ink-muted">
                  {noticia.fecha}
                </time>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-ink">
                {noticia.titulo}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                {noticia.resumen}
              </p>
              <a
                href={noticia.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-teal-dark"
              >
                Leer la noticia completa
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}