import { cn } from "@/lib/utils";
import { PulseGlowText } from "./TextAnimations";

interface GlowWordProps {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "accent" | "shift";
}

/**
 * Wraps important keywords with a continuously pulsing golden breath glow.
 */
export const GlowWord = ({
  children,
  className,
}: GlowWordProps) => (
  <PulseGlowText className={cn("font-semibold", className)}>
    {children}
  </PulseGlowText>
);

