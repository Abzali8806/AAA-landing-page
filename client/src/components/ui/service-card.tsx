import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { scaleUp } from "@/lib/animations";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  index?: number;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  ctaText = "Learn More", 
  ctaHref = "#contact",
  index = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      className="service-card bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10"
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
      custom={index}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
    >
      <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-inner">
        <Icon className="text-accent text-2xl" />
      </div>
      <h3 className="text-xl font-inter font-bold mb-4 text-white">{title}</h3>
      <p className="font-roboto font-light mb-6 text-gray-200">
        {description}
      </p>
      <a 
        href={ctaHref} 
        className="inline-flex items-center bg-accent/20 hover:bg-accent text-white hover:text-gray-900 font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-accent/30 hover:border-accent"
      >
        {ctaText}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-2 transition-transform duration-300 hover:translate-x-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </a>
    </motion.div>
  );
}
