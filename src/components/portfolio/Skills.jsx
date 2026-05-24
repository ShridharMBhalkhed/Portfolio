import { motion } from "framer-motion";
import { Chip, LinearProgress } from "@mui/material";
import { SectionHeader } from "./About";

const skills = [
  { name: "Java", level: 92, group: "Backend" },
  { name: "Spring Boot", level: 88, group: "Backend" },
  { name: "Hibernate", level: 80, group: "Backend" },
  { name: "REST APIs", level: 86, group: "Backend" },
  { name: "SQL / MySQL", level: 85, group: "Database" },
  { name: "React", level: 82, group: "Frontend" },
  { name: "JavaScript", level: 86, group: "Frontend" },
  { name: "HTML / CSS", level: 92, group: "Frontend" },
  { name: "Python", level: 80, group: "AI / ML" },
  { name: "Machine Learning", level: 75, group: "AI / ML" },
  { name: "Git / GitHub", level: 88, group: "Tools" },
  { name: "WordPress", level: 70, group: "Tools" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Skills" title="The toolkit I build with" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          A balanced stack across backend, frontend, data, and the glue that holds it all together.
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="neon-border group rounded-2xl glass p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <Chip
                    label={s.group}
                    size="small"
                    className="font-mono"
                    sx={{
                      height: 20,
                      borderRadius: 1,
                      bgcolor: "rgba(255,255,255,0.06)",
                      color: "var(--color-muted-foreground)",
                      fontSize: 10,
                      letterSpacing: "0.08em",
                    }}
                  />
                  <h3 className="mt-1 font-display text-base font-semibold">{s.name}</h3>
                </div>
                <span className="font-mono text-sm text-gradient-neon">{s.level}%</span>
              </div>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.04 }}
              >
                <LinearProgress
                  variant="determinate"
                  value={s.level}
                  sx={{
                    height: 6,
                    borderRadius: 999,
                    bgcolor: "rgba(255,255,255,0.06)",
                    ".MuiLinearProgress-bar": {
                      borderRadius: 999,
                      background: "var(--gradient-primary)",
                      boxShadow: "0 0 12px oklch(0.7 0.22 265 / 0.6)",
                    },
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
