import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { profile } from "@/components/portfolio/data/portfolio";
import { Typewriter } from "../animations/Typewriter";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pt-20 pb-15 sm:pt-10 sm:pb-10"
    >
      <FallingPattern
        color="rgba(38, 60, 55, 0.2)"
        duration={100}
        blurIntensity="0.5rem"
        density={2}
      />

      <div className="portfolio-section-container flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm"
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
            className="mt-8 text-5xl font-bold leading-[1.05] tracking-tighter sm:text-7xl lg:text-9xl"
          >
            <span className="text-gradient">Hi, I'm Ali</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg font-medium text-foreground/70 sm:text-2xl min-h-[1.5em]"
          >
            {isMobile ? (
              profile.title
            ) : (
              <Typewriter
                phrases={[
                  profile.title,
                  "Building Digital Experiences.",
                  "Full Stack Specialist.",
                  "Solving Complex Problems.",
                ]}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="interactive-button bg-primary text-primary-foreground shadow-elevated"
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
              className="interactive-button border-border bg-transparent"
            >
              <a href="#contact">
                <Mail className="mr-1.5 h-4 w-4" />
                Get In Touch
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="interactive-button bg-secondary text-foreground hover:bg-secondary/80"
            >
              <a href={profile.cvUrl} download>
                <Download className="mr-1.5 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>


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