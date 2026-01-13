import React, { useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, className = '', delay = 0.25, width = 'fit-content' }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], 
        delay: shouldReduceMotion ? 0 : delay 
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
