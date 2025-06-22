import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { TechPattern } from "@/components/ui/tech-pattern";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Country list with flags
const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿" },
  { code: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬" },
  { code: "HR", name: "Croatia", flag: "🇭🇷" },
  { code: "SI", name: "Slovenia", flag: "🇸🇮" },
  { code: "SK", name: "Slovakia", flag: "🇸🇰" },
  { code: "LT", name: "Lithuania", flag: "🇱🇹" },
  { code: "LV", name: "Latvia", flag: "🇱🇻" },
  { code: "EE", name: "Estonia", flag: "🇪🇪" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "PE", name: "Peru", flag: "🇵🇪" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" }
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  // Detect user's country on component mount
  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code) {
          const detectedCountryCode = data.country_code.toUpperCase();
          setDetectedCountry(detectedCountryCode);
        }
      } catch (error) {
        console.log('Could not detect user location');
      }
    };

    detectUserCountry();
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (formData: ContactFormValues) => {
      // Add auto-detected country data to the submission
      const selectedCountry = countries.find(c => c.code === detectedCountry);
      const submissionData = {
        ...formData,
        countryCode: detectedCountry,
        countryName: selectedCountry?.name || 'Unknown',
        detectedFromIP: true
      };

      const response = await fetch("https://hook.eu2.make.com/1bebr3t96at37j2im2viq9r7itn6aweo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      // Make.com webhooks often return plain text like "Accepted"
      // So we'll handle both JSON and text responses
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        return response.text();
      }
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#132846] to-[#173148] relative">
      <div className="absolute inset-0 section-gradient"></div>
      <TechPattern className="opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-bold mb-4 text-white">
            Schedule Your <span className="text-accent">Free Consultation</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-roboto font-light text-gray-200 px-4">
            Ready to discover your custom AI voice agent solution? Contact us to discuss how we can design a tailored system for your healthcare practice.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-accent/10"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-inter font-medium text-white">Name</label>
                  <input 
                    {...form.register("name")}
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${form.formState.errors.name ? 'border-destructive' : 'border-accent/20'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white`}
                    placeholder="Your name" 
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-inter font-medium text-white">Email</label>
                  <input 
                    {...form.register("email")}
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${form.formState.errors.email ? 'border-destructive' : 'border-accent/20'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white`}
                    placeholder="Your email" 
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-inter font-medium text-white">Phone Number</label>
                <input 
                  {...form.register("phone")}
                  type="tel" 
                  id="phone" 
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${form.formState.errors.phone ? 'border-destructive' : 'border-accent/20'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white`}
                  placeholder="Your phone number" 
                />
                {form.formState.errors.phone && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block mb-2 font-inter font-medium text-white">Company</label>
                <input 
                  {...form.register("company")}
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  placeholder="Your company" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-inter font-medium text-white">Got automation ideas? Share them here <span className="text-gray-400 font-light">(Optional)</span></label>
                <textarea 
                  {...form.register("message")}
                  id="message" 
                  rows={5} 
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${form.formState.errors.message ? 'border-destructive' : 'border-accent/20'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-white`}
                  placeholder="Describe your workflow automation needs, current pain points, or specific ideas you have in mind. The more detail you provide, the better we can help you." 
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-gray-900 font-inter font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex justify-center items-center shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10 mb-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-inter font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 shadow-inner">
                    <MapPin className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-accent mb-1">Address</h4>
                    <p className="font-roboto font-light text-gray-200">The Hive, 96 Fleet Street<br />London, EC4Y 1HB<br />United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 shadow-inner">
                    <Mail className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-accent mb-1">Email</h4>
                    <p className="font-roboto font-light text-gray-200">info@optiflowsai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 shadow-inner">
                    <Phone className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-inter font-medium text-accent mb-1">Phone</h4>
                    <p className="font-roboto font-light text-gray-200">+447389795588</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/10"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-inter font-bold mb-6 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-accent/20 hover:bg-accent/30 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-inner"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-accent text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/20 hover:bg-accent/30 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-inner"
                  aria-label="Twitter"
                >
                  <Twitter className="text-accent text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/20 hover:bg-accent/30 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-inner"
                  aria-label="Facebook"
                >
                  <Facebook className="text-accent text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-accent/20 hover:bg-accent/30 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-inner"
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