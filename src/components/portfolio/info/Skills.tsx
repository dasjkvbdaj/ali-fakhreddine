import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { skills } from "../data/portfolio";
import { Code2, Boxes, DatabaseZap, Wrench, Languages as LanguagesIcon } from "lucide-react";

const meta: Record<string, { icon: React.ComponentType<{ className?: string }>; description: string }> = {
  "Programming Languages": { 
    icon: Code2, 
    description: "Proficient in building logic-heavy applications and core systems using modern programming paradigms." 
  },
  "Frameworks & Libraries": { 
    icon: Boxes, 
    description: "Leveraging powerful frameworks and libraries to build scalable, high-performance web applications." 
  },
  "Databases": { 
    icon: DatabaseZap, 
    description: "Designing and managing efficient data storage solutions with a focus on integrity and speed." 
  },
  "Tools & Platforms": { 
    icon: Wrench, 
    description: "Utilizing industry-standard tools and cloud platforms for streamlined development and deployment." 
  },
  "Languages": { 
    icon: LanguagesIcon, 
    description: "Bilingual communication skills enabling collaboration in diverse and global professional environments." 
  },
};

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Expertise"
    title="Technical Toolkit"
    description="A deep dive into the technologies and tools I've mastered to build modern software solutions."
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([category, items], i) => {
        const categoryMeta = meta[category];
        if (!categoryMeta) return null;
        const Icon = categoryMeta.icon;

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative h-full overflow-hidden rounded-[2rem] border border-border/50 bg-card/30 p-8 transition-all duration-500 hover:bg-card/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon Box */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent border border-accent/20 shadow-lg shadow-accent/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-7 h-7" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                {category}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground/90 text-sm leading-relaxed mb-8 flex-grow">
                {categoryMeta.description}
              </p>

              {/* Skills List as subtle tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                {items.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-lg border border-border/40 bg-secondary/30 px-2.5 py-1 text-[10px] font-bold text-muted-foreground transition-all duration-300 group-hover:border-accent/30 group-hover:text-foreground group-hover:bg-accent/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);