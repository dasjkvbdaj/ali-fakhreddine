import { Section } from "./Section";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";
import { TypingText } from "./TypingText";

export const Education = () => (
  <Section 
    id="education" 
    eyebrow="Education" 
    title="Academic background"
  >
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
          <GraduationCap className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">
              {education.school}
            </h3>
            <span className="text-xs text-muted-foreground">
              {education.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-foreground/90 font-medium">
            {education.degree}
          </p>

          <p className="text-xs text-muted-foreground">
            {education.location}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
            GPA <span className="text-gradient font-semibold">{education.gpa}</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
);