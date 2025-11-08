// app/components/social-proof.tsx
// Componente de Prova Social — leve, acessível e responsivo
// Inclui: faixa de marcas, métricas, depoimentos e nota média
// 100% Tailwind (sem libs externas)

import Image from "next/image";

// ===== Conteúdo (edite aqui) =====
const BRANDS = [
  { src: "/images/dashboard.png", alt: "Marca 1" },
  { src: "/logos/brand2.svg", alt: "Marca 2" },
  { src: "/logos/brand3.svg", alt: "Marca 3" },
  { src: "/logos/brand4.svg", alt: "Marca 4" },
  { src: "/logos/brand5.svg", alt: "Marca 5" },
];

const STATS = [
  { label: "Projetos entregues", value: "+120" },
  { label: "Satisfação média", value: "4.9/5" },
  { label: "Tempo de resposta", value: "< 24h" },
];

const TESTIMONIALS = [
  {
    name: "Ana Souza",
    role: "COO — Nexa Foods",
    avatar: "/images/pessoa1.jpg",
    quote:
      "O time da VTR Labs transformou nossos relatórios em dashboards incríveis. A tomada de decisão ficou muito mais rápida.",
    rating: 5,
  },
  {
    name: "Bruno Lima",
    role: "Founder — VoltPay",
    avatar: "/images/pessoa2.jpg",
    quote:
      "Automatizaram processos críticos e reduziram horas manuais por semana. Atendimento ágil e muito profissional.",
    rating: 5,
  },
  {
    name: "Camila Ribeiro",
    role: "Marketing — Casa Verde",
    avatar: "/images/pessoa3.jpg",
    quote:
      "As landing pages converteram acima do esperado. Copys, SEO e performance, tudo muito redondo.",
    rating: 5,
  },
];

// ===== UI =====
function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < n ? "text-yellow-400" : "text-neutral-400/40"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" aria-labelledby="social-proof-title" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs uppercase tracking-wider text-black/80 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          Confiança comprovada
        </span>
        <h2 id="social-proof-title" className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white dark:text-neutral-50 sm:text-4xl">
          Escolhido por equipes que querem resultado
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Empresas que usam nossas automações, dashboards e landing pages para vender mais e trabalhar melhor.
        </p>
      </div>

      {/* Brand strip 
      <div className="mt-10 rounded-2xl border border-neutral-200/70 bg-white/60 p-4 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {BRANDS.map((b, i) => (
            <div key={i} className="flex items-center justify-center opacity-70 transition hover:opacity-100">
              <Image src={b.src} alt={b.alt} width={120} height={40} className="max-h-8 w-auto" />
            </div>
          ))}
        </div>
      </div>
      */}

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((s, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200/70 bg-white/70 px-6 py-5 text-center shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
            <div className="text-2xl font-extrabold text-neutral-900 dark:text-white">{s.value}</div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="group relative h-full rounded-2xl border border-neutral-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={`Foto de ${t.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <figcaption className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{t.name}</figcaption>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">{t.role}</div>
              </div>
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">“{t.quote}”</blockquote>
            <div className="mt-4"><Stars n={t.rating} /></div>

            {/* brilho decorativo */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-emerald-300/10" />
          </figure>
        ))}
      </div>

      {/* Rating resumo */}
      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
        <Stars n={5} />
        <span className="font-medium">4.9/5</span>
        <span className="opacity-70">(baseado em 80+ avaliações)</span>
      </div>
    </section>
  );
}

/*
Como usar:
1) Salve em app/components/social-proof.tsx
2) Importe na página (ex.: app/page.tsx):
   import SocialProof from "@/components/social-proof";
   ...
   <SocialProof />
3) Coloque os arquivos em /public:
   - Logos em /public/logos/*.svg
   - Avatares em /public/avatars/*.jpg (ou .png)
4) Edite os arrays BRANDS, STATS e TESTIMONIALS conforme seus clientes/dados reais.
*/
