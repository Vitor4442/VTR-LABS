"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";

type Slide = {
  src: string;
  alt: string;
};

const SLIDES: Slide[] = [
  { src: "/images/hero/escritorio.jpg", alt: "Escritório moderno" },
  { src: "/images/hero/myriam-jessier-eveI7MOcSmw-unsplash.jpg", alt: "Equipe desenvolvendo software" },
  { src: "/images/hero/photo-1534972195531-d756b9bfa9f2.jpg", alt: "Reunião de planejamento" },
  { src: "/images/hero/computador.jpg", alt: "Código e automações" },
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const paused = useRef(false);

  // autoplay
  useEffect(() => {
    if (paused.current) return;
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index]);

  const go = (dir: "prev" | "next") =>
    setIndex((i) => (dir === "next" ? (i + 1) % SLIDES.length : (i - 1 + SLIDES.length) % SLIDES.length));

  return (
    <section
      className="relative isolate h-[60vh] md:h-[75vh] w-full overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel" 
      aria-label="VTR Labs - Destaques"
    >
      {/* Slides como background com crossfade */}
      {SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image src={s.src} alt={s.alt} fill priority={i === 0} className="object-cover object-center" />
        </div>
      ))}

      {/* Véu e glow (mantém sua estética) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.16),transparent)]" />

      {/* Marca d’água: ícone gigante de código (Lucide) */}
      <Code2
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[38vh] w-[38vh] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[1px] text-white"
      />

      {/* Conteúdo central */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8 animate-fade-in-up">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-neutral-100 backdrop-blur">
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          VTR LABS — soluções digitais
        </span>

        <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
          Construímos experiências modernas que{" "}
          <span className="bg-gradient-to-r from-neutral-200 via-white to-neutral-300 bg-clip-text text-transparent">
            geram valor
          </span>{" "}
          para o seu negócio
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base text-neutral-200/90 md:text-lg">
          Planilhas inteligentes, dashboards interativos, sites e landing pages. Automação, performance e design
          trabalhando juntos para o crescimento do seu negócio.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://wa.me/5512987060180?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            className="group inline-flex items-center rounded-2xl border border-white/15 bg-white/90 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/10 transition hover:bg-white"
          >
            Solicitar orçamento
            <svg
              viewBox="0 0 24 24"
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Fade inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/70 to-transparent" />

      {/* Controles */}
      <button
        aria-label="Slide anterior"
        onClick={() => go("prev")}
        className="group absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur transition hover:bg-white/20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Próximo slide"
        onClick={() => go("next")}
        className="group absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur transition hover:bg-white/20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full border border-white/40 transition ${
              i === index ? "bg-white" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Indicador de scroll */}
      <a
        href="#sobre"
        className="absolute bottom-6 right-6 z-10 rounded-full border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur transition hover:bg-white/20"
        aria-label="Descer"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
