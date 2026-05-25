import { motion } from "framer-motion";
import { Button, Chip, IconButton, Tooltip } from "@mui/material";
import { ExternalLink, Github, Lock } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    name: "Annapoorneshwari Supply",
    desc: "A responsive commercial website for a real business, focused on clear product presentation, fast loading, and mobile-friendly navigation.",
    bullets: [
      "Built the public-facing pages with HTML, CSS, and JavaScript.",
      "Delivered a polished business presence with responsive layouts.",
      "Handled deployment and post-launch iteration.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Netlify", "Responsive"],
    live: "https://annapoorneshwari-supply.netlify.app/",
    code: "",
    status: "Client project",
    accent: "from-[oklch(0.72_0.22_250)] to-[oklch(0.65_0.27_305)]",
    featured: true,
  },
  {
    name: "AI-Powered Email Writer",
    desc: "Spring Boot service using Gemini API to generate professional emails from short prompts through REST endpoints.",
    bullets: [
      "Integrated Gemini API through backend service logic.",
      "Designed REST endpoints for prompt-based email generation.",
      "Focused on reducing repetitive drafting time for users.",
    ],
    tags: ["Spring Boot", "Gemini API", "REST", "WebClient", "Java"],
    live: "",
    code: "",
    status: "Code link pending",
    accent: "from-[oklch(0.75_0.2_200)] to-[oklch(0.72_0.22_250)]",
  },
  {
    name: "Employee Attrition Prediction",
    desc: "Machine learning and deep learning project for predicting employee attrition and supporting HR decision-making.",
    bullets: [
      "Prepared data for model training and prediction workflows.",
      "Built a Flask interface for interacting with the model.",
      "Presented attrition risk as a practical HR forecasting tool.",
    ],
    tags: ["Python", "Flask", "ML", "Deep Learning"],
    live: "",
    code: "",
    status: "Academic project",
    accent: "from-[oklch(0.7_0.25_320)] to-[oklch(0.65_0.27_305)]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Projects" title="Selected work with practical outcomes" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Full stack, AI, and client-facing projects built around clear problems, useful workflows,
          and deployable interfaces.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`tilt-card neon-border group relative overflow-hidden rounded-3xl glass p-4 sm:p-6 ${
                p.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              <div
                className={`relative grid h-full gap-6 ${
                  p.featured && p.live ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
                }`}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Project / 0{i + 1}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold">{p.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <Tooltip title={p.code ? "Source code" : "Source link pending"}>
                        <IconButton
                          component={p.code ? "a" : "button"}
                          href={p.code || undefined}
                          target={p.code ? "_blank" : undefined}
                          rel={p.code ? "noreferrer" : undefined}
                          disabled={!p.code}
                          aria-label="Source"
                          className="glass"
                          sx={{ color: "var(--color-foreground)", width: 36, height: 36 }}
                        >
                          {p.code ? <Github className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={p.live ? "Live demo" : "Live link pending"}>
                        <IconButton
                          component={p.live ? "a" : "button"}
                          href={p.live || undefined}
                          target={p.live ? "_blank" : undefined}
                          rel={p.live ? "noreferrer" : undefined}
                          disabled={!p.live}
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

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {p.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

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
                          borderColor: "var(--color-border)",
                          bgcolor: "var(--glass)",
                          color: "var(--color-muted-foreground)",
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-4 text-xs">
                    <span className="font-mono text-muted-foreground">{p.status}</span>
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                      >
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Button
                        disabled
                        size="small"
                        startIcon={<Lock className="h-3 w-3" />}
                        sx={{
                          minWidth: 0,
                          p: 0,
                          fontSize: 12,
                          color: "var(--color-muted-foreground)",
                        }}
                      >
                        Link pending
                      </Button>
                    )}
                  </div>
                </div>

                {p.featured && p.live ? (
                  <div className="group/preview overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black/30 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-9 min-w-0 items-center gap-1.5 border-b border-[var(--color-border)] bg-white/[0.06] px-2 sm:gap-2 sm:px-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-300 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 shrink-0 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5" />
                      <span className="ml-1 min-w-0 truncate font-mono text-[9px] text-muted-foreground sm:ml-2 sm:text-[10px]">
                        annapoorneshwari-supply.netlify.app
                      </span>
                      <Tooltip title="Open live site">
                        <IconButton
                          component="a"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${p.name} live demo`}
                          sx={{
                            ml: "auto",
                            color: "var(--color-muted-foreground)",
                            width: 28,
                            height: 28,
                            "&:hover": { color: "var(--color-primary)" },
                          }}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className="project-preview-viewport relative overflow-hidden bg-muted">
                      <iframe
                        title={`${p.name} live preview`}
                        src={p.live}
                        loading="lazy"
                        className="project-preview-iframe"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100" />
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
