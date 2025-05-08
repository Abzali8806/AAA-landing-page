import { motion } from "framer-motion";
import { fadeUp, textEntrance, float } from "@/lib/animations";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ChevronDown } from "lucide-react";
import { TechPattern } from "@/components/ui/tech-pattern";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-darkbg via-primary to-secondary">
      <TechPattern />
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-6 leading-tight"
              variants={textEntrance}
            >
              <span className="text-foreground">Powering Business</span>{" "}
              <span className="text-accent block md:inline">Efficiency</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 font-roboto font-light max-w-xl mx-auto lg:mx-0"
              variants={textEntrance}
            >
              We automate your workflows, streamline processes, and accelerate your business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              variants={fadeUp}
            >
              <a 
                href="#contact" 
                className="bg-accent hover:bg-highlight text-primary font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300 text-lg"
              >
                Start Your Transformation
              </a>
              <a 
                href="#services" 
                className="border border-accent text-accent hover:text-highlight hover:border-highlight font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300 text-lg"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            variants={float}
            initial="hidden"
            animate="visible"
          >
            {/* Workflow automation illustration showing connected nodes and flowing data */}
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Workflow automation illustration" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a 
            href="#services" 
            className="text-accent hover:text-highlight transition-colors duration-300"
            aria-label="Scroll down to services"
          >
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
