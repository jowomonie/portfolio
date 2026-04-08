import React, { useEffect, useRef } from "react";

const PROJECTS = [
  {
    emoji: "🔗",
    label: "Collaborative Platform",
    title: "Connectize Frontend",
    description:
      "A collaborative web platform where I contributed as a frontend developer — building reusable UI components, integrating REST APIs, and implementing a full authentication system with protected routes.",
    tech: ["React", "Tailwind", "REST API", "Auth"],
    bullets: [
      "Modular, reusable component architecture",
      "REST API integration & state management",
      "Authentication & protected routing",
    ],
    bulletColor: "#6C63FF",
    bannerGradient: "linear-gradient(135deg,rgba(108,99,255,.35),rgba(78,205,196,.2))",
    github: "https://github.com/samuelchukwumah",
  },
  {
    emoji: "📄",
    label: "Document Generation Tool",
    title: "My LaTeX Project",
    description:
      "A browser-based tool for writing, previewing, and exporting LaTeX documents without a local setup. Features a React editor UI with live rendering and one-click PDF export.",
    tech: ["React", "JavaScript", "LaTeX", "Node.js"],
    bullets: [
      "Live LaTeX preview rendering",
      "One-click PDF export",
      "Intuitive React-based editor UI",
    ],
    bulletColor: "#FF6B9D",
    bannerGradient: "linear-gradient(135deg,rgba(255,107,157,.2),rgba(108,99,255,.25))",
    github: "https://github.com/samuelchukwumah",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What I've built</span>
          <h2 className="text-4xl font-black mt-2 text-white">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#6C63FF,#4ECDC4)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 reveal">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}

          {/* Coming soon card */}
          <div
            className="rounded-2xl flex flex-col items-center justify-center min-h-80 text-center p-10 border border-dashed border-primary/20 transition-all duration-300 hover:border-primary/40"
            style={{ background: "rgba(108,99,255,.02)" }}
          >
            <div className="text-4xl mb-4 opacity-40">🚀</div>
            <h3 className="text-muted/50 font-semibold mb-2">More Coming Soon</h3>
            <p className="text-muted/30 text-sm max-w-44 leading-relaxed">Exciting projects in progress. Stay tuned!</p>
            <a
              href="https://github.com/samuelchukwumah"
              target="_blank" rel="noreferrer"
              className="mt-6 text-primary text-sm font-semibold hover:text-secondary transition-colors"
            >
              Explore GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { emoji, label, title, description, tech, bullets, bulletColor, bannerGradient, github } = project;

  return (
    <div
      className="rounded-2xl overflow-hidden border border-primary/15 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
      style={{ background: "#1A1A2E" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 60px rgba(108,99,255,.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Banner */}
      <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ background: bannerGradient }}>
        <div className="absolute top-[-30px] right-[-30px] w-36 h-36 rounded-full opacity-20" style={{ background: bulletColor }} />
        <div className="text-center z-10">
          <div className="text-5xl">{emoji}</div>
          <div className="text-xs text-muted/70 mt-1 font-medium">{label}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium text-secondary border border-secondary/25"
                  style={{ background: "rgba(78,205,196,.1)" }}>
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <p className="text-muted/60 text-sm leading-relaxed mb-4">{description}</p>

        <ul className="flex flex-col gap-1.5 mb-5">
          {bullets.map((b) => (
            <li key={b} className="text-muted/60 text-xs flex gap-2">
              <span style={{ color: bulletColor }} className="font-bold">▸</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-primary/10">
          <a href={github} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-secondary transition-colors duration-300">
            <GitHubIcon /> View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

const GitHubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);