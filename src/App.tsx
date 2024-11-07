import { useState, useEffect, useRef } from 'react'
import  QRCodeStyling, { CornerDotType, CornerSquareType, DotType, FileExtension } from 'qr-code-styling'
import Input from './components/input';
import Select from './components/select';
import Button from './components/button';
import Surface from './components/surface';

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

function App() {
  const [ data, setData ] = useState<string>('https://facebook.com');
  const [ format, setFormat ] = useState<FileExtension>('png');
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current!);
  }, []);

  useEffect(() => {
    qrCode.update({
      data
    });
  }, [data]);

  const updateColor = (color: string) => {
    qrCode.update({
      dotsOptions: { color }
    });
  };

  const changeDotStyle = (type: DotType) => {
    qrCode.update({
      dotsOptions: { type }
    });
  };

  const changeCornerSquareStyle = (type: CornerSquareType ) => {
    qrCode.update({
      cornersSquareOptions: { type }
    });
  };

  const changeCornerDotStyle = (type: CornerDotType ) => {
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
            <Button onClick={() => updateColor('#000000')}>Black</Button>
            <Button onClick={() => updateColor('#d20b2e')}>Red</Button>
            <Button onClick={() => updateColor('#2cba43')}>Green</Button>
            <Button onClick={() => updateColor('#4267b2')}>Blue</Button>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code dot options */}
          <p className='font-semibold text-lg text-slate-600'>Dots</p>
          <div className='flex space-x-3'>
            <Button onClick={() => changeDotStyle('square')}>Square</Button>
            <Button onClick={() => changeDotStyle('rounded')}>Rounded</Button>
            <Button onClick={() => changeDotStyle('dots')}>Dots</Button>
            <Button onClick={() => changeDotStyle('classy')}>Classy</Button>
            <Button onClick={() => changeDotStyle('classy-rounded')}>Classy Rounded</Button>
            <Button onClick={() => changeDotStyle('extra-rounded')}>Extra Rounded</Button>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code corner square options */}
          <p className='font-semibold text-lg text-slate-600'>Corner Square</p>
          <div className='flex space-x-3'>
            <Button onClick={() => changeCornerSquareStyle('square')}>Square</Button>
            <Button onClick={() => changeCornerSquareStyle('dot')}>Dot</Button>
            <Button onClick={() => changeCornerSquareStyle('extra-rounded')}>Extra Rounded</Button>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR corner dots options */}
          <p className='font-semibold text-lg text-slate-600'>Corner Dots</p>
          <div className='flex space-x-3'>
            <Button onClick={() => changeCornerDotStyle('square')}>Square</Button>
            <Button onClick={() => changeCornerDotStyle('dot')}>Dot</Button>
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

export default App