import { useState, useEffect, useRef } from 'react';
import  QRCodeStyling, { CornerDotType, CornerSquareType, DotType, FileExtension, Options } from 'qr-code-styling';
import Input from './components/input';
import Select from './components/select';
import Button from './components/button';
import Surface from './components/surface';
import OptionButton from './components/option_button';
import ColorPicker from './components/color_picker';
import hearth from './assets/images/hearth.png';
import holly_berry from './assets/images/holly_berry.png';
import lemon from './assets/images/lemon.png';

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
  },
  cornersSquareOptions:{
    color: '#000000'
  },
  cornersDotOptions:{
    color: '#000000'
  }
};

const pinkPurpleTemplate = {
  image: hearth,
  imageOptions: {
    hideBackgroundDots: true,
    margin: 5
  }, 
  dotsOptions: {
    type: 'dots' as DotType,
    color: '#9f6eff'
  },
  cornersSquareOptions:{
    type: 'dot' as CornerSquareType,
    color: '#ff6caf'
  },
  cornersDotOptions:{
    type: 'dot' as CornerDotType,
    color: '#ff6caf'
  },
};

const christmasTemplate = {
  image: holly_berry,
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 0
  }, 
  dotsOptions: {
    type: 'dots' as DotType,
    color: '#d31e19'
  },
  cornersSquareOptions:{
    type: 'extra-rounded' as CornerSquareType,
    color: '#286e0e'
  },
  cornersDotOptions:{
    type: 'dot' as CornerDotType,
    color: '#d61100'
  },
};

const lemonadeTemplate = {
  image: lemon,
  imageOptions: {
    hideBackgroundDots: true,
    margin: 8
  }, 
  dotsOptions: {
    type: 'extra-rounded' as DotType,
    color: '#74a829'
  },
  cornersSquareOptions:{
    type: 'dot' as CornerSquareType,
    color: '#74a829'
  },
  cornersDotOptions:{
    type: 'dot' as CornerDotType,
    color: '#ffce01'
  },
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

  const changeTemplate = (template: object) => {
    setOptions(template);
    qrCode.update(template);
  };

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
            className='w-full'
          />
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code dot options */}
          <p className='font-semibold text-lg text-slate-600'>Templates</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeTemplate(pinkPurpleTemplate)} isActive={options === pinkPurpleTemplate} label='Pink Purple'/>
            <OptionButton onClick={() => changeTemplate(christmasTemplate)} isActive={options === christmasTemplate} label='Christmas'/>
            <OptionButton onClick={() => changeTemplate(lemonadeTemplate)} isActive={options === lemonadeTemplate} label='Lemonade'/>
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
          <ColorPicker onChange={(e) => changeDotColor(e.target.value)} value={options?.dotsOptions?.color}/>
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
          <ColorPicker onChange={(e) => changeCornerSquareColor(e.target.value)} value={options?.cornersSquareOptions?.color}/>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR corner dots options */}
          <p className='font-semibold text-lg text-slate-600'>Corner Dots</p>
          <div className='flex space-x-3'>
            <OptionButton onClick={() => changeCornerDotType(undefined)} isActive={options?.cornersDotOptions?.type === undefined } label='None'/>
            <OptionButton onClick={() => changeCornerDotType('square')} isActive={options?.cornersDotOptions?.type === 'square'} label='Square'/>
            <OptionButton onClick={() => changeCornerDotType('dot')} isActive={options?.cornersDotOptions?.type === 'dot'} label='Dot'/>
          </div>
          <ColorPicker onChange={(e) => changeCornerDotColor(e.target.value)} value={options?.cornersDotOptions?.color}/>
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