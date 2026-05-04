import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Typewriter, PulseGlowText } from "./TextAnimations";

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  level,
}: {
  id: string;
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2";
}) => {
  const HeadingTag = level || "h2";
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
    <div className="mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-gradient-to-r from-primary to-accent" />
            <PulseGlowText>{eyebrow}</PulseGlowText>
          </div>
        )}

        <HeadingTag className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {typeof title === "string" ? (
            <Typewriter phrases={[title]} typeSpeed={55} />
          ) : (
            title
          )}
        </HeadingTag>
        {description && (
          <div className="mt-3 text-base text-muted-foreground sm:text-lg">
            {description}
          </div>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);
};