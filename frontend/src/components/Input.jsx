const Input = ({
  label,
  id,
  type = 'text',
  error,
  placeholder = '',
  required = false,
  className = '',
  onChange,
  value,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-primary-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg text-sm transition-colors duration-200 outline-none
          ${error 
            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
            : 'border-cream-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
          } bg-white text-primary-800 placeholder-primary-800/40`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default Input;
