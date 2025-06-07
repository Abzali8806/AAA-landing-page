import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ServiceCard } from "@/components/ui/service-card";
import { TechPattern } from "@/components/ui/tech-pattern";
import { 
  Settings, 
  Phone, 
  MessageSquare
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "Optimize your business processes by automating repetitive tasks, reducing manual effort and eliminating bottlenecks to save hours of work weekly."
    },
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "AI voice agents that qualify leads, answer questions, and hold natural conversations — available 24/7 so you don't have to be."
    },
    {
      icon: MessageSquare,
      title: "Communication Optimization",
      description: "Streamline all communication channels including email, Slack, Teams, and third-party platforms to improve response times and team collaboration."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#243b6c] via-[#2a4872] to-[#1e3a60] relative">
      <div className="absolute inset-0 section-gradient"></div>
      <TechPattern className="opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-roboto font-light text-gray-100 px-4">
            Transform your business with our three core solutions: automated workflows, intelligent voice agents, and optimized communication systems.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
