import React from "react";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-28 pb-20 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(108,99,255,.15) 0%, transparent 60%), #0F0F1A",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(108,99,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up z-10 text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6 border"
            style={{ color:"#4ECDC4", borderColor:"rgba(78,205,196,.3)", background:"rgba(78,205,196,.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Available for opportunities
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color:"#6C63FF" }}>
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 text-white tracking-tight">
            Samuel
            <br />
            <span className="gradient-text">Chukwumah</span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold mb-5" style={{ color:"#9999CC" }}>
            React Frontend Developer
          </p>

          <p className="text-base leading-relaxed max-w-md mb-8 mx-auto md:mx-0" style={{ color:"rgba(153,153,204,0.7)" }}>
            Building modern web applications that solve real-world problems. I craft fast,
            accessible, and beautiful user interfaces with React and modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/samuel-chukwumah-1068a1348/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              style={{ background:"linear-gradient(135deg,#6C63FF,#4ECDC4)", boxShadow:"0 4px 20px rgba(108,99,255,.35)" }}
            >
              Connect on LinkedIn
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 border-2"
              style={{ color:"#6C63FF", borderColor:"rgba(108,99,255,.5)", background:"transparent" }}
            >
              View Projects →
            </button>
          </div>

          <div className="flex gap-8 sm:gap-10 mt-10 pt-8 justify-center md:justify-start" style={{ borderTop:"1px solid rgba(108,99,255,.12)" }}>
            {[
              { num:"2+", label:"Years Exp.", color:"#6C63FF" },
              { num:"10+", label:"Projects", color:"#4ECDC4" },
              { num:"4+", label:"Tech Stack", color:"#FF6B9D" },
            ].map(({ num, label, color }) => (
              <div key={label}>
                <div className="text-2xl sm:text-3xl font-black" style={{ color }}>{num}</div>
                <div className="text-xs mt-1" style={{ color:"rgba(153,153,204,.5)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center animate-fade-in">
          <div className="relative">
            <div
              className="w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center text-6xl font-black text-white"
              style={{
                background:"linear-gradient(135deg,#6C63FF,#4ECDC4)",
                boxShadow:"0 20px 60px rgba(108,99,255,.4)",
                animation:"float 3s ease-in-out infinite, morphBlob 8s ease-in-out infinite",
              }}
            >
              SC
            </div>
            {[
              { label:"⚛️ React", color:"#6C63FF", style:{ top:"-15px", right:"-25px" } },
              { label:"🎨 Tailwind", color:"#4ECDC4", style:{ bottom:"5px", left:"-30px" } },
              { label:"⚡ JS", color:"#FF6B9D", style:{ top:"42%", right:"-40px" } },
            ].map((b) => (
              <div
                key={b.label}
                className="absolute px-3 py-2 rounded-xl text-sm font-bold"
                style={{ background:"#1A1A2E", border:`1px solid ${b.color}55`, color:b.color, boxShadow:"0 4px 20px rgba(0,0,0,.3)", ...b.style }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
