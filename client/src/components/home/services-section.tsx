import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ServiceCard } from "@/components/ui/service-card";
import { TechPattern } from "@/components/ui/tech-pattern";
import { 
  Settings, 
  Bot, 
  GitBranch, 
  LineChart, 
  Users, 
  Shield 
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your business processes to save time and reduce errors."
    },
    {
      icon: Bot,
      title: "Business Process Optimization",
      description: "Analyze and redesign your business processes to achieve maximum efficiency and productivity."
    },
    {
      icon: GitBranch,
      title: "Custom Software Integration",
      description: "Connect your existing systems and applications to create a seamless operational environment."
    },
    {
      icon: LineChart,
      title: "Data Analytics Solutions",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: Users,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to help your business navigate the digital transformation journey."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your automated workflows and processes comply with industry regulations and security standards."
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
            We help businesses streamline their operations through intelligent automation and process optimization.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
