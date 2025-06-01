import { motion } from "framer-motion";
import { fadeUp, textEntrance, float } from "@/lib/animations";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ChevronDown } from "lucide-react";
import { TechPattern } from "@/components/ui/tech-pattern";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2b55] via-[#2a5282] to-[#358f8a]/80">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b55]/40 to-transparent z-0"></div>
      <TechPattern className="opacity-40" />
      <ParticleBackground count={70} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] lg:min-h-[85vh]">
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
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
                className="bg-accent hover:bg-highlight text-primary font-inter font-medium px-6 sm:px-8 py-3 rounded-md transition-colors duration-300 text-base sm:text-lg shadow-lg shadow-accent/20 text-center"
              >
                Start Your Transformation
              </a>
              <a 
                href="#services" 
                className="border-2 border-accent/80 text-white hover:text-highlight hover:border-highlight font-inter font-medium px-6 sm:px-8 py-3 rounded-md transition-all duration-300 text-base sm:text-lg hover:bg-accent/10 text-center"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="block order-1 lg:order-2 relative"
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
