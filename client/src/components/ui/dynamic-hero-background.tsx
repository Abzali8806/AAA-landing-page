import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingCircle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

interface DynamicHeroBackgroundProps {
  elementCount?: number;
  className?: string;
}

export function DynamicHeroBackground({ 
  elementCount = 30,
  className = "" 
}: DynamicHeroBackgroundProps) {
  const [circles, setCircles] = useState<FloatingCircle[]>([]);

  useEffect(() => {
    const newCircles: FloatingCircle[] = [];
    const colors = ['#64ffda', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];

    for (let i = 0; i < elementCount; i++) {
      newCircles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.7 + 0.1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setCircles(newCircles);
  }, [elementCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {circles.map((circle) => (
          <motion.circle
            key={circle.id}
            cx={`${circle.x}%`}
            cy={`${circle.y}%`}
            r={circle.size}
            fill={circle.color}
            opacity={circle.opacity}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              opacity: [circle.opacity, circle.opacity * 0.5, circle.opacity]
            }}
            transition={{
              duration: circle.duration,
              delay: circle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
}