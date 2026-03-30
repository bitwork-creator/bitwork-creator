"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const projects = [
  {
    id: "01",
    name: "PopCar",
    category: "Limpieza & Detailing Móvil",
    location: "Valencia, España",
    url: "https://popcar.es",
    tech: ["WordPress", "Elementor", "Google Ads"],
    description:
      "Sitio de presentación para servicio de limpieza y detailing de vehículos a domicilio. Diseño orientado a conversión con integración directa de WhatsApp y SEO local.",
    bgFrom: "#060F1E",
    bgTo: "#0E1F3A",
    accentColor: "#3D7FBF",
    accentAlpha: "rgba(61,127,191,0.15)",
  },
  {
    id: "02",
    name: "SaVeLeC",
    category: "Electricistas Profesionales",
    location: "Valencia, España",
    url: "#",
    tech: ["WordPress", "GeneratePress", "Custom CPT", "SEO Local"],
    description:
      "Sitio corporativo para empresa de electricistas. Custom post types para servicios, navbar y footer personalizados, bar de WhatsApp mobile y posicionamiento local.",
    bgFrom: "#150F00",
    bgTo: "#261A00",
    accentColor: "#D4920A",
    accentAlpha: "rgba(212,146,10,0.15)",
  },
  {
    id: "03",
    name: "Espacio Raro\nHairlab",
    category: "Estudio de Peluquería Boutique",
    location: "El Carmen, Valencia",
    url: "#",
    tech: ["Next.js", "Tailwind CSS", "Three.js", "TypeScript"],
    description:
      "Identidad digital para estudio de peluquería de autor. Logo 3D animado en Three.js, experiencia inmersiva, reservas online y diseño alineado con la estética del barrio del Carmen.",
    bgFrom: "#120818",
    bgTo: "#200C2C",
    accentColor: "#AA55CC",
    accentAlpha: "rgba(170,85,204,0.15)",
  },
];

const services = [
  {
    n: "01",
    name: "Landing pages de alto impacto",
    desc: "Diseñadas para convertir visitas en clientes. Estructura persuasiva, copy estratégico y velocidad de carga optimizada.",
  },
  {
    n: "02",
    name: "Sitios corporativos WordPress",
    desc: "Soluciones a medida con GeneratePress o Bricks. Custom post types, child themes, mobile-first y diseño único. Sitios visuales y editables por el cliente. Velocidad de entrega y autonomía total sobre el contenido.",
  },
  {
    n: "03",
    name: "Desarrollo Next.js & React",
    desc: "Aplicaciones web modernas con el stack actual: Next.js 14, TypeScript, Tailwind CSS. Listas para Vercel.",
  },
  {
    n: "04",
    name: "SEO & optimización local",
    desc: "Posicionamiento en Valencia y a nivel nacional. Estructura técnica, Core Web Vitals y contenido optimizado.",
  },
];

const stack = [
  "Next.js 14",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "GeneratePress",
  "Bricks Builder",
  "Webflow",
  "Three.js",
  "PHP",
  "JavaScript",
  "CSS / SASS",
  "Git & GitHub",
  "Figma",
  "Vercel",
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  /* Nav scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Reveal on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Custom cursor */
  useEffect(() => {
    const move = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    window.addEventListener("mousemove", move);
    document
      .querySelectorAll("a, button, .project-card, .service-item, .stack-pill")
      .forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* ── Custom Cursor ── */}
      <div
        className={`custom-cursor ${hovering ? "hovering" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <main className="bg-bg text-text min-h-screen">
        {/* ────────────────────────────────────────
            NAV
        ──────────────────────────────────────── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-14 py-5 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-bg/90 backdrop-blur-md border-b border-border"
              : ""
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span
              className="text-xl font-medium tracking-wide text-text"
              style={{ fontFamily: "var(--font-display, 'Cormorant Garamond', Georgia, serif)" }}
            >
              Brenda
            </span>
            <span className="text-accent text-2xl leading-none" style={{ fontFamily: "var(--font-display)" }}>.</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-7">
            <a
              href="#proyectos"
              className="nav-link text-muted text-xs tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-body, Syne, system-ui, sans-serif)" }}
            >
              Proyectos
            </a>
            <a
              href="#servicios"
              className="nav-link text-muted text-xs tracking-[0.22em] uppercase hidden sm:block"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="px-5 py-2 border border-accent/50 text-accent text-xs tracking-[0.18em] uppercase hover:bg-accent hover:text-bg transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contacto
            </a>
          </div>
        </nav>

        {/* ────────────────────────────────────────
            HERO
        ──────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col justify-end pb-20 px-8 md:px-14 pt-32 overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#C8A55A 1px, transparent 1px), linear-gradient(90deg, #C8A55A 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          {/* Glow */}
          <div
            className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(200,165,90,0.04) 0%, transparent 70%)",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Badge */}
          <div className="reveal mb-8">
            <span
              className="inline-flex items-center gap-2.5 text-xs tracking-[0.28em] uppercase border border-border px-4 py-2.5"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
              />
              Valencia, España · Disponible para proyectos
            </span>
          </div>

          {/* Headline */}
          <div className="mb-10">
            <h1
              className="reveal font-light leading-[0.88]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(60px, 11.5vw, 172px)",
                color: "var(--text)",
              }}
            >
              Diseño web
            </h1>
            <h1
              className="reveal reveal-delay-1 font-light leading-[0.88] italic gradient-text"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(60px, 11.5vw, 172px)",
              }}
            >
              que convierte.
            </h1>
          </div>

          {/* Sub row */}
          <div className="reveal reveal-delay-2 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p
              className="text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              Creo sitios web para negocios locales y marcas
              <br className="hidden md:block" />
              que quieren destacar online.
              <br />
              <span className="text-text/60">Landing pages · Corporativos · Experiencias digitales.</span>
            </p>

            <a
              href="#proyectos"
              className="group inline-flex items-center gap-3 text-sm tracking-[0.22em] uppercase text-accent"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span>Ver proyectos</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">
                →
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(200,165,90,0.3), transparent)" }}
          />
        </section>

        {/* ────────────────────────────────────────
            PROJECTS
        ──────────────────────────────────────── */}
        <section id="proyectos" className="px-8 md:px-14 py-28">
          {/* Section label */}
          <div className="reveal flex items-center gap-5 mb-16">
            <span
              className="text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              — Proyectos
            </span>
            <div className="flex-1 accent-line" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <a
                key={project.id}
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`project-card reveal reveal-delay-${i + 1} block`}
                style={{ aspectRatio: "4/3" }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${project.bgFrom} 0%, ${project.bgTo} 100%)`,
                  }}
                />

                {/* Accent glow */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 30% 70%, ${project.accentAlpha} 0%, transparent 60%)`,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.opacity = "0")
                  }
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentColor}60, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top row */}
                  <div className="flex justify-between items-start">
                    <span
                      className="text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
                    >
                      {project.id}
                    </span>
                    <span
                      className="card-arrow text-sm"
                      style={{ color: project.accentColor }}
                    >
                      ↗
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    {/* Project name */}
                    <h3
                      className="font-light leading-tight mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(32px, 3.5vw, 48px)",
                        color: "var(--text)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {project.name}
                    </h3>

                    {/* Meta */}
                    <p
                      className="text-xs mb-4"
                      style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
                    >
                      {project.category} · {project.location}
                    </p>

                    {/* Description (hover reveal) */}
                    <p
                      className="card-info text-xs leading-relaxed max-w-[260px] mb-4"
                      style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-wider px-2 py-0.5 border border-white/10"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "rgba(122,117,112,0.7)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────
            SERVICES
        ──────────────────────────────────────── */}
        <section
          id="servicios"
          className="px-8 md:px-14 py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal flex items-center gap-5 mb-16">
            <span
              className="text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              — Servicios
            </span>
            <div className="flex-1 accent-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {services.map((s, i) => (
              <div
                key={s.n}
                className={`service-item reveal reveal-delay-${(i % 3) + 1} py-8 cursor-default`}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="service-num font-light leading-none mt-1 flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(40px, 4vw, 56px)",
                      color: "var(--border)",
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3
                      className="service-name text-sm font-medium mb-2"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text)" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────
            ABOUT
        ──────────────────────────────────────── */}
        <section
          className="px-8 md:px-14 py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal flex items-center gap-5 mb-16">
            <span
              className="text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              — Sobre mí
            </span>
            <div className="w-16 accent-line" />
          </div>

          <div className="max-w-4xl">
            <p
              className="reveal font-light leading-[1.3] mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.8vw, 50px)",
                color: "var(--text)",
              }}
            >
              Soy freelance web developer con base en Valencia.
              Combino diseño estratégico con código limpio para crear
              sitios que no solo se ven bien, sino que{" "}
              <span className="italic gradient-text">generan resultados</span>.
            </p>

            <p
              className="reveal reveal-delay-1 text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              Trabajo con negocios locales y emprendedores que quieren una
              presencia digital profesional. Cada proyecto es único:
              nada de templates genéricos, nada de soluciones de copia-pega.
            </p>

            <div className="reveal reveal-delay-2 flex flex-wrap gap-8 mt-12">
              {[
                ["3+", "Años de experiencia"],
                ["WordPress · Next.js · Webflow", "Stack"],
                ["Valencia & remoto", "Ubicación"],
              ].map(([val, label]) => (
                <div key={label}>
                  <p
                    className="font-light text-accent mb-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2vw, 28px)" }}
                  >
                    {val}
                  </p>
                  <p
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────
            STACK
        ──────────────────────────────────────── */}
        <section
          className="px-8 md:px-14 py-24"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal flex items-center gap-5 mb-14">
            <span
              className="text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              — Stack tecnológico
            </span>
            <div className="flex-1 accent-line" />
          </div>

          <div className="reveal flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="stack-pill text-sm tracking-wide px-4 py-2 cursor-default"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--muted)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────
            CONTACT
        ──────────────────────────────────────── */}
        <section
          id="contacto"
          className="px-8 md:px-14 py-32"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="reveal flex items-center gap-5 mb-16">
            <span
              className="text-xs tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
            >
              — Hablemos
            </span>
            <div className="flex-1 accent-line" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-14">
            {/* CTA headline */}
            <h2
              className="reveal font-light leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 9vw, 130px)",
                color: "var(--text)",
              }}
            >
              Empecemos
              <span className="italic gradient-text">.</span>
            </h2>

            {/* Links */}
            <div className="reveal reveal-delay-2 flex flex-col gap-5 pb-2">
              {[
                { label: "brenda.creativework@gmail.com", href: "brenda.creativework@gmail.com" },
                {
                  label: "WhatsApp · Valencia",
                  href: "https://wa.me/34614885449",
                },
        
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-link group flex items-center justify-between gap-6 text-sm tracking-[0.18em] uppercase pb-3"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--muted)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span>{label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────
            FOOTER
        ──────────────────────────────────────── */}
        <footer
          className="px-8 md:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span
            className="text-xl font-medium"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Brenda<span className="text-accent">.</span>
          </span>

          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
          >
            © 2025 · Diseño & Desarrollo Web · Valencia
          </span>

          <div className="flex gap-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/brenda-c-alaniz-/" },
              { label: "GitHub", href: "https://github.com/bitwork-creator"},
              //{ label: "PopCar", href: "https://popcar.es" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs tracking-wider uppercase"
                style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
