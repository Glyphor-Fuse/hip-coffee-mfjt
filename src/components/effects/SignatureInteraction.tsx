import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionTemplate } from 'framer-motion';
import { useReducedMotion } from '../motion/useReducedMotion';

type InteractionType = 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress';

interface SignatureInteractionProps {
  children: React.ReactNode;
  type: InteractionType;
  className?: string;
  speed?: number;
}

export const SignatureInteraction = ({ children, type, className = '', speed = 0.1 }: SignatureInteractionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Parallax Logic
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  if (type === 'text-reveal') {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.span
          className="block"
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.span>
      </div>
    );
  }

  if (type === 'parallax') {
    // For the hero image specifically, we need to maintain the centering transform
    // while adding the parallax offset.
    const transform = useMotionTemplate`translate(-50%, calc(-50% + ${parallaxY}px))`;
    
    return (
      <motion.div 
        ref={ref}
        style={{ 
          transform: shouldReduceMotion ? 'translate(-50%, -50%)' : transform,
          position: 'absolute',
          top: '50%',
          left: '50%',
          willChange: 'transform'
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Default fallback
  return <div className={className}>{children}</div>;
};
