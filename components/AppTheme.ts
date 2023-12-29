import { extendTheme } from 'native-base';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

const colors = {
  Primary: {
    '50': '#b08eef',
    '100': '#9a71e5',
    '200': '#8557da',
    '300': '#713fcc',
    '400': '#5f30b5',
    '500': '#57319e',
    '600': '#4f3187',
    '700': '#473072',
    '800': '#3f2d5f',
    '900': '#36294c',
  },
};

export default extendTheme({
  config,
  colors,
});
