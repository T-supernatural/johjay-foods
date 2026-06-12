import { motion } from 'framer-motion'

const Section = ({
  children,
  background = 'transparent',
  spacing = 'md',
  className = '',
  id,
  ...props
}) => {
  const backgrounds = {
    transparent: 'bg-transparent',
    white: 'bg-jj-black text-white',
    cream: 'bg-jj-surface text-white',
    primary: 'bg-jj-black text-white',
    dark: 'bg-jj-black text-white',
  };

  const spacings = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default Section;
