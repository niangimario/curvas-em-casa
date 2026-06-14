import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, X, Shield, Clock, Star, Lock, ChevronDown, Flame, Gift } from "lucide-react";
import capaLivro from "@/assets/capa-livro.png";
import bonusErros from "@/assets/bonus-2.png";
import bonusAlimentar from "@/assets/bonus-1.png";
import resultado1 from "@/assets/resultado-1.jpg";
import resultado2 from "@/assets/resultado-2.jpg";
import resultado3 from "@/assets/resultado-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "30 Exercícios Caseiros para Aumentar o Bumbum — Oferta Especial" },
      { name: "description", content: "Cartilha completa com 30 exercícios caseiros para um bumbum mais firme, redondo e empinado. Garantia de 7 dias. Acesso imediato." },
      { property: "og:title", content: "30 Exercícios Caseiros para Aumentar o Bumbum" },
      { property: "og:description", content: "Bumbum firme e empinado sem sair de casa. Oferta especial por tempo limitado." },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Countdown() {
  const [time, setTime] = useState({ h: 0, m: 15, s: 42 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const box = "flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-primary to-destructive text-primary-foreground shadow-[var(--shadow-soft)]";
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 my-6 flex-wrap">
      <div className={box}>
        <span className="text-2xl sm:text-3xl font-bold tabular-nums">{String(time.h).padStart(2, "0")}</span>
        <span className="text-[10px] uppercase tracking-wider opacity-90">Horas</span>
      </div>
      <span className="text-xl sm:text-2xl font-bold text-primary">:</span>
      <div className={box}>
        <span className="text-2xl sm:text-3xl font-bold tabular-nums">{String(time.m).padStart(2, "0")}</span>
        <span className="text-[10px] uppercase tracking-wider opacity-90">Min</span>
      </div>
      <span className="text-xl sm:text-2xl font-bold text-primary">:</span>
      <div className={box}>
        <span className="text-2xl sm:text-3xl font-bold tabular-nums">{String(time.s).padStart(2, "0")}</span>
        <span className="text-[10px] uppercase tracking-wider opacity-90">Seg</span>
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted transition">
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground">{a}</div>}
    </div>
  );
}

function CTAButton({ children, variant = "primary", href }: { children: React.ReactNode; variant?: "primary" | "premium"; href?: string }) {
  const base = "w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg uppercase tracking-wide transition-all hover:scale-[1.02] active:scale-95 shadow-[var(--shadow-soft)] text-center leading-tight whitespace-normal";
  const styles = variant === "premium"
    ? "bg-pink-500 text-black hover:shadow-[var(--shadow-glow)]"
    : "bg-[#111827] text-white";
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>{children}</a>;
  }
  return <button className={`${base} ${styles}`}>{children}</button>;
}

function Index() {
  const benefits = [
    "30 exercícios caseiros passo a passo",
    "Treinos para iniciantes e avançadas",
    "Técnicas para ativar os glúteos corretamente",
    "Exercícios sem necessidade de equipamentos",
    "Rotinas rápidas para quem tem pouco tempo",
    "Estratégias para potencializar os resultados",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-amber-400 text-black text-center py-3 px-4 font-bold text-xs sm:text-sm md:text-base tracking-wide leading-snug">
        <Flame className="inline w-4 h-4 mr-1 text-red-600" /> OFERTA ESPECIAL DE 10R$ HOJE! APROVEITE ANTES QUE ACABE!
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold text-primary mb-4">
              <Star className="w-3 h-3 fill-[var(--gold)] text-[var(--gold)]" /> +1.000 mulheres satisfeitas
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Descubra os <span className="text-primary">30 Exercícios Caseiros</span> para Aumentar Rapidamente o Bumbum
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Imagine olhar-se ao espelho daqui a algumas semanas e ver um bumbum mais firme, redondo e empinado — sem precisar gastar com academia.
            </p>
            <ul className="mt-6 space-y-2">
              {["Garantia de 7 dias", "Exercícios simples de fazer em casa", "Mais de 1.000 mulheres satisfeitas"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-success" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center">
            <img src={capaLivro} alt="Capa do livro 30 Exercícios Caseiros para Aumentar o Bumbum" className="w-full max-w-md drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]" width={800} height={1000} />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Criamos a cartilha <strong className="text-foreground">"30 Exercícios Caseiros para Aumentar Rapidamente o Bumbum"</strong>. Um guia prático, simples e eficaz, desenvolvido para ativar os músculos corretos dos glúteos e ajudar você a conquistar curvas mais bonitas sem sair de casa.
        </p>
      </section>

      {/* What's inside */}
      <section className="bg-secondary py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">O que você vai encontrar</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why fail */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">Por que a maioria das mulheres não consegue aumentar o bumbum?</h2>
        <p className="mt-4 text-center text-muted-foreground">Muitas fazem exercícios aleatórios da internet que não trabalham corretamente os músculos dos glúteos. O resultado?</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {["Pouca evolução", "Falta de motivação", "Meses sem resultados visíveis"].map((t) => (
            <div key={t} className="flex items-center gap-3 p-5 rounded-xl border border-destructive/20 bg-destructive/5">
              <X className="w-6 h-6 text-destructive flex-shrink-0" />
              <span className="font-medium text-foreground">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg text-foreground">
          Com esta cartilha, você aprenderá uma <strong className="text-primary">sequência simples e eficiente</strong> para estimular os músculos certos e acelerar seus resultados.
        </p>
      </section>

      {/* Imagine */}
      <section className="bg-[var(--gradient-hero)] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Imagine-se daqui a algumas semanas...</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
            {["Bumbum mais firme", "Bumbum mais empinado", "Mais confiança ao usar qualquer roupa", "Corpo mais harmonioso", "Mais autoestima ao olhar-se no espelho"].map((t) => (
              <div key={t} className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-sm">
                <span className="text-2xl">🍑</span>
                <span className="font-medium text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados das alunas */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-pink-600 text-white font-extrabold text-sm sm:text-lg md:text-xl uppercase tracking-wider sm:tracking-widest shadow-lg text-center">
            <Star className="w-5 h-5 fill-current" /> Resultados das Alunas
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Veja as transformações reais</h2>
          <p className="mt-3 text-muted-foreground">Mulheres que aplicaram o método e conquistaram o bumbum dos sonhos.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[resultado1, resultado2, resultado3].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] aspect-[3/4]">
              <img src={src} alt={`Resultado de aluna ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Bonus */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-pink-600 text-white font-extrabold text-sm sm:text-lg md:text-xl uppercase tracking-wider sm:tracking-widest shadow-lg text-center">
            <Gift className="w-5 h-5" /> BÔNUS EXCLUSIVOS DE HOJE
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Ao adquirir hoje, você recebe gratuitamente:</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
            { n: "#1", title: "Os 15 Erros que Impedem o Crescimento do Bumbum", desc: "Descubra os erros mais comuns que fazem milhares de mulheres perderem tempo sem conseguir resultados.", old: "R$ 27,90", img: bonusErros },
            { n: "#2", title: "Guia Alimentar para Potencializar o Crescimento dos Glúteos", desc: "Aprenda quais alimentos ajudam a favorecer o desenvolvimento muscular e potencializar os resultados.", old: "R$ 19,90", img: bonusAlimentar },
          ].map((b) => (
            <div key={b.n} className="relative p-7 rounded-2xl bg-card border-2 border-[var(--gold)]/40 shadow-[var(--shadow-soft)]">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[var(--gradient-gold)] rounded-full text-xs font-bold uppercase tracking-wide">BÔNUS {b.n}</div>
              <img src={b.img} alt={b.title} className="w-40 md:w-48 mx-auto mt-2 mb-4 drop-shadow-xl" />
              <h3 className="text-xl font-bold text-foreground mt-2">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.desc}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="line-through text-muted-foreground">De {b.old}</span>
                <span className="px-3 py-1 rounded-full bg-success/10 text-success font-bold text-sm">Por R$ 0,00 hoje</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center p-6 rounded-2xl bg-emerald-600 text-white shadow-lg">
          <p className="text-lg">🎁 TOTAL DOS BÔNUS: <span className="line-through opacity-75">R$ 47,80</span></p>
          <p className="text-2xl font-bold mt-1">HOJE VOCÊ RECEBE TUDO GRATUITAMENTE!</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-secondary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--gradient-gold)] mb-4">
            <Shield className="w-10 h-10 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Garantia Incondicional de 7 Dias</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sua compra é totalmente segura. Se por qualquer motivo você achar que a cartilha não é para você, basta solicitar o reembolso dentro de 7 dias e receberá 100% do seu dinheiro de volta.
          </p>
          <p className="mt-3 font-semibold text-foreground">Sem burocracia. Sem perguntas.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">Escolha Seu Plano</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Basic */}
          <div className="p-8 rounded-3xl bg-card border border-border flex flex-col">
            <h3 className="text-2xl font-bold text-foreground">Plano Básico</h3>
            
            <div className="mt-6">
              <p className="text-sm line-through text-muted-foreground">De R$ 29,90</p>
              <p className="text-5xl font-bold text-foreground">R$ 10<span className="text-2xl">,00</span></p>
              <p className="text-sm text-muted-foreground mt-1">Pagamento único</p>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {["Cartilha 30 Exercícios Caseiros", "Acesso imediato", "Garantia de 7 dias"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground"><Check className="w-5 h-5 text-success" />{t}</li>
              ))}
            </ul>
            <div className="mt-8"><CTAButton href="https://pay.hotmart.com/I106277790K?off=q4kiqmuh&checkoutMode=10">Quero Começar Agora</CTAButton></div>
            <p className="text-center text-sm text-muted-foreground mt-4">⏳ Ainda dá tempo de conhecer o Premium abaixo...</p>
          </div>

          {/* Premium */}
          <div className="relative p-8 rounded-3xl bg-slate-900 text-white flex flex-col shadow-xl border-2 border-amber-400 md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 rounded-full text-xs font-bold uppercase tracking-wide text-black flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Mais Escolhido
            </div>
            <h3 className="text-2xl font-bold text-white">Plano Premium</h3>
            <p className="mt-1 text-slate-300">A solução completa para maximizar seus resultados.</p>
            <div className="mt-6">
              <p className="text-sm line-through text-slate-400">De R$ 97,90</p>
              <p className="text-5xl font-bold text-white">R$ 37<span className="text-2xl">,90</span></p>
              <p className="text-sm text-slate-300 mt-1">Pagamento único</p>
            </div>
            <p className="mt-4 text-sm font-semibold text-amber-400">🔥 +2.300 mulheres já escolheram este plano</p>
            <ul className="mt-6 space-y-3 flex-1">
              {[
                "Cartilha completa",
                "Acesso vitalício",
                "Atualizações futuras gratuitas",
                "Bônus #1: Os 15 Erros que Impedem o Crescimento",
                "Bônus #2: Guia Alimentar para Glúteos",
                "Garantia estendida de 15 dias",
                "Suporte prioritário",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-100"><Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />{t}</li>
              ))}
            </ul>
            <div className="mt-8"><CTAButton variant="premium" href="https://pay.hotmart.com/I106277790K?checkoutMode=10">Quero o Plano Premium</CTAButton></div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wide">
            <Clock className="w-5 h-5" /> Oferta encerrando em breve
          </p>
          <Countdown />
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <Lock className="w-4 h-4" /> Pagamento 100% Seguro
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-foreground">
            Seu próximo treino pode ser o primeiro passo para conquistar o bumbum que você sempre desejou.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">Perguntas Frequentes</h2>
          <div className="mt-10 space-y-3">
            <Faq q="Como receberei meu acesso?" a="Imediatamente após a confirmação do pagamento, você receberá o link de acesso no seu e-mail." />
            <Faq q="Preciso de equipamentos?" a="Não. Todos os exercícios foram pensados para serem feitos em casa, sem nenhum equipamento." />
            <Faq q="Os exercícios servem para iniciantes?" a="Sim! A cartilha contém variações para iniciantes e progressões para quem já tem mais experiência." />
            <Faq q="Quanto tempo por dia preciso treinar?" a="Entre 15 e 30 minutos por dia já são suficientes para começar a notar resultados." />
            <Faq q="Como funciona a garantia?" a="Você tem 7 dias (ou 15 dias no Premium) para testar. Se não gostar, devolvemos 100% do valor, sem perguntas." />
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
