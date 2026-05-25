import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Calendar, Award } from "lucide-react";
import { SectionHeader } from "./About";

const education = [
  {
    icon: GraduationCap,
    degree: "B.E. in Computer Science and Engineering",
    college: "Akshaya Institute of Technology",
    cgpa: "8.1",
    year: "2025",
  },
  {
    icon: BookOpen,
    degree: "PUC",
    college: "Saint Francis De-Sales PU College",
    cgpa: "8.5",
    year: "2021",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Education" title="Academic foundation" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          My academic path shaped a strong base in computer science, problem solving, and practical
          engineering fundamentals.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="tilt-card neon-border relative overflow-hidden rounded-2xl glass-strong p-6"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <item.icon className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.college}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{item.degree}</h3>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--glass)] p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Award className="h-3.5 w-3.5 text-primary" />
                      CGPA
                    </div>
                    <p className="mt-2 font-display text-2xl font-semibold text-gradient-neon">
                      {item.cgpa}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--glass)] p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      Year
                    </div>
                    <p className="mt-2 font-display text-2xl font-semibold text-gradient-neon">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
