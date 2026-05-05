import { motion } from "framer-motion";

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
