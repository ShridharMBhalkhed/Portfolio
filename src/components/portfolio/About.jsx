import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Rocket, Sparkles, Layers } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "CS Graduate",
    text: "B.E. Computer Science from Akshaya Institute of Technology with CGPA 8.1.",
  },
  {
    icon: Code2,
    title: "Java Full Stack",
    text: "Hands-on with Spring Boot, Hibernate, REST APIs, MySQL — building end-to-end apps.",
  },
  {
    icon: Brain,
    title: "AI / ML",
    text: "Built predictive systems & worked on real autonomous-driving annotation pipelines.",
  },
  {
    icon: Rocket,
    title: "Client Projects",
    text: "Shipped real production websites — deployed, monitored, iterated with users.",
  },
  {
    icon: Layers,
    title: "Scalable Mindset",
    text: "Architecting clean, modular applications designed to grow with the product.",
  },
  {
    icon: Sparkles,
    title: "Futuristic UI",
    text: "Passionate about UI/UX that feels cinematic, fast, and a little magical.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About" title="A developer with a builder's heart" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          I'm a Computer Science graduate based in Bangalore. I love bridging the gap between robust
          backend systems and immersive user experiences — from Spring Boot APIs to AI models to
          glassy, animated frontends.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="tilt-card neon-border group relative overflow-hidden rounded-2xl glass p-6"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <c.icon className="h-5 w-5 text-background" />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.72 0.22 250 / 0.3), transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title }) {
  return (
    <div className="text-center">
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_6px_currentColor]" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </div>
  );
}
