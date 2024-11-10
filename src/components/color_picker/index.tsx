import { useState } from 'react';
import Input from '../input';

interface ColorPickerProps extends React.InputHTMLAttributes<HTMLInputElement>{
  value?: string;
};

function ColorPicker({ value, onChange, ...props }: ColorPickerProps){
  const [ color, setColor ] = useState(value ?? '');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9a-fA-F]/g, '');
    value = value.toUpperCase();

    if(value[0] !== '#')
      value = '#' + value;

    e.target.value = value;
    setColor(value);

    if(onChange)
      onChange(e);
  };

  return(
    <div className='flex'>
      <label style={{ backgroundColor: value?.toUpperCase() ?? color }} className='h-auto w-9 rounded-md mr-2 border border-slate-300 shadow-sm relative'>
        <input className='absolute bottom-0 invisible' type='color' onChange={handleColorChange}/>
      </label>
      <Input value={value?.toUpperCase() ?? color} maxLength={7} {...props} onChange={handleColorChange}/>
    </div>
  )
};
export default ColorPicker;