const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'jj-label inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0';
  
  const variants = {
    primary: 'bg-jj-orange text-black shadow-[0_0_20px_rgba(232,101,26,0.18)] hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(232,101,26,0.35)] focus:ring-jj-orange',
    secondary: 'border border-white/80 bg-transparent text-white hover:bg-jj-orange hover:text-black hover:border-jj-orange focus:ring-jj-orange',
    outline: 'border border-jj-orange/40 text-jj-orange hover:bg-jj-orange hover:text-black focus:ring-jj-orange',
    text: 'bg-transparent px-0 py-0 text-jj-orange underline-offset-4 hover:underline focus:ring-jj-orange',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[0.68rem]',
    md: 'px-5 py-3 text-[0.74rem]',
    lg: 'px-8 py-4 text-[0.78rem]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-[0.98]';

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
