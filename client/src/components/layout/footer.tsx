import { Link } from "wouter";
import { 
  MapPin, 
  Mail, 
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import { TechPattern } from "@/components/ui/tech-pattern";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];



  return (
    <footer className="bg-[#112340] py-8 sm:py-10 lg:py-12 relative">
      <TechPattern className="opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#112340] via-transparent to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-inter font-bold mb-4 sm:mb-6 text-white">
              Opti<span className="text-accent">Flows</span>
            </h4>
            <p className="font-roboto font-light mb-4 sm:mb-6 text-gray-300 text-sm sm:text-base">
              Streamlining business operations through intelligent automation and process optimization.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="#" 
                className="text-accent hover:text-highlight transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="text-accent hover:text-highlight transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="text-accent hover:text-highlight transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-accent hover:text-highlight transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-inter font-bold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 font-roboto font-light">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-inter font-bold mb-4 sm:mb-6 text-white">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 font-roboto font-light">
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="text-accent mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base break-all">info@optiflows.co.uk</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="text-accent mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">+44 (0) 20 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="font-roboto font-light text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              &copy; {currentYear} OptiFlows. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 font-roboto font-light text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
