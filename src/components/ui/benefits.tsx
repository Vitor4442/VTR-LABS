// app/components/benefits.tsx
// Seção de Benefícios / Soluções — pronta para copiar e colar
// - 100% Tailwind (sem dependências externas)
// - grid responsivo, ícones SVG inline, animações sutis
// - dark mode, acessível

import { BarChart3, Layout, Table2, Workflow } from "lucide-react";
import Link from "next/link";

// 1) Dados (edite para sua empresa)
const BENEFITS = [
  {
  icon: <Table2 className="h-5 w-5 text-emerald-400" />,
  title: "Planilhas Inteligentes",
  desc: "Modelos profissionais que organizam sua operação, reduzem erros e aumentam sua produtividade.",
  bullets: [
    "Fórmulas automáticas e validações",
    "Modelos sob medida para seu negócio",
    "Relatórios e análises prontos"
  ]
},
{
  icon: <BarChart3 className="h-5 w-5 text-blue-400" />,
  title: "Dashboards Interativos",
  desc: "Indicadores claros e atualizados em tempo real para decisões mais rápidas e seguras.",
  bullets: [
    "KPIs e metas estratégicas",
    "Filtros e visualização dinâmica",
    "Integração com Excel/Sheets e Web"
  ]
},
{
  icon: <Workflow className="h-5 w-5 text-purple-400" />,
  title: "Automação de Processos",
  desc: "Elimine tarefas repetitivas e ganhe tempo automatizando fluxos e integrações.",
  bullets: [
    "Integrações com apps e sistemas",
    "Disparos e relatórios automáticos",
    "Fluxos no-code, low-code ou código"
  ]
},
{
  icon: <Layout className="h-5 w-5 text-orange-400" />,
  title: "Sites e Landing Pages",
  desc: "Páginas modernas, rápidas e otimizadas para atrair clientes e gerar conversão.",
  bullets: [
    "Design profissional e responsivo",
    "SEO + performance",
    "Captura de leads e integrações"
  ]
}
  
];

export default function BenefitsSection() {
  return (
    <section id="solucoes" className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Cabeçalho */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white dark:text-neutral-50 sm:text-4xl">
          Resultados práticos com automação, dados e presença digital
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Reduza trabalho manual, ganhe visibilidade e aumente conversões com um stack enxuto e eficiente.
        </p>
      </div>

      {/* Grid de benefícios */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            {/* Ícone + título */}
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm transition group-hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
                {b.icon}
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{b.title}</h3>
            </div>

            {/* Descrição */}
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{b.desc}</p>

            {/* Bullets */}
            <ul className="mt-4 space-y-2">
              {b.bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Glow decorativo */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-emerald-300/10" />
          </article>
        ))}
      </div>

      {/* Call-to-action */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/orcamento"
          className="inline-flex items-center rounded-2xl border border-neutral-200 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black dark:border-neutral-700 dark:bg-white dark:text-neutral-900"
        >
          Solicitar orçamento
        </Link>
        <Link
          href="#projetos"
          className="inline-flex items-center rounded-2xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-white"
        >
          Ver projetos
        </Link>
      </div>
    </section>
  );
}

/*
Como usar:
1) Salve este arquivo em app/components/benefits.tsx
2) Na sua página (ex.: app/page.tsx), importe e use:
   import BenefitsSection from "@/components/benefits";
   ...
   <BenefitsSection />
3) Edite o array BENEFITS com seus serviços/benefícios.
4) Opcional: altere cores/tipografia com Tailwind.
*/
