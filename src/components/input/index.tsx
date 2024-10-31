function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>){
  return(
    <input
      type='text'
      className='block w-full px-3 py-2 text-slate-500 text-sm font-semibold bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border focus:border-purple-400
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
      {...props}
    />
  )
};
export default Input;