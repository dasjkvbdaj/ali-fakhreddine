import { Section } from "./Section";
import { profile } from "@/data/portfolio";
import { GlowWord } from "./GlowWord";
import { PulseGlowText } from "./PulseGlowText";

export const About = () => (
  <Section
    id="about"
    eyebrow="Summary"
    title="Professional Summary"
  >
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
      {/* Content Side */}
      <div className="lg:col-span-7">
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-foreground/90 font-medium">
            {profile.summary}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="portfolio-card bg-card/40 backdrop-blur-md hover:bg-card/60">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-foreground">Core Expertise</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Specializing in Spring Boot, RESTful API design, and PostgreSQL
              </p>
            </div>

            <div className="portfolio-card bg-card/40 backdrop-blur-md hover:bg-card/60">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-accent">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-foreground">Security & Scale</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Focused on JWT Security, CI/CD, and Performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="lg:col-span-5">
        <div className="relative mx-auto max-w-xs lg:ml-auto">
          {/* Decorative Backdrops - Simplified */}
          <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
          <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-pulse delay-700" />

          <div className="relative aspect-[2/3] overflow-hidden rounded-[2.5rem] border-[4px] border-card shadow-elevated">
            <img
              src={profile.profileImage}
              alt={profile.name}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6 pt-12 text-center backdrop-blur-[1px]">
              <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Ali Fakhreddine</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-6 top-12 rounded-2xl bg-primary p-3 shadow-soft animate-bounce-slow">
            <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Section>
);