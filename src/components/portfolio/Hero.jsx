import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button, IconButton, Tooltip } from "@mui/material";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import profile from "@/assets/profile-cutout.png";
import { Particles } from "./Effects";

const techIcons = [
  { label: "Java", top: "10%", left: "8%", delay: 0 },
  { label: "Spring", top: "20%", left: "85%", delay: 1 },
  { label: "React", top: "60%", left: "5%", delay: 2 },
  { label: "Python", top: "75%", left: "88%", delay: 1.5 },
  { label: "SQL", top: "40%", left: "92%", delay: 2.5 },
  { label: "AI/ML", top: "85%", left: "20%", delay: 0.5 },
];

export function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}SHRIDHAR_M_BHALKHED_RESUME.pdf`;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <Particles />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full animate-blob"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.22 250 / 0.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-10 top-40 h-[300px] w-[300px] rounded-full animate-blob"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.27 305 / 0.25), transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "4s",
        }}
      />

      {techIcons.map((t) => (
        <div
          key={t.label}
          className="absolute hidden md:flex glass rounded-xl px-3 py-1.5 text-xs font-mono text-muted-foreground"
          style={{
            top: t.top,
            left: t.left,
            animation: `float ${8 + t.delay}s ease-in-out ${t.delay}s infinite`,
          }}
        >
          {t.label}
        </div>
      ))}

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            Open to Java Full Stack, Frontend, and Software Developer roles
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="block text-foreground/90">Hello, I'm</span>
            <span className="text-gradient mt-2 block">Shridhar M Bhalkhed</span>
          </h1>
          <div className="mt-6 h-8 font-mono text-base text-muted-foreground md:text-lg">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                1800,
                "Spring Boot + React Developer",
                1800,
                "Frontend Developer",
                1800,
                "Building AI-powered web applications.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
            />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Java Full Stack Developer building Spring Boot, React, MySQL, and AI-powered web
            applications. I focus on clean backend logic, responsive interfaces, and practical
            products that are easy to use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              component="a"
              href="#projects"
              className="magnetic-btn"
              endIcon={<ArrowRight className="h-4 w-4" />}
              variant="contained"
              sx={{
                background: "var(--gradient-primary)",
                color: "var(--color-primary-foreground)",
                px: 2.5,
                py: 1.35,
                "&:hover": { background: "var(--gradient-primary)" },
              }}
            >
              View Projects
            </Button>
            <Button
              component="a"
              href={resumeUrl}
              download
              className="magnetic-btn glass-strong"
              startIcon={<Download className="h-4 w-4" />}
              sx={{
                color: "var(--color-foreground)",
                px: 2.5,
                py: 1.35,
              }}
            >
              Download Resume
            </Button>
            <Button
              component="a"
              href="#contact"
              className="magnetic-btn"
              startIcon={<Mail className="h-4 w-4" />}
              sx={{
                color: "var(--color-foreground)",
                px: 2.5,
                py: 1.35,
                "&:hover": { color: "var(--color-primary)" },
              }}
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/ShridharMBhalkhed"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "var(--color-muted-foreground)",
                  "&:hover": { color: "var(--color-primary)" },
                }}
              >
                <Github className="h-5 w-5" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/shridharmbhalkhed"
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "var(--color-muted-foreground)",
                  "&:hover": { color: "var(--color-primary)" },
                }}
              >
                <Linkedin className="h-5 w-5" />
              </IconButton>
            </Tooltip>
            <span className="inline-flex items-center gap-1 text-xs font-mono">
              <MapPin className="h-3 w-3" /> Bangalore, India / Remote
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-[340px] w-[320px] md:h-[430px] md:w-[400px]">
            <div
              className="absolute bottom-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 animate-spin-slow rounded-full md:h-[400px] md:w-[400px]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, oklch(0.72 0.22 250), oklch(0.65 0.27 305), transparent)",
                mask: "radial-gradient(closest-side, transparent 96%, #000 97%)",
                WebkitMask: "radial-gradient(closest-side, transparent 96%, #000 97%)",
              }}
            />
            <div className="absolute bottom-3 left-1/2 h-[296px] w-[296px] -translate-x-1/2 rounded-full bg-[#050507] shadow-[inset_0_0_60px_rgba(15,23,42,0.9),0_0_55px_rgba(80,120,255,0.2)] md:h-[376px] md:w-[376px]" />
            <div className="absolute bottom-3 left-1/2 h-[296px] w-[296px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(40,50,80,0.45),rgba(5,5,7,0.96)_62%)] md:h-[376px] md:w-[376px]" />
            <img
              src={profile}
              alt="Shridhar M Bhalkhed"
              width={800}
              height={800}
              className="absolute -top-7 left-1/2 z-10 h-[365px] w-[365px] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.55)] md:-top-12 md:h-[475px] md:w-[475px]"
            />
            <div className="pointer-events-none absolute bottom-3 left-1/2 h-[296px] w-[296px] -translate-x-1/2 rounded-full ring-1 ring-white/10 md:h-[376px] md:w-[376px]" />
            <div className="absolute -bottom-2 -right-2 z-20 glass-strong rounded-2xl px-3 py-2 text-xs font-mono">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_oklch(0.8_0.2_140)]" />
              Open to work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
