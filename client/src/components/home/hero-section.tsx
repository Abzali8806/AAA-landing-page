import { motion } from "framer-motion";
import { fadeUp, textEntrance, float } from "@/lib/animations";
import { DynamicHeroBackground } from "@/components/ui/dynamic-hero-background";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <DynamicHeroBackground elementCount={80} lineCount={20} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="hero-grid-850 gap-8 items-center min-h-[80vh]">
          <motion.div 
            className="hero-text-850 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-inter font-bold mb-6 leading-tight"
              variants={textEntrance}
            >
              <span className="text-white">Powering Business</span>{" "}
              <span className="text-accent block sm:inline">Efficiency</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-xl xl:text-2xl mb-8 font-roboto font-light max-w-2xl mx-auto lg:mx-0 text-gray-100"
              variants={textEntrance}
            >
              We automate your workflows, streamline processes, and accelerate your business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeUp}
            >
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent/80 text-white font-inter font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 text-center"
              >
                Start Your Transformation
              </a>
              <a 
                href="#services" 
                className="border-2 border-accent text-white hover:bg-accent hover:text-white font-inter font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base sm:text-lg text-center"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-850 relative"
            variants={float}
            initial="hidden"
            animate="visible"
          >
            {/* Add a subtle glow effect around the image */}
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Workflow automation illustration" 
              className="rounded-lg shadow-xl w-full h-auto relative z-10 max-h-[300px] sm:max-h-[400px] lg:max-h-none object-cover lg:object-contain" 
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
            className="text-white hover:text-highlight transition-colors duration-300"
            aria-label="Scroll down to services"
          >
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
