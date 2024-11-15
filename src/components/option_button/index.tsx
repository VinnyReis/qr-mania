interface OptionButonProps{
  image: string,
  isActive?: boolean,
  onClick?: () => void,
};

function OptionButton({ image, isActive, onClick }: OptionButonProps){
  return(
    <button
      onClick={onClick}
      className={`p-3 text-sm text-slate-600 font-semibold rounded-md border border-slate-300 shadow-sm
      hover:bg-slate-50
      focus:outline-none
      ${isActive && 'ring-2 ring-offset-2 ring-indigo-600'}`}
    >
      <img src={image}/>
    </button>
  )
};
export default OptionButton;