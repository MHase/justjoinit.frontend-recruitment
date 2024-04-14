import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    disabledBg: string;
  }

  interface PaletteOptions {
    disabledBg: string;
  }
}

const grey = {
  100: '#2A2A2A',
  200: '#7F7F7F',
  300: '#E4E4E4',
  400: '#EEEEEE',
};

export const palette: PaletteOptions = {
  primary: {
    main: '#9747FF',
    dark: '#7135BF',
    light: '#9747FF40',
  },
  grey,
  error: {
    main: '#FF4E4E',
  },
  text: {
    primary: grey[100],
    secondary: grey[200],
  },
  action: {
    focus: 'rgba(151, 71, 255, 0.25)',
  },
  divider: grey[400],
  disabledBg: '#00000033',
};
