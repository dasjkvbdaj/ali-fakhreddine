import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "@/data/portfolio";
import { Code2, Boxes, DatabaseZap, Wrench, Languages as LanguagesIcon } from "lucide-react";
import { GlowWord } from "./GlowWord";
import { RotatingWords } from "./TextAnimations";

const meta: Record<string, { icon: React.ComponentType<{ className?: string }>; tint: string }> = {
  "Programming Languages": { icon: Code2, tint: "from-primary/10 to-primary/0" },
  "Frameworks & Libraries": { icon: Boxes, tint: "from-accent/10 to-accent/0" },
  "Databases": { icon: DatabaseZap, tint: "from-primary/10 to-accent/10" },
  "Tools & Platforms": { icon: Wrench, tint: "from-accent/10 to-primary/10" },
  "Languages": { icon: LanguagesIcon, tint: "from-primary/10 to-accent/5" },
};

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Toolkit"
    title="Technical Skills"
    description={
      <>
        The languages, frameworks, and tools I use to build{" "}
        <RotatingWords
          words={["production-grade systems.", "scalable backends.", "reliable APIs.", "high-performance apps."]}
          className="text-primary font-semibold"
        />
      </>
    }
  >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([category, items], i) => {
        const categoryMeta = meta[category];
        if (!categoryMeta) return null;
        const Icon = categoryMeta.icon;

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
          >
            <div
              className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${categoryMeta.tint} opacity-60`}
            />
            <div className="mb-4 flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-semibold">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s, si) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span
                    color={si % 3 === 0 ? "primary" : si % 3 === 1 ? "accent" : "shift"}
                    className="text-xs font-medium"
                  >
                    {s}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);