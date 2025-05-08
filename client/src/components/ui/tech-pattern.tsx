import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechPatternProps {
  className?: string;
  animate?: boolean;
}

export function TechPattern({ className, animate = true }: TechPatternProps) {
  return (
    <motion.div
      className={cn(
        "absolute inset-0 tech-pattern opacity-30 z-0",
        className
      )}
      initial={animate ? { opacity: 0 } : false}
      animate={animate ? { opacity: 0.3 } : false}
      transition={{ duration: 1.5 }}
    />
  );
}
