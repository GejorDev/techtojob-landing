const noticias = [
  {
    titulo: "Se abre el Torneo #2: construye la landing de TechToJob",
    resumen:
      "Las bases del segundo torneo, los plazos para entregar y qué valoramos en el diseño, el desarrollo y el SEO.",
    categoria: "Torneos",
    fecha: "7 de septiembre de 2026",
    href: "#torneos",
  },
  {
    titulo: "Nuevos canales de networking por stack",
    resumen:
      "Dividimos el servidor en canales por área para que encuentres a tu gente y mejores más rápido.",
    categoria: "Comunidad",
    fecha: "2 de septiembre de 2026",
    href: "#networking",
  },
  {
    titulo: "Cómo se prepara una entrevista técnica de frontend",
    resumen:
      "Una guía con pasos concretos: lógica, proyecto propio y cómo contar lo que sabes sin quedarte corto.",
    categoria: "Carrera",
    fecha: "25 de agosto de 2026",
    href: "#networking",
  },
];

export default function Noticias() {
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
              className="flex flex-col rounded-2xl border border-line bg-mist p-6 transition-colors hover:border-teal"
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