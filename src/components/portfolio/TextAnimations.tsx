import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ── 1. Typewriter ─────────────────────────────────────────────────────────────
// Types phrases one-by-one, holds, erases, cycles. Cursor blinks in primary color.
interface TypewriterProps {
  phrases: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

export const Typewriter = ({
  phrases,
  className,
  typeSpeed = 65,
  deleteSpeed = 35,
  holdTime = 2200,
}: TypewriterProps) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typeSpeed
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), holdTime);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        deleteSpeed
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((phraseIdx + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx, phrases, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

// ── 2. RotatingWords ──────────────────────────────────────────────────────────
// Swaps words with vertical fade-slide every 3 s.
interface RotatingWordsProps {
  words: string[];
  className?: string;
}

export const RotatingWords = ({ words, className }: RotatingWordsProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45 }}
        style={{ display: "inline-block" }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};

// ── 3. WaveText ───────────────────────────────────────────────────────────────
// Each character bobs up and down in a staggered wave, forever.
interface WaveTextProps {
  text: string;
  className?: string;
}

export const WaveText = ({ text, className }: WaveTextProps) => (
  <span className={`inline-flex flex-wrap items-end ${className ?? ""}`}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -9, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          delay: i * 0.07,
          ease: "easeInOut",
        }}
        style={{ display: "inline-block", willChange: "transform" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

// ── 4. ShimmerText ────────────────────────────────────────────────────────────
// A glint of primary light sweeps across the text on loop.
interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ShimmerText = ({ children, className }: ShimmerTextProps) => (
  <span className={`relative inline-block ${className ?? ""}`}>
    {/* base readable text */}
    <span className="text-foreground">{children}</span>
    {/* shimmer overlay — clips to text via mix-blend-mode trick */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded"
        style={{
          background:
            "linear-gradient(105deg, transparent 35%, hsl(239 84% 72% / 0.55) 50%, hsl(188 94% 60% / 0.45) 55%, transparent 65%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          display: "block",
          whiteSpace: "nowrap",
          willChange: "background-position",
        }}
        animate={{ backgroundPosition: ["-100% 0", "300% 0"] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
      >
      {children}
    </motion.span>
  </span>
);

// ── 6. ShimmerHighlight ───────────────────────────────────────────────────────
// A light "streak" appears to reflect off the golden text.
interface ShimmerHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export const ShimmerHighlight = ({ children, className }: ShimmerHighlightProps) => (
  <span className={`relative inline-block overflow-hidden ${className ?? ""}`}>
    <span className="text-[#B8860B]/40">{children}</span>

    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      animate={{ x: ["-100%", "200%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{ WebkitBackgroundClip: "text", color: "transparent", willChange: "transform" }}
    >
      {children}
    </motion.span>
  </span>
);



// ── 5. PulseGlowText (Golden Breath) ──────────────────────────────────────────
// A purely visual effect where the textShadow and color property are cycled in a loop.
// It simulates a "breathing" or "glowing" light source within the text itself.
interface PulseGlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export const PulseGlowText = ({ children, className }: PulseGlowTextProps) => (
  <motion.span
    className={className}
    style={{ willChange: "color, text-shadow" }}
    animate={{
      color: ["#B8860B", "#DAA520", "#B8860B"],
      textShadow: [
        "0 0 0px rgba(184,134,11,0)",
        "0 0 12px rgba(184,134,11,0.6)",
        "0 0 0px rgba(184,134,11,0)",
      ],
    }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.span>
);

