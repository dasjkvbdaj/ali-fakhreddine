import { motion } from "framer-motion";

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
