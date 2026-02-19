import { motion } from 'framer-motion';
import { hoverScale, hoverGlow } from '../../utils/animations';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false,
  padding = 'p-6',
  ...props 
}) => {
  const baseClasses = `glass-card ${padding} ${className}`;
  
  return (
    <motion.div
      whileHover={hover ? { ...hoverScale, ...(glow ? hoverGlow : {}) } : {}}
      className={baseClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;