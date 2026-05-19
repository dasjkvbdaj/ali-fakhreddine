import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navSections } from "@/components/portfolio/data/portfolio";

export const useNavbar = () => {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasScrolledOnMount, setHasScrolledOnMount] = useState(false);
  const location = useLocation();

  const isHome =
    location.pathname === "/" ||
    ["/home", "/about", "/experience", "/education", "/projects", "/skills", "/contact"].includes(
      location.pathname
    );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to spy on active section during scroll
  useEffect(() => {
    if (!isHome) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [isHome]);

  // Synchronize dynamic URL path in address bar with current active section
  useEffect(() => {
    if (!isHome || !active) return;
    const newPath = active === "home" ? "/home" : `/${active}`;
    if (window.location.pathname !== newPath) {
      window.history.replaceState(null, "", newPath);
    }
  }, [active, isHome]);

  // Handle smooth scroll on direct mount (e.g. initial URL is /projects or /#projects)
  useEffect(() => {
    if (!isHome || hasScrolledOnMount) return;

    let targetId = "";

    if (window.location.hash) {
      targetId = window.location.hash.substring(1);
    } else {
      const path = location.pathname.substring(1);
      if (path) {
        targetId = path === "home" ? "home" : path;
      }
    }

    if (!targetId) {
      setHasScrolledOnMount(true);
      return;
    }

    const timer = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setHasScrolledOnMount(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname, isHome, hasScrolledOnMount]);

  return {
    active,
    scrolled,
    open,
    setOpen,
    isHome,
  };
};
