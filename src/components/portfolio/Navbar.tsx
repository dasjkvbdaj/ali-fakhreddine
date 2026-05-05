import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavbar } from "@/hooks/use-navbar";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
  const { active, scrolled, open, setOpen, isHome } = useNavbar();

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
            "flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300",
            scrolled ? "glass-panel shadow-soft" : "bg-transparent",
          )}
        >
          {/* Logo — always visible on all screen sizes */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-xl font-bold">Ali Fakhreddine</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-7 md:flex">
            <NavLinks active={active} isHome={isHome} />
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-10 flex flex-col gap-6">
                  <NavLinks active={active} isHome={isHome} onClick={() => setOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
