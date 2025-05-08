import { Variants } from "framer-motion";

// Fade in animation for elements
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Fade up animation for elements
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Scale animation for cards and interactive elements
export const scaleUp: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 } 
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 } 
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 70 
    } 
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 70 
    } 
  }
};

// Float animation for hero images
export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 3,
      ease: "easeInOut"
    }
  }
};

// Pulse animation
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Path drawing animation for SVGs
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.3 }
    }
  }
};

// Rotate animation
export const rotate: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear"
    }
  }
};

// Wave animation for accent elements
export const wave: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -15, 0, 15, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 5,
      ease: "easeInOut"
    }
  }
};

// Entrance animation for text
export const textEntrance: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 12, 
      stiffness: 100,
      delay: 0.1 
    } 
  }
};

// Appear one letter at a time
export const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12
    }
  }
};

// Container for letter animations
export const letterContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
  })
};
