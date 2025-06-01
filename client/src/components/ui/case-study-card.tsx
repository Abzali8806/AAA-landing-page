import { motion } from "framer-motion";
import { scaleUp } from "@/lib/animations";

interface CaseStudyCardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  index?: number;
}

export function CaseStudyCard({
  image,
  imageAlt,
  category,
  title,
  description,
  ctaText = "Read Case Study",
  ctaHref = "#",
  index = 0
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-accent/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={index}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={imageAlt}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="p-6">
        <span className="bg-accent/30 text-white text-sm font-inter font-medium px-3 py-1 rounded-full inline-block">
          {category}
        </span>
        <h3 className="text-xl font-inter font-bold mt-4 mb-2 text-white">{title}</h3>
        <p className="font-roboto font-light mb-4 text-gray-200">
          {description}
        </p>
        <a 
          href={ctaHref} 
          className="inline-flex items-center bg-accent/20 hover:bg-accent text-white hover:text-primary font-inter font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-accent/30 hover:border-accent"
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
      </div>
    </motion.div>
  );
}
