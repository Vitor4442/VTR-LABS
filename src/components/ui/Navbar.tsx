// app/components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "#solucoes", label: "Serviços" },
  { href: "#social-proof", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <Image
        src="/images/navbar/logo.png"
        alt="Logo VTR Labs"
        width={40}
        height={40}
        className="rounded-xl"
        priority
      />
      <span className="text-sm font-semibold tracking-tight text-white">
        VTR Labs
      </span>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fecha menu ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Aplica sombra + fundo mais sólido ao rolar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 border-b border-neutral-800/70 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          : "bg-gradient-to-r from-black/70 via-neutral-900/60 to-black/70 border-b border-transparent"
      } backdrop-blur supports-[backdrop-filter]:bg-black/60`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / esquerda */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-2 md:flex">
          {LINKS.map((item) => {
            const isHome = item.href === "/";
            // Só usamos pathname para marcar "Início" como ativo
            const active = isHome && pathname === "/";

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 transition hover:text-white"
                >
                  {item.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-[#F5E9D7] transition-transform duration-200 group-hover:scale-x-100 ${
                      active ? "!scale-x-100" : ""
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://wa.me/5512987060180?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-md shadow-black/30 transition hover:shadow-lg hover:bg-zinc-100"
          >
            Solicitar orçamento
          </Link>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/70 text-zinc-100 transition hover:bg-zinc-900/70 active:scale-95 md:hidden"
          aria-label="Abrir menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className={open ? "hidden" : "block"}
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className={open ? "block" : "hidden"}
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden border-t border-neutral-800/70 bg-neutral-950/95 backdrop-blur-sm transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-3">
          {LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-900/80"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="https://wa.me/5512987060180?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-white px-3 py-2 text-center text-sm font-semibold text-neutral-900 shadow-md shadow-black/30 transition hover:bg-zinc-100"
            >
              Solicitar orçamento
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
