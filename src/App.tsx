import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'
import './App.css'

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: 'http://facebook.com.br',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  dotsOptions: {
    color: "#4267b2",
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20
  }
});

function App() {
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current!);
  }, []);

  return (
    <>
      <div ref={ref}/>
    </>
  )
}

export default App