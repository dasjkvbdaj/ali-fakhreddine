import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { skills } from "../data/portfolio";
import { Code2, Boxes, DatabaseZap, Wrench, Languages as LanguagesIcon } from "lucide-react";
import { GlowWord } from "../animations/GlowWord";
import { RotatingWords } from "../animations/RotatingWords";

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
    description="The languages, frameworks, and tools I know."
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
            className="portfolio-card p-5 group hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="icon-container bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-lg border border-border bg-secondary/30 px-3 py-1 text-[10px] font-semibold transition-all hover:bg-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);