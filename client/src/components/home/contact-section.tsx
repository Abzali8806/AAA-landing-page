import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { TechPattern } from "@/components/ui/tech-pattern";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: async (formData: ContactFormValues) => {
      return await apiRequest("POST", "/api/contact", formData);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-darkbg to-primary relative">
      <TechPattern />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-roboto font-light">
            Ready to streamline your operations? Reach out to us to discuss how we can help optimize your workflows.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="bg-secondary bg-opacity-70 rounded-xl p-8 shadow-lg"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-inter font-medium">Name</label>
                  <input 
                    {...form.register("name")}
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 bg-darkbg border ${form.formState.errors.name ? 'border-destructive' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground`}
                    placeholder="Your name" 
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-inter font-medium">Email</label>
                  <input 
                    {...form.register("email")}
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 bg-darkbg border ${form.formState.errors.email ? 'border-destructive' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground`}
                    placeholder="Your email" 
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block mb-2 font-inter font-medium">Company</label>
                <input 
                  {...form.register("company")}
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 bg-darkbg border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                  placeholder="Your company" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block mb-2 font-inter font-medium">Service You're Interested In</label>
                <select 
                  {...form.register("service")}
                  id="service" 
                  className={`w-full px-4 py-3 bg-darkbg border ${form.formState.errors.service ? 'border-destructive' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground`}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="workflow-automation">Workflow Automation</option>
                  <option value="process-optimization">Business Process Optimization</option>
                  <option value="software-integration">Custom Software Integration</option>
                  <option value="data-analytics">Data Analytics Solutions</option>
                  <option value="digital-transformation">Digital Transformation Consulting</option>
                  <option value="security-compliance">Security & Compliance</option>
                </select>
                {form.formState.errors.service && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.service.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-inter font-medium">Message</label>
                <textarea 
                  {...form.register("message")}
                  id="message" 
                  rows={4} 
                  className={`w-full px-4 py-3 bg-darkbg border ${form.formState.errors.message ? 'border-destructive' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-foreground`}
                  placeholder="Tell us about your project" 
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-highlight text-primary font-inter font-medium px-6 py-3 rounded-md transition-colors duration-300 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-secondary bg-opacity-70 rounded-xl p-8 shadow-lg mb-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-inter font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-accent mb-1">Address</h4>
                    <p className="font-roboto font-light">The Hive, 96 Fleet Street<br />London, EC4Y 1HB<br />United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-accent mb-1">Email</h4>
                    <p className="font-roboto font-light">info@optiflows.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-accent mb-1">Phone</h4>
                    <p className="font-roboto font-light">+44 (0) 20 1234 5678</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-70 rounded-xl p-8 shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-inter font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-accent text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="text-accent text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="text-accent text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/10 hover:bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="text-accent text-xl" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
