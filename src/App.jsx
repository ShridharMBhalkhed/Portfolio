import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow, LoadingScreen, ScrollProgress } from "@/components/portfolio/Effects";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#8b7cff" },
    secondary: { main: "#d86cff" },
    background: {
      default: "#07070c",
      paper: "rgba(255,255,255,0.06)",
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Space Grotesk", system-ui, sans-serif' },
    h2: { fontFamily: '"Space Grotesk", system-ui, sans-serif' },
    h3: { fontFamily: '"Space Grotesk", system-ui, sans-serif' },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 320,
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
