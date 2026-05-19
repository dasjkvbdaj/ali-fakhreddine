import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PulseGlowText } from "../animations/PulseGlowText";

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
      className={cn("relative scroll-mt-24", className)}
    >
      <div className="portfolio-section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <PulseGlowText>{eyebrow}</PulseGlowText>
            </div>
          )}

          <HeadingTag className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </HeadingTag>
          {description && (
            <div className="mt-4 text-base text-muted-foreground sm:text-lg max-w-xl">
              {description}
            </div>
          )}
        </motion.div>
        {children}
      </div>
    </section>
);
};