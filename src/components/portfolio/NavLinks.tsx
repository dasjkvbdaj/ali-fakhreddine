import { navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  active: string;
  isHome: boolean;
  onClick?: () => void;
}

export const NavLinks = ({ active, isHome, onClick }: NavLinksProps) => (
  <>
    {navSections.map((s) => (
      <a
        key={s.id}
        href={isHome ? `#${s.id}` : `/#${s.id}`}
        onClick={onClick}
        className={cn(
          "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          active === s.id && "text-foreground",
        )}
      >
        {s.label}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300",
            active === s.id && "scale-x-100",
          )}
        />
      </a>
    ))}
  </>
);
