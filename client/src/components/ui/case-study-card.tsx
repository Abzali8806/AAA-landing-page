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
      className="bg-darkbg rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
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
      <img 
        src={image}
        alt={imageAlt}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <span className="bg-accent/20 text-accent text-sm font-inter font-medium px-3 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-xl font-inter font-bold mt-4 mb-2">{title}</h3>
        <p className="font-roboto font-light mb-4">
          {description}
        </p>
        <a 
          href={ctaHref} 
          className="text-accent hover:text-highlight font-inter font-medium flex items-center"
        >
          {ctaText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
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
