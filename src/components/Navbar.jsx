import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const navLinks = ["about", "projects", "contact"];

  const mobileMenu = open
    ? createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            background: "#0F0F1A",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Top bar inside overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              padding: "1.25rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(108,99,255,.15)",
            }}
          >
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: 900,
                background: "linear-gradient(135deg,#6C63FF,#4ECDC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SC.
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(108,99,255,.12)",
                border: "1px solid rgba(108,99,255,.3)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#9999CC",
                fontSize: "1.1rem",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
              width: "100%",
              padding: "0 2rem",
            }}
          >
            {navLinks.map((s, i) => (
              <button
                key={s}
                onClick={() => go(s)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: 800,
                  textTransform: "capitalize",
                  letterSpacing: "0.02em",
                  padding: "0.75rem 2rem",
                  width: "100%",
                  textAlign: "center",
                  borderRadius: 16,
                  transition: "background 0.2s, color 0.2s",
                  animation: `fadeSlideIn 0.4s ease forwards`,
                  animationDelay: `${i * 0.08}s`,
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(108,99,255,.12)";
                  e.currentTarget.style.color = "#6C63FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "white";
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60%",
              height: 1,
              background: "rgba(108,99,255,.2)",
              margin: "2rem 0",
            }}
          />

          {/* Hire Me CTA */}
          <a
            href="https://www.linkedin.com/in/samuel-chukwumah-842534387/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "linear-gradient(135deg,#6C63FF,#4ECDC4)",
              color: "white",
              padding: "0.85rem 2.5rem",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(108,99,255,.4)",
              animation: "fadeSlideIn 0.4s ease 0.28s forwards",
              opacity: 0,
            }}
          >
            Hire Me 🚀
          </a>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "2rem",
              animation: "fadeSlideIn 0.4s ease 0.36s forwards",
              opacity: 0,
            }}
          >
            <a
              href="https://github.com/jowomonie"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(153,153,204,.5)",
                fontSize: "0.8rem",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              GitHub
            </a>
            <span style={{ color: "rgba(108,99,255,.3)" }}>·</span>
            <a
              href="https://www.linkedin.com/in/samuel-chukwumah-842534387/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(153,153,204,.5)",
                fontSize: "0.8rem",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              LinkedIn
            </a>
          </div>

          <style>{`
            @keyframes fadeSlideIn {
              from { opacity: 0; transform: translateY(18px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(15,15,26,0.98)" : "rgba(15,15,26,0.85)",
          borderBottom: "1px solid rgba(108,99,255,.15)",
          backdropFilter: "blur(20px)",
          transition: "background 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", fontWeight: 900 }}
          >
            <span
              style={{
                background: "linear-gradient(135deg,#6C63FF,#4ECDC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SC.
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
            {navLinks.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9999CC",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  textTransform: "capitalize",
                }}
              >
                {s}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/samuel-chukwumah-842534387/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "linear-gradient(135deg,#6C63FF,#4ECDC4)",
                color: "white",
                padding: "0.5rem 1.25rem",
                borderRadius: 50,
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="flex md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{
              background: "rgba(108,99,255,.1)",
              border: "1px solid rgba(108,99,255,.25)",
              borderRadius: 10,
              cursor: "pointer",
              padding: "0.45rem 0.55rem",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span style={{ display: "block", width: "20px", height: "2px", background: "#9999CC", borderRadius: 2 }} />
            <span style={{ display: "block", width: "14px", height: "2px", background: "#6C63FF", borderRadius: 2 }} />
            <span style={{ display: "block", width: "20px", height: "2px", background: "#9999CC", borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
}