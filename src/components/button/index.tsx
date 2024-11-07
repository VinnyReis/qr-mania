interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string;
  className?: string;
};

function Button({ children, className, ...props }: ButtonProps){
  return(
    <button
      className={`px-4 py-2 text-sm text-slate-600 font-semibold rounded-md border border-slate-300 shadow-sm
      hover:bg-slate-50
      focus:outline-none
      ${className}`}
      {...props}
    >
      {children}
    </button>
  )
};
export default Button;