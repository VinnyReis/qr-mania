import { useState, useEffect, useRef } from 'react'
import  QRCodeStyling, { FileExtension } from 'qr-code-styling'
import Input from './components/input';
import Select from './components/select';
import Button from './components/button';
import Surface from './components/surface';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'https://facebook.com',
  backgroundOptions: {
    color: '#fff',
  },
  dotsOptions: {
    color: '#4267b2',
    type: 'square'
  },
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

  const onDonwloadClick = () => {
    qrCode.download({ name: 'QR code', extension: format });
  };

  return (
    <div className=' container my-10 mx-auto flex space-x-3'>
      <Surface className='flex-auto space-y-3'>
        {/* QR code data options */}
        <p className='font-semibold text-lg text-slate-600'>URL</p>
        <Input
          defaultValue='https://facebook.com'
          onChange={(e: any) => { e.preventDefault(); setData(e.target.value)}}
        />
        {/* QR code color options */}
        <p className='font-semibold text-lg text-slate-600'>Cor</p>
        <div className='flex space-x-3'>
          <Button onClick={() => updateColor('#d20b2e')}>Vermelho</Button>
          <Button onClick={() => updateColor('#2cba43')}>Verde</Button>
          <Button onClick={() => updateColor('#4267b2')}>Azul</Button>
        </div>
      </Surface>
      <Surface className='space-y-3'>
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