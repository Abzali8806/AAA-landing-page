import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { TechPattern } from "@/components/ui/tech-pattern";

export function AboutSection() {
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
    { value: "20+", label: "Expert Consultants" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#1e3a60] to-[#2d5277] relative overflow-hidden">
      <div className="absolute inset-0 section-gradient"></div>
      <TechPattern className="opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            className="block relative order-2 lg:order-1"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Add a glowing effect behind the image */}
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="OptiFlows team collaboration" 
              className="rounded-lg shadow-xl relative z-10 w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-cover lg:object-contain" 
            />
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-accent/10 order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold mb-6 text-white">
              About <span className="text-accent">OptiFlows</span>
            </h2>
            <p className="text-base sm:text-lg mb-6 font-roboto font-light text-gray-200">
              At OptiFlows, we're passionate about helping businesses achieve operational excellence through intelligent automation. Founded in 2015, we've helped hundreds of companies streamline their workflows and boost productivity.
            </p>
            <p className="text-base sm:text-lg mb-6 font-roboto font-light text-gray-200">
              Our team of experts combines deep technical knowledge with business acumen to deliver solutions that make a real impact on your bottom line.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6 mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-accent/10"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold text-accent mb-2">{stat.value}</div>
                  <p className="font-roboto font-light text-gray-200 text-sm sm:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent/90 text-gray-900 font-inter font-medium px-6 sm:px-8 py-3 rounded-md transition-colors duration-300 inline-block shadow-lg shadow-accent/20 text-center w-full sm:w-auto"
              >
                Work With Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
