import Image from "next/image";

const bloques = [
  {
    titulo: "Comunidad",
    enlaces: [
      { texto: "Cómo funciona", href: "#como-funciona" },
      { texto: "Ofrécete como talento", href: "#talento" },
      { texto: "Publica como empresa", href: "#empresas" },
      { texto: "Torneos abiertos", href: "#torneos" },
    ],
  },
  {
    titulo: "Recursos",
    enlaces: [
      { texto: "Noticias de la comunidad", href: "#noticias" },
      { texto: "Canales de networking", href: "#networking" },
      { texto: "Newsletter", href: "#newsletter" },
    ],
  },
  {
    titulo: "Legal",
    enlaces: [
      { texto: "Política de privacidad", href: "/privacy" },
      { texto: "Aviso legal", href: "/legal" },
      { texto: "Cookies", href: "/cookies" },
    ],
  },
];

const redes = [
  { nombre: "Discord", href: "https://discord.gg/h9FFgKdkRd" },
  { nombre: "LinkedIn", href: "https://www.linkedin.com/company/techtojob/" },
  { nombre: "X", href: "https://x.com/techtojob" },
  { nombre: "Instagram", href: "https://www.instagram.com/techtojob" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="inline-block transition-opacity hover:opacity-80" aria-label="Volver al inicio de TechToJob">
              <Image
                src="/logo-positive.svg"
                alt="Logo de TechToJob"
                width={180}
                height={30}
                loading="lazy"
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Comunidad de desarrolladores y empresas tech en español. Perfiles
              reales, torneos y oportunidades que llegan por participar.
            </p>
          </div>

          {bloques.map((bloque) => (
            <nav key={bloque.titulo} aria-label={bloque.titulo}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">
                {bloque.titulo}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {bloque.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    <a
                      href={enlace.href}
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {enlace.texto}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} TechToJob. Hecho por la comunidad, para la comunidad.
          </p>
          <nav aria-label="Redes sociales">
            <ul className="flex gap-4">
              {redes.map((red) => (
                <li key={red.nombre}>
                  <a
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink transition-colors hover:text-teal-dark"
                  >
                    {red.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}