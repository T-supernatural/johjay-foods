const Card = ({
  children,
  hoverable = true,
  className = '',
  padding = 'md',
  ...props
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-cream-200 overflow-hidden transition-all duration-300';
  const hoverStyles = hoverable ? 'hover:shadow-md hover:-translate-y-1' : '';
  
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
