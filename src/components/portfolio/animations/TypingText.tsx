import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  /** Milliseconds per character while typing. Default: 28 */
  speed?: number;
  /** Initial delay (ms) before the first cycle starts. Default: 120 */
  delay?: number;
  /** Show blinking cursor. Default: true */
  cursor?: boolean;
  /** HTML tag to render. Default: span */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const TypingText = ({
  text,
  className,
  speed = 28,
  delay = 120,
  cursor = true,
  as: Tag = "span",
}: TypingTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: false,       // only animate when in view to save performance
    margin: "-60px",
  });

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let alive = true;
    let delayTimer: ReturnType<typeof setTimeout>;

    const runCycle = (isFirst: boolean) => {
      let i = 0;


      const typeInterval = setInterval(() => {
        if (!alive) { clearInterval(typeInterval); return; }
        i++;
        setDisplayed(text.slice(0, i));

        if (i >= text.length) {
          clearInterval(typeInterval);


          setTimeout(() => {
            if (!alive) return;


            const eraseInterval = setInterval(() => {
              if (!alive) { clearInterval(eraseInterval); return; }
              i--;
              setDisplayed(text.slice(0, i));

              if (i <= 0) {
                clearInterval(eraseInterval);

                setTimeout(() => {
                  if (!alive) return;
                  runCycle(false);
                }, 500);
              }
            }, Math.max(speed * 0.45, 10));

          }, 2000);

        }
      }, speed);
    };


    delayTimer = setTimeout(() => {
      if (!alive) return;
      runCycle(true);
    }, delay);

    return () => {
      alive = false;
      clearTimeout(delayTimer);
    };
  }, [isInView, text, speed, delay]);

  return (
    // @ts-expect-error — dynamic tag ref
    <Tag ref={ref} className={className}>
      {displayed}
      {cursor && (
        <span
          aria-hidden
          className="typing-cursor ml-[1px] inline-block w-[2px] rounded-sm bg-primary align-middle cursor-blink"
          style={{ height: "1.1em", verticalAlign: "middle" }}
        />
      )}
    </Tag>
  );
};
