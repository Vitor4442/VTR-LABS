"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: Record<string, FormDataEntryValue>) {
    const e: Record<string, string> = {};
    const name = String(formData.name || "");
    const email = String(formData.email || "");
    const message = String(formData.message || "");
    const phone = String(formData.phone || "");

    if (name.trim().length < 2) e.name = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "E-mail inválido.";
    if (message.trim().length < 10) e.message = "Conte um pouco mais sobre o projeto (10+ caracteres).";
    if (phone && phone.replace(/\D/g, "").length < 10) e.phone = "Telefone incompleto.";

    return e;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);

    // honeypot anti-spam (campo oculto "website")
    if (data.website) {
      setStatus("ok"); // não denuncia para bots
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const v = validate(data);
    if (Object.keys(v).length) {
      setErrors(v);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || "Falha ao enviar.");
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrors((p) => ({ ...p, _root: err?.message || "Algo deu errado. Tente novamente." }));
    } finally {
      setTimeout(() => setStatus("idle"), 3500);
    }
  }

  const busy = status === "loading";

  return (
<form
  id="contato"
  onSubmit={onSubmit}
  aria-busy={busy}
  className="
        max-w-2xl mx-auto
+       my-24
        rounded-3xl shadow-2xl
        border border-zinc-200/60 bg-white/80 backdrop-blur
        dark:border-zinc-800/60 dark:bg-zinc-900/70
        px-8 py-10 md:px-12 md:py-14 space-y-6"
>
      {/* Cabeçalho */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Fale com a <span className="text-[#DAA520]">Digitalia</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
          Conte seu projeto e retornaremos rapidamente.
        </p>
      </div>

      {/* Alertas de status (aria-live) */}
      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "ok" && (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4" />
            Mensagem enviada com sucesso!
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 text-red-600 dark:text-rose-400 text-sm font-medium">
            <AlertCircle className="h-4 w-4" />
            {errors._root || "Ocorreu um erro ao enviar."}
          </div>
        )}
      </div>

      {/* Campos */}
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Nome *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Telefone (opcional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="(11) 91234-5678"
            autoComplete="tel"
            pattern="[\d()\-\s+]{10,}"
            aria-invalid={!!errors.phone}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Descreva seu projeto, objetivos e prazos."
            required
            rows={5}
            aria-invalid={!!errors.message}
            className={inputClass(!!errors.message) + " resize-y"}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        {/* Honeypot invisível */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Campos auxiliares (úteis no backend) */}
        <input type="hidden" name="source" value="contact_form" />
      </div>

      {/* Botão */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={busy}
          className="
            w-full md:w-auto mx-auto flex justify-center items-center gap-2
            px-8 py-3 rounded-xl font-semibold
            text-neutral-900
            bg-gradient-to-r from-[#DAA520] to-[#B8860B]
            hover:opacity-95 active:scale-[0.99]
            disabled:opacity-60 disabled:pointer-events-none
            shadow-lg shadow-black/10
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAA520]/60
          "
        >
          {busy ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar mensagem
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/** Tailwind input style (com variação de erro) */
function inputClass(hasError: boolean) {
  return `
    mt-1 w-full rounded-xl
    bg-white/80 dark:bg-zinc-900/60
    border ${hasError ? "border-red-500/60" : "border-zinc-300/60 dark:border-zinc-700/60"}
    px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100
    placeholder:text-zinc-400 dark:placeholder:text-zinc-500
    shadow-sm
    focus:outline-none focus:ring-2 ${
      hasError ? "focus:ring-red-500/40" : "focus:ring-[#DAA520]/40"
    } focus:border-transparent
    transition
  `;
}
