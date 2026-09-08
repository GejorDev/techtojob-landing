"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#talento", label: "Talento" },
  { href: "#empresas", label: "Empresas" },
  { href: "#torneos", label: "Torneos" },
  { href: "#networking", label: "Networking" },
  { href: "#noticias", label: "Noticias" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex h-9 w-auto items-center"
          aria-label="TechToJob, volver al inicio"
        >
          <Image
            src="/v1Positivo.svg"
            alt="Logo de TechToJob"
            width={180}
            height={30}
            priority
            className="h-7 w-auto"
          />
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft max-lg:hidden"
          >
            Entrar al Discord
          </a>
          <button
            type="button"
            onClick={() => setAbierto((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          >
            {abierto ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          className="border-t border-line bg-paper px-5 pb-6 pt-3 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAbierto(false)}
                  className="block border-b border-line py-3 font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://discord.gg/h9FFgKdkRd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink font-semibold text-white"
          >
            Entrar al Discord
          </a>
        </nav>
      )}
    </header>
  );
}