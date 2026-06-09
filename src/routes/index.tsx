import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Hand,
  Activity,
  Footprints,
  Droplets,
  Armchair,
  MapPin,
  Phone,
  Instagram,
  Menu,
  ImageIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import logoAsset from "@/assets/logo.png.asset.json";
import foto1 from "@/assets/foto1.jpg.asset.json";
import foto2 from "@/assets/foto2.jpg.asset.json";
import foto3 from "@/assets/foto3.jpg.asset.json";
import foto6 from "@/assets/foto6.jpg.asset.json";

const WHATSAPP_URL = "https://wa.me/5548991677275";
const INSTAGRAM_URL = "https://www.instagram.com/renatoalvesmassoterapeuta/";
const DESCRIPTION =
  "Massoterapeuta em Florianópolis com mais de 20 anos de experiência. Massagem terapêutica, desportiva, reflexologia podal, drenagem linfática e quick massage.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renato Alves — Massoterapeuta em Florianópolis" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Renato Alves — Massoterapeuta em Florianópolis" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: foto1.url },
      { name: "twitter:image", content: foto1.url },
    ],
    links: [
      { rel: "icon", type: "image/png", href: logoAsset.url },
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Renato Alves — Massoterapeuta",
          description: DESCRIPTION,
          image: foto1.url,
          telephone: "+5548991677275",
          areaServed: "Florianópolis, SC",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Florianópolis",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
  component: HomePage,
});

const tecnicas = [
  {
    icon: Hand,
    nome: "Massagem Terapêutica",
    descricao:
      "Técnica manual que auxilia no alívio de dores musculares, tensões e desconfortos físicos, promovendo bem-estar e equilíbrio corporal.",
    objetivos: [
      "Reduzir dores e tensões musculares",
      "Melhorar a mobilidade e a flexibilidade",
      "Promover relaxamento físico e mental",
    ],
  },
  {
    icon: Activity,
    nome: "Massagem Desportiva",
    descricao:
      "Massagem voltada para praticantes de atividades físicas, auxiliando na preparação, recuperação e prevenção de lesões.",
    objetivos: [
      "Acelerar a recuperação muscular",
      "Prevenir lesões decorrentes do exercício",
      "Melhorar o desempenho esportivo",
    ],
  },
  {
    icon: Footprints,
    nome: "Reflexologia Podal",
    descricao:
      "Técnica que estimula pontos específicos dos pés relacionados a diferentes órgãos e sistemas do corpo, favorecendo o equilíbrio geral.",
    objetivos: [
      "Promover relaxamento profundo",
      "Estimular o equilíbrio do organismo",
      "Auxiliar na redução do estresse e da ansiedade",
    ],
  },
  {
    icon: Droplets,
    nome: "Drenagem Linfática Manual",
    descricao:
      "Técnica suave que estimula o sistema linfático, favorecendo a eliminação de líquidos e toxinas acumuladas no organismo.",
    objetivos: [
      "Reduzir retenção de líquidos e inchaços",
      "Melhorar a circulação linfática",
      "Auxiliar na recuperação pós-operatória e estética",
    ],
  },
  {
    icon: Armchair,
    nome: "Quick Massage",
    descricao:
      "Massagem rápida realizada em cadeira ergonômica, focada principalmente nas regiões das costas, ombros, pescoço e braços.",
    objetivos: [
      "Aliviar tensões do dia a dia",
      "Reduzir o estresse em poucos minutos",
      "Melhorar a disposição e o bem-estar imediato",
    ],
  },
];

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnicas", label: "Técnicas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <Hero />
        <Tecnicas />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/85 border-b border-accent-blue/15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Renato Alves Massoterapeuta" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink/80 hover:text-accent-plum transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm uppercase tracking-wider border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-bg transition-colors rounded-full"
        >
          WhatsApp
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Menu"
              className="md:hidden p-2 text-ink"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-bg border-l border-accent-blue/20">
            <nav className="mt-12 flex flex-col gap-6 text-base uppercase tracking-wide">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-ink hover:text-accent-plum"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 border border-accent-blue text-accent-blue rounded-full"
              >
                WhatsApp
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-2">
      <span className="h-px w-12 bg-accent-blue/60" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent-plum/70" />
      <span className="h-px w-12 bg-accent-blue/60" />
    </div>
  );
}

function Hero() {
  return (
    <section id="sobre" className="relative pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-5">
            Massoterapia · Estética · Terapias Integrativas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-accent-plum">
            Renato Alves
          </h1>
          <SectionDivider />
          <p className="text-base md:text-lg leading-relaxed text-ink/90">
            Massoterapeuta e professor com mais de 20 anos de experiência nas áreas de
            massoterapia, estética e terapias integrativas. Graduado em Cosmetologia e Estética e
            técnico em Massoterapia, atua em atendimentos clínicos, corporativos e eventos. Possui
            ampla experiência em Quick Massage, reflexologia podal, massagens terapêuticas e
            relaxantes, além de formação e supervisão de profissionais da área.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase tracking-wider bg-accent-plum text-bg hover:bg-accent-blue transition-colors rounded-full"
            >
              <Phone className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
            <a
              href="#tecnicas"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase tracking-wider border border-ink/30 text-ink hover:border-accent-plum hover:text-accent-plum transition-colors rounded-full"
            >
              Ver técnicas
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 border border-accent-blue/40 rounded-sm -rotate-1" />
          <div className="absolute -inset-2 border border-accent-plum/40 rounded-sm rotate-1" />
          <img
            src={foto1.url}
            alt="Renato Alves realizando atendimento de massoterapia"
            className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

function Tecnicas() {
  return (
    <section id="tecnicas" className="py-20 md:py-28 bg-bg-soft/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-4">
            O que ofereço
          </p>
          <h2 className="text-3xl md:text-5xl text-accent-plum">Técnicas</h2>
          <SectionDivider />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tecnicas.map((t, i) => {
            const Icon = t.icon;
            const accent = i % 2 === 0 ? "text-accent-blue" : "text-accent-plum";
            const border = i % 2 === 0 ? "border-accent-blue/30" : "border-accent-plum/30";
            return (
              <article
                key={t.nome}
                className={`group bg-bg border ${border} rounded-sm p-7 flex flex-col hover:shadow-md transition-shadow`}
              >
                <Icon className={`h-9 w-9 ${accent} mb-5`} strokeWidth={1.25} />
                <h3 className={`text-2xl mb-3 ${accent}`}>{t.nome}</h3>
                <p className="text-ink/90 leading-relaxed text-sm mb-5">{t.descricao}</p>
                <p className="text-xs uppercase tracking-wider text-ink/60 mb-2">Objetivos</p>
                <ul className="space-y-1.5 text-sm">
                  {t.objetivos.map((o) => (
                    <li key={o} className="flex gap-2.5 leading-relaxed">
                      <span
                        className={`mt-2 h-1 w-1 rounded-full flex-shrink-0 ${
                          i % 2 === 0 ? "bg-accent-blue" : "bg-accent-plum"
                        }`}
                      />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-14 md:mt-16 max-w-3xl mx-auto text-center border-t border-b border-accent-blue/30 py-8">
          <p className="text-base md:text-lg leading-relaxed text-ink italic">
            Cada atendimento é realizado de forma individualizada, considerando as necessidades,
            queixas, sintomas e possíveis contraindicações de cada interagente. A partir dessa
            avaliação, são aplicadas as técnicas mais adequadas para proporcionar bem-estar, alívio
            de tensões e melhores resultados terapêuticos.
          </p>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = [
    { src: foto1.url, alt: "Massagem terapêutica nas costas" },
    { src: foto2.url, alt: "Atendimento com ventosaterapia" },
    { src: foto3.url, alt: "Quick massage em cadeira ergonômica" },
    { src: foto6.url, alt: "Reflexologia podal" },
  ];

  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-4">
            Registros do atendimento
          </p>
          <h2 className="text-3xl md:text-5xl text-accent-plum">Galeria</h2>
          <SectionDivider />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {fotos.map((f, i) => (
            <figure
              key={i}
              className={`relative aspect-square overflow-hidden rounded-sm border ${
                i % 2 === 0 ? "border-accent-blue/40" : "border-accent-plum/40"
              }`}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </figure>
          ))}
          {[0, 1].map((i) => (
            <figure
              key={`placeholder-${i}`}
              className={`aspect-square rounded-sm border-2 border-dashed flex flex-col items-center justify-center gap-2 bg-bg-soft/40 ${
                i === 0 ? "border-accent-blue/40 text-accent-blue" : "border-accent-plum/40 text-accent-plum"
              }`}
            >
              <ImageIcon className="h-8 w-8" strokeWidth={1.25} />
              <figcaption className="text-xs uppercase tracking-wider">Em breve</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-bg-soft/50">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-4">
            Vamos conversar
          </p>
          <h2 className="text-3xl md:text-5xl text-accent-plum">Contato</h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-accent-blue/40 text-accent-blue">
              <MapPin className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl text-accent-blue">Atendimento</h3>
            <p className="text-sm text-ink/90 leading-relaxed">
              Bairro Santa Mônica,<br />Centro e em domicílio
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-accent-plum/40 text-accent-plum">
              <Phone className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl text-accent-plum">WhatsApp</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent-plum transition-colors"
            >
              (48) 99167-7275
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-accent-blue/40 text-accent-blue">
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl text-accent-blue">Instagram</h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent-blue transition-colors"
            >
              @renatoalvesmassoterapeuta
            </a>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 text-sm uppercase tracking-wider bg-accent-plum text-bg hover:bg-accent-blue transition-colors rounded-full"
          >
            <Phone className="h-4 w-4" /> Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-accent-blue/20 py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/60">
        <p>© {new Date().getFullYear()} Renato Alves — Massoterapeuta</p>
        <p className="uppercase tracking-wider">Florianópolis · SC</p>
      </div>
    </footer>
  );
}
