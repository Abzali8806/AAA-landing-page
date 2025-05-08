import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  isActive?: boolean;
}

export function TestimonialCard({
  name,
  position,
  company,
  testimonial,
  rating,
  isActive = false
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 ${isActive ? 'opacity-100' : 'opacity-50'}`}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-lg h-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-xl font-inter font-bold">{name}</h4>
            <p className="text-accent">{position}, {company}</p>
          </div>
          <div className="text-accent">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 11l3-3m0 0l3 3m-3-3v8m9-5l-3 3m0 0l-3-3m3 3V8" 
              />
            </svg>
          </div>
        </div>
        <p className="font-roboto font-light mb-6">
          "{testimonial}"
        </p>
        <div className="flex text-accent">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill={i < rating ? "currentColor" : "none"}
              stroke="currentColor"
            >
              <path 
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
              />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
