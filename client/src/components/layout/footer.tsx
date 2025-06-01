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
    <footer className="bg-[#112340] py-12 relative">
      <TechPattern className="opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#112340] via-transparent to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-inter font-bold mb-6 text-white">
              Opti<span className="text-accent">Flows</span>
            </h4>
            <p className="font-roboto font-light mb-6 text-gray-300">
              Streamlining business operations through intelligent automation and process optimization.
            </p>
            <div className="flex space-x-4">
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
          
          <div>
            <h4 className="text-xl font-inter font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 font-roboto font-light">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-inter font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 font-roboto font-light">
              <li className="flex items-start">
                <MapPin className="text-accent mt-1 mr-3" size={18} />
                <span className="text-gray-300">The Hive, 96 Fleet Street<br />London, EC4Y 1HB</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-3" size={18} />
                <span className="text-gray-300">info@optiflows.co.uk</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-3" size={18} />
                <span className="text-gray-300">+44 (0) 20 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-roboto font-light text-sm mb-4 md:mb-0 text-gray-400">
              &copy; {currentYear} OptiFlows. All rights reserved.
            </p>
            <div className="flex space-x-6 font-roboto font-light text-sm">
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
