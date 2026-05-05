import { Link } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GlowWord } from "./GlowWord";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border pt-12 pb-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <div className="text-xl font-bold tracking-tight text-foreground">
            {profile.name.split(' ')[0]}<GlowWord color="shift">.</GlowWord>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Software Engineer specializing in building exceptional digital experiences.
            Focused on backend excellence and scalable architectures
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Links</h4>
          <ul className="mt-4 space-y-2">
            {["About", "Experience", "Education" ,"Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Social</h4>
          <div className="mt-4 flex gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-secondary p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Ali Fakhreddine. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
