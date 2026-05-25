import { useEffect, useState } from "react";
import { Button, Drawer, IconButton, List, ListItemButton, Tooltip } from "@mui/material";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home", desktop: true },
  { href: "#about", label: "About", desktop: true },
  { href: "#education", label: "Education", desktop: false },
  { href: "#skills", label: "Skills", desktop: true },
  { href: "#experience", label: "Experience", desktop: false },
  { href: "#projects", label: "Projects", desktop: true },
  { href: "#certifications", label: "Awards", desktop: false },
  { href: "#resume", label: "Resume", desktop: true },
  { href: "#contact", label: "Contact", desktop: false },
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
      className={`fixed left-0 right-0 top-0 z-50 px-3 transition-all duration-500 md:px-5 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-xl px-3 py-2 transition-all duration-500 md:px-4 ${
          scrolled ? "glass-strong shadow-[0_12px_40px_rgba(0,0,0,0.18)]" : "glass"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2">
          <span
            className="relative flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ background: "var(--gradient-primary)" }}
          >
            <span className="font-display text-sm font-bold text-background">S</span>
            <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100 animate-pulse-glow" />
          </span>
          <span className="font-display text-sm font-semibold">
            Shridhar<span className="text-gradient-neon">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links
            .filter((l) => l.desktop)
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-2.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-[var(--glass)] hover:text-foreground"
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
              className="flex h-8 w-8 items-center justify-center rounded-lg glass transition-colors hover:bg-[var(--glass-strong)]"
              sx={{ color: "var(--color-foreground)" }}
            >
              {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </IconButton>
          </Tooltip>
          <Button
            component="a"
            href="#contact"
            className="magnetic-btn hidden lg:inline-flex"
            variant="contained"
            sx={{
              background: "var(--gradient-primary)",
              color: "var(--color-primary-foreground)",
              px: 1.75,
              py: 0.8,
              "&:hover": { background: "var(--gradient-primary)" },
            }}
          >
            Hire Me
          </Button>
          <IconButton
            onClick={() => setOpen((v) => !v)}
            className="mobile-menu-button flex h-8 w-8 items-center justify-center rounded-lg transition-colors lg:hidden"
            aria-label="Menu"
            sx={{
              color: "var(--color-foreground)",
              background: "transparent !important",
              "&:hover": { backgroundColor: "var(--glass)" },
            }}
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
            height: "100%",
            borderRadius: 0,
            color: "var(--color-foreground)",
            backgroundColor: "var(--color-background)",
            borderLeft: "1px solid var(--color-border)",
          },
        }}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
          <span className="font-display text-sm font-semibold">
            Shridhar<span className="text-gradient-neon">.dev</span>
          </span>
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            sx={{ color: "var(--color-foreground)", width: 32, height: 32 }}
          >
            <X className="h-4 w-4" />
          </IconButton>
        </div>
        <List sx={{ p: 1.25 }}>
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
                  backgroundColor: "var(--glass)",
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
