interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className?: string;
};

function Input({ className, ...props }: InputProps){
  return(
    <input
      type='text'
      className={`px-3 py-2 text-slate-500 text-sm font-medium bg-white rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      ${className}`}
      {...props}
    />
  )
};
export default Input;