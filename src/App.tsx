import { useState } from "react";
import { motion } from "motion/react";
import {
  Hand,
  Activity,
  Droplets,
  MapPin,
  Phone,
  Instagram,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import logoAsset from "/logo.png";
import foto1 from "/foto1.jpeg";
import foto2 from "/foto2.jpeg";
import foto3 from "/foto3.jpeg";
import foto4 from "/foto4.jpeg";
import foto5 from "/foto5.jpeg";
import foto6 from "/foto6.jpeg";

const WHATSAPP_URL = "https://wa.me/5548991677275";
const INSTAGRAM_URL = "https://www.instagram.com/renatoalvesmassoterapeuta/";
const DESCRIPTION =
  "Massoterapeuta em Florianópolis com mais de 20 anos de experiência. Massagem terapêutica, desportiva, reflexologia podal, drenagem linfática e quick massage.";

// Custom inline icons
function BarefootIcon() {
  return (
    <img src="/ico1.png"></img>
  );
}

function MassageChairIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="17" cy="4.5" rx="2.2" ry="1.2" />
      <line x1="17" y1="5.7" x2="17" y2="7.5" />
      <rect x="11.5" y="7.5" width="6" height="4.5" rx="1" />
      <rect x="5" y="11" width="6.5" height="2" rx="1" />
      <rect x="9" y="15.5" width="7" height="2.2" rx="1" />
      <line x1="13" y1="12" x2="9.5" y2="20" />
      <line x1="15.5" y1="12" x2="18" y2="20" />
      <line x1="9.5" y1="20" x2="5.5" y2="20" />
      <line x1="18" y1="20" x2="20.5" y2="20" />
    </svg>
  );
}

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
    icon: BarefootIcon,
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
    icon: MassageChairIcon,
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

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function App() {
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
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="Renato Alves Massoterapeuta"
            className="h-20 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink/80 hover:text-[#334b5c] transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm uppercase tracking-wider border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-bg transition-colors duration-700 rounded-full"
        >
          WhatsApp
        </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Menu" className="md:hidden p-2 text-ink">
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
                  className="text-ink hover:text-[#334b5c] transition-colors duration-500"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 border border-accent-blue text-accent-blue rounded-full transition-colors duration-700 hover:bg-accent-blue hover:text-bg"
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
        <motion.div {...fadeUp} className="order-2 md:order-1">
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
              className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase tracking-wider bg-accent-plum text-bg hover:bg-accent-blue transition-colors duration-700 rounded-full"
            >
              <Phone className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
            <a
              href="#tecnicas"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm uppercase tracking-wider border border-ink/30 text-ink hover:border-accent-plum hover:text-accent-plum transition-colors duration-500 rounded-full"
            >
              Ver técnicas
            </a>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 border border-accent-blue/40 rounded-sm -rotate-1" />
          <div className="absolute -inset-2 border border-accent-plum/40 rounded-sm rotate-1" />
          <img
            src={foto1}
            alt="Renato Alves realizando atendimento de massoterapia"
            className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Tecnicas() {
  return (
    <section id="tecnicas" className="py-20 md:py-28 bg-bg-soft/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-4">
            O que ofereço
          </p>
          <h2 className="text-3xl md:text-5xl text-accent-plum">Técnicas</h2>
          <SectionDivider />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tecnicas.map((t, i) => {
            const Icon = t.icon;
            const accent = i % 2 === 0 ? "text-accent-blue" : "text-accent-plum";
            const border = i % 2 === 0 ? "border-accent-blue/30" : "border-accent-plum/30";
            return (
              <motion.article
                key={t.nome}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
              </motion.article>
            );
          })}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-14 md:mt-16 max-w-3xl mx-auto text-center border-t border-b border-accent-blue/30 py-8"
        >
          <p className="text-base md:text-lg leading-relaxed text-ink italic">
            Cada atendimento é realizado de forma individualizada, considerando as necessidades,
            queixas, sintomas e possíveis contraindicações de cada interagente. A partir dessa
            avaliação, são aplicadas as técnicas mais adequadas para proporcionar bem-estar, alívio
            de tensões e melhores resultados terapêuticos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Galeria() {
  const fotos = [
    { src: foto1, alt: "Massagem terapêutica nas costas" },
    { src: foto2, alt: "Atendimento com ventosaterapia" },
    { src: foto3, alt: "Quick massage em cadeira ergonômica" },
    { src: foto4, alt: "Atendimento de massoterapia" },
    { src: foto5, alt: "Atendimento de massoterapia em sala" },
    { src: foto6, alt: "Reflexologia podal" },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const open = openIdx !== null;

  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-4">
            Registros do atendimento
          </p>
          <h2 className="text-3xl md:text-5xl text-accent-plum">Galeria</h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {fotos.map((f, i) => (
            <motion.button
              type="button"
              key={i}
              onClick={() => setOpenIdx(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative aspect-square overflow-hidden rounded-sm border cursor-pointer group ${
                i % 2 === 0 ? "border-accent-blue/40" : "border-accent-plum/40"
              }`}
              aria-label={`Abrir ${f.alt}`}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />
            </motion.button>
          ))}
        </div>

        <Dialog open={open} onOpenChange={(o) => !o && setOpenIdx(null)}>
          <DialogContent className="max-w-5xl w-[95vw] p-2 sm:p-3 bg-bg border-accent-blue/30">
            <DialogTitle className="sr-only">
              {openIdx !== null ? fotos[openIdx].alt : "Foto"}
            </DialogTitle>
            {openIdx !== null && (
              <img
                src={fotos[openIdx].src}
                alt={fotos[openIdx].alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-bg-soft/50">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-blue mb-4">
            Vamos conversar
          </p>
          <h2 className="text-3xl md:text-5xl text-accent-plum">Contato</h2>
          <SectionDivider />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-accent-blue/40 text-accent-blue">
              <MapPin className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl text-accent-blue">Atendimento</h3>
            <p className="text-sm text-ink/90 leading-relaxed">
              Bairro Santa Mônica,<br />Centro e em domicílio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-accent-plum/40 text-accent-plum hover:bg-accent-plum hover:text-bg transition-colors duration-700"
            >
              <Phone className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <h3 className="text-xl text-accent-plum">WhatsApp</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent-plum transition-colors duration-500"
            >
              (48) 99167-7275
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram"
              className="h-12 w-12 flex items-center justify-center rounded-full border border-accent-blue/40 text-accent-blue hover:bg-accent-blue hover:text-bg transition-colors duration-700"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <h3 className="text-xl text-accent-blue">Instagram</h3>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent-blue transition-colors duration-500"
            >
              @renatoalvesmassoterapeuta
            </a>
          </motion.div>
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
