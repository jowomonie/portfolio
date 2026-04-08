import React, { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll(".skill-bar-fill").forEach((b) => b.classList.add("animate"));
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = ["⚛️ React","⚡ JavaScript","🎨 Tailwind CSS","🟢 Node.js","🔗 REST APIs","🔐 Auth Flows","📱 Responsive","🐙 Git / GitHub"];
  const bars = [
    { label: "React", pct: 90, delay: "0s" },
    { label: "JavaScript", pct: 88, delay: "0.2s" },
    { label: "Tailwind CSS", pct: 85, delay: "0.4s" },
    { label: "Node.js", pct: 72, delay: "0.6s" },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6" style={{ background: "rgba(108,99,255,.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#6C63FF" }}>
            Get to know me
          </span>
          <h2 className="text-4xl font-black mt-2 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#6C63FF,#4ECDC4)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal">
          <div>
            <p className="leading-relaxed mb-5 text-base" style={{ color: "rgba(153,153,204,.8)" }}>
              I'm a passionate <strong className="text-white">React Frontend Developer</strong> with
              a focus on building clean, performant web applications that make a real impact.
            </p>
            <p className="leading-relaxed mb-5 text-base" style={{ color: "rgba(153,153,204,.8)" }}>
              I contributed to <strong style={{ color: "#6C63FF" }}>Connectize Frontend</strong>, a
              collaborative platform where I built UI components, integrated REST APIs, and implemented
              secure authentication flows.
            </p>
            <p className="leading-relaxed mb-5 text-base" style={{ color: "rgba(153,153,204,.8)" }}>
              Currently completing my <strong className="text-white">Industrial Training (IT)</strong>, gaining
              hands-on experience working on real-world frontend projects in a professional environment.
            </p>
            <p className="leading-relaxed mb-8 text-base" style={{ color: "rgba(153,153,204,.8)" }}>
              I'm passionate about clean code, great UX, and building things that matter.
            </p>
            <a
              href="https://www.linkedin.com/in/samuel-chukwumah-1068a1348/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white hover:-translate-y-1 transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#6C63FF,#4ECDC4)" }}
            >
              View LinkedIn Profile
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "rgba(153,153,204,.9)",
                    border: "1px solid rgba(108,99,255,.3)",
                    background: "rgba(108,99,255,.1)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <h3 className="text-white font-bold mb-5">Proficiency</h3>
            <div className="flex flex-col gap-4">
              {bars.map(({ label, pct, delay }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: "rgba(153,153,204,.9)" }}>{label}</span>
                    <span className="text-sm font-bold" style={{ color: "#6C63FF" }}>{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(108,99,255,.1)" }}>
                    <div
                      className="skill-bar-fill h-full rounded-full"
                      style={{ width: `${pct}%`, transitionDelay: delay }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}