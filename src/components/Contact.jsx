import React, { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactLinks = [
    {
      href: "https://www.linkedin.com/in/samuel-chukwumah-1068a1348/",
      icon: <LinkedInIcon />,
      bg: "linear-gradient(135deg,#0077B5,#00A0DC)",
      label: "LinkedIn",
      sub: "samuel-chukwumah",
    },
    {
      href: "mailto:samuelchukwumah@email.com",
      icon: <EmailIcon />,
      bg: "linear-gradient(135deg,#6C63FF,#4ECDC4)",
      label: "Email",
      sub: "samuelchukwumah@email.com",
    },
    {
      href: "https://github.com/samuelchukwumah",
      icon: <GitHubIcon />,
      bg: "linear-gradient(135deg,#333,#555)",
      label: "GitHub",
      sub: "samuelchukwumah",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6" style={{ background: "rgba(108,99,255,.03)" }}>
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-4 reveal">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Let's work together</span>
          <h2 className="text-4xl font-black mt-2 text-white">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-14 h-1 mx-auto mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#6C63FF,#4ECDC4)" }} />
          <p className="text-muted/60 max-w-md mx-auto mt-6 leading-relaxed text-sm">
            Open to new opportunities, collaborations, or just a friendly chat. My inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 reveal">

          {/* Contact links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {contactLinks.map(({ href, icon, bg, label, sub }) => (
              <a
                key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-primary/15 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 no-underline"
                style={{ background: "#1A1A2E" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(108,99,255,.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: bg }}>
                  {icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-muted/40 text-xs mt-0.5">{sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="md:col-span-3 rounded-2xl border border-primary/15 p-7" style={{ background: "#1A1A2E" }}>
            <h3 className="text-white font-bold mb-6 text-base">Send a Message</h3>

            {submitted ? (
              <div className="text-center py-10 text-secondary font-semibold text-lg">
                ✅ Message sent! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Name" type="text" placeholder="Your name" required />
                  <FormField label="Email" type="email" placeholder="you@email.com" required />
                </div>
                <FormField label="Subject" type="text" placeholder="What's this about?" />
                <FormField label="Message" type="textarea" placeholder="Tell me about your project..." required />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 mt-1"
                  style={{ background: "linear-gradient(135deg,#6C63FF,#4ECDC4)", boxShadow: "0 4px 20px rgba(108,99,255,.3)" }}
                >
                  <SendIcon /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, type, placeholder, required }) {
  const inputStyle = {
    width: "100%",
    background: "rgba(26,26,46,.8)",
    border: "1px solid rgba(108,99,255,.2)",
    borderRadius: "12px",
    padding: "0.8rem 1rem",
    color: "#E0E0FF",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <div>
      <label className="block text-muted/70 text-xs font-medium mb-1.5">{label}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          required={required}
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => { e.target.style.borderColor = "#6C63FF"; e.target.style.boxShadow = "0 0 0 3px rgba(108,99,255,.1)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(108,99,255,.2)"; e.target.style.boxShadow = "none"; }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          style={inputStyle}
          onFocus={(e) => { e.target.style.borderColor = "#6C63FF"; e.target.style.boxShadow = "0 0 0 3px rgba(108,99,255,.1)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(108,99,255,.2)"; e.target.style.boxShadow = "none"; }}
        />
      )}
    </div>
  );
}

const LinkedInIcon = () => (
  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);