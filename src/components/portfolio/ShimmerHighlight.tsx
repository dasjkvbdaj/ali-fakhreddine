import { motion } from "framer-motion";

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
