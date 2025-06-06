import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { DynamicHeroBackground } from "@/components/ui/dynamic-hero-background";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <DynamicHeroBackground elementCount={25} />
      
      {/* Logo at top-left */}
      <motion.div 
        className="absolute top-6 left-6 z-20 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-accent/20 backdrop-blur-sm rounded-full p-3 mr-4">
          <Zap className="text-accent" size={32} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-inter font-bold text-white">
          Opti<span className="text-accent">Flows</span>
        </h1>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
          >
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent/90 text-gray-900 font-inter font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 text-center"
            >
              Start Your Transformation
            </a>
            <a 
              href="#services" 
              className="border-2 border-accent text-white hover:bg-accent hover:text-gray-900 font-inter font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base sm:text-lg text-center"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
