import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
