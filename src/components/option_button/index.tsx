import Button from '../button';

interface OptionButonProps{
  label: string,
  isActive: boolean,
  onClick: () => void
};

const OptionButton = ({ label, onClick, isActive }: OptionButonProps) => {
  let optionButtonProps = {
    ...(isActive && { className: 'ring-2 ring-offset-2 ring-indigo-600' }),
    children: label,
    onClick
  };

  return(
    <Button {...optionButtonProps}/>
  )
};
export default OptionButton;