import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(15,15,26,0.9)", borderBottom:"1px solid rgba(108,99,255,.15)", backdropFilter:"blur(20px)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <button onClick={() => go("home")} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"1.25rem", fontWeight:900 }}>
          <span className="gradient-text">SC.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap:"2rem", alignItems:"center" }}>
          {["about","projects","contact"].map((s) => (
            <button key={s} onClick={() => go(s)} style={{ background:"none", border:"none", cursor:"pointer", color:"#9999CC", fontWeight:500, fontSize:"0.875rem", textTransform:"capitalize" }}>
              {s}
            </button>
          ))}
          <a href="https://www.linkedin.com/in/samuel-chukwumah-1068a1348/" target="_blank" rel="noreferrer"
            style={{ background:"linear-gradient(135deg,#6C63FF,#4ECDC4)", color:"white", padding:"0.5rem 1.25rem", borderRadius:50, fontWeight:600, fontSize:"0.875rem", textDecoration:"none" }}>
            Hire Me
          </a>
        </div>

        {/* Hamburger - mobile only */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background:"none", border:"none", cursor:"pointer", padding:"0.25rem", flexDirection:"column", gap:"5px" }}
        >
          <span style={{ display:"block", width:"22px", height:"2px", background: open ? "#6C63FF" : "#9999CC", transition:"all 0.3s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display:"block", width:"22px", height:"2px", background:"#9999CC", transition:"all 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display:"block", width:"22px", height:"2px", background: open ? "#6C63FF" : "#9999CC", transition:"all 0.3s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{ position:"fixed", inset:0, background:"rgba(15,15,26,0.97)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"2.5rem", zIndex:99 }}>
          <button onClick={() => setOpen(false)} style={{ position:"absolute", top:"1.5rem", right:"1.5rem", background:"none", border:"none", color:"#9999CC", fontSize:"2rem", cursor:"pointer", lineHeight:1 }}>✕</button>
          {["about","projects","contact"].map((s) => (
            <button key={s} onClick={() => go(s)} style={{ background:"none", border:"none", cursor:"pointer", color:"white", fontSize:"1.75rem", fontWeight:700, textTransform:"capitalize" }}>{s}</button>
          ))}
          <a href="https://www.linkedin.com/in/samuel-chukwumah-1068a1348/" target="_blank" rel="noreferrer"
            style={{ background:"linear-gradient(135deg,#6C63FF,#4ECDC4)", color:"white", padding:"0.75rem 2rem", borderRadius:50, fontWeight:600, fontSize:"1rem", textDecoration:"none" }}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
