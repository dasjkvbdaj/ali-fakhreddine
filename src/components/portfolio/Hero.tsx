import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { FallingPattern } from "@/components/ui/falling-pattern";

/* ─── Typewriter Component ──────────────── */
const Typewriter = ({ phrases, className }: { phrases: string[]; className?: string }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: NodeJS.Timeout;
    const typeSpeed = 80;
    const deleteSpeed = 40;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typeSpeed);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deleteSpeed);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((phraseIdx + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx, phrases]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span className="text-primary ml-0.5" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-hero-gradient pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <FallingPattern
        color="rgba(56, 189, 248, 0.35)"
        duration={100}
        blurIntensity="0.5rem"
        density={2}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ")[1] + " " + profile.name.split(" ")[2]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 min-h-[1.5em] text-lg font-medium text-foreground/80 sm:text-2xl"
          >
            <Typewriter
              phrases={[
                profile.title,
                "Building Digital Experiences.",
                "Full Stack Specialist.",
                "Solving Complex Problems.",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background shadow-elevated transition-all hover:bg-foreground/90 hover:shadow-glow"
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#b0b0b0]"
            >
              <a href="#contact">
                <Mail className="mr-1.5 h-4 w-4" />
                Get In Touch
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background shadow-elevated transition-all hover:bg-foreground/90 hover:shadow-glow"
            >
              <a href={profile.cvUrl} download>
                <Download className="mr-1.5 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex w-full flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] pl-[0.3em] text-muted-foreground/60">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <ChevronDown className="h-5 w-5 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};