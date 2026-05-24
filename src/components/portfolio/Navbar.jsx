import { useEffect, useState } from "react";
import { Button, Drawer, IconButton, List, ListItemButton, Tooltip } from "@mui/material";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong" : ""
        }`}
        style={{ marginInline: "1rem" }}
      >
        <a href="#home" className="group flex items-center gap-2">
          <span
            className="relative flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ background: "var(--gradient-primary)" }}
          >
            <span className="font-display text-sm font-bold text-background">S</span>
            <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100 animate-pulse-glow" />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">
            Shridhar<span className="text-gradient-neon">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Tooltip title="Toggle theme">
            <IconButton
              onClick={() => setLight((v) => !v)}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-lg glass transition-colors hover:bg-white/10"
              sx={{ color: "var(--color-foreground)" }}
            >
              {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </IconButton>
          </Tooltip>
          <Button
            component="a"
            href="#contact"
            className="magnetic-btn hidden md:inline-flex"
            variant="contained"
            sx={{
              background: "var(--gradient-primary)",
              color: "var(--color-primary-foreground)",
              px: 2,
              py: 1,
              "&:hover": { background: "var(--gradient-primary)" },
            }}
          >
            Hire Me
          </Button>
          <IconButton
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg glass md:hidden"
            aria-label="Menu"
            sx={{ color: "var(--color-foreground)" }}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </IconButton>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "glass-strong",
          sx: {
            width: 260,
            mt: 1,
            mr: 1,
            borderRadius: 3,
            color: "var(--color-foreground)",
            backgroundColor: "transparent",
          },
        }}
      >
        <List sx={{ p: 1.5 }}>
          {links.map((l) => (
            <ListItemButton
              key={l.href}
              component="a"
              href={l.href}
              onClick={() => setOpen(false)}
              sx={{
                borderRadius: 2,
                color: "var(--color-muted-foreground)",
                fontSize: 14,
                "&:hover": {
                  color: "var(--color-foreground)",
                  backgroundColor: "rgba(255,255,255,0.06)",
                },
              }}
            >
              {l.label}
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </header>
  );
}
