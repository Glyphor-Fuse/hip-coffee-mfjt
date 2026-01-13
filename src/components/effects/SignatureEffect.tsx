import React from 'react';
import { motion } from 'framer-motion';

interface SignatureEffectProps {
  children: React.ReactNode;
  effect?: string;
  className?: string;
}

// Implements specific visual effects based on data-signature-effect attribute
export const SignatureEffect = ({ children, effect, className = '' }: SignatureEffectProps) => {
  // Default pass-through if no specific effect matches
  if (!effect) return <div className={className}>{children}</div>;

  // Example: A subtle glow effect if requested (not explicitly in HTML but good for future proofing)
  if (effect === 'glow') {
    return (
      <motion.div 
        className={`relative ${className}`}
        whileHover={{ textShadow: "0 0 8px rgb(51, 85, 255)" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
