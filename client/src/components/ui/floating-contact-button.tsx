import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function FloatingContactButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Main icon */}
        <motion.div
          animate={{
            rotate: isHovered ? 15 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={24} />
        </motion.div>

        {/* Floating dots around the button */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-highlight rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-1 -left-1 w-2 h-2 bg-highlight rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent"
          animate={isHovered ? {
            scale: [1, 1.5],
            opacity: [0.5, 0],
          } : {}}
          transition={{
            duration: 0.6,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut"
          }}
        />

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
          initial={{ opacity: 0, x: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : 10 
          }}
          transition={{ duration: 0.2 }}
        >
          Get in touch!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}