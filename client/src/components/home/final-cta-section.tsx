import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { scrollToElement } from "@/lib/utils";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function FinalCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Healthcare Practice? </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our custom AI voice agent solutions can streamline your operations, 
              reduce administrative burden, and enhance your patient experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
                onClick={() => scrollToElement('contact')}
              >
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-400/30 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg group backdrop-blur-sm"
                onClick={() => scrollToElement('contact')}
              >
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get Started Today
              </Button>
            </div>
            
            <div className="mt-8 text-slate-400">
              <p className="text-sm">
                No commitment required • Free consultation • HIPAA-compliant solutions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}