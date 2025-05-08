import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "Quantum Solutions",
      testimonial: "OptiFlows transformed our business operations completely. Their automated workflows saved us countless hours and reduced errors by 75%. The ROI has been incredible.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      position: "Operations Manager",
      company: "GlobalTech",
      testimonial: "The team at OptiFlows not only implemented great solutions but took the time to understand our unique business challenges. They delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      position: "CEO",
      company: "InnovateHealth",
      testimonial: "Working with OptiFlows helped us modernize our patient management systems. The automation solutions they implemented improved our service quality and staff satisfaction.",
      rating: 4.5
    }
  ];
  
  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary to-darkbg">
      {/* A dark tech background pattern with flowing lines */}
      <div 
        className="bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundBlendMode: "overlay", 
          backgroundColor: "rgba(11, 19, 43, 0.9)"
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
          <motion.div 
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">
              Client <span className="text-accent">Testimonials</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-roboto font-light">
              Don't just take our word for it. Here's what our clients have to say about working with OptiFlows.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="testimonial-container overflow-hidden">
              <div 
                className="testimonial-track flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    position={testimonial.position}
                    company={testimonial.company}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full bg-accent transition-opacity duration-300 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
