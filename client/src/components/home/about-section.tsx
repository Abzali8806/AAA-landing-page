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
    <section id="about" className="py-20 bg-gradient-to-b from-darkbg to-primary relative overflow-hidden">
      <TechPattern className="opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="hidden lg:block"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* A technology consulting graphic showing team collaboration */}
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="OptiFlows team collaboration" 
              className="rounded-lg shadow-xl" 
            />
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6">
              About <span className="text-accent">OptiFlows</span>
            </h2>
            <p className="text-lg mb-6 font-roboto font-light">
              At OptiFlows, we're passionate about helping businesses achieve operational excellence through intelligent automation. Founded in 2015, we've helped hundreds of companies streamline their workflows and boost productivity.
            </p>
            <p className="text-lg mb-6 font-roboto font-light">
              Our team of experts combines deep technical knowledge with business acumen to deliver solutions that make a real impact on your bottom line.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-inter font-bold text-accent mb-2">{stat.value}</div>
                  <p className="font-roboto font-light">{stat.label}</p>
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
                className="bg-accent hover:bg-highlight text-primary font-inter font-medium px-8 py-3 rounded-md transition-colors duration-300 inline-block"
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
