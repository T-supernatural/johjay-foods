const Card = ({
  children,
  hoverable = true,
  className = '',
  padding = 'md',
  ...props
}) => {
  const baseStyles = 'jj-glass rounded-[1.75rem] border border-jj-orange/15 overflow-hidden transition-all duration-300';
  const hoverStyles = hoverable ? 'hover:-translate-y-1 hover:border-jj-orange/35 hover:shadow-[0_0_0_1px_rgba(232,101,26,0.18),0_18px_60px_rgba(0,0,0,0.35)]' : '';
  
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
