import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { DynamicHeroBackground } from "@/components/ui/dynamic-hero-background";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <DynamicHeroBackground elementCount={25} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center min-h-screen">
        <motion.div 
          className="flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* OptiFlows Logo */}
          <div className="bg-accent/20 backdrop-blur-sm rounded-full p-6 mr-6">
            <Zap className="text-accent" size={64} />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-inter font-bold text-white">
            Opti<span className="text-accent">Flows</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
