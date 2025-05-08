import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { TechPattern } from "@/components/ui/tech-pattern";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Manufacturing workflow automation",
      category: "Manufacturing",
      title: "Streamlining Production Workflows",
      description: "How we helped a manufacturing company reduce production time by 35% through process automation."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Financial services data integration",
      category: "Financial Services",
      title: "Data Integration for Banking",
      description: "Creating a unified data platform that reduced reporting time from days to minutes."
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      imageAlt: "Healthcare process automation",
      category: "Healthcare",
      title: "Patient Care Workflow Optimization",
      description: "Automating patient onboarding and care coordination to improve patient outcomes by 25%."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#2d5277] to-[#1b3553] relative">
      <div className="absolute inset-0 section-gradient"></div>
      <TechPattern className="opacity-40" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4 text-white">
            Our <span className="text-accent">Case Studies</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-roboto font-light text-gray-200">
            See how we've helped businesses across various industries achieve operational excellence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              image={caseStudy.image}
              imageAlt={caseStudy.imageAlt}
              category={caseStudy.category}
              title={caseStudy.title}
              description={caseStudy.description}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <a 
            href="#contact" 
            className="border-2 border-accent/80 text-white hover:text-highlight hover:border-highlight font-inter font-medium px-8 py-3 rounded-md transition-all duration-300 inline-block hover:bg-accent/10"
          >
            View All Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
}
