interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

function Select({ children, className, ...props }: SelectProps){
  return(
    <select
      className={`block w-full px-3 py-2 text-slate-500 text-sm font-semibold bg-white rounded-md text-sm shadow-sm placeholder-slate-400 ring-1 ring-inset ring-slate-300
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 outli
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      ${className}`}
      { ...props }
    >
      {children}
    </select>
  )
};
export default Select;