import { motion } from "framer-motion";
import { Section } from "./Section";
import { Globe, Cloud, Shield, Server, Database, Zap } from "lucide-react";
import { GlowWord } from "./GlowWord";
import { WaveText } from "./WaveText";

const layers = [
  { icon: Globe, name: "Client", desc: "React UI" },
  { icon: Cloud, name: "CDN", desc: "Static assets" },
  { icon: Shield, name: "Gateway", desc: "Auth · rate limit" },
  { icon: Server, name: "Service", desc: "Spring Boot" },
  { icon: Zap, name: "Cache", desc: "Hot reads" },
  { icon: Database, name: "Database", desc: "PostgreSQL" },
];

export const SystemThinking = () => (
  <Section
    id="system"
    eyebrow="System thinking"
    title={
      <WaveText
        text="I think in architectures."
        className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground"
      />
    }
    description="Every project ships against a clear mental model of where data lives, who's allowed to touch it, and how the system stays fast under load."
    className="bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
  >
    <div className="portfolio-card sm:p-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {layers.map((l, i) => {
          const Icon = l.icon;
          return (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-background p-4 text-center shadow-soft hover:border-accent/30 transition-colors"
            >
              <span className="icon-container">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-sm font-semibold">{l.name}</div>
              <GlowWord className="font-mono-code text-[10px] text-muted-foreground">
                {l.desc}
              </GlowWord>
              {i < layers.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border lg:block" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </Section>
);