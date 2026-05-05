import { motion } from "framer-motion";
import { Server, Database, Globe } from "lucide-react";
import { ArchitectureNode } from "./ArchitectureNode";
import { FloatingCodeCard } from "../animations/FloatingCodeCard";

/**
 * Animated Client → API → Database diagram for the hero.
 * Uses motion.path pathLength for the draw-in, and animated circles
 * along the same paths to represent request pulses.
 */
export const ArchitectureDiagram = () => {
  return (
    <div className="relative aspect-[5/4] w-full max-w-[560px]">
      {/* Soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-2xl" />

      <svg
        viewBox="0 0 500 400"
        fill="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="edge" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="edge2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Edges */}
        <motion.path
          d="M 110 200 C 175 200, 175 200, 240 200"
          stroke="url(#edge)"
          strokeWidth="1.75"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        />
        <motion.path
          d="M 290 200 C 355 200, 355 200, 420 200"
          stroke="url(#edge2)"
          strokeWidth="1.75"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
        />

        {/* Pulse particles along edges */}
        <motion.circle
          r="3.5"
          fill="hsl(var(--primary))"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          style={{ offsetPath: "path('M 110 200 C 175 200, 175 200, 240 200')" }}
        />
        <motion.circle
          r="3.5"
          fill="hsl(var(--accent))"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
          style={{ offsetPath: "path('M 290 200 C 355 200, 355 200, 420 200')" }}
        />
      </svg>

      {/* Nodes overlaid */}
      <ArchitectureNode
        style={{ left: "2%", top: "42%" }}
        delay={0.1}
        icon={<Globe className="h-5 w-5" />}
        title="Client"
        sub="React"
      />
      <ArchitectureNode
        style={{ left: "38%", top: "42%" }}
        delay={0.3}
        icon={<Server className="h-5 w-5" />}
        title="API"
        sub="Spring Boot"
        primary
      />
      <ArchitectureNode
        style={{ right: "2%", top: "42%" }}
        delay={0.5}
        icon={<Database className="h-5 w-5" />}
        title="PostgreSQL"
        sub="Persistence"
      />

      {/* Floating glass code cards */}
      <FloatingCodeCard style={{ top: "4%", left: "12%" }} delay={0.9}>
        <span className="text-primary">GET</span>{" "}
        <span className="text-foreground/80">/api/users</span>
      </FloatingCodeCard>
      <FloatingCodeCard style={{ top: "8%", right: "8%" }} delay={1.2}>
        <span className="text-accent">200</span>{" "}
        <span className="text-foreground/80">OK · 42ms</span>
      </FloatingCodeCard>
      <FloatingCodeCard style={{ bottom: "6%", left: "22%" }} delay={1.5}>
        <span className="text-foreground/80">Authorization:</span>{" "}
        <span className="text-primary">JWT</span>
      </FloatingCodeCard>
      <FloatingCodeCard style={{ bottom: "10%", right: "4%" }} delay={1.8}>
        <span className="text-foreground/80">@Transactional</span>
      </FloatingCodeCard>
    </div>
  );
};