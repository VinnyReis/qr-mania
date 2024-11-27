import { useState, useEffect, useRef } from 'react';
import { defaultOptions, pinkPurpleTemplate, christmasTemplate, lemonadeTemplate } from './templates';
import QRCodeStyling, { CornerDotType, CornerSquareType, DotType, FileExtension, Options } from 'qr-code-styling';
import Input from './components/input';
import Select from './components/select';
import Button from './components/button';
import Surface from './components/surface';
import OptionButton from './components/option_button';
import ColorPicker from './components/color_picker';
import hearth from './assets/images/hearth.png';
import holly_berry from './assets/images/holly_berry.png';
import lemon from './assets/images/lemon.png';
import none from './assets/images/none.png';
import dot from './assets/images/dot.png';
import square from './assets/images/square.png';
import default_template from './assets/images/default_template.png';
import love_template from './assets/images/love_template.png';
import christimas_template from './assets/images/christimas_template.png';
import lemonade_template from './assets/images/lemonade_template.png';
import corner_square from './assets/images/corner_square.png';
import corner_dot from './assets/images/corner_dot.png';
import corner_rounded from './assets/images/corner_rounded.png';
import dots_square from './assets/images/square_dots.png';
import dots_rounded from './assets/images/dots_rounded.png';
import dots_dots from './assets/images/dots_dots.png';
import dots_classy from './assets/images/dots_classy.png';
import dots_classy_rounded from './assets/images/dots_classy_rounded.png';
import dots_extra_rounded from './assets/images/dots_extra_rounded.png';

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
  const [ format, setFormat ] = useState<FileExtension>('png');
  const [ options, setOptions ] = useState<Partial<Options>>(defaultOptions);
  const ref = useRef<any>(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({ ...options });
  }, [options]);

  const changeTemplate = (template: object) => {
    setOptions(template);
  };

  const changeDotType = (type: DotType) => {
    setOptions({
      ...options,
      dotsOptions: {...options.dotsOptions, type }
    });
  };

  const changeDotColor = (color: string) => {
    setOptions({
      ...options,
      dotsOptions: {...options.dotsOptions, color }
    });
  };

  const changeCornerSquareType = (type: CornerSquareType | undefined ) => {
    setOptions({
      ...options,
      cornersSquareOptions: {...options.cornersSquareOptions, type }
    });
  };

  const changeCornerSquareColor = (color: string ) => {
    let newOptions = {
      ...options,
      cornersSquareOptions: {...options.cornersSquareOptions, color }
    };

    setOptions(newOptions);
  };

  const changeCornerDotType = (type: CornerDotType | undefined ) => {
    let newOptions = {
      ...options,
      cornersDotOptions: {...options.cornersDotOptions, type }
    };

    setOptions(newOptions);
  };

  const changeCornerDotColor = (color: string ) => {
    let newOptions = {
      ...options,
      cornersDotOptions: {...options.cornersDotOptions, color }
    };

    setOptions(newOptions);
  };

  const changeLogo = (logo: string ) => {
    let newOptions = {
      ...options,
      image: logo
    };

    setOptions(newOptions);
  };

  const onDonwloadClick = () => {
    qrCode.download({ extension: format });
  };

  return (
    <div className='container my-10 mx-auto flex space-x-3'>
      <div className='w-full space-y-3'>
        <Surface className='w-full space-y-3'>
          {/* QR code data options */}
          <p className='font-semibold text-lg text-slate-600'>URL</p>
          <Input
            defaultValue='https://facebook.com'
            onChange={(e) => setOptions({ ...options, data: e.target.value})}
            className='w-full'
          />
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code template options */}
          <p className='font-semibold text-lg text-slate-600'>Templates</p>
          <div className='flex space-x-3'>
            <div className={'w-1/12'}>
              <OptionButton
                image={default_template}
                onClick={() => changeTemplate(defaultOptions)}
                isActive={options === defaultOptions}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={love_template}
                onClick={() => changeTemplate(pinkPurpleTemplate)}
                isActive={options === pinkPurpleTemplate}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={christimas_template}
                onClick={() => changeTemplate(christmasTemplate)}
                isActive={options === christmasTemplate}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={lemonade_template}
                onClick={() => changeTemplate(lemonadeTemplate)}
                isActive={options === lemonadeTemplate}
              />
            </div>
          </div>
        </Surface>
        <Surface className='w-full space-y-3'>
          {/* QR code dot options */}
          <p className='font-semibold text-lg text-slate-600'>Dots</p>
          <div className='flex space-x-3'>
            <div className={'w-1/12'}>
              <OptionButton
                image={dots_square}
                onClick={() => changeDotType('square')}
                isActive={options?.dotsOptions?.type === 'square'}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={dots_rounded}
                onClick={() => changeDotType('rounded')}
                isActive={options?.dotsOptions?.type === 'rounded'}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={dots_dots}
                onClick={() => changeDotType('dots')}
                isActive={options?.dotsOptions?.type === 'dots'}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={dots_classy}
                onClick={() => changeDotType('classy')}
                isActive={options?.dotsOptions?.type === 'classy'}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={dots_classy_rounded}
                onClick={() => changeDotType('classy-rounded')}
                isActive={options?.dotsOptions?.type === 'classy-rounded'}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={dots_extra_rounded}
                onClick={() => changeDotType('extra-rounded')}
                isActive={options?.dotsOptions?.type === 'extra-rounded'}
              />
            </div>
          </div>
          <ColorPicker onChange={(e) => changeDotColor(e.target.value)} value={options?.dotsOptions?.color}/>
        </Surface>
        <div className='flex w-full space-x-3'>
          <Surface className='w-6/12 space-y-3'>
            {/* QR code corner square options */}
            <p className='font-semibold text-lg text-slate-600'>Corner Square</p>
            <div className='flex space-x-3'>
              <div className={'w-2/12'}>
                <OptionButton
                  image={none}
                  onClick={() => changeCornerSquareType(undefined)}
                  isActive={options?.cornersSquareOptions?.type === undefined}
                />
              </div>
              <div className={'w-2/12'}>
                <OptionButton
                  image={corner_square}
                  onClick={() => changeCornerSquareType('square')}
                  isActive={options?.cornersSquareOptions?.type === 'square'}
                />
              </div>
              <div className={'w-2/12'}>
                <OptionButton
                  image={corner_dot}
                  onClick={() => changeCornerSquareType('dot')}
                  isActive={options?.cornersSquareOptions?.type === 'dot'}
                />
              </div>
              <div className={'w-2/12'}>
                <OptionButton
                  image={corner_rounded}
                  onClick={() => changeCornerSquareType('extra-rounded')}
                  isActive={options?.cornersSquareOptions?.type === 'extra-rounded'}
                />
              </div>
            </div>
            <ColorPicker onChange={(e) => changeCornerSquareColor(e.target.value)} value={options?.cornersSquareOptions?.color}/>
          </Surface>
          <Surface className='w-6/12 space-y-3'>
            {/* QR corner dots options */}
            <p className='font-semibold text-lg text-slate-600'>Corner Dots</p>
            <div className='flex space-x-3'>
              <div className={'w-2/12'}>
                <OptionButton
                  image={none}
                  onClick={() => changeCornerDotType(undefined)}
                  isActive={options?.cornersDotOptions?.type === undefined}
                />
              </div>
              <div className={'w-2/12'}>
                <OptionButton
                  image={square}
                  onClick={() => changeCornerDotType('square')}
                  isActive={options?.cornersDotOptions?.type === 'square'}
                />
              </div>
              <div className={'w-2/12'}>
                <OptionButton
                  image={dot}
                  onClick={() => changeCornerDotType('dot')}
                  isActive={options?.cornersDotOptions?.type === 'dot'}
                />
              </div>
            </div>
            <ColorPicker onChange={(e) => changeCornerDotColor(e.target.value)} value={options?.cornersDotOptions?.color}/>
          </Surface>
        </div>
        <Surface className='w-full space-y-3'>
          {/* QR code logo options */}
          <p className='font-semibold text-lg text-slate-600'>Logo</p>
          <div className='flex space-x-3'>
            <div className={'w-1/12'}>
              <OptionButton
                image={hearth}
                onClick={() => changeLogo(hearth)}
                isActive={options?.image === hearth}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={holly_berry}
                onClick={() => changeLogo(holly_berry)}
                isActive={options?.image === holly_berry}
              />
            </div>
            <div className={'w-1/12'}>
              <OptionButton
                image={lemon}
                onClick={() => changeLogo(lemon)}
                isActive={options?.image === lemon}
              />
            </div>
          </div>
        </Surface>
      </div>
      <Surface className='space-y-3 h-full'>
        {/* QR code preview area */}
        <div className='w-96 h-96 py-8 flex justify-center'>
          <div ref={ref}/>
        </div>
        {/* Download options */}
        <div className='w-96 flex space-x-3'>
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