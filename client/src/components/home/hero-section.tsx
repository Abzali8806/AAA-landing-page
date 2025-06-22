import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import { DynamicHeroBackground } from "@/components/ui/dynamic-hero-background";
import { scrollToElement } from "@/lib/utils";
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <DynamicHeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              <Shield className="inline w-4 h-4 mr-2" />
              HIPAA-Compliant Solutions for Secure Patient Data
            </span>
          </motion.div>
          
          <motion.h1
            variants={slideInLeft}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Custom AI Voice Agents:{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Your Solution
            </span>
            <br />
            for Streamlined Healthcare Operations
          </motion.h1>
          
          <motion.p
            variants={slideInRight}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We design, build, and manage bespoke AI voice agent solutions tailored to your practice's unique needs. 
            Serving dentistry, concierge care, and weight loss clinics with custom workflow automation.
          </motion.p>
          
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
              onClick={() => scrollToElement('contact')}
            >
              Discover Your Custom Solution
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-400/30 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg group backdrop-blur-sm"
              onClick={() => scrollToElement('solution')}
            >
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </Button>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-300 font-medium mb-1">Patient Support</div>
              <div className="text-slate-400 text-sm">Never miss a call again</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-slate-300 font-medium mb-1">Cost Reduction</div>
              <div className="text-slate-400 text-sm">Up to 40% savings possible</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-300 font-medium mb-1">HIPAA Compliant</div>
              <div className="text-slate-400 text-sm">Secure patient data</div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400"
          >
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">Setup in 2-3 weeks</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm">HIPAA compliant</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm">Works with existing systems</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
