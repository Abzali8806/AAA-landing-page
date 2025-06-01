import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Close mobile menu when page changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        scrolled 
          ? "bg-[#1a2b55]/90 backdrop-blur-sm shadow-lg py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-white font-inter font-bold text-2xl tracking-tight">
              Opti<span className="text-accent">Flows</span>
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-8 font-inter font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-white hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-accent after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact" 
            className="hidden md:block bg-accent hover:bg-accent/90 text-gray-900 font-inter font-medium px-5 py-2 rounded-md transition-all duration-300 shadow-lg shadow-accent/20 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a2b55]/95 backdrop-blur-sm shadow-lg"
          >
            <ul className="pt-2 pb-4 px-4 font-inter font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="block py-2 text-white hover:text-accent transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="#contact" 
                  className="block bg-accent hover:bg-accent/90 text-gray-900 font-inter font-medium px-5 py-2 rounded-md text-center transition-all duration-300 shadow-md shadow-accent/20"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
