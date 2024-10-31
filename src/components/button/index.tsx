interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string;
};

function Button({ children, ...props }: ButtonProps){
  return(
    <button
      className='px-4 py-2 text-sm text-purple-600 font-semibold rounded-md border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
      {...props}
    >
      {children}
    </button>
  )
};
export default Button;