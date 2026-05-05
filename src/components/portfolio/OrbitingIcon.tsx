import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitingIconProps { 
  children: React.ReactNode; 
  radius: number; 
  duration: number; 
  delay: number;
  className?: string;
}

export const OrbitingIcon = ({ 
  children, 
  radius, 
  duration, 
  delay,
  className 
}: OrbitingIconProps) => {
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
