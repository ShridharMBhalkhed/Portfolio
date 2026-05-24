import { motion } from "framer-motion";
import { Chip, IconButton, Tooltip } from "@mui/material";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    name: "Annapoorneshwari Supply",
    desc: "A modern, responsive commercial business website built for a real client. Polished UI, fast load, and deployed on Netlify.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify", "Responsive"],
    live: "#",
    code: "#",
    accent: "from-[oklch(0.72_0.22_250)] to-[oklch(0.65_0.27_305)]",
    featured: true,
  },
  {
    name: "AI-Powered Email Writer",
    desc: "Spring Boot + Gemini API service that automates professional email generation, reducing drafting time by ~50% via REST.",
    tags: ["Spring Boot", "Gemini API", "REST", "WebClient", "Java"],
    live: "#",
    code: "#",
    accent: "from-[oklch(0.75_0.2_200)] to-[oklch(0.72_0.22_250)]",
  },
  {
    name: "Employee Attrition Prediction",
    desc: "ML + Deep Learning system on Flask predicting employee attrition. Improves HR forecasting accuracy by 45%.",
    tags: ["Python", "Flask", "ML", "Deep Learning"],
    live: "#",
    code: "#",
    accent: "from-[oklch(0.7_0.25_320)] to-[oklch(0.65_0.27_305)]",
  },
  {
    name: "Expense Tracker Dashboard",
    desc: "Interactive expense management dashboard streamlining approvals & reporting — tracking efficiency up by 40%.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "LocalStorage"],
    live: "#",
    code: "#",
    accent: "from-[oklch(0.7_0.22_265)] to-[oklch(0.75_0.2_180)]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Projects" title="Things I've designed & shipped" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          A selection of work spanning full stack, AI, and client-facing products.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`tilt-card neon-border group relative overflow-hidden rounded-3xl glass p-6 ${
                p.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Project / 0{i + 1}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Tooltip title="Source code">
                      <IconButton
                        component="a"
                        href={p.code}
                        aria-label="Source"
                        className="glass"
                        sx={{ color: "var(--color-foreground)", width: 36, height: 36 }}
                      >
                        <Github className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Live demo">
                      <IconButton
                        component="a"
                        href={p.live}
                        aria-label="Live"
                        sx={{
                          color: "var(--color-primary-foreground)",
                          width: 36,
                          height: 36,
                          background: "var(--gradient-primary)",
                          "&:hover": {
                            background: "var(--gradient-primary)",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      variant="outlined"
                      sx={{
                        height: 24,
                        borderRadius: 1,
                        borderColor: "rgba(255,255,255,0.1)",
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "var(--color-muted-foreground)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                  <span className="font-mono text-muted-foreground">Status · Live</span>
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                  >
                    Live Demo <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
