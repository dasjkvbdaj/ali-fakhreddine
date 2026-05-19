import { Section } from "../layout/Section";
import { education } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

export const Education = () => (
  <Section 
    id="education" 
    eyebrow="Education" 
    title="Academic background"
  >
    <div className="portfolio-card p-8">
      <div className="flex items-start gap-6">
        <span className="icon-container h-12 w-12 bg-primary text-primary-foreground">
          <GraduationCap className="h-6 w-6" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight">
              {education.school}
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
              {education.period}
            </span>
          </div>
          <p className="mt-2 text-base font-semibold text-accent">
            {education.degree}
          </p>

          <p className="text-sm text-muted-foreground">
            {education.location}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            GPA <span className="text-primary">{education.gpa}</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
);