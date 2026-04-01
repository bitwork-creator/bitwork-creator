"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const projects = [
  {
    id: "01 / 02",
    name: "POPCAR",
    category: "Detailing móvil · Valencia",
    url: "https://popcar.es",
    tech: ["WordPress", "Elementor", "Google Ads"],
    description:
      "Sitio de conversión con integración WhatsApp directa y SEO local. Diseñado para que el teléfono suene.",
  },
  {
    id: "02 / 03",
    name: "PELUQUERIA",
    category: "Peluqueria",
    url: "https://peluqueria-web-template.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Identidad visual orgánica cálida (verde oliva, crema, terracota), integración con WhatsApp e incorporación de la reserva de Fresha.",
    },
  {
    id: "03 / 03",
    name: "Tu web podría ser la próxima",
    category: "Diseño a medida. Estrategia. Resultados reales.",
    url: "#",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Diseñada a medida para atraer clientes reales, automatizar reservas y convertir visitas en conversaciones."
}];

const services = [
  {
    n: "01",
    name: "Landing pages de alto impacto",
    desc: "Estructura persuasiva, copy estratégico y velocidad optimizada. Diseñadas para una sola cosa: convertir.",
  },
  {
    n: "02",
    name: "Sitios corporativos WordPress",
    desc: "A medida. Con GeneratePress, Elementor o Bricks, child themes, mobile-first. El cliente edita solo, sin depender de nadie.",
  },
  {
    n: "03",
    name: "Desarrollo Next.js & React",
    desc: "Stack moderno: Next.js 14, TypeScript, Tailwind. Aplicaciones web listas para escalar. Desplegadas en Vercel.",
  },
  {
    n: "04",
    name: "SEO & optimización local",
    desc: "Posicionamiento en Valencia y a nivel nacional. Core Web Vitals, estructura técnica y contenido que Google entiende.",
  },
];

const stackItems = [
  "Next.js", "React", "TypeScript", "Tailwind", "WordPress", "Vercel", "PHP", "Git",
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorGrow, setCursorGrow] = useState(false);

  /* Nav scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Custom cursor */
  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "a, button, .project-card, .service-item"
    );
    const enter = () => setCursorGrow(true);
    const leave = () => setCursorGrow(false);
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
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

  return (
    <>
      {/* ── Custom Cursor ── */}
      <div
        className={`custom-cursor${cursorGrow ? " grow" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <main>
        {/* ────────────────────────────────────────
            NAV
        ──────────────────────────────────────── */}
        <nav className={scrolled ? "scrolled" : ""}>
          <a href="#" className="nav-logo">
            BRENDA<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#projects" className="nav-link">Proyectos</a>
            <a href="#services" className="nav-link">Servicios</a>
            <a href="#about" className="nav-link">Sobre mí</a>
            <a href="#contact" className="nav-cta">Contacto</a>
          </div>
        </nav>

        {/* ────────────────────────────────────────
            HERO
        ──────────────────────────────────────── */}
        <section id="hero">
          {/* Background ticker */}
          <div className="hero-ticker" aria-hidden="true">
            DISEÑO&nbsp;&nbsp;WEB&nbsp;&nbsp;BRENDA&nbsp;&nbsp;DISEÑO&nbsp;&nbsp;WEB&nbsp;&nbsp;BRENDA&nbsp;&nbsp;DISEÑO&nbsp;&nbsp;WEB&nbsp;&nbsp;BRENDA&nbsp;&nbsp;DISEÑO&nbsp;&nbsp;WEB&nbsp;&nbsp;BRENDA&nbsp;&nbsp;
          </div>

          {/* Badge */}
          <div className="hero-badge reveal">
            <span className="hero-dot" />
            Valencia, España — Disponible
          </div>

          {/* Headline */}
          <div className="hero-title">
            <div className="reveal d1">DISEÑO</div>
            <div className="reveal d2 line-red">QUE</div>
            <div className="reveal d3 line-stroke">CONVIERTE.</div>
          </div>

          {/* Bottom row */}
          <div className="hero-bottom">
            <p className="hero-sub reveal d4">
              Sitios web para negocios que quieren<br />
              <em>destacar, no desaparecer.</em>
              <br /><br />
              Landing pages · Corporativos<br />
              Next.js · WordPress · Experiencias.
            </p>
            <div className="hero-scroll reveal d4">
              <span className="scroll-label">Scroll</span>
              <div className="scroll-line" />
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────
            MANIFESTO
        ──────────────────────────────────────── */}
        <section id="manifesto">
          <div className="manifesto-label">— Manifiesto</div>
          <p className="manifesto-statement reveal">
            No construyo<br />
            <span className="accent">páginas.</span><br />
            Construyo<br />
            presencias.
          </p>
          <div className="manifesto-body">
            <p className="reveal d1">
              Cada proyecto parte de cero. Nada de plantillas, nada de copy-paste.
              El diseño tiene que servir a un objetivo real — captar un cliente,
              comunicar quién eres, diferenciarte del ruido.
            </p>
            <p className="reveal d2">
              Trabajo rápido, pienso estratégico. Código limpio, diseño con criterio
              y entregas que el cliente entiende y puede mantener.
              Sin dependencias innecesarias.
            </p>
          </div>
        </section>

        {/* ────────────────────────────────────────
            PROJECTS
        ──────────────────────────────────────── */}
        <section id="projects">
          <div className="section-label reveal">— Proyectos seleccionados</div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <a
                key={project.id}
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`project-card reveal d${i + 1}`}
              >
                <span className="project-num">{project.id}</span>
                <div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-cat">{project.category}</div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────
            SERVICES
        ──────────────────────────────────────── */}
        <section id="services">
          <div className="section-label reveal">— Lo que hago</div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.n} className={`service-item reveal d${(i % 2) + 1}`}>
                <div className="service-n">{s.n}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────
            ABOUT
        ──────────────────────────────────────── */}
        <section id="about">
          <div className="about-grid">
            <div className="about-statement reveal">
              <div>FREELANCE</div>
              <div className="stroke">DEVELOPER</div>
              <div className="red">VALENCIA.</div>
            </div>
            <div className="about-body">
              <p className="reveal d1">
                Combino diseño con criterio propio y código limpio.
                No trabajo con plantillas genéricas. Cada proyecto tiene una
                solución específica — porque cada negocio es distinto.
              </p>
              <p className="reveal d2">
                Trabajo con negocios locales y emprendedores que quieren presencia
                digital real. Respondo rápido, entrego a tiempo y dejo todo
                documentado para que el cliente sea autónomo.
              </p>
              <div className="about-stats reveal d3">
                <div>
                  <div className="stat-val">3+</div>
                  <div className="stat-label">Años activa</div>
                </div>
                <div>
                  <div className="stat-val">0</div>
                  <div className="stat-label">Plantillas usadas</div>
                </div>
                <div>
                  <div className="stat-val">∞</div>
                  <div className="stat-label">Criterio propio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────
            STACK TICKER
        ──────────────────────────────────────── */}
        <section id="stack">
          <div className="section-label reveal">— Stack</div>
          <div className="stack-ticker-wrap">
            <div className="stack-ticker">
              {/* Duplicate for seamless loop */}
              {[...stackItems, ...stackItems].map((tech, i) => (
                <span key={i} className="stack-ticker-item">
                  {tech}<span className="sep">/</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────────
            CONTACT
        ──────────────────────────────────────── */}
        <section id="contact">
          <div className="contact-heading reveal">
            <div>EMPE-</div>
            <div className="stroke">CEMOS.</div>
          </div>
          <div className="contact-links">
            {[
              { label: "brenda.creativework@gmail.com", href: "mailto:brenda.creativework@gmail.com" },
              { label: "WhatsApp · Valencia", href: "https://wa.me/34614885449" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/brenda-c-alaniz-/" },
            ].map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`contact-link reveal d${i + 1}`}
              >
                <span>{label}</span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ────────────────────────────────────────
            FOOTER
        ──────────────────────────────────────── */}
        <footer>
          <span className="footer-logo">BRENDA<span>.</span></span>
          <span className="footer-copy">© 2025 · Valencia, España</span>
          <div className="footer-links">
            <a
              href="https://github.com/bitwork-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brenda-c-alaniz-/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
