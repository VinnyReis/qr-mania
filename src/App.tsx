import { useState, useEffect, useRef } from 'react'
import  QRCodeStyling, { CornerDotType, CornerSquareType, DotType, FileExtension, Options } from 'qr-code-styling'
import Input from './components/input';
import Select from './components/select';
import Button from './components/button';
import Surface from './components/surface';
import OptionButton from './components/option_button';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'https://facebook.com',
  imageOptions: {
    hideBackgroundDots: false,
    crossOrigin: 'anonymous',
    margin: 0
  }
});

const defaultOptions = {
  dotsOptions: {
    type: 'square' as DotType,
    color: '#000000'
  }
};

function App() {
  const [ data, setData ] = useState<string>('https://facebook.com');
  const [ format, setFormat ] = useState<FileExtension>('png');
  const [ options, setOptions ] = useState<Partial<Options>>(defaultOptions);
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current!);
  }, []);

  useEffect(() => {
    qrCode.update({
      data
    });
  }, [data]);

  const changeColor = (color: string) => {
    setOptions({
      ...options,
      dotsOptions: {...options.dotsOptions, color }
    });

    qrCode.update({
      dotsOptions: { color }
    });
  };

  const changeDotType = (type: DotType) => {
    setOptions({
      ...options,
      dotsOptions: {...options.dotsOptions, type }
    });

    qrCode.update({
      dotsOptions: { type }
    });
  };

  const changeCornerSquareType = (type: CornerSquareType | undefined ) => {
    setOptions({
      ...options,
      cornersSquareOptions: {...options.cornersSquareOptions, type }
    });

    qrCode.update({
      cornersSquareOptions: { type }
    });
  };

  const changeCornerDotType = (type: CornerDotType | undefined ) => {
    setOptions({
      ...options,
      cornersDotOptions: {...options.cornersDotOptions, type }
    });

    qrCode.update({
      cornersDotOptions: { type }
    });
  };

  const onDonwloadClick = () => {
    qrCode.download({ name: 'QR code', extension: format });
  };

  return (
    <div className=' container my-10 mx-auto flex space-x-3'>
      <div className='w-full space-y-3'>
        <Surface className='w-full space-y-3'>
          {/* QR code data options */}
          <p className='font-semibold text-lg text-slate-600'>URL</p>
          <Input
            defaultValue='https://facebook.com'
            onChange={(e: any) => { e.preventDefault(); setData(e.target.value)}}
          />
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code color options */}
          <p className='font-semibold text-lg text-slate-600'>Color</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeColor('#000000')} isActive={options?.dotsOptions?.color === '#000000'} label='Black'/>
            <OptionButton onClick={() => changeColor('#d20b2e')} isActive={options?.dotsOptions?.color === '#d20b2e'} label='Red'/>
            <OptionButton onClick={() => changeColor('#2cba43')} isActive={options?.dotsOptions?.color === '#2cba43'} label='Green'/>
            <OptionButton onClick={() => changeColor('#4267b2')} isActive={options?.dotsOptions?.color === '#4267b2'} label='Blue'/>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code dot options */}
          <p className='font-semibold text-lg text-slate-600'>Dots</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeDotType('square')} isActive={options?.dotsOptions?.type === 'square'} label='Square'/>
            <OptionButton onClick={() => changeDotType('rounded')} isActive={options?.dotsOptions?.type === 'rounded'} label='Rounded'/>
            <OptionButton onClick={() => changeDotType('dots')} isActive={options?.dotsOptions?.type === 'dots'} label='Dots'/>
            <OptionButton onClick={() => changeDotType('classy')} isActive={options?.dotsOptions?.type === 'classy'} label='Classy'/>
            <OptionButton onClick={() => changeDotType('classy-rounded')} isActive={options?.dotsOptions?.type === 'classy-rounded'} label='Classy Rounded'/>
            <OptionButton onClick={() => changeDotType('extra-rounded')} isActive={options?.dotsOptions?.type === 'extra-rounded'} label='Extra Rounded'/>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code corner square options */}
          <p className='font-semibold text-lg text-slate-600'>Corner Square</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeCornerSquareType(undefined)} isActive={options?.cornersSquareOptions?.type === undefined} label='None'/>
            <OptionButton onClick={() => changeCornerSquareType('square')} isActive={options?.cornersSquareOptions?.type === 'square'} label='Square'/>
            <OptionButton onClick={() => changeCornerSquareType('dot')} isActive={options?.cornersSquareOptions?.type === 'dot'} label='Dot'/>
            <OptionButton onClick={() => changeCornerSquareType('extra-rounded')} isActive={options?.cornersSquareOptions?.type === 'extra-rounded'} label='Extra Rounded'/>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR corner dots options */}
          <p className='font-semibold text-lg text-slate-600'>Corner Dots</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeCornerDotType(undefined)} isActive={options?.cornersDotOptions?.type === undefined } label='None'/>
            <OptionButton onClick={() => changeCornerDotType('square')} isActive={options?.cornersDotOptions?.type === 'square'} label='Square'/>
            <OptionButton onClick={() => changeCornerDotType('dot')} isActive={options?.cornersDotOptions?.type === 'dot'} label='Dot'/>
          </div>
        </Surface>
      </div>
      <Surface className='space-y-3  h-full'>
        {/* QR code preview area */}
        <div className='flex justify-center'>
          <div ref={ref}/>
        </div>
        {/* Download options */}
        <div className='flex space-x-3'>
          <Select onChange={(e: any) => setFormat(e.target.value as FileExtension)}>
            <option value='png'>PNG</option>
            <option value='jpg'>JPG</option>
            <option value='webp'>WEBP</option>
            <option value='svg'>SVG</option>
          </Select>
          <Button onClick={onDonwloadClick}>Download</Button>
        </div>
      </Surface>
    </div>
  );
}
export default App;