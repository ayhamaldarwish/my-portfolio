/**
 * Animation variants for use with Framer Motion
 * These can be reused across different components
 */

// Fade in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } }
};

// Slide in from left animation
export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

// Slide in from right animation
export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
};

// Slide in from bottom animation
export const slideInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

// Container for staggered children animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Floating animation (up and down)
export const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Button hover and tap animations
export const buttonHoverTap = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } }
};
