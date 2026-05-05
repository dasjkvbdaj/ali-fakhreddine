import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { experience } from "../data/portfolio";
import { Briefcase } from "lucide-react";
import { TypingText } from "../animations/TypingText";
import { GlowWord } from "../animations/GlowWord";

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where I've shipped"
    description="Here's a look at my professional journey and the skills I've developed along the way."
  >
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-border sm:block" />
      <div className="space-y-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.company + e.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative sm:pl-14"
          >
            <span className="icon-container absolute left-0 top-5 hidden bg-primary text-primary-foreground sm:flex">
              <Briefcase className="h-4 w-4" />
            </span>
            <div className="portfolio-card p-5 hover:-translate-y-0.5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold">
                    {e.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-accent"> {e.company}</span>
                    {e.location && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span>{e.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <span className="rounded-lg border border-border bg-secondary/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {e.period}
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {e.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-5 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/40" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);