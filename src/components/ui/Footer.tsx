import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 grid gap-10 md:grid-cols-4">

        {/* Logo + Descrição */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image
              src="/images/navbar/logo.png"
              alt="Logo VTR Labs"
              width={42}
              height={42}
              className="rounded-xl"
            />
            <span className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
              VTR Labs
            </span>
          </Link>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
            Soluções digitais sob medida para impulsionar negócios com tecnologia,
            desempenho e automação.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Navegação</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Início", href: "/" },
              { label: "Soluções", href: "#solucoes" },
              { label: "Projetos", href: "/projetos" },
              { label: "Sobre", href: "/sobre" },
              { label: "Contato", href: "#contato" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#B8860B] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Contato</h4>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#DAA520]" /> vtrlabssolucoesdigitais@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#DAA520]" /> (12) 98706-0180
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#DAA520]" /> Brasil, Taubaté — SP
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Redes sociais</h4>
          <div className="flex items-center gap-4">

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/vtrlabs?igsh=MWZnemVjNWt0a3ZzNA=="
              target="_blank"
              className="hover:text-[#DAA520] text-neutral-700 dark:text-neutral-300 transition"
            >
              <Instagram className="h-6 w-6" />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/5512987060180?text=Olá! Gostaria de saber mais sobre os serviços."
              target="_blank"
              className="hover:text-[#DAA520] text-neutral-700 dark:text-neutral-300 transition"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.96C.157 5.352 5.443 0 12.061 0c3.183 0 6.167 1.24 8.413 3.487a11.78 11.78 0 013.485 8.402c-.003 6.617-5.385 11.999-12.004 11.999a11.9 11.9 0 01-5.943-1.594L.057 24zM6.597 19.36c1.676.995 3.276 1.591 5.401 1.592 5.448 0 9.886-4.434 9.889-9.885.003-5.462-4.415-9.885-9.881-9.888-5.452 0-9.887 4.433-9.889 9.881a9.86 9.86 0 001.528 5.236l-.999 3.648 3.951-1.584zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.414.248-.695.248-1.289.173-1.414z" />
              </svg>
            </Link>

            {/* Gmail */}
            <Link
              href="mailto:vtrlabssolucoesdigitais@gmail.com"
              className="hover:text-[#DAA520] text-neutral-700 dark:text-neutral-300 transition"
            >
              <Mail className="h-6 w-6" />
            </Link>

          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200/60 dark:border-neutral-800/60 py-4 text-center">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} VTR Labs — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
