import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[var(--color-border)]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-3xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.6), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-sm font-semibold">
              Designed & Developed by{" "}
              <span className="text-gradient-neon">Shridhar M Bhalkhed</span>
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} - Built with React, Tailwind CSS, and MUI.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:shridharmbhalkhed@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass transition-all hover:glow-blue"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ShridharMBhalkhed"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass transition-all hover:glow-blue"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shridharmbhalkhed"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass transition-all hover:glow-blue"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#home"
              className="magnetic-btn flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
