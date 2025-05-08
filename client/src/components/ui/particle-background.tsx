import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { randomBetween } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ParticleBackgroundProps {
  count?: number;
  className?: string;
}

export function ParticleBackground({ count = 50, className = "" }: ParticleBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: randomBetween(0, 100),
          y: randomBetween(0, 100),
          size: randomBetween(5, 15),
          opacity: randomBetween(0.1, 0.5),
          duration: randomBetween(5, 10),
          delay: randomBetween(0, 5)
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Regenerate particles periodically for continuous effect
    const intervalId = setInterval(() => {
      generateParticles();
    }, 10000);
    
    return () => clearInterval(intervalId);
  }, [count]);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full overflow-hidden z-0 ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-accent/20 to-transparent"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, particle.opacity, particle.opacity, 0],
            x: [0, 100, 200],
            y: [0, -100, -200]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
