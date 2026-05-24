import { useState } from "react";
import { motion } from "framer-motion";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Check } from "lucide-react";
import { SectionHeader } from "./About";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "shridharmbhalkhed@gmail.com",
    href: "mailto:shridharmbhalkhed@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 73384 11504", href: "tel:+917338411504" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/shridhar", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@shridhar", href: "https://github.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something together" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Have a role, a project, or just want to say hi? My inbox is always open.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="tilt-card neon-border group flex items-center gap-4 rounded-2xl glass p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl glass-strong transition-all group-hover:glow-blue">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="truncate text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-2 px-2 pt-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> Bangalore, India
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="neon-border rounded-3xl glass-strong p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
            </div>
            <Field
              className="mt-4"
              label="Subject"
              name="subject"
              placeholder="What is this about?"
            />
            <div className="mt-4">
              <TextField
                required
                multiline
                minRows={5}
                label="Message"
                placeholder="Tell me about your project..."
                fullWidth
                variant="outlined"
                InputLabelProps={{ sx: { color: "var(--color-muted-foreground)", fontSize: 12 } }}
                sx={{
                  mt: 0.5,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    color: "var(--color-foreground)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&.Mui-focused fieldset": { borderColor: "var(--color-primary)" },
                  },
                  "& textarea::placeholder": {
                    color: "var(--color-muted-foreground)",
                    opacity: 0.75,
                  },
                }}
              />
            </div>
            <Button
              type="submit"
              className="magnetic-btn mt-6"
              fullWidth
              variant="contained"
              startIcon={sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              sx={{
                background: "var(--gradient-primary)",
                color: "var(--color-primary-foreground)",
                py: 1.35,
                "&:hover": { background: "var(--gradient-primary)" },
              }}
            >
              {sent ? "Message sent" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
      <Snackbar open={sent} autoHideDuration={3000} onClose={() => setSent(false)}>
        <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>
          Message sent successfully.
        </Alert>
      </Snackbar>
    </section>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <TextField
        {...props}
        label={label}
        fullWidth
        variant="outlined"
        size="small"
        InputLabelProps={{ sx: { color: "var(--color-muted-foreground)", fontSize: 12 } }}
        sx={{
          mt: 0.5,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            color: "var(--color-foreground)",
            backgroundColor: "rgba(255,255,255,0.05)",
            "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
            "&.Mui-focused fieldset": { borderColor: "var(--color-primary)" },
          },
          "& input::placeholder": {
            color: "var(--color-muted-foreground)",
            opacity: 0.75,
          },
        }}
      />
    </div>
  );
}
