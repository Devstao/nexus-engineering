import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HeroBackground } from "@/components/impera/HeroBackground";
import {
  Code2, Cpu, Network, Wrench, GitBranch, Layers,
  Github, Youtube, Linkedin, Mail, MessageCircle, ArrowUpRight,
  Terminal, Zap, Database, Box, Server, Activity,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Devstão — A comunidade de elite criada por IMPERA" },
      {
        name: "description",
        content:
          "Devstão é a comunidade fundada por IMPERA para desenvolvedores, engenheiros e builders que constroem tecnologia em outro nível.",
      },
      { property: "og:title", content: "Devstão — fundada por IMPERA" },
      { property: "og:description", content: "Engenharia de software avançada, automação e arquitetura em uma comunidade exclusiva." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rotate-45 border border-gold/60" />
            <div className="absolute inset-1.5 rotate-45 bg-gradient-to-br from-gold to-gold-deep" />
          </div>
          <span className="font-display text-xl tracking-wide gold-gradient-text">Devstão</span>
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            by Impera
          </span>
        </a>
        <nav className="hidden items-center gap-9 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#sobre" className="transition-colors hover:text-gold">Sobre</a>
          <a href="#stack" className="transition-colors hover:text-gold">Stack</a>
          <a href="#projetos" className="transition-colors hover:text-gold">Projetos</a>
          <a href="#conteudo" className="transition-colors hover:text-gold">Conteúdo</a>
          <a href="#filosofia" className="transition-colors hover:text-gold">Filosofia</a>
        </nav>
        <a
          href="#join"
          className="group relative inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-all hover:border-gold/60 hover:bg-gold/10"
        >
          Entrar
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
      <div className="mx-auto h-px max-w-7xl gold-line opacity-40" />
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroBackground />
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-gold/40" />
          <span>Trupe do <span className="text-gold">Impera</span></span>
          <span className="h-px w-10 bg-gold/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(5rem,18vw,16rem)] font-light leading-[0.9] tracking-tight"
        >
          <span className="gold-gradient-text">Devstão</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-10 max-w-2xl text-balance text-lg leading-relaxed text-foreground/85 sm:text-xl"
        >
          A resenha do <span className="text-gold">IMPERA</span> com a galera que curte código,
          sistema operacional, terminal aberto e madrugada compilando.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground"
        >
          Conversa boa sobre programação, automação, arquitetura e os perrengues de quem vive
          construindo coisa. Sem gurusagem, sem hype — só dev de verdade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#join"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-sm bg-gradient-to-b from-gold to-gold-deep px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-background transition-transform hover:scale-[1.02] glow-gold"
          >
            <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Entrar na Comunidade</span>
            <ArrowUpRight className="relative h-4 w-4" />
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2.5 rounded-sm border border-gold/25 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-foreground/90 transition-all hover:border-gold/60 hover:bg-gold/5"
          >
            Explorar o Ecossistema
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-24 flex items-center justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70"
        >
          <span>Entra na trupe</span>
          <span className="h-1 w-1 rounded-full bg-gold/50 animate-pulse-gold" />
          <span>Resenha técnica</span>
          <span className="h-1 w-1 rounded-full bg-gold/50 animate-pulse-gold" />
          <span>Código rolando</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionLabel({ kicker, title, lead }: { kicker: string; title: React.ReactNode; lead?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 max-w-3xl"
    >
      <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
        <span className="h-px w-8 bg-gold/60" />
        {kicker}
      </div>
      <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-tight">
        {title}
      </h2>
      {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>}
    </motion.div>
  );
}

function About() {
  const pillars = [
    { icon: Code2, title: "Quem curte código", desc: "Gente que abre a IDE no fim de semana por gosto." },
    { icon: Cpu, title: "Quem manja de back", desc: "Backend, fullstack, infra — o pessoal que faz funcionar." },
    { icon: Wrench, title: "Quem automatiza tudo", desc: "Se dá pra script, dá pra automatizar. E a gente automatiza." },
    { icon: Layers, title: "Quem constrói coisa", desc: "Builders, makers, devs que entregam projeto rodando." },
    { icon: Network, title: "Quem pensa sistema", desc: "Arquitetura, performance, escala — papo de quem gosta." },
    { icon: GitBranch, title: "Quem ama open source", desc: "PR aberta, repo no GitHub, contribuindo na comunidade." },
  ];
  return (
    <section id="sobre" className="relative py-32 sm:py-40">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-30" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="A Trupe"
          title={<>A galera que vive<br /><span className="gold-gradient-text">codando.</span></>}
          lead="Devstão é a turma que o IMPERA juntou pra trocar ideia sobre código de verdade. Sem firula, sem papo de guru — só dev conversando com dev."
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[#070707] p-8 transition-colors hover:bg-[#0a0a0a]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              </div>
              <p.icon className="h-6 w-6 text-gold/80" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-2xl font-light tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")} / 06
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stacks = [
  { name: "Rust", cat: "Systems", icon: Cpu },
  { name: "TypeScript", cat: "Language", icon: Code2 },
  { name: "Python", cat: "Language", icon: Terminal },
  { name: "Go", cat: "Systems", icon: Zap },
  { name: "PostgreSQL", cat: "Database", icon: Database },
  { name: "Redis", cat: "Cache", icon: Activity },
  { name: "Docker", cat: "Infra", icon: Box },
  { name: "Linux", cat: "OS", icon: Server },
  { name: "FastAPI", cat: "Framework", icon: Zap },
  { name: "Tauri", cat: "Desktop", icon: Box },
  { name: "React", cat: "UI", icon: Code2 },
  { name: "Vue", cat: "UI", icon: Code2 },
];

function Stack() {
  return (
    <section id="stack" className="relative py-32 sm:py-40">
      <div className="absolute inset-0 bg-grid-fine [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="Stack"
          title={<>As <span className="gold-gradient-text">paradas</span> que a gente usa.</>}
          lead="As linguagens e ferramentas que rolam nos papos do Discord, nos projetos da galera e nas lives do IMPERA."
        />

        <div className="glass relative overflow-hidden rounded-xl">
          {/* terminal header */}
          <div className="flex items-center justify-between border-b border-border/50 bg-black/40 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gold/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              devstao://stack — rodando
            </div>
            <div className="font-mono text-[10px] text-gold animate-pulse-gold">● online</div>
          </div>

          <div className="grid gap-px bg-border/30 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stacks.map((s, i) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                custom={i % 4}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative flex items-center gap-4 bg-[#080808] p-5 transition-all hover:bg-[#0d0c08]"
              >
                <div className="relative">
                  <s.icon className="h-5 w-5 text-gold/70 transition-colors group-hover:text-gold" strokeWidth={1.4} />
                  <div className="absolute inset-0 -z-10 scale-150 rounded-full bg-gold/0 blur-xl transition-all group-hover:bg-gold/30" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg leading-none tracking-tight">{s.name}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.cat}
                  </div>
                </div>
                <div className="font-mono text-[10px] text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border/50 bg-black/40 px-5 py-3 font-mono text-[10px] tracking-wider text-muted-foreground">
            <span className="text-gold">$</span> devstao --galera 4.2k --online agora --resenha 24/7
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Aether",
    cat: "Side project",
    desc: "Um orquestrador de agentes que começou como brincadeira no Discord e virou coisa séria.",
    tag: "Rust · Tokio",
  },
  {
    name: "Forge CLI",
    cat: "Ferramenta",
    desc: "CLI pra cuspir projeto novo do zero — feito por dev, pra dev cansado de boilerplate.",
    tag: "Go · TUI",
  },
  {
    name: "Lumen",
    cat: "App desktop",
    desc: "App que automatiza as paradas chatas do dia a dia. Roda em tudo quanto é OS.",
    tag: "Tauri · React",
  },
  {
    name: "Pulse",
    cat: "Engine",
    desc: "Engine de eventos em tempo real que nasceu de um papo de madrugada na call.",
    tag: "Rust · Kafka",
  },
];

function Projects() {
  return (
    <section id="projetos" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="Os Projetos"
          title={<>Coisa que a galera<br /><span className="gold-gradient-text">tá construindo.</span></>}
          lead="Projeto que nasceu de ideia jogada no Discord, side project de fim de semana, ferramenta interna que virou open source. É isso aqui."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="glass glass-hover group relative overflow-hidden rounded-xl"
            >
              {/* visual area */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border/50 bg-gradient-to-br from-[#0a0805] via-[#080808] to-black">
                <div className="absolute inset-0 bg-grid-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-7xl font-light tracking-tight text-gold/15 transition-transform duration-700 group-hover:scale-110">
                    {p.name.split(" ").map(w => w[0]).join("")}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" />
                  {p.cat}
                </div>
                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-gold/40 transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl font-light tracking-tight">{p.name}</h3>
                <p className="mt-3 text-muted-foreground">{p.desc}</p>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-gold/60">{p.tag}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const content = [
  { tag: "Vídeo", title: "Como funciona sistema distribuído na prática", meta: "IMPERA · 42 min" },
  { tag: "Artigo", title: "Brincando de engenharia reversa em binário", meta: "Blog · 18 min" },
  { tag: "Tutorial", title: "Fazendo um runtime em Rust no braço", meta: "Série · 6 partes" },
  { tag: "Desafio", title: "Bora implementar um scheduler do zero?", meta: "Open · 312 topam" },
  { tag: "Live", title: "Resenha sobre infra que aguenta porrada", meta: "Toda quarta · 21h" },
  { tag: "Workshop", title: "Botando agente autônomo pra rodar", meta: "Mão na massa · Avançado" },
];

function Content() {
  return (
    <section id="conteudo" className="relative py-32 sm:py-40">
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-30" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="Conteúdo"
          title={<>O que rola por <span className="gold-gradient-text">aqui.</span></>}
          lead="Vídeo do IMPERA, artigo da galera, live de quarta, desafio aberto, workshop de fim de semana. Sempre tem coisa boa rolando."
        />
        <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/40 md:grid-cols-2 lg:grid-cols-3">
          {content.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group relative block bg-[#070707] p-8 transition-all hover:bg-[#0c0a05]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                  {c.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-light leading-tight tracking-tight transition-colors group-hover:text-gold-soft">
                {c.title}
              </h3>
              <div className="mt-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>{c.meta}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const phases = [
  { n: "01", t: "Aprender", d: "Estudar, ler doc, assistir live, fazer pergunta boba no Discord. Tudo conta." },
  { n: "02", t: "Construir", d: "Sair da teoria. Abrir editor, escrever código, quebrar tudo, consertar." },
  { n: "03", t: "Automatizar", d: "Achou que tá fazendo na mão duas vezes? Já era — vira script." },
  { n: "04", t: "Escalar", d: "Quando o trem começa a aguentar carga de verdade, o jogo muda." },
  { n: "05", t: "Dominar", d: "A partir daqui você ensina, contribui, abre PR e puxa a galera junto." },
];

function Philosophy() {
  return (
    <section id="filosofia" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          kicker="O Caminho"
          title={<>O jeito <span className="gold-gradient-text">Devstão</span> de evoluir.</>}
          lead="Cinco fases que todo mundo passa. Não é roadmap travado, não é curso — é só o caminho natural de quem leva a sério."
        />
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.n}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex items-start gap-8 md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* node */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl animate-pulse-gold" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-background font-mono text-xs text-gold">
                    {p.n}
                  </div>
                </div>
                {/* card */}
                <div className={`flex-1 md:max-w-[44%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass glass-hover rounded-xl p-7">
                    <h3 className="font-display text-3xl font-light tracking-tight gold-gradient-text">{p.t}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                </div>
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="join" className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-b from-[#0a0805] to-[#050505] p-12 text-center sm:p-20"
        >
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60" />
          <div className="absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative">
            <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-gold">Bora junto?</div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1] tracking-tight">
              Cola na <span className="gold-gradient-text">Devstão.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
              Sem prova, sem entrevista chata. Se você curte código e quer trocar ideia com quem
              também curte, tá no lugar certo.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 rounded-sm bg-gradient-to-b from-gold to-gold-deep px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-background glow-gold transition-transform hover:scale-[1.02]"
              >
                Entrar no Discord
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
              >
                Ver o canal do IMPERA →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { icon: Github, label: "GitHub" },
    { icon: MessageCircle, label: "Discord" },
    { icon: Youtube, label: "YouTube" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Mail, label: "Email" },
  ];
  return (
    <footer className="relative border-t border-border/60 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-7 w-7">
                <div className="absolute inset-0 rotate-45 border border-gold/60" />
                <div className="absolute inset-1.5 rotate-45 bg-gradient-to-br from-gold to-gold-deep" />
              </div>
              <span className="font-display text-2xl tracking-wide gold-gradient-text">Devstão</span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              A trupe do <span className="text-gold">IMPERA</span>. Resenha técnica, código rolando,
              projeto da galera e papo bom sobre dev.
            </p>
            <div className="mt-8 flex gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href="#"
                  aria-label={l.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-sm border border-border/60 transition-all hover:border-gold/60 hover:bg-gold/5"
                >
                  <l.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Navegar</div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><a href="#sobre" className="transition-colors hover:text-gold">Sobre</a></li>
              <li><a href="#stack" className="transition-colors hover:text-gold">Stack</a></li>
              <li><a href="#projetos" className="transition-colors hover:text-gold">Projetos</a></li>
              <li><a href="#conteudo" className="transition-colors hover:text-gold">Conteúdo</a></li>
              <li><a href="#filosofia" className="transition-colors hover:text-gold">Filosofia</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Comunidade</div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-gold">Solicitar acesso</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Código de conduta</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Manifesto</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Devstão · Fundada por IMPERA</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" />
            Sistema operacional · v1.0
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-foreground">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Content />
      <Philosophy />
      <CTA />
      <Footer />
    </main>
  );
}
