import { DotType, CornerSquareType, CornerDotType } from 'qr-code-styling';
import hearth from './assets/images/hearth.png';
import holly_berry from './assets/images/holly_berry.png';
import lemon from './assets/images/lemon.png';

export const defaultOptions = {
  image: undefined,
  dotsOptions: {
    type: 'square' as DotType,
    color: '#000000'
  },
  cornersSquareOptions:{
    type: 'square' as CornerSquareType,
    color: '#000000'
  },
  cornersDotOptions:{
    type: 'square' as CornerDotType,
    color: '#000000'
  }
};

export const pinkPurpleTemplate = {
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

export const christmasTemplate = {
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

export const lemonadeTemplate = {
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