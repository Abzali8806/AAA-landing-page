import { Link } from "wouter";
import { 
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Zap,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { TechPattern } from "@/components/ui/tech-pattern";
import { scrollToElement } from "@/lib/utils";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-accent/20 backdrop-blur-sm rounded-full p-3 mr-4">
                <Zap className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-inter font-bold text-white">
                Opti<span className="text-accent">Flows</span>
              </h3>
            </div>
            <p className="font-roboto font-light mb-8 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your business with cutting-edge workflow automation. We turn complexity into simplicity, 
              helping organizations unlock their full potential through intelligent process optimization.
            </p>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <div className="bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30">
                <div className="flex items-center">
                  <Sparkles className="text-accent mr-2" size={16} />
                  <span className="text-accent font-medium text-sm">AI-Powered</span>
                </div>
              </div>
              <div className="bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30">
                <span className="text-accent font-medium text-sm">Custom Solutions</span>
              </div>
              <div className="bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/30">
                <span className="text-accent font-medium text-sm">24/7 Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="bg-gray-800/50 hover:bg-accent/20 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-accent/30 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800/50 hover:bg-accent/20 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-accent/30 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800/50 hover:bg-accent/20 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-accent/30 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800/50 hover:bg-accent/20 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 hover:border-accent/30 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-inter font-bold mb-8 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToElement(link.href.substring(1))}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-base font-light hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
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
