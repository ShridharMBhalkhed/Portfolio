import { motion } from "framer-motion";
import { Award, Trophy, Sparkles, Cloud, Brain } from "lucide-react";
import { SectionHeader } from "./About";

const certs = [
  {
    icon: Brain,
    title: "Machine Learning with Python",
    org: "Compsoft Technologies",
    year: "2023",
  },
  { icon: Cloud, title: "Cloud Application Developer", org: "Rooman Technologies", year: "2025" },
];

const achievements = [
  {
    icon: Trophy,
    title: "VoltIRIS Project Recognition",
    text: "Recognized by faculty for technical innovation during mini-project evaluation.",
  },
  {
    icon: Sparkles,
    title: "Technical Presentations",
    text: "Volunteered for college presentations, sharpening communication & teamwork.",
  },
  {
    icon: Award,
    title: "Real Client Delivery",
    text: "Shipped a production website live to a real business — end-to-end ownership.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Certifications & Achievements" title="Recognition along the way" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tilt-card neon-border flex items-center gap-5 rounded-2xl glass-strong p-6"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl animate-pulse-glow"
                style={{ background: "var(--gradient-primary)" }}
              >
                <c.icon className="h-6 w-6 text-background" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.org}</p>
              </div>
              <span className="font-mono text-sm text-gradient-neon">{c.year}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tilt-card neon-border rounded-2xl glass p-6"
            >
              <a.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
