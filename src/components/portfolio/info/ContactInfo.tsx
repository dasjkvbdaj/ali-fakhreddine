import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Browse code", href: profile.github },
];

export const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-between space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Have a project, role, or idea?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
            >
              <span className="icon-container group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                   {l.label}
                </div>
                <div className="truncate text-sm font-medium">{l.value}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
