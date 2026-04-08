import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="text-lg font-black">
          <span className="gradient-text">Samuel Chukwumah</span>
        </div>
        <p className="text-muted/30 text-sm">© 2024 Samuel Chukwumah · React Frontend Developer</p>
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-chukwumah-1068a1348/" },
            { label: "GitHub", href: "https://github.com/samuelchukwumah" },
            { label: "↑ Top", href: "#home" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="text-muted/30 text-sm font-medium hover:text-primary transition-colors duration-300"
              onClick={
                href === "#home"
                  ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
                  : undefined
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
