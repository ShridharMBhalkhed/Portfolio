import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeader } from "./About";

const items = [
  {
    role: "Java Full Stack Development Intern",
    company: "JSpiders, Rajajinagar",
    period: "Internship",
    bullets: [
      "Built real-world full stack applications using Java, Spring Boot & Hibernate.",
      "Worked across the stack with HTML, CSS, JavaScript, and MySQL.",
      "Practiced Agile collaboration, code reviews, and clean architecture.",
    ],
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "JS"],
  },
  {
    role: "Annotator — Autonomous Driving AI",
    company: "Arctictern Solutions Pvt Ltd",
    period: "Industry Experience",
    bullets: [
      "Annotated AI/ML datasets for autonomous driving perception models.",
      "Operated specialized tools: Kognic, UAI Cane, Elwood Mine & Origami.",
      "Maintained annotation quality, validation, and review workflows.",
    ],
    tags: ["AI/ML", "Kognic", "Data Validation", "Origami"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Experience" title="A journey through code & data" />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px md:left-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.72 0.22 250 / 0.5), oklch(0.65 0.27 305 / 0.5), transparent)",
            }}
          />
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-12 grid gap-6 md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
              }`}
            >
              <div className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2">
                <span
                  className="block h-3 w-3 rounded-full animate-pulse-glow"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>

              <div
                className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
              >
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" /> {it.period}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{it.role}</h3>
                <p className="mt-1 text-sm text-gradient-neon">{it.company}</p>
              </div>

              <div className="pl-12 md:pl-0">
                <div className="tilt-card neon-border rounded-2xl glass p-6">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--glass)] px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
