import { useState, useEffect } from "react";

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
