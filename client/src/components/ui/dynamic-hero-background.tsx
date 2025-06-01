import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
}

interface AnimatedLine {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface DynamicHeroBackgroundProps {
  elementCount?: number;
  lineCount?: number;
  className?: string;
}

export function DynamicHeroBackground({ 
  elementCount = 60, 
  lineCount = 15,
  className = "" 
}: DynamicHeroBackgroundProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [lines, setLines] = useState<AnimatedLine[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newElements: FloatingElement[] = [];
    const shapes: Array<'circle' | 'square' | 'triangle' | 'hexagon'> = ['circle', 'square', 'triangle', 'hexagon'];
    const colors = ['#64ffda', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];

    for (let i = 0; i < elementCount; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
    setElements(newElements);

    const newLines: AnimatedLine[] = [];
    for (let i = 0; i < lineCount; i++) {
      newLines.push({
        id: i,
        x1: Math.random() * 100,
        y1: Math.random() * 100,
        x2: Math.random() * 100,
        y2: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.1,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 8
      });
    }
    setLines(newLines);
  }, [elementCount, lineCount]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderShape = (element: FloatingElement) => {
    const baseProps = {
      width: element.size,
      height: element.size,
      fill: element.color,
      opacity: element.opacity
    };

    switch (element.shape) {
      case 'circle':
        return <circle cx={element.size / 2} cy={element.size / 2} r={element.size / 2} {...baseProps} />;
      case 'square':
        return <rect {...baseProps} />;
      case 'triangle':
        return (
          <polygon 
            points={`${element.size / 2},0 ${element.size},${element.size} 0,${element.size}`}
            {...baseProps}
          />
        );
      case 'hexagon':
        const points = [];
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = element.size / 2 + (element.size / 2) * Math.cos(angle);
          const y = element.size / 2 + (element.size / 2) * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        return <polygon points={points.join(' ')} {...baseProps} />;
      default:
        return <circle cx={element.size / 2} cy={element.size / 2} r={element.size / 2} {...baseProps} />;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 40% 80%, #10b981 0%, transparent 50%)",
            "radial-gradient(circle at 60% 70%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 20% 60%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 30%, #10b981 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 20% 20%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 60% 80%, #10b981 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 40% 80%, #10b981 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating geometric elements */}
      <svg className="absolute inset-0 w-full h-full">
        {elements.map((element) => (
          <motion.g key={element.id}>
            <motion.g
              initial={{ 
                x: `${element.x}%`, 
                y: `${element.y}%`,
                scale: 0,
                rotate: 0
              }}
              animate={{ 
                x: [`${element.x}%`, `${(element.x + 20) % 100}%`, `${element.x}%`],
                y: [`${element.y}%`, `${(element.y + 15) % 100}%`, `${element.y}%`],
                scale: [0, 1, 1, 0.8, 1],
                rotate: [0, 180, 360],
                opacity: [0, element.opacity, element.opacity, element.opacity * 0.5, element.opacity]
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: `blur(${Math.random() * 1}px)`,
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            >
              {renderShape(element)}
            </motion.g>
          </motion.g>
        ))}

        {/* Animated connecting lines */}
        {lines.map((line) => (
          <motion.line
            key={line.id}
            initial={{
              x1: `${line.x1}%`,
              y1: `${line.y1}%`,
              x2: `${line.x1}%`,
              y2: `${line.y1}%`,
              opacity: 0
            }}
            animate={{
              x1: [`${line.x1}%`, `${line.x2}%`, `${line.x1}%`],
              y1: [`${line.y1}%`, `${line.y2}%`, `${line.y1}%`],
              x2: [`${line.x2}%`, `${line.x1}%`, `${line.x2}%`],
              y2: [`${line.y2}%`, `${line.y1}%`, `${line.y2}%`],
              opacity: [0, line.opacity, line.opacity, 0]
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            stroke="#64ffda"
            strokeWidth="1"
            strokeOpacity={line.opacity}
          />
        ))}
      </svg>

      {/* Pulsing energy waves */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ 
              width: [0, 800, 1200],
              height: [0, 800, 1200],
              opacity: [0.8, 0.3, 0]
            }}
            transition={{
              duration: 6,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Matrix-style digital rain effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-accent to-transparent"
            style={{
              left: `${(i * 5) % 100}%`,
              height: '100%'
            }}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ 
              y: ['100%', '-100%'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
}