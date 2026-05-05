import { cn } from "@/lib/utils";
import { PulseGlowText } from "./PulseGlowText";

interface GlowWordProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps important keywords with a subtle breathing animation.
 */
export const GlowWord = ({
  children,
  className,
}: GlowWordProps) => (
  <PulseGlowText className={cn("font-semibold", className)}>
    {children}
  </PulseGlowText>
);

