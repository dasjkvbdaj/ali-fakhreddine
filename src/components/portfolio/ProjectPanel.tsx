import { motion } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectPanelProps {
  project: Project;
  open: boolean;
  onToggle: () => void;
  index: number;
}

export const ProjectPanel = ({
  project,
  open,
  onToggle,
  index,
}: ProjectPanelProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-300",
      open
        ? "border-accent/40 ring-1 ring-accent/20 shadow-elevated"
        : "border-border hover:-translate-y-1 hover:border-accent/30",
    )}
  >
    {/* Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Badge/Number */}
      <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
        0{index + 1}
      </div>
    </div>

    {/* Content Container */}
    <div className="flex flex-1 flex-col p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-tight text-foreground leading-tight">
          {project.name}
        </h3>

        <p className={cn(
          "text-sm leading-relaxed text-muted-foreground transition-all duration-300",
          !open && "line-clamp-2"
        )}>
          {project.long}
        </p>
      </div>

      {/* Toggle Arrow */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-secondary/50"
          aria-label={open ? "Show less" : "View more"}
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </button>
      </div>

      {/* Always Visible Info */}
      <div className="mt-6 space-y-6 border-t border-border/50 pt-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-border bg-background/50 px-2.5 py-1 text-[10px] font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {(project.github || project.demo) && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.github && (
              Array.isArray(project.github) ? (
                project.github.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl border border-border bg-background py-2 text-xs font-semibold transition-all hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                    {repo.label}
                  </a>
                ))
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background py-2 text-xs font-semibold transition-all hover:bg-secondary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )
            )}
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-2 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);
