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
    white: 'bg-white',
    cream: 'bg-cream-100',
    primary: 'bg-primary-700 text-cream-50',
    dark: 'bg-primary-800 text-cream-50',
  };

  const spacings = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
