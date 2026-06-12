const Textarea = ({
  label,
  id,
  error,
  placeholder = '',
  rows = 4,
  required = false,
  className = '',
  onChange,
  value,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="jj-label text-[0.66rem] font-semibold text-jj-muted">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full resize-y rounded-2xl border bg-jj-card px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#666666] focus:ring-2 focus:ring-jj-orange/20
          ${error 
            ? 'border-red-400/80 focus:border-red-400' 
            : 'border-white/10 focus:border-jj-orange'
          }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default Textarea;
