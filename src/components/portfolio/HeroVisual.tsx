import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Terminal,
  Server,
  Zap
} from "lucide-react";

export const HeroVisual = () => {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center sm:h-[500px]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px]" />

      {/* Main Floating Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[280px] rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:w-[320px]"
      >
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-amber-500/50" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
          </div>
          <div className="text-[10px] font-mono text-white/30">system.log</div>
        </div>

        <div className="mt-4 space-y-3 font-mono text-[11px] sm:text-xs">
          <div className="flex gap-2">
            <span className="text-primary">const</span>
            <span className="text-white">engineer</span>
            <span className="text-primary">=</span>
            <span className="text-accent">"Ali"</span>
          </div>
          <div className="flex gap-2">
            <span className="text-primary">stack</span>
            <span className="text-white">[</span>
            <span className="text-emerald-400">"React"</span>
            <span className="text-white">,</span>
            <span className="text-emerald-400">"Next.js"</span>
            <span className="text-white">]</span>
          </div>
          <div className="flex gap-2 pl-4">
            <span className="text-white/40">await</span>
            <span className="text-white">launch</span>
            <span className="text-white">(</span>
            <span className="text-white">)</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
          <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
            <Database className="h-6 w-6 text-accent" />
          </div>
          <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Server className="h-6 w-6 text-emerald-500" />
          </div>
        </div>
      </motion.div>

      {/* Orbiting Elements */}
      <OrbitingIcon
        delay={0}
        radius={140}
        duration={15}
        className="text-blue-400"
      >
        <Globe className="h-6 w-6" />
      </OrbitingIcon>

      <OrbitingIcon
        delay={-5}
        radius={160}
        duration={20}
        className="text-amber-400"
      >
        <Zap className="h-6 w-6" />
      </OrbitingIcon>

      <OrbitingIcon
        delay={-10}
        radius={120}
        duration={18}
        className="text-purple-400"
      >
        <Layers className="h-6 w-6" />
      </OrbitingIcon>

      <OrbitingIcon
        delay={-15}
        radius={180}
        duration={25}
        className="text-rose-400"
      >
        <Terminal className="h-6 w-6" />
      </OrbitingIcon>

      {/* Decorative Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
        />
      ))}
    </div>
  );
};

const OrbitingIcon = ({ 
  children, 
  radius, 
  duration, 
  delay,
  className 
}: { 
  children: React.ReactNode; 
  radius: number; 
  duration: number; 
  delay: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        rotate: 360 
      }}
      transition={{ 
        rotate: {
          duration,
          repeat: Infinity,
          ease: "linear",
          delay
        },
        opacity: {
          duration: 2,
          delay: delay + 0.5
        }
      }}
      className="absolute top-1/2 left-1/2 flex items-center justify-center"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-xl",
          className
        )}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Helper for class names since I can't import cn here easily in a scratch file
const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(" ");
