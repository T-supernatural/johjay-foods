const Card = ({
  children,
  hoverable = true,
  className = '',
  padding = 'md',
  ...props
}) => {
  const baseStyles = 'jj-glass rounded-[1.75rem] border border-jj-orange/15 overflow-hidden transition-all duration-300';
  const hoverStyles = hoverable ? 'hover:-translate-y-[6px] hover:border-jj-orange/40 hover:shadow-[0_20px_40px_rgba(232,101,26,0.15)]' : '';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
