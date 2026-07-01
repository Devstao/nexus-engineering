import {
  Activity,
  ArrowUpRight,
  Bitcoin,
  Boxes,
  Brain,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Github,
  HardDrive,
  Layers,
  Lock,
  MessageCircle,
  Network,
  Radio,
  Router,
  Server,
  ShieldCheck,
  Terminal,
  TerminalSquare,
  Workflow,
  Youtube,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* -------------------- NAV -------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#07090d]/60 border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-14">
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 rounded-[5px] bg-gradient-to-br from-electric to-violet glow-blue" />
            <div className="absolute inset-[3px] rounded-[3px] bg-[#0a0d12] flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-electric">D</span>
            </div>
          </div>
          <span className="font-mono text-sm tracking-tight text-foreground">
            devstão
            <span className="text-electric">_</span>
          </span>
          <span className="ml-3 hidden sm:inline font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            by impera
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#categorias" className="hover:text-electric transition-colors">categorias</a>
          <a href="#stack" className="hover:text-electric transition-colors">stack</a>
          <a href="#projetos" className="hover:text-electric transition-colors">projetos</a>
          <a href="#conteudo" className="hover:text-electric transition-colors">conteúdo</a>
        </nav>
        <a
          href="#join"
          className="group inline-flex items-center gap-2 rounded-md border border-electric/30 bg-electric/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-electric hover:bg-electric/15 hover:border-electric/60 transition-all"
        >
          entrar
          <span className="text-[9px] opacity-60 caret">_</span>
        </a>
      </div>
    </header>
  );
}

/* -------------------- HERO (TERMINAL) -------------------- */
function Hero() {
  const lines = [
    { tag: "INFO", color: "text-muted-foreground", text: "booting devstão_env v4.2.1 // impera_core" },
    { tag: "OK", color: "text-emerald", text: "kernel: linux-6.10  ·  shell: zsh  ·  multiplexer: tmux" },
    { tag: "OK", color: "text-emerald", text: "loaded modules: programação · infra · ia · cybersec · bitcoin" },
    { tag: "INFO", color: "text-muted-foreground", text: "peers online: 1.248  ·  channels: 42  ·  latency: 12ms" },
    { tag: "READY", color: "text-electric", text: "welcome to the production environment." },
  ];

  const [typed, setTyped] = useState("");
  const target = "join community --force";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-app">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-0 left-0 right-0 h-px hr-electric opacity-40" />

      <div className="relative w-full mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-5 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-graphite/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald pulse-dot" />
            comunidade técnica · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="font-display font-bold tracking-tight text-[clamp(2.8rem,6vw,5rem)] leading-[0.98]"
          >
            <span className="text-grad-mono">A comunidade dos </span>
            <span className="text-grad-electric">devs e sysadmins</span>
            <span className="text-grad-mono"> que vivem no terminal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Linux, IA, infraestrutura, embarcados, cibersegurança, Bitcoin e open source —
            discutidos com a profundidade técnica que o assunto merece. Sem hype, sem gurusagem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#join"
              className="group relative inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-electric to-electric-dim px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#06080c] glow-blue transition-transform hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-md overflow-hidden">
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="relative">entrar na devstão</span>
              <ArrowUpRight className="relative h-4 w-4" />
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center gap-2 rounded-md border border-border/70 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/85 hover:border-electric/50 hover:text-electric transition-all"
            >
              ver categorias
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-6 pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80"
          >
            <span><span className="text-foreground">1.248</span> peers</span>
            <span className="h-1 w-1 rounded-full bg-electric/60" />
            <span><span className="text-foreground">42</span> canais</span>
            <span className="h-1 w-1 rounded-full bg-electric/60" />
            <span><span className="text-emerald">99.99%</span> uptime</span>
          </motion.div>
        </div>

        {/* RIGHT — terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-tr from-electric/20 via-violet/10 to-transparent blur-3xl rounded-3xl opacity-60 pointer-events-none" />
          <div className="relative panel scanlines overflow-hidden">
            {/* title bar */}
            <div className="flex items-center justify-between px-4 h-10 border-b border-border/50 bg-[#0a0d12]/80">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-graphite-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-graphite-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-graphite-3" />
              </div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-tight">
                impera@devstão: ~/community
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald pulse-dot" />
                live
              </div>
            </div>

            {/* body */}
            <div className="p-6 sm:p-8 font-mono text-sm">
              <div className="space-y-1.5">
                {lines.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                    className="flex gap-3"
                  >
                    <span className={`text-[10px] uppercase tracking-wider w-14 shrink-0 ${l.color}`}>
                      [{l.tag}]
                    </span>
                    <span className="text-foreground/80 text-[12.5px]">{l.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 border-t border-border/40 pt-5">
                <div className="flex items-center gap-2">
                  <span className="text-electric">➜</span>
                  <span className="text-violet">~/devstão</span>
                  <span className="text-muted-foreground">on</span>
                  <span className="text-emerald">⎇ main</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[15px]">
                  <span className="text-electric">$</span>
                  <span className="text-foreground">{typed}</span>
                  <span className="inline-block w-2 h-4 bg-electric caret" />
                </div>
              </div>

              {/* mini sparkline */}
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { label: "throughput", value: "1.4k/s", color: "text-electric" },
                  { label: "build_status", value: "passing", color: "text-emerald" },
                  { label: "region", value: "sa-east-1", color: "text-violet" },
                ].map((s) => (
                  <div key={s.label} className="border border-border/40 rounded-md p-3 bg-[#0a0d12]/60">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                    <div className={`mt-1 text-sm font-bold ${s.color}`}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* status bar */}
            <div className="flex items-center justify-between px-4 h-7 bg-electric/15 border-t border-electric/20 font-mono text-[10px] text-electric/90">
              <div className="flex items-center gap-4">
                <span>⎇ main*</span>
                <span>↓ 0  ↑ 0</span>
              </div>
              <div className="flex items-center gap-4">
                <span>UTF-8 · LF</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold glow-gold" />
                  premium node
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- LOGO STRIP -------------------- */
function LogoStrip() {
  const stack = ["linux", "rust", "go", "python", "typescript", "postgres", "docker", "kubernetes", "bitcoin", "nginx", "tailscale", "grafana"];
  return (
    <section className="relative border-y border-border/40 bg-[#08080c]/60 py-5">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-y-3 gap-x-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground shrink-0">
          ecossistema {">"}
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[11px] uppercase tracking-[0.25em]">
          {stack.map((s, i) => (
            <span key={s} className="text-muted-foreground hover:text-electric transition-colors">
              {s}
              {i < stack.length - 1 && <span className="ml-7 text-border">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECTION HEADER -------------------- */
function SectionHeader({ kicker, title, lead }: { kicker: string; title: React.ReactNode; lead?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-14 max-w-3xl"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-graphite/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-electric">
        <span className="h-1 w-1 rounded-full bg-electric" />
        {kicker}
      </div>
      <h2 className="font-display font-bold text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-tight">
        {title}
      </h2>
      {lead && <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">{lead}</p>}
    </motion.div>
  );
}

/* -------------------- CATEGORIAS -------------------- */
const categories = [
  { icon: Terminal, name: "Linux & Shell", desc: "Distros, init systems, tooling de terminal, customização e workflow.", count: "08 canais" },
  { icon: Cpu, name: "Programação", desc: "Rust, Go, TypeScript, Python, C. Discussão de linguagens e arquitetura.", count: "12 canais" },
  { icon: Brain, name: "Inteligência Artificial", desc: "LLMs, agentes, fine-tuning, RAG, infra de inferência e pesquisa aplicada.", count: "06 canais" },
  { icon: HardDrive, name: "Embarcados & Low-level", desc: "Microcontroladores, kernel, firmware, ASM e sistemas embarcados.", count: "04 canais" },
  { icon: ShieldCheck, name: "Cibersegurança", desc: "Pentest, hardening, blue team, engenharia reversa e CTFs.", count: "05 canais" },
  { icon: Bitcoin, name: "Bitcoin & cripto", desc: "Nodes, Lightning, custódia técnica, mining, e protocolo.", count: "03 canais" },
  { icon: Cloud, name: "Infraestrutura", desc: "Cloud, bare metal, IaC, Kubernetes, observabilidade e SRE.", count: "07 canais" },
  { icon: GitBranch, name: "Open Source", desc: "Contribuição, manutenção, governança e projetos da comunidade.", count: "Sempre", },
  { icon: Network, name: "Networking", desc: "Mesh, VPN, BGP, self-hosting e infraestrutura de rede doméstica.", count: "Comunidade" },
  { icon: Server, name: "Sysadmin & Homelab", desc: "Proxmox, TrueNAS, OPNsense, monitoramento e racks caseiros.", count: "Ativo 24/7" },
  { icon: Lock, name: "Engenharia reversa", desc: "Análise de binários, debugging avançado, exploit dev e cracking.", count: "Avançado" },
  { icon: Workflow, name: "Automação", desc: "CI/CD, scripts, ferramentas self-hosted e tudo que cuspe trabalho repetitivo.", count: "Permanente" },
];

function Categories() {
  return (
    <section id="categorias" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="// categorias"
          title={<>O que <span className="text-grad-electric">circula</span> dentro da comunidade.</>}
          lead="Mais de 40 canais organizados por domínio técnico. Programação, infra, IA, segurança, embarcados, Bitcoin — cada área com discussão densa e gente que entrega."
        />
        <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              custom={i % 4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative bg-[#0a0d12] p-6 transition-all hover:bg-[#0d1219]"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-electric/0 to-transparent group-hover:via-electric/60 transition-colors" />
              <div className="flex items-start justify-between">
                <div className="relative">
                  <div className="absolute inset-0 -z-10 blur-xl bg-electric/0 group-hover:bg-electric/30 transition-all" />
                  <c.icon className="h-5 w-5 text-electric/80 group-hover:text-electric transition-colors" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-base tracking-tight text-foreground">
                {c.name}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                <span>{c.count}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-electric" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- STACK -------------------- */
const stackGroups = [
  {
    label: "linguagens",
    items: ["Rust", "Go", "TypeScript", "Python", "C/C++", "Zig"],
  },
  {
    label: "infraestrutura",
    items: ["Linux", "Docker", "Kubernetes", "Terraform", "Nginx", "Proxmox"],
  },
  {
    label: "dados & rede",
    items: ["PostgreSQL", "Redis", "Kafka", "Tailscale", "BGP", "WireGuard"],
  },
  {
    label: "ia & segurança",
    items: ["LLMs", "PyTorch", "OpenAI", "Ghidra", "Burp Suite", "OpenSSL"],
  },
];

function Stack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hr-faint" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="// stack"
          title={<>
            O arsenal que a <span className="text-grad-electric">galera usa</span>.
          </>}
          lead="Linguagens, ferramentas e plataformas que aparecem nas discussões, nos projetos e nos setups da comunidade."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((g, i) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="panel p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <TerminalSquare className="h-4 w-4 text-electric" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">{g.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border/50 bg-[#0a0d12]/80 px-2.5 py-1 font-mono text-[11px] text-muted-foreground hover:text-foreground hover:border-electric/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJETOS -------------------- */
const projects = [
  {
    name: "devstao-cli",
    desc: "CLI da comunidade para gerenciar sessões, desafios e integrações com o Discord.",
    lang: "Go",
    tag: "tooling",
    stars: "128",
  },
  {
    name: "labctl",
    desc: "Orquestrador de homelab com suporte a Proxmox, TrueNAS e DNS interno.",
    lang: "Rust",
    tag: "infra",
    stars: "84",
  },
  {
    name: "btcpanel",
    desc: "Dashboard auto-hospedado para nodes Bitcoin e Lightning com alertas em tempo real.",
    lang: "TypeScript",
    tag: "bitcoin",
    stars: "210",
  },
  {
    name: "kernel-notes",
    desc: "Repositório colaborativo de estudos, anotações e labs de low-level.",
    lang: "C",
    tag: "study",
    stars: "56",
  },
];

const langColor: Record<string, string> = {
  Go: "bg-cyan-400",
  Rust: "bg-orange-400",
  TypeScript: "bg-blue-400",
  C: "bg-violet-400",
};

function Projects() {
  return (
    <section id="projetos" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hr-faint" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="// projetos"
          title={<>
            Coisas que a comunidade <span className="text-grad-electric">constrói</span>.
          </>}
          lead="Ferramentas que nasceram de discussões internas, ganharam tração e hoje rodam em produção fora dela. Tudo público, tudo auditável."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="panel panel-hover group relative overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 h-9 border-b border-border/50 bg-[#0a0d12]/80">
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <Github className="h-3.5 w-3.5 text-electric/70" strokeWidth={1.5} />
                  <span>devstao/<span className="text-foreground">{p.name}</span></span>
                </div>
                <div className="font-mono text-[10px] text-muted-foreground">★ {p.stars}</div>
              </div>
              <div className="p-7">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display font-bold text-3xl tracking-tight text-foreground">{p.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">v2.4.0</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className={`h-2 w-2 rounded-full ${langColor[p.lang]}`} />
                    <span className="text-muted-foreground">{p.tag}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-electric/60 group-hover:text-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
              <div className="border-t border-border/40 px-5 py-2.5 bg-[#0a0d12]/60 font-mono text-[10px] text-muted-foreground flex items-center justify-between">
                <span>last commit: 2h ago</span>
                <span className="text-emerald">● healthy</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTENT FEED -------------------- */
const content = [
  { tag: "vídeo", title: "Como funciona um sistema distribuído na prática", meta: "IMPERA · 42min" },
  { tag: "artigo", title: "Engenharia reversa em binários: estudo prático", meta: "blog · 18min" },
  { tag: "tutorial", title: "Construindo um runtime em Rust do zero", meta: "série · 6 partes" },
  { tag: "live", title: "Discussão aberta: infraestrutura sob pressão", meta: "quarta · 21h" },
  { tag: "desafio", title: "Implementando um scheduler do zero", meta: "aberto · 312 inscritos" },
  { tag: "workshop", title: "Subindo um node Bitcoin com Lightning", meta: "hands-on · avançado" },
];

function Content() {
  return (
    <section id="conteudo" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hr-faint" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="// conteúdo"
          title={<>Material técnico <span className="text-grad-electric">denso</span>, semana após semana.</>}
          lead="Vídeos do IMPERA, artigos dos membros, lives, desafios e workshops avançados. Nada de superficial."
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
              className="group relative block bg-[#0a0d12] p-7 transition-all hover:bg-[#0d1219]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md border border-electric/30 bg-electric/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  {c.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/70 group-hover:text-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="mt-7 font-display font-semibold text-lg leading-tight tracking-tight transition-colors group-hover:text-foreground">
                {c.title}
              </h3>
              <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>{c.meta}</span>
                <span>{String(i + 1).padStart(2, "0")}/{String(content.length).padStart(2, "0")}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */
function CTA() {
  return (
    <section id="join" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-electric/30 bg-gradient-to-b from-[#0c1219] to-[#07090d] p-10 sm:p-16"
        >
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-60" />
          <div className="absolute -top-24 left-1/2 h-56 w-[700px] -translate-x-1/2 rounded-full bg-electric/15 blur-3xl" />
          <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-electric/70 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-electric pulse-dot" /> conexão pronta
          </div>
          <div className="relative max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-electric mb-5">// join</div>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.04] tracking-tight">
              <span className="text-grad-mono">Conecte seu node à </span>
              <span className="text-grad-electric">Devstão.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Sem processo seletivo, sem mensalidade vendida como exclusividade.
              Se você constrói, estuda e quer trocar ideia com gente do mesmo nível, o lugar é aqui.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://tr.ee/9Pooktcf5n"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-electric to-electric-dim px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[#06080c] glow-blue hover:scale-[1.02] transition-transform"
              >
                entrar para a comunidade
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@RenatoIMPERA"
                className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-electric transition-colors inline-flex items-center gap-2"
              >
                canal do IMPERA <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-border/40 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span><span className="text-foreground">1.248</span> peers</span>
              <span><span className="text-foreground">42</span> canais ativos</span>
              <span><span className="text-emerald">99.99%</span> uptime</span>
              <span><span className="text-foreground">$0</span> · open community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const links = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: MessageCircle, label: "Discord", href: "https://tr.ee/9Pooktcf5n" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@RenatoIMPERA" },
    { icon: Radio, label: "RSS", href: "#" },
  ];
  return (
    <footer className="relative border-t border-border/60 pt-16 pb-8 bg-[#07090d]">
      <div className="absolute inset-x-0 top-0 h-px hr-electric opacity-50" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-7 w-7">
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-electric to-violet glow-blue" />
                <div className="absolute inset-[3px] rounded-[4px] bg-[#0a0d12] flex items-center justify-center">
                  <span className="font-mono text-[11px] font-bold text-electric">D</span>
                </div>
              </div>
              <span className="font-mono text-base tracking-tight text-foreground">
                devstão<span className="text-electric">_</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Comunidade técnica criada por <span className="text-electric">IMPERA</span>.
              Linux, programação, IA, infra, embarcados, cibersegurança, Bitcoin e open source.
            </p>
            <div className="mt-7 flex gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  aria-label={l.label}
                  className="group flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-graphite/40 hover:border-electric/50 hover:bg-electric/10 transition-all"
                >
                  <l.icon className="h-4 w-4 text-muted-foreground group-hover:text-electric transition-colors" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">navegar</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground font-mono">
              <li><a href="#categorias" className="hover:text-electric transition-colors">categorias</a></li>
              <li><a href="#stack" className="hover:text-electric transition-colors">stack</a></li>
              <li><a href="#projetos" className="hover:text-electric transition-colors">projetos</a></li>
              <li><a href="#conteudo" className="hover:text-electric transition-colors">conteúdo</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">comunidade</div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground font-mono">
              <li><a href="https://tr.ee/9Pooktcf5n" className="hover:text-electric transition-colors">entrar para a comunidade</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">como funciona</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">manifesto</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">contato</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">status</div>
            <div className="mt-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>discord</span>
                <span className="text-emerald flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald pulse-dot" /> operational
                </span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>mesh</span>
                <span className="text-emerald flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald pulse-dot" /> 4/4
                </span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>build</span>
                <span className="text-emerald">passing</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>region</span>
                <span className="text-foreground">sa-east-1</span>
              </div>
            </div>
          </div>
        </div>

        {/* status bar */}
        <div className="mt-14 rounded-md border border-border/50 bg-[#0a0d12]/80 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-electric">⎇ main*</span>
            <span>↓ 0 ↑ 0</span>
            <span>Ln 1, Col 1</span>
            <span>UTF-8 · LF</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>© {new Date().getFullYear()} devstão</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald pulse-dot" />
              <span className="text-emerald">sistema online</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- PAGE -------------------- */
export default function Index() {
  return (
    <main className="relative min-h-screen bg-[#07090d] text-foreground">
      <Nav />
      <Hero />
      <LogoStrip />
      <Categories />
      <Stack />
      <Projects />
      <Content />
      <CTA />
      <CTA />
      <Footer />
    </main>
  );
}
