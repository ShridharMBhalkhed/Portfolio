import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Download, ExternalLink, FileText, MapPin } from "lucide-react";
import { SectionHeader } from "./About";

const resumeHighlights = [
  "Java Full Stack Developer roles",
  "Frontend Developer roles",
  "Software Developer roles",
  "Bangalore or remote opportunities",
];

const resumeUrl = `${import.meta.env.BASE_URL}SHRIDHAR_M_BHALKHED_RESUME.pdf`;

export function Resume() {
  return (
    <section id="resume" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Resume" title="Ready for the next opportunity" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="neon-border mt-16 overflow-hidden rounded-3xl glass-strong p-6 md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <FileText className="h-5 w-5 text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold">
                Shridhar M Bhalkhed - Developer Resume
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                A focused snapshot of my education, Java full stack skills, AI/ML exposure,
                projects, internships, and contact details.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {resumeHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--glass)] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Open to opportunities in Bangalore and remote-friendly teams.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                component="a"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                startIcon={<ExternalLink className="h-4 w-4" />}
                sx={{
                  background: "var(--gradient-primary)",
                  color: "var(--color-primary-foreground)",
                  px: 2.5,
                  py: 1.2,
                  "&:hover": { background: "var(--gradient-primary)" },
                }}
              >
                View Resume
              </Button>
              <Button
                component="a"
                href={resumeUrl}
                download
                className="glass"
                startIcon={<Download className="h-4 w-4" />}
                sx={{
                  color: "var(--color-foreground)",
                  px: 2.5,
                  py: 1.2,
                }}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
