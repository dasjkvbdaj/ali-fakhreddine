import { motion } from "framer-motion";

interface FloatingCodeCardProps {
  children: React.ReactNode;
  style: React.CSSProperties;
  delay?: number;
}

export const FloatingCodeCard = ({
  children,
  style,
  delay = 0,
}: FloatingCodeCardProps) => (
  <motion.div
    style={style}
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: [0, -6, 0] }}
    transition={{
      opacity: { duration: 0.4, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
    }}
    className="glass absolute rounded-xl px-2.5 py-1.5 font-mono-code text-[11px] shadow-soft"
  >
    {children}
  </motion.div>
);
