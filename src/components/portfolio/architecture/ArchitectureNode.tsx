import { motion } from "framer-motion";

interface ArchitectureNodeProps {
  style: React.CSSProperties;
  icon: React.ReactNode;
  title: string;
  sub: string;
  delay?: number;
  primary?: boolean;
}

export const ArchitectureNode = ({
  style,
  icon,
  title,
  sub,
  delay = 0,
  primary = false,
}: ArchitectureNodeProps) => (
  <motion.div
    style={style}
    initial={{ opacity: 0, y: 8, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute flex w-[120px] flex-col items-center gap-1 rounded-2xl border border-border/60 bg-card px-3 py-3 shadow-soft ${primary ? "shadow-glow ring-1 ring-primary/30" : ""
      }`}
  >
    <span
      className={`grid h-9 w-9 place-items-center rounded-xl ${primary
          ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
          : "bg-secondary text-foreground"
        }`}
    >
      {icon}
    </span>
    <div className="text-xs font-semibold">{title}</div>
    <div className="font-mono-code text-[10px] text-muted-foreground">{sub}</div>
  </motion.div>
);
