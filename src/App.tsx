import { useState, useEffect, useRef } from 'react'
import  QRCodeStyling, { FileExtension } from 'qr-code-styling'
import './App.css'

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'https://facebook.com',
  backgroundOptions: {
    color: "#fff",
  },
  dotsOptions: {
    color: "#4267b2",
    type: "square"
  },
  imageOptions: {
    hideBackgroundDots: false,
    crossOrigin: "anonymous",
    margin: 0
  }
});

function App() {
  const [ data, setData ] = useState('https://facebook.com');
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
    <>
      <button className='button' onClick={() => updateColor('#d20b2e')}>Vermelho</button>
      <button className='button' onClick={() => updateColor('#2cba43')}>Verde</button>
      <button className='button' onClick={() => updateColor('#4267b2')}>Azul</button>
      <div>
        <input className='input' style={{ width: '290px' }} type='text' defaultValue='https://facebook.com' onChange={(e) => { e.preventDefault(); setData(e.target.value)}}/>
      </div>
      <div ref={ref}/>
      <select className='input' onChange={(e) => setFormat(e.target.value as FileExtension)} style={{ width: '200px' }}>
        <option value='png'>PNG</option>
        <option value='jpg'>JPG</option>
        <option value='webp'>WEBP</option>
        <option value='svg'>SVG</option>
      </select>
      <button className='button button-primary' onClick={onDonwloadClick}>Download</button>
    </>
  )
}

export default App