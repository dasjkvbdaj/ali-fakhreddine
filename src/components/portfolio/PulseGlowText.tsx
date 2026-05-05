import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PulseGlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export const PulseGlowText = ({ children, className }: PulseGlowTextProps) => (
  <motion.span
    className={cn("animate-breathe inline-block", className)}
    style={{ willChange: "opacity, transform" }}
  >
    {children}
  </motion.span>
);
