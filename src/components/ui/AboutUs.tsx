import Image from "next/image";
import { CheckCircle2, Target, Trophy, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
        {/* FOTO / FIGURA */}
        <figure className="relative h-[22rem] md:h-[26rem] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
          <Image
            src="/images/reuniao.jpg"
            alt="Nossa equipe colaborando em reunião"
            fill
            className="object-cover"
            priority
          />
          {/* véu suave + borda de destaque */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          <figcaption className="absolute bottom-3 left-3 rounded-md bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur">
            Pessoas em primeiro lugar, tecnologia como alavanca.
          </figcaption>
        </figure>

        {/* TEXTO */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-[#DAA520]" />
            Sobre nós
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Soluções digitais com{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              resultado e propósito
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 leading-relaxed">
            Somos uma equipe apaixonada por transformar ideias em produtos
            que fazem diferença no dia a dia das empresas. Unimos estratégia,
            design e tecnologia para criar experiências simples, eficientes e
            agradáveis de usar.
          </p>

          {/* Pilares (Missão / Visão / Valores) */}
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Target className="h-5 w-5 text-[#B8860B]" />
              <h3 className="mt-3 text-sm font-semibold text-zinc-800">Missão</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Impulsionar negócios com soluções digitais claras, úteis e escaláveis.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Trophy className="h-5 w-5 text-[#B8860B]" />
              <h3 className="mt-3 text-sm font-semibold text-zinc-800">Visão</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Ser referência em entregar valor real com qualidade e consistência.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Users className="h-5 w-5 text-[#B8860B]" />
              <h3 className="mt-3 text-sm font-semibold text-zinc-800">Valores</h3>
              <ul className="mt-1 space-y-1 text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#DAA520]" /> Transparência e ética
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#DAA520]" /> Foco em resultados
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#DAA520]" /> Inovação contínua
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#DAA520]" /> Respeito e colaboração
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
