import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [isHome]);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
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
              "absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-300",
              active === s.id && "scale-x-100",
            )}
          />
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-1">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300",
            scrolled ? "glass shadow-soft" : "bg-transparent",
          )}
        >
          {/* Logo — always visible on all screen sizes */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-xl font-bold">Ali Fakhreddine</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-7 md:flex">
            <NavLinks />
          </div>

          {/* Mobile hamburger menu — no Download CV */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-10 flex flex-col gap-6">
                  <NavLinks onClick={() => setOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
