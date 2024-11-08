import { useState, useEffect, useRef } from 'react';
import  QRCodeStyling, { CornerDotType, CornerSquareType, DotType, FileExtension, Options } from 'qr-code-styling';
import Input from './components/input';
import Select from './components/select';
import Button from './components/button';
import Surface from './components/surface';
import OptionButton from './components/option_button';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'https://facebook.com',
  type: 'svg',
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

  const changeDotType = (type: DotType) => {
    let newOptions = {
      ...options,
      dotsOptions: {...options.dotsOptions, type }
    };

    setOptions(newOptions);
    qrCode.update(newOptions);
  };

  const changeDotColor = (color: string) => {
    let newOptions = {
      ...options,
      dotsOptions: {...options.dotsOptions, color }
    };

    setOptions(newOptions);
    qrCode.update(newOptions);
  };

  const changeCornerSquareType = (type: CornerSquareType | undefined ) => {
    let newOptions = {
      ...options,
      cornersSquareOptions: {...options.cornersSquareOptions, type }
    };

    setOptions(newOptions);
    qrCode.update(newOptions);
  };

  const changeCornerSquareColor = (color: string ) => {
    let newOptions = {
      ...options,
      cornersSquareOptions: {...options.cornersSquareOptions, color }
    };

    setOptions(newOptions);
    qrCode.update(newOptions);
  };

  const changeCornerDotType = (type: CornerDotType | undefined ) => {
    let newOptions = {
      ...options,
      cornersDotOptions: {...options.cornersDotOptions, type }
    };

    setOptions(newOptions);
    qrCode.update(newOptions);
  };

  const changeCornerDotColor = (color: string ) => {
    let newOptions = {
      ...options,
      cornersDotOptions: {...options.cornersDotOptions, color }
    };

    setOptions(newOptions);
    qrCode.update(newOptions);
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
          <input type='color' onChange={(e) => changeDotColor(e.target.value)}/>
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
          <input type='color' onChange={(e) => changeCornerSquareColor(e.target.value)}/>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR corner dots options */}
          <p className='font-semibold text-lg text-slate-600'>Corner Dots</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeCornerDotType(undefined)} isActive={options?.cornersDotOptions?.type === undefined } label='None'/>
            <OptionButton onClick={() => changeCornerDotType('square')} isActive={options?.cornersDotOptions?.type === 'square'} label='Square'/>
            <OptionButton onClick={() => changeCornerDotType('dot')} isActive={options?.cornersDotOptions?.type === 'dot'} label='Dot'/>
          </div>
          <input type='color' onChange={(e) => changeCornerDotColor(e.target.value)}/>
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